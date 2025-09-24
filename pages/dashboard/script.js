new Vue({
  el: "#app",
  data() {
    return {
      lists: [],
      totals: {
        openAvg: 0,
        clickAvg: 0,
        delivered: 0,
        unsubAvg: 0,
        uniqueSends: 0,
        uniqueOpens: 0,
        uniqueClicks: 0,
        readOver8s: 0,
        readUnder8s: 0,
        readUnder2s: 0,
        reliableOpens: 0,
      },
      trend: {
        delivered: "neutral",
        open: "neutral",
        click: "neutral",
        unsub: "neutral",
      },
      sortKey: "day",
      sortOrder: "asc",
      searchTerm: "",
    };
  },
  computed: {
    filteredAndSorted() {
      let filtered = this.lists;

      // 🔎 Search filter
      if (this.searchTerm.trim() !== "") {
        const term = this.searchTerm.trim().toLowerCase();
        filtered = filtered.filter((item) =>
          Object.values(item).some(
            (val) => val != null && val.toString().toLowerCase().includes(term)
          )
        );
      }

      // 🔄 Sorting
      return filtered.slice().sort((a, b) => {
        let valA = a[this.sortKey];
        let valB = b[this.sortKey];

        // Use rawDate for sorting
        if (this.sortKey === "day") {
          valA = a.rawDate;
          valB = b.rawDate;
        }

        const numericKeys = [
          "unique-opens-pc",
          "unique-clicks-pc",
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
      let jsonData = XLSX.utils.sheet_to_json(worksheet);

      this.lists = jsonData.map((row) => {
        const rawDate = this.parseDate(row["Send Date"] || row["date"]);

        return {
          label: row["Campaign Name"] || row["name"] || "",
          day: this.formatDate(row["Send Date"] || row["date"]),
          rawDate: rawDate,
          brand: row["brand"] || "",
          type: row["Campaign Type"] || row["type"] || "",
          "unique-opens-pc": Number(
            row["Unique Opens %"] || row["unique-opens-pc"] || 0
          ),
          "unique-clicks-pc": Number(
            row["Unique Clicks %"] || row["unique-clicks-pc"] || 0
          ),
          delivered:
            Number(
              String(row["deliveried"] || row["Delivered"] || 0).replace(
                /,/g,
                ""
              )
            ) || 0,
          unsub: Number(String(row["unsub"] || 0).replace(/,/g, "")) || 0,
          "unsub-pc": Number(row["unsub-pc"] || 0),
          "unique-sends": Number(
            String(row["unique-sends"] || 0).replace(/,/g, "")
          ),
          "unique-opens": Number(
            String(row["unique-opens"] || 0).replace(/,/g, "")
          ),
          "unique-clicks": Number(
            String(row["unique-clicks"] || 0).replace(/,/g, "")
          ),
          "read-over-8s": Number(row["read-over-8s"] || 0),
          "read-under-8s": Number(row["read-under-8s"] || 0),
          "read-under-2s": Number(row["read-under-2s"] || 0),
          "reliable-opens": Number(row["reliable-opens"] || 0),
          "img-id": row["img-id"] || "",
        };
      });

      this.calculateTotals();
    },
    parseDate(dateValue) {
      if (!dateValue) return null;

      // Excel serial number
      if (typeof dateValue === "number") {
        const d = XLSX.SSF.parse_date_code(dateValue);
        if (d) return new Date(d.y, d.m - 1, d.d);
      }

      // Try parsing string (e.g. "1-Jul-25")
      const d = new Date(dateValue);
      if (!isNaN(d)) return d;

      return null;
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
    calculateTotals() {
      if (!this.lists.length) {
        Object.keys(this.totals).forEach((k) => (this.totals[k] = 0));
        return;
      }

      const totals = {
        delivered: 0,
        openAvg: 0,
        clickAvg: 0,
        unsubAvg: 0,
        uniqueSends: 0,
        uniqueOpens: 0,
        uniqueClicks: 0,
        readOver8s: 0,
        readUnder8s: 0,
        readUnder2s: 0,
        reliableOpens: 0,
      };

      this.lists.forEach((item) => {
        totals.delivered += item.delivered;
        totals.openAvg += item["unique-opens-pc"];
        totals.clickAvg += item["unique-clicks-pc"];
        totals.unsubAvg += item["unsub-pc"];
        totals.uniqueSends += item["unique-sends"];
        totals.uniqueOpens += item["unique-opens"];
        totals.uniqueClicks += item["unique-clicks"];
        totals.readOver8s += item["read-over-8s"];
        totals.readUnder8s += item["read-under-8s"];
        totals.readUnder2s += item["read-under-2s"];
        totals.reliableOpens += item["reliable-opens"];
      });

      totals.openAvg /= this.lists.length;
      totals.clickAvg /= this.lists.length;
      totals.unsubAvg /= this.lists.length;

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
  },
  mounted() {
    this.fetchExcel();
  },
});
