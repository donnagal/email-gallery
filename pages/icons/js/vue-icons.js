new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
      { 
        group: 'Cbus', 
        text: 'webinar, event, seminar, education sessions',
        url: ["webinar.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'webinar, event, seminar, education sessions',
        url: ["webinar-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'webinar, event, seminar, education sessions, SIS',
        url: ["webinar-purple.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'webinar, event, seminar, education sessions',
        url: ["webinar-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["webinar-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["ms-webinar-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["ms-webinar-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["ms-webinar-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["ms-webinar-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'webinar, event, seminar, education sessions',
        url: ["ms-webinar-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["laptop.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["laptop-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, webinar, event, education sessions, SIS',
        url: ["laptop-purple.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["laptop-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["laptop-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["ms-laptop-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["ms-laptop-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["ms-laptop-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["ms-laptop-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, webinar, event, education sessions',
        url: ["ms-laptop-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, enter details.',
        url: ["laptop-lines.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, enter details.',
        url: ["laptop-lines-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, enter details, SIS.',
        url: ["laptop-lines-purple.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'laptop,  register online, enter details.',
        url: ["laptop-lines-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'laptop,  register online, enter details.',
        url: ["laptop-lines-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, enter details.',
        url: ["ms-laptop-lines-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, enter details.',
        url: ["ms-laptop-lines-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, enter details.',
        url: ["ms-laptop-lines-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, enter details.',
        url: ["ms-laptop-lines-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'laptop,  register online, enter details.',
        url: ["ms-laptop-lines-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["phone-hand.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["phone-hand-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'Call, Phone, App, Login keep on track, SIS',
        url: ["phone-hand-purple.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["phone-hand-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["phone-hand-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["ms-phone-hand-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["ms-phone-hand-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["ms-phone-hand-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["ms-phone-hand-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'Call, Phone, App, Login keep on track',
        url: ["ms-phone-hand-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'no tax benefit',
        url: ["no-tax.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'no tax benefit',
        url: ["no-tax-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'no tax benefit',
        url: ["no-tax-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'no tax benefit',
        url: ["no-tax-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'no tax benefit',
        url: ["no-tax-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'no tax benefit',
        url: ["ms-no-tax-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'no tax benefit',
        url: ["ms-no-tax-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'no tax benefit',
        url: ["ms-no-tax-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'no tax benefit',
        url: ["ms-no-tax-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'no tax benefit',
        url: ["ms-no-tax-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance decrease ',
        url: ["money-down.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance decrease ',
        url: ["money-down-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance decrease, SIS ',
        url: ["money-down-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance decrease ',
        url: ["money-down-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["money-down-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["ms-money-down-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["ms-money-down-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["ms-money-down-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["ms-money-down-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance decrease ',
        url: ["ms-money-down-pruple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance ',
        url: ["chart-up.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance ',
        url: ["chart-up-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance, SIS ',
        url: ["chart-up-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, performance ',
        url: ["chart-up-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'track money, investment updates, performance ',
        url: ["chart-up-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance ',
        url: ["ms-chart-up-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance ',
        url: ["ms-chart-up-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance ',
        url: ["ms-chart-up-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance ',
        url: ["ms-chart-up-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, performance ',
        url: ["ms-chart-up-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["chart-up-solid.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["chart-up-solid-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, strong returns performance, SIS ',
        url: ["chart-up-solid-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["chart-up-solid-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["chart-up-solid-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["ms-chart-up-solid-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["ms-chart-up-solid-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["ms-chart-up-solid-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["ms-chart-up-solid-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'track money, investment updates, strong returns performance ',
        url: ["ms-chart-up-solid-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'access to super when needed, time saver benefit ',
        url: ["hand-clock.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'access to super when needed, time saver benefit ',
        url: ["hand-clock-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'access to super when needed, time saver benefit, SIS ',
        url: ["hand-clock-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'access to super when needed, time saver benefit ',
        url: ["hand-clock-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["hand-clock-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["ms-hand-clock-purple-3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["ms-hand-clock-purple-4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["ms-hand-clock-blue-1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["ms-hand-clock-blue-2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'access to super when needed, time saver benefit ',
        url: ["ms-hand-clock-purple-leg.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'login online, Log in to Employer Portal',
        url: ["click-button.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'login online, Log in to Employer Portal',
        url: ["click-button-green.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'login online, Log in to Employer Portal, SIS',
        url: ["click-button-purple-sis.png"],
      }, 
      { 
        group: 'Cbus', 
        text: 'login online, Log in to Employer Portal',
        url: ["click-button-pine.png"],
      }, 
      { 
        group: 'Cbus, Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["click-button-white.png"],
      }, 
      { 
        group: 'Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["ms-click-button-m3.png"],
      }, 
      { 
        group: 'Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["ms-click-button-m4.png"],
      }, 
      { 
        group: 'Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["ms-click-button-c1.png"],
      }, 
      { 
        group: 'Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["ms-click-button-c2.png"],
      }, 
      { 
        group: 'Media', 
        text: 'login online, Log in to Employer Portal',
        url: ["ms-click-button-purple.png"],
      }, 









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