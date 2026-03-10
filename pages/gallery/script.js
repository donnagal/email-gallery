new Vue({
  el: "#app",
  data: {
    imageCount: 50, // Total number of images
  },
  computed: {
    imagesAscending() {
      return Array.from({ length: this.imageCount }, (_, i) => i + 1);
    },
  },
  mounted() {
    // Initialize LightGallery
    const gallery = lightGallery(this.$refs.lightGallery, {
      plugins: [lgZoom],
      speed: 500,
      thumbnail: false,
      zoom: true,
    });

    // Check URL hash for deep linking, e.g., /gallery#3
    const hash = window.location.hash.slice(1);
    const imageNumber = parseInt(hash, 10);

    if (
      !isNaN(imageNumber) &&
      imageNumber >= 1 &&
      imageNumber <= this.imageCount
    ) {
      const imageIndex = this.imagesAscending.indexOf(imageNumber);
      if (imageIndex !== -1) {
        gallery.openGallery(imageIndex);
      }
    }
  },
});
