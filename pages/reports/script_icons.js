
const vm = new Vue({
  el: "#app",
  data: {
    lists: [],
    
    sortKey: null,
    reverse: false,
  },
  computed: {},
  methods: {
    sortBy(sortKey) {
      this.lists.sort( (a, b) => {
        //  numeric sort
        if(typeof a[sortKey] === 'number'){
          return a[sortKey] - b[sortKey];
        }
        //  alphanumeric sort 
        const A = a[sortKey].toUpperCase();
        const B = b[sortKey].toUpperCase();                
        return A < B ? -1 : A > B ?  1 : 0;
      });
      this.reverse = (this.sortKey === sortKey) ? !this.reverse : false;
      if(this.reverse) this.lists.reverse();
      this.sortKey = sortKey;
    }
  },
  mounted() {
    fetch("https://donnagal.github.io/email-gallery/pages/reports/data/list_icons.json")
    // fetch("http://127.0.0.1:5500/cbus/pages/reports/data/list_icons.json")
      .then(resp => resp.json())
      .then(json => (this.lists = json));
  }
});


// Force download image to folder
function forceDownload(link){
  var url = link.getAttribute("data-href");
  var fileName = link.getAttribute("download");
  // link.innerText = "Working...";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = fileName;
      // document.body.appendChild(tag);
      tag.click();
      // document.body.removeChild(tag);
      // link.innerText="Download Image";
  }
  xhr.send();
}