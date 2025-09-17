new Vue({
  el: "#items",
  data: {
    primaryColor: "#515457", // Default Grey
    secondaryColor: "#515457", // Default Grey
    strokeWidth: 3,
    totalIcons: 50, // total number of SVGs
    svgs: [], // will store loaded SVGs
    activeBrand: "cbus", // default brand
    activeStyle: 1, // default style
  },
  mounted() {
    // Load all SVGs
    for (let i = 1; i <= this.totalIcons; i++) {
      fetch(`/pages/icons/svg/${i}.svg`)
        .then((res) => res.text())
        .then((svg) => {
          this.$set(this.svgs, i - 1, svg);
          this.$nextTick(() => this.applyColors(i - 1));
        })
        .catch((err) => console.error(`Failed to load SVG ${i}`, err));
    }

    // Apply default grey to all SVGs on mount
    this.$nextTick(() => this.setStyle(1));
  },
  methods: {
    applyColors(index) {
      const iconEl = document.querySelectorAll(".icon-container")[index];
      if (!iconEl) return;
      const svg = iconEl.querySelector("svg");
      if (!svg) return;

      svg.querySelectorAll(".stroke-primary").forEach((el) => {
        el.setAttribute("stroke", this.primaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
      svg.querySelectorAll(".stroke-secondary").forEach((el) => {
        el.setAttribute("stroke", this.secondaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
    },
    setStyle(styleNumber) {
      this.activeStyle = styleNumber;

      switch (styleNumber) {
        case 1:
          this.primaryColor = "#515457";
          this.secondaryColor = "#515457";
          this.strokeWidth = 3;
          break;
        case 2:
          this.primaryColor = "#0F8045";
          this.secondaryColor = "#0F8045";
          this.strokeWidth = 3;
          break;
        case 3:
          this.primaryColor = "#72004D";
          this.secondaryColor = "#72004D";
          this.strokeWidth = 3;
          break;
        case 4:
          this.primaryColor = "#1A1A1A";
          this.secondaryColor = "#1A1A1A";
          this.strokeWidth = 3;
          break;
        case 5:
          this.primaryColor = "#017D8C";
          this.secondaryColor = "#017D8C";
          this.strokeWidth = 3;
          break;
        case 6:
          this.primaryColor = "#AA4187";
          this.secondaryColor = "#AA4187";
          this.strokeWidth = 2.3;
          break;
        case 7:
          this.primaryColor = "#64194B";
          this.secondaryColor = "#64194B";
          this.strokeWidth = 2.3;
          break;
        case 8:
          this.primaryColor = "#88CCEE";
          this.secondaryColor = "#88CCEE";
          this.strokeWidth = 2.3;
          break;
        case 9:
          this.primaryColor = "#643F91";
          this.secondaryColor = "#643F91";
          this.strokeWidth = 2.3;
          break;
        case 10:
          this.primaryColor = "#000000";
          this.secondaryColor = "#000000";
          this.strokeWidth = 2.3;
          break;
      }

      this.$nextTick(() => this.svgs.forEach((_, i) => this.applyColors(i)));
    },
    downloadSvg(index) {
      const iconEl = document.querySelectorAll(".icon-container")[index];
      if (!iconEl) return alert("SVG not loaded yet");
      const svgEl = iconEl.querySelector("svg");
      if (!svgEl) return alert("SVG not loaded yet");

      const clone = svgEl.cloneNode(true);
      clone.querySelectorAll(".stroke-primary").forEach((el) => {
        el.setAttribute("stroke", this.primaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
      clone.querySelectorAll(".stroke-secondary").forEach((el) => {
        el.setAttribute("stroke", this.secondaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });

      const blob = new Blob([new XMLSerializer().serializeToString(clone)], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `icon-${index + 1}.svg`;
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

      const clone = svgEl.cloneNode(true);
      clone.querySelectorAll(".stroke-primary").forEach((el) => {
        el.setAttribute("stroke", this.primaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });
      clone.querySelectorAll(".stroke-secondary").forEach((el) => {
        el.setAttribute("stroke", this.secondaryColor);
        el.setAttribute("stroke-width", this.strokeWidth);
      });

      const blob = new Blob([new XMLSerializer().serializeToString(clone)], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(blob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width || 150;
        canvas.height = img.height || 150;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        canvas.toBlob((pngBlob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(pngBlob);
          link.download = `icon-${index + 1}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      };
      img.src = url;
    },
  },
});
