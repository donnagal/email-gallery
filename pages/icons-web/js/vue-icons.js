new Vue({
  el: "#items",
  data: {
    primaryColor: "#017D8C",
    secondaryColor: "#86C543",
    strokeWidth: 3,
    totalIcons: 50, // total number of SVGs
    svgs: [], // will store loaded SVGs
  },
  mounted() {
    for (let i = 1; i <= this.totalIcons; i++) {
      fetch(`/pages/icons-web/svg/${i}.svg`)
        .then((res) => res.text())
        .then((svg) => {
          this.$set(this.svgs, i - 1, svg);
          this.$nextTick(() => this.applyColors(i - 1));
        })
        .catch((err) => console.error(`Failed to load SVG ${i}`, err));
    }
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
      switch (styleNumber) {
        case 1:
          this.primaryColor = "#017D8C";
          this.secondaryColor = "#86C543";
          this.strokeWidth = 3;
          break;
        case 2:
          this.primaryColor = "#008000";
          this.secondaryColor = "#808080";
          this.strokeWidth = 3;
          break;
        case 3:
          this.primaryColor = "#0000FF";
          this.secondaryColor = "#808080";
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
