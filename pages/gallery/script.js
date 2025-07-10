  new Vue({
    el: "#app",
    data: {
      imageCount: 30, // Update to match the number of images
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