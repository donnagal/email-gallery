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
              name: '[Retirement Webinar] 2020-10 SA (50-65yrs) - #13 Invite',
              color: 'purple',
              group: 'event',
              sent: '6,082',
              opens: '2,857 - 46.97% ',
              clicks: '93 - 1.53% ',
              subject: 'As a valued Cbus member, we invite you to attend an upcoming webinar.',
              time: '06/10/2020 TUE 10:00AM',
              url: ["https://email-gallery.netlify.app/emails/2020-10-event_webinar-retirement-multi-event-13.html"],
            },
            { 
              name: '[Retirement Webinar Super in your 40s] 2020-09 SA (40-49yrs) - #12 Reminder',
              color: 'green',
              group: 'event',
              sent: '5,305',
              opens: '1,713 - 32.29% ',
              clicks: '26 - 0.49% ',
              subject: 'Managing super in your 40s’ webinar - there’s still spots left',
              time: '07/10/2020 WED 10:00AM',
              url: ["https://email-gallery.netlify.app/emails/Retirement webinar reminder 40-49.html"],
          },
          { 
              name: '[Retirement Webinar Super in your 40s] 2020-09 SA (40-49yrs) - #12 Invite',
              color: 'green',
              group: 'event',
              sent: '5,335',
              opens: '2,131 - 39.94% ',
              clicks: '56 - 1.05% ',
              subject: '<Name>, maximise your super in your 40s',
              time: '01/10/2020 THU 10:20AM',
              url: ["https://email-gallery.netlify.app/emails/Retirement Webinar 40-49.html"],
          },
          { 
            name: '[Retirement Webinar] 2020-09 QLD (53-65yrs) - #11 Reminder',
            color: 'purple',
            group: 'event',
            sent: '4,018',
            opens: '1,740 - 43.31%',
            clicks: '72 - 1.79% ',
            subject: '[Webinar] It’s almost time – Reserve your spot. 🔔',
            time: '14/09/2020 MON 03:00PM',
            url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-multi-event-11-reminder"],
          },
          { 
            name: '[Retirement Webinar] 2020-09 QLD (53-65yrs) - #11 Invite',
            color: 'purple',
            group: 'event',
            sent: '4,077',
            opens: '2,145 - 52.61%',
            clicks: '104 - 2.55% ',
            subject: 'As a valued Cbus member, we invite you to attend an upcoming webinar.',
            time: '11/09/2020 FRI 01:30PM',
            url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-multi-event-11"],
          },
            { 
              name: '[Pre-Retirement Webinar] 2020-09 QLD (43-53yrs) - #10 Reminder',
              color: 'purple',
              group: 'event',
              sent: '8,900',
              opens: '3,271 - 36.75% ',
              clicks: '57 - 0.64% ',
              subject: 'Spots are filling fast. Reserve yours today. 🔔',
              time: '09/09/2020 WED 09:00AM',
              url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-single-event-10-reminder"],
            },
            { 
              name: '[Pre-Retirement Webinar] 2020-09 QLD (43-53yrs) - #10 Invite',
              color: 'purple',
              group: 'event',
              sent: '8,978',
              opens: '4,191 - 46.68% ',
              clicks: '84 - 0.94% ',
              subject: 'As a valued Cbus member, we invite you to attend an upcoming webinar.',
              time: '03/09/2020 THU 09:20AM',
              url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-single-event-10"],
            },
            { 
              name: '[Retirement Webinar] 2020-08 NSW (53-65yrs) - #9 Reminder',
              color: 'purple',
              group: 'event',
              sent: '23,312',
              opens: '9,581 - 41.10%',
              clicks: '372- 1.60% ',
              subject: 'Spots are filling fast. Reserve yours today. 🔔',
              time: '20/08/2020 THU 02:00PM',
              url: ["https://email-gallery.netlify.app/emails/2020-08-event_webinar-pre-retirement--event-9.html"],
            },
            { 
              name: '[Retirement Webinar] 2020-08 NSW (53-65yrs) - #9 Invite',
              color: 'purple',
              group: 'event',
              sent: '24,117',
              opens: '12,916 - 53.56%  ',
              clicks: '520 - 2.16%  ',
              subject: '<Name>, registration is now open for Retirement Planning',
              time: '04/08/2020 TUE 03:50PM',
              url: ["https://email-gallery.netlify.app/emails/2020-08-event_webinar-pre-retirement--event-9.html"],
            },
            { 
              name: '[Pre-Retirement Webinar] 2020-08 NSW - #8 Invite',
              color: 'purple',
              group: 'event',
              sent: '434',
              opens: '203 - 46.77% ',
              clicks: '3 - 0.69%',
              subject: '<Name>, registration is now open for Pre-Retirement Planning',
              time: '04/08/2020 TUE 03:50PM',
              url: ["https://email-gallery.netlify.app/emails/2020-08-event_webinar-pre-retirement--event-8.html"],
            },
            { 
                name: '[Retirement Webinar] 2020-07 WA - #7 Reminder',
                color: 'purple',
                group: 'event',
                sent: '10,539',
                opens: '4,066 - 38.58%',
                clicks: '222 - 2.11% ',
                subject: 'Spots are filling fast. Reserve yours today. 🔔',
                time: '17/07/2020 TUE 11:11AM',
                url: ["https://email-gallery.netlify.app/emails/2020-07-event_webinar-retirement--event-7--reminder"],
              },
            { 
              name: '[Retirement Webinar] 2020-07 WA - #7 Invite (A)',
              color: 'purple',
              group: 'event',
              sent: '5,379 (A)',
              opens: '2,661 - 49.95% ',
              clicks: '136 - 2.55%  ',
              subject: 'Hi <Name>, secure your spot for our upcoming webinars',
              time: '07/07/2020 TUE 11:30AM',
              url: ["https://email-gallery.netlify.app/emails/2020-06-event_webinar-retirement--event-7.html"],
          },
          { 
            name: '[Retirement Webinars] 2020-07 WA - #7 Invite (B)',
            color: 'purple',
            group: 'event',
            sent: '5,336 (B)',
            opens: '2,910 - 54.54%',
            clicks: '154 - 2.89%',
            subject: '<Name>, registration is now open for Retirement Planning',
            time: '07/07/2020 TUE 11:30AM',
            url: ["https://email-gallery.netlify.app/emails/2020-06-event_webinar-retirement--event-7.html"],
        },

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