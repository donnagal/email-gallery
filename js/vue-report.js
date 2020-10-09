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
            name: '[RIF] 2020-10 (SA) - Reminder',
            color: 'gold',
            group: 'event',
            sent: '626',
            opens: '325 - 51.92% ',
            clicks: '17 - 2.72% ',
            subject: 'Cbus Webinars: Don’t miss out – Reserve your spot. 🔔',
            time: '29/09/2020 TUE 11:00AM',
            url: ["https://email-gallery.netlify.app/emails/2020-10 RIF SA Email Reminder.html"],
        },
        { 
          name: '[RIF] 2020-09 (SA) - Invite',
          color: 'gold',
          group: 'event',
          sent: '628',
          opens: '368 - 58.60% ',
          clicks: '24 - 3.82% ',
          subject: 'You’re invited to attend an exclusive member webinar',
          time: '24/09/2020 THU 11:00AM',
          url: ["https://email-gallery.netlify.app/emails/2020-09%20rif%20sept%20email%20initial%20invite"],
      },
      { 
        name: '[RIF] 2020-08 (QLD, NT & ACT) - Reminder',
        color: 'gold',
        group: 'event',
        sent: '274',
        opens: '161 - 58.76% ',
        clicks: '5 - 1.82% ',
        subject: 'Cbus Webinars: Don’t miss out – Reserve your spot. 🔔',
        time: '27/08/2020 THU 10:22AM',
        url: ["https://email-gallery.netlify.app/emails/2020-08-event__invite-retirement-sep-8-reminder.html"],
    },
    { 
      name: '[RIF] 2020-08 (NT, ACT) - Invite',
      color: 'gold',
      group: 'event',
      sent: '180',
      opens: '119 - 66.11% ',
      clicks: '7 - 3.89% ',
      subject: 'You’re invited to attend an exclusive member webinar',
      time: '12/08/2020 WED 10AM',
      url: ["https://email-gallery.netlify.app/emails/2020-08-event__invite-retirement-nt-act.html"],
    },
    { 
      name: '[RIF] 2020-08 (QLD) - Invite',
      color: 'gold',
      group: 'event',
      sent: '421',
      opens: '259 - 61.52% ',
      clicks: '31 - 7.36% ',
      subject: 'You’re invited to attend an exclusive member webinar',
      time: '11/08/2020  TUE 5:15pm',
      url: ["https://email-gallery.netlify.app/emails/2020-08-event__invite-retirement-qld.html"],
    },
    { 
      name: '[RIF] 2020-07 (NSW) - Reminder',
      color: 'gold',
      group: 'event',
      sent: '1,163',
      opens: '563 - 48.41% ',
      clicks: '46 - 3.96% ',
      subject: 'Cbus Webinars: Don’t miss out – Reserve your spot. 🔔',
      time: '29/07/2020 WED 10:00AM',
      url: ["https://email-gallery.netlify.app/emails/2020-07-event__invite-retirement--nsw-reminder.html"],
    },
    { 
      name: '[RIF] 2020-07 (NSW) - Invite',
      color: 'gold',
      group: 'event',
      sent: '2,326',
      opens: '1,341 - 57.65%',
      clicks: '134 - 5.76% ',
      subject: 'You’re invited to attend an exclusive member webinar',
      time: '07/07/2020 TUE 10:00AM',
      url: ["https://email-gallery.netlify.app/emails/2020-07-event_rif-nsw-invite"],
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