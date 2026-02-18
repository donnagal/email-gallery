new Vue({
  el: "#app",
  data() {
    return {
      lists: [],
      sendTypeFilter: "All",
      sendTypeOptions: ["All"],
      selectedFilters: [],
      monthFilter: "All Months",
      monthOptions: [
        "All Months",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
      typeOptions: [],
      selectedTypeFilters: [],
      totals: {
        openAvg: 0,
        clickAvg: 0,
        ctorAvg: 0,
        delivered: 0,
        unsubAvg: 0,
        uniqueSends: 0,
        uniqueOpens: 0,
        uniqueClicks: 0,
        readOver8s: 0,
        readUnder8s: 0,
        readUnder2s: 0,
        reliableOpens: 0,
        engagementAvg: 0,
      },
      sortKey: "day",
      sortOrder: "asc",
      searchTerm: "",
    };
  },
  computed: {
    filteredAndSorted() {
      let filtered = this.lists;

      if (this.selectedFilters.length > 0) {
        filtered = filtered.filter((item) =>
          this.selectedFilters.includes(item.sendType),
        );
      } else if (this.sendTypeFilter !== "All") {
        filtered = filtered.filter(
          (item) => item.sendType === this.sendTypeFilter,
        );
      }

      if (this.selectedTypeFilters.length > 0) {
        filtered = filtered.filter((item) =>
          this.selectedTypeFilters.includes(item.type),
        );
      }

      if (this.monthFilter && this.monthFilter !== "All Months") {
        const monthMap = {
          Jul: 6,
          Aug: 7,
          Sep: 8,
          Oct: 9,
          Nov: 10,
          Dec: 11,
          Jan: 0,
          Feb: 1,
          Mar: 2,
          Apr: 3,
          May: 4,
          Jun: 5,
        };
        const selectedMonth = monthMap[this.monthFilter];
        filtered = filtered.filter((item) => {
          const d = item.rawDate;
          return (
            d instanceof Date && !isNaN(d) && d.getMonth() === selectedMonth
          );
        });
      }

      if (this.searchTerm.trim() !== "") {
        const term = this.searchTerm.trim().toLowerCase();
        filtered = filtered.filter((item) =>
          Object.values(item).some(
            (val) => val != null && val.toString().toLowerCase().includes(term),
          ),
        );
      }

      return filtered.slice().sort((a, b) => {
        let valA = a[this.sortKey];
        let valB = b[this.sortKey];

        if (this.sortKey === "day") {
          valA = a.rawDate;
          valB = b.rawDate;
        }

        if (this.sortKey === "unique-opens") {
          valA = a["unique-opens-pc"];
          valB = b["unique-opens-pc"];
        } else if (this.sortKey === "unique-clicks") {
          valA = a["unique-clicks-pc"];
          valB = b["unique-clicks-pc"];
        }

        const numericKeys = [
          "unique-opens-pc",
          "unique-clicks-pc",
          "ctor-pc",
          "delivered",
          "unsub",
          "unsub-pc",
          "unique-sends",
          "unique-opens",
          "unique-clicks",
          "read-over-8s",
          "read-under-8s",
          "read-under-2s",
          "reliable-opens",
          "engagementScore",
        ];

        if (numericKeys.includes(this.sortKey)) {
          valA = Number(valA);
          valB = Number(valB);
        }

        if (valA < valB) return this.sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return this.sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    },
  },

  methods: {
    async fetchExcel() {
      try {
        const response = await fetch("data/email-report-fy26.xlsx");
        if (!response.ok) throw new Error("Failed to load Excel file");
        const arrayBuffer = await response.arrayBuffer();
        this.parseExcel(arrayBuffer);
      } catch (error) {
        console.error("Error fetching Excel file:", error);
      }
    },

    parseExcel(data) {
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      this.lists = jsonData.map((row) => {
        const rawDate = this.parseDate(row["date"] || row["Send Date"]);
        const uniqueSends = Number(
          (row["unique-sends"] || 0).toString().replace(/,/g, "").trim(),
        );
        const uniqueOpens = Number(
          (row["unique-opens"] || 0).toString().replace(/,/g, "").trim(),
        );
        const uniqueClicks = Number(
          (row["unique-clicks"] || 0).toString().replace(/,/g, "").trim(),
        );
        const unsub = Number(
          (row["unsub"] || 0).toString().replace(/,/g, "").trim(),
        );

        // Pull engagement score directly from Excel
        const engagementScore = Number(row["Engagement Score"]) || 0;

        // Get traffic light based on pulled score
        const trafficLight = this.getTrafficLight(engagementScore);

        const type = (row["type"] || "").trim();
        const sendType = (row["send-type"] || "").trim();

        if (type && !this.typeOptions.includes(type)) {
          this.typeOptions.push(type);
        }

        if (sendType && !this.sendTypeOptions.includes(sendType)) {
          this.sendTypeOptions.push(sendType);
        }

        return {
          label: row["name"] || row["Campaign Name"] || "",
          day: this.formatDate(row["date"] || row["Send Date"]),
          rawDate,
          brand: row["brand"] || "",
          type,
          sendType,
          "unique-sends": uniqueSends,
          "unique-opens": uniqueOpens,
          "unique-clicks": uniqueClicks,
          unsub,
          "unique-opens-pc": Number(row["unique-opens-pc"] || 0),
          "unique-clicks-pc": Number(row["unique-clicks-pc"] || 0),
          "ctor-pc": Number(row["ctor-pc"] || 0),
          "unsub-pc": Number(row["unsub-pc"] || 0),
          "read-over-8s": Number(row["read-over-8s"] || 0),
          "read-under-8s": Number(row["read-under-8s"] || 0),
          "read-under-2s": Number(row["read-under-2s"] || 0),
          "reliable-opens": Number(row["reliable-opens"] || 0),
          "img-id": row["img-id"] || "",
          engagementScore, // pulled
          trafficLight, // based on pulled score
        };
      });

      this.calculateTotals();
    },

    parseDate(dateValue) {
      if (!dateValue) return null;
      if (typeof dateValue === "number") {
        const d = XLSX.SSF.parse_date_code(dateValue);
        if (d) return new Date(d.y, d.m - 1, d.d);
      }
      const d = new Date(dateValue);
      return isNaN(d) ? null : d;
    },

    formatDate(dateValue) {
      const d = this.parseDate(dateValue);
      if (!d) return dateValue || "";
      return d.toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      });
    },

    formatNumber(value) {
      return value != null ? Number(value).toLocaleString() : "0";
    },

    formatPercentage(value) {
      return value != null ? Number(value).toFixed(2) + "%" : "0.00%";
    },

    getTrafficLight(score) {
      if (score >= 40) return "bg-green-500";
      if (score >= 30) return "bg-yellow-500";
      return "bg-red-500";
    },

    calculateTotals() {
      if (!this.lists.length) {
        Object.keys(this.totals).forEach((k) => (this.totals[k] = 0));
        return;
      }

      const totals = {
        delivered: 0,
        openAvg: 0,
        clickAvg: 0,
        ctorAvg: 0,
        unsubAvg: 0,
        uniqueSends: 0,
        uniqueOpens: 0,
        uniqueClicks: 0,
        readOver8s: 0,
        readUnder8s: 0,
        readUnder2s: 0,
        reliableOpens: 0,
        engagementAvg: 0,
      };

      this.lists.forEach((item) => {
        totals.delivered += item.delivered || 0;
        totals.openAvg += item["unique-opens-pc"] || 0;
        totals.clickAvg += item["unique-clicks-pc"] || 0;
        totals.ctorAvg += item["ctor-pc"] || 0;
        totals.unsubAvg += item["unsub-pc"] || 0;
        totals.uniqueSends += item["unique-sends"] || 0;
        totals.uniqueOpens += item["unique-opens"] || 0;
        totals.uniqueClicks += item["unique-clicks"] || 0;
        totals.readOver8s += item["read-over-8s"] || 0;
        totals.readUnder8s += item["read-under-8s"] || 0;
        totals.readUnder2s += item["read-under-2s"] || 0;
        totals.reliableOpens += item["reliable-opens"] || 0;
        totals.engagementAvg += item.engagementScore || 0;
      });

      const count = this.lists.length;
      totals.openAvg /= count;
      totals.clickAvg /= count;
      totals.ctorAvg /= count;
      totals.unsubAvg /= count;
      totals.engagementAvg /= count;

      this.totals = totals;
    },

    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    },

    sortIndicator(key) {
      if (this.sortKey !== key) return "";
      return this.sortOrder === "asc" ? "▲" : "▼";
    },

    toggleFilter(option) {
      const index = this.selectedFilters.indexOf(option);
      if (index > -1) {
        this.selectedFilters.splice(index, 1);
      } else {
        this.selectedFilters.push(option);
      }
    },

    toggleTypeFilter(type) {
      const index = this.selectedTypeFilters.indexOf(type);
      if (index > -1) {
        this.selectedTypeFilters.splice(index, 1);
      } else {
        this.selectedTypeFilters.push(type);
      }
    },

    showTooltip(event, text) {
      let tooltip = document.getElementById("tooltip");
      if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "tooltip";
        tooltip.className =
          "fixed z-50 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none transition-opacity";
        document.body.appendChild(tooltip);
      }
      tooltip.textContent = text;
      tooltip.style.opacity = 1;
      tooltip.style.left = event.pageX + 10 + "px";
      tooltip.style.top = event.pageY + 10 + "px";
    },

    hideTooltip() {
      const tooltip = document.getElementById("tooltip");
      if (!tooltip) return;
      tooltip.style.opacity = 0;
    },
  },

  mounted() {
    this.fetchExcel();
  },
});
