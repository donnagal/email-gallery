new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
    active: 'link-1',
     current: 1,
     filterField: '',
     entries: null,
     show: false,
     search_filter: '',
     items: [
            { 
              name: '[Member] Statement reminder-email-1-RIE',
              color: 'green-02',
              group: 'mbr',
              sent: '51,218',
              small: '(99% Success)',
              opens: '1,921 - 8.85%  ',
              clicks: '48 - 0.22%  ',
              subject: '<Name>, don’t forget to watch your personal video update',
              time: '16/10/2020 11:09',
              url: ["https://litmus.com/pub/3bf0cf7"],
            },
            { 
              name: '[Member] Statement reminder-email-2-Non-RIE-01',
              color: 'green-02',
              group: 'mbr',
              sent: '20,683',
              small: '(99% Success)',
              opens: '2,286 - 11.05% ',
              clicks: '55 - 0.27% ',
              subject: '<Name>, don’t forget to watch your personal video update',
              time: '16/10/2020 11:09',
              url: ["https://litmus.com/pub/05ac995"],
            },

    ],
    paginate: 1000,
    paginate_total: 0,
    search_filter: '',
    status_filter: ''
  },
  created: function () {
    this.search_filter= getParameterByName('search');
  },
  methods: {
    selectItem(item) {
      this.active = item;
    },
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


setTimeout(function(){
  $("#myInput").focus();
}, 2000);


// Filter in URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


$(".load").hide();
setTimeout(function(){
	$(".load").show();
},3000);

$(".loading").show();
setTimeout(function(){
	$(".loading").hide();
},3000);


// Hide nav on shared URL
if (window.location.href.indexOf("search=") != -1) {
  $("#nav").hide();
  }