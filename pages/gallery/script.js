new Vue({
  el: "#app",
  data: {
    imageCount: 92, // Total number of images
  },
  computed: {
    imagesDescending() {
      return Array.from(
        { length: this.imageCount },
        (_, i) => this.imageCount - i
      );
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

    // Check URL hash for deep linking, e.g., /gallery#8
    const hash = window.location.hash.slice(1); // Remove the '#'
    const imageNumber = parseInt(hash, 10);

    if (
      !isNaN(imageNumber) &&
      imageNumber >= 1 &&
      imageNumber <= this.imageCount
    ) {
      // Find index in the descending array
      const imageIndex = this.imagesDescending.indexOf(imageNumber);
      if (imageIndex !== -1) {
        gallery.openGallery(imageIndex);
      }
    }
  },
});
