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
      { name: '[Template A MASTER], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_master.html"],
        pic: ["images/master-template.jpg"],
      },
      { name: '[Member] Road to Recovery Young Cohort, 2020-09',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-09-mbr_road-to-recovery--young-cohort"],
      pic: ["images/2020-09-mbr_road-to-recovery--young-cohort.jpg"],
      },
      { name: '[Event] Retiree Single Event Reminder, 2020-09',
      group: 'event',
      url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-single-event-10-reminder"],
      pic: ["images/2020-09-event_webinar-retirement-single-event-10-reminder.jpg"],
      },
      { name: '[Event] Retiree Single Event, 2020-09',
      group: 'event',
      url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-single-event-10"],
      pic: ["images/2020-09-event_webinar-retirement-single-event-10.jpg"],
      },
      { name: '[Member] Abandon Cart, 2020-08',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
      pic: ["images/2020-08_abandon_cart.jpg"],
      },
      { name: '[Member] Road to Recovery Video, 2020-08',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-08-mbr_road-to-recovery-send.html"],
      pic: ["images/2020-08-mbr_road-to-recovery-send.jpg"],
      },
      { name: '[Event] Retiree information Reminder, 2020-08',
        group: 'event',
        url: ["https://email-gallery.netlify.app/emails/2020-08-event__invite-retirement-qld-reminder.html"],
        pic: ["images/2020-08-event__invite-retirement-qld-reminder.jpg"],
      },
      { name: '[Event] Retirement webinar reminder, 2020-08',
        group: 'event',
      url: ["https://email-gallery.netlify.app/emails/2020-08-event_webinar-pre-retirement--event-9-reminder.html"],
      pic: ["images/2020-08-reminder-web.jpg"],
      },

      { name: '[Employer] Employer Portal Video Embed',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-07_emp_emplyer-portal/2020-07-go_live_ch"],
      pic: ["images/2020-07_emp_emplyer-portal.jpg"],
      },
      { name: '[Member] Retirement Support',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-07-retirement-support-2.html"],
      pic: ["images/2020-07-support.jpg"],
      },
      { name: '[Member] Soul Trader - Accident cover only, 2020-07',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-06-mbr_sole-trader-1.html"],
      pic: ["images/2020-07-st-1.jpg"],
      },
      { name: '[Member] Soul Trader - Nil cover, 2020-07',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-06-mbr_sole-trader-2.html"],
      pic: ["images/2020-07-st-2.jpg"],
      },
      { name: '[Event] White collar members webinars, 2020-07',
      group: 'event',
      url: ["https://email-gallery.netlify.app/emails/2020-07-event__white-collar-3.html"],
      pic: ["images/2020-06-event-wc.jpg"],
      },
      { name: '[Member] Road to Recovery Video, 2020-06',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-06-mbr__msg-from-ceo-video.html"],
      pic: ["images/2020-06-video-ceo.jpg"],
      },
      { name: '[Member] Post Early Access, 2020-06',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-06-mbr__post-early-access-1.html"],
      pic: ["images/2020-06-post-early-access.jpg"],
      },
      { name: '[Member] SIS Adive FAQs Video, 2020-05',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-05-mbr__covid-19-sis-advice%20video.html"],
      pic: ["images/2020-05-sis-03.jpg"],
      },
      { name: '[Member] SIS Portal Pre-Launch, 2020-05',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-05-mbr_sis-portal-pre-live"],
      pic: ["images/2020-05-sis-01.jpg"],
      },
      { name: '[Member] SIS Portal Go Live, 2020-05',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-05-mbr_sis-portal-go-live"],
      pic: ["images/2020-05-sis-02.jpg"],
      },
      { name: '[Member] TFN Rrcord Update, 2020-05',
      group: 'mbr',
      url: ["https://email-gallery.netlify.app/emails/2020-05-mbr_tfn-record.html"],
      pic: ["images/2020-05-mbr_tfn-record.jpg"],
      },
      { name: '[Employer] EOFY Personalisation footer, 2020-05',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-05-emp_EOFY"],
      pic: ["images/2020-05-emp_EOFY.jpg"],
      },

      { name: '[Employer] Employer Portal Deemed, 2020-06',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-06_emp_emplyer-portal/promo-deemed"],
      pic: ["images/ep-01.jpg"],
      },
      { name: '[Employer] Employer Portal New, 2020-06',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-06_emp_emplyer-portal/promo-new"],
      pic: ["images/ep-02.jpg"],
      },
      { name: '[Employer] Employer Portal No ABN, 2020-06',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-06_emp_emplyer-portal/promo-no-abn"],
      pic: ["images/ep-03.jpg"],
      },
      { name: '[Employer] Employer Portal Review CH, 2020-06',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-06_emp_emplyer-portal/promo-review-ch"],
      pic: ["images/ep-04.jpg"],
      },
      { name: '[Employer] EOFY Post Event survey, 2020-06',
      group: 'employer',
      url: ["https://email-gallery.netlify.app/emails/2020-05-emp_EOFY--post-event"],
      pic: ["images/2020-05-emp_EOFY--post-event.jpg"],
      },
      { name: '[Member] Road to Recovery Video, 2020-05',
        group: 'mbr',
        url: ["https://email-gallery.netlify.app/emails/2020-05-mbr-road-to-recovery.html"],
        pic: ["images/r2r.jpg"],
      },
      { name: '[Event] Retiree information forums Invite, 2020-05',
        group: 'event',
        url: ["https://email-gallery.netlify.app/emails/2020-5-event__invite-retirement.html"],
        pic: ["images/event-2020-05.jpg"],
      },
      { name: '[Member] Super Payment Checker Opt-out, 2020-05',
        group: 'mbr',
        url: ["https://email-gallery.netlify.app/emails/2020-04_mbr-super-payment-checker.html"],
        pic: ["images/spc-opt-out.jpg"],
      },
      { name: '[Event] Retirement Planning webinar, 2020-04',
        group: 'event',
        url: ["https://email-gallery.netlify.app/emails/2020-04-event_webinar-retirement.html"],
        pic: ["images/event-2020-04.jpg"],
      },
      { name: '[Event] Retirement Planning webinar 4, 2020-06',
        group: 'event',
        url: ["https://email-gallery.netlify.app/emails/2020-05-event_webinar-retirement--event-4.html"],
        pic: ["images/event-2020-event-4.jpg"],
      },
      { name: '[Event] Retirement Planning webinar 5, 2020-06',
        group: 'event',
        url: ["https://email-gallery.netlify.app/emails/2020-05-event_webinar-retirement--event-5.html"],
        pic: ["images/event-2020-event-5.jpg"],
      },
      { name: '[Member] Important updates, COVID-19 Video, 2020-04',
        group: 'mbr',
        url: ["https://email-gallery.netlify.app/emails/2020-04-mbr_covid-video-update.html"],
        pic: ["images/mbr-2020-04.jpg"],
    },

      { name: '[Template Event], 2020-06',
      group: 'template, event',
      url: ["https://email-gallery.netlify.app/emails/templates/2020-06-event.html"],
      pic: ["images/template-event.jpg"],
      },
      { name: '[Template Standrad], 2020-05',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-05-standard.html"],
        pic: ["images/templated-stnd.jpg"],
      },
      { name: '[Template Overlap header], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04 -overlap-banner.html"],
        pic: ["images/hero-overlap.jpg"],
      },
      { name: '[Template Overlap Colour Block], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_overlap-colours.html"],
        pic: ["images/template-cb.jpg"],
      },
      { name: '[Template Profile Letter], 2020-05',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-05-person-letter.html"],
        pic: ["images/template-newsletter.jpg"],
      },
      { name: '[Template Video MP4 Embeded], 2020-07',
      group: 'template',
      url: ["https://email-gallery.netlify.app/emails/templates/2020-07-video.html"],
      pic: ["images/template-video-embeded.gif"],
    },


    { name: '[Inspo], VicSuper 2020-07',
      group: 'external',
      url: ["images/inspo-vicsuper-1.jpg"],
      pic: ["images/inspo-vicsuper-1-sm.jpg"],
    },
    { name: '[Inspo], VicSuper 2020-07',
      group: 'external',
      url: ["images/inspo-vicsuper-2.jpg"],
      pic: ["images/inspo-vicsuper-2-sm.jpg"],
    },
    { name: '[Inspo], HESTA 2020-06',
      group: 'external',
      url: ["images/inspo-hesta-01.jpg"],
      pic: ["images/inspo-hesta-01-sm.jpg"],
    },
    { name: '[Inspo], HESTA 2020-06',
      group: 'external',
      url: ["images/inspo-hesta-02.jpg"],
      pic: ["images/inspo-hesta-02-sm.jpg"],
    },
    { name: '[Inspo], VicSuper 2020-05',
      group: 'external',
      url: ["images/inspo-01x2.jpg"],
      pic: ["images/inspo-01.jpg"],
    },
    { name: '[Inspo], VicSuper 2020-02',
      group: 'external',
      url: ["images/inspo-02x2.jpg"],
      pic: ["images/inspo-02.jpg"],
    },
    { name: '[Inspo], Current',
      group: 'external',
      url: ["https://files.reallygoodemails.com/emails/smiles-davis-your-account-statements-are-now-in-the-current-app-.png"],
      pic: ["images/inspo-current.jpg"],
    },
    { name: '[Inspo], Chime',
      group: 'external',
      url: ["https://reallygoodemails.com/emails/its-kinda-like-the-first-day-of-summer-vacation/"],
      pic: ["images/inspo-03.jpg"],
    },
    { name: '[Inspo], Blinkist',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/top-3-blinkist-titles-that-everyones-loving/"],
    pic: ["images/inspo-04.jpg"],
    },
    { name: '[Inspo], Hotele',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/salvemos-a-los-hoteles-independientes-a-travs-de-esta-iniciativa/"],
    pic: ["images/inspo-05.jpg"],
    },
    { name: '[Inspo], Shopify in LA',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/get-in-person-support-at-shopify-in-la/"],
    pic: ["images/inspo-06.jpg"],
    },
    { name: '[Inspo], Google Science Fair',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/it-s-not-too-late-google-science-fair-is-still-taking-ideas/"],
    pic: ["images/inspo-07.jpg"],
    },
    { name: '[Inspo], Frontiers by Slack',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/youre-invited-frontiers-by-slack-our-best-and-first-ever-conference/"],
    pic: ["images/inspo-08.jpg"],
    },
    { name: '[Inspo], Uber 100',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/you-re-in-the-big-leagues-tien-100-deliveries-made/"],
    pic: ["images/inspo-09.jpg"],
    },
    { name: '[Inspo], Uber $2 Rides',
    group: 'external',
    url: ["https://reallygoodemails.com/emails/2-rides-are-going-fast/"],
    pic: ["images/inspo-10.jpg"],
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