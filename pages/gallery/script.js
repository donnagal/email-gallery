  new Vue({
    el: "#app",
    data: {
      imageCount: 90, // Update to match the number of images
    },
    mounted() {
      lightGallery(this.$refs.lightGallery, {
        plugins: [lgZoom], 
        speed: 500,
        thumbnail: false, 
        zoom: true,
      });
    },
  });