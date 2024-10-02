new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
      {
        text:'',
        group: 'Cbus, Line', 
        name: ["aus-qld"],
       },
      { name: 'Webinar - Green', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-green.png"],
      },
      { name: 'Webinar - Purple', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-purple.png"],
      },
      { name: 'Webinar - White', 
        group: 'Cbus & Media, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-white.png"],
      },
      { name: 'Webinar - Green', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-green.png"],
      },
      { name: 'Webinar - Purple', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-purple.png"],
      }, 
      { name: 'Webinar - Green', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-green.png"],
      },
      { name: 'Webinar - Purple', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-purple.png"],
      },
      { name: 'Webinar - White', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-white.png"],
      },
      { name: 'Webinar - Green', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-green.png"],
      },
      { name: 'Webinar - Purple', 
        group: 'Cbus, Line', 
        text: 'webinar, event, education sessions',
        url: ["webinar-purple.png"],
        
      }
    ],
    paginate: 1000,
    paginate_total: 0,
    search_filter: '',
    status_filter: ''
  },
  methods: {
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate;
      }
      else {
        return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
      }
    },
    setStatus: function (status) {
      this.status_filter = status;
      this.$nextTick(function () {
        this.updatePaginate();
      });
    },
    updateCurrent: function (i) {
      this.current = i;
    },
    updatePaginate: function () {
      this.current = 1;
      this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
    }
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