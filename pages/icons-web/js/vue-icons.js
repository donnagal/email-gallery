new Vue({
  el: "#items",
  data: {
    current: 1,
    paginate: 20,
    primaryColor: "#017D8C",
    secondaryColor: "#86C543",
    strokeWidth: 3,
    search_filter: "",
    status_filter: "",
    items: [
      {
        group: "money, productivity, digital",
        text: "calculator, hand, push button",
        url: "1",
        svg: ""
      },
      {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "2",
        svg: ""
      },
      {
        group: "money, productivity, digital",
        text: "calculator, hand, push button",
        url: "3",
        svg: ""
      },
      {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "4",
        svg: ""
      },
      {
        group: "money, productivity, digital",
        text: "calculator, hand, push button",
        url: "5",
        svg: ""
      },
      {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "6",
        svg: ""
      },
     {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "7",
        svg: ""
      },
      {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "8",
        svg: ""
      },
    {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "9",
        svg: ""
      }
    ]
  },
  computed: {
    filteredItems() {
      let filtered = this.items;
      if (this.search_filter.trim()) {
        const term = this.search_filter.trim().toLowerCase();
        filtered = filtered.filter(i => i.url.toLowerCase().includes(term));
      }
      if (this.status_filter.trim()) {
        const status = this.status_filter.trim().toLowerCase();
        filtered = filtered.filter(i => i.group.toLowerCase().includes(status));
      }
      return filtered;
    },
    paginatedItems() {
      const start = (this.current - 1) * this.paginate;
      const end = this.current * this.paginate;
      return this.filteredItems.slice(start, end);
    },
    paginate_total() {
      return Math.ceil(this.filteredItems.length / this.paginate) || 1;
    }
  },
  mounted() {
    this.items.forEach((item, index) => {
      fetch(`/pages/icons-web/svg/${item.url}.svg`)
        .then(res => res.text())
        .then(svg => {
          this.$set(this.items, index, { ...item, svg });
          this.$nextTick(() => this.applyColors(index));
        })
        .catch(err => console.error(`Failed to load /pages/icons-web/svg/${item.url}.svg`, err));
    });
  },
  methods: {
    applyColors(index) {
      const iconEl = document.querySelectorAll(".icon-container")[index];
      if (!iconEl) return;

      const svg = iconEl.querySelector("svg");
      if (svg) {
        svg.querySelectorAll(".stroke-primary").forEach(el => {
          el.setAttribute("stroke", this.primaryColor);
          el.setAttribute("stroke-width", this.strokeWidth);
        });
        svg.querySelectorAll(".stroke-secondary").forEach(el => {
          el.setAttribute("stroke", this.secondaryColor);
          el.setAttribute("stroke-width", this.strokeWidth);
        });
      }
    },
    setStatus(status) {
      this.status_filter = status;
      this.current = 1;
    },
    updateCurrent(i) {
      this.current = i;
    },
    setStyle(styleNumber) {
      switch (styleNumber) {
        case 1:
          this.primaryColor = "#017D8C"; // Pine
          this.secondaryColor = "#86C543"; // Bright Breen
          this.strokeWidth = 3;
          break;
        case 2:
          this.primaryColor = "#008000"; // Green
          this.secondaryColor = "#808080"; // Grey
          this.strokeWidth = 3;
          break;
        case 3:
          this.primaryColor = "#0000FF"; // Blue
          this.secondaryColor = "#808080"; // Grey
          this.strokeWidth = 3;
          break;
        case 4:
          this.primaryColor = "#0099FF";
          this.secondaryColor = "#D3D3D3";
          this.strokeWidth = 2.5;
          break;
        case 5:
          this.primaryColor = "#800080";
          this.secondaryColor = "#D3D3D3";
          this.strokeWidth = 2.5;
          break;
        case 6:
          this.primaryColor = "#7B3F61";
          this.secondaryColor = "#0A5490";
          this.strokeWidth = 2.5;
          break;
        default:
          this.primaryColor = "#017D8C";
          this.secondaryColor = "#86C543";
          this.strokeWidth = 2.5;
      }

      this.$nextTick(() => {
        this.paginatedItems.forEach((_, i) => {
          this.applyColors(i);
        });
      });
    },
    downloadSvg(index) {
      const iconEl = document.querySelectorAll(".icon-container")[index];
      if (!iconEl) return alert("SVG not loaded yet");

      const svgEl = iconEl.querySelector("svg");
      if (!svgEl) return alert("SVG not loaded yet");

      const svgClone = svgEl.cloneNode(true);
      svgClone.querySelectorAll(".stroke-primary").forEach(el => {
        el.setAttribute("stroke", this.primaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
      svgClone.querySelectorAll(".stroke-secondary").forEach(el => {
        el.setAttribute("stroke", this.secondaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgClone);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${this.items[index].url}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    downloadPng(index) {
      const iconEl = document.querySelectorAll(".icon-container")[index];
      if (!iconEl) return alert("SVG not loaded yet");

      const svgEl = iconEl.querySelector("svg");
      if (!svgEl) return alert("SVG not loaded yet");

      const svgClone = svgEl.cloneNode(true);
      svgClone.querySelectorAll(".stroke-primary").forEach(el => {
        el.setAttribute("stroke", this.primaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
      svgClone.querySelectorAll(".stroke-secondary").forEach(el => {
        el.setAttribute("stroke", this.secondaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width || 150;
        canvas.height = img.height || 150;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${this.items[index].url}.png`;
        downloadLink.click();
      };
      img.src = url;
    }
  }
});
