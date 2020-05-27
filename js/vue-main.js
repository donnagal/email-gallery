new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
    active: 'home',
     current: 1,
     items: [
      { name: '[Template A MASTER], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_master.html"],
        pic: ["images/master-template.jpg"],
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
      url: ["https://email-gallery.netlify.app/emails/2020-05-emp_EOFY.html"],
      pic: ["images/2020-05-emp_EOFY.jpg"],
      },
      { name: '[Member] Road to Recovery, 2020-05',
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
      { name: '[Member] Important updates, COVID-19 Video, 2020-04',
        group: 'mbr',
        url: ["https://email-gallery.netlify.app/emails/2020-04-mbr_covid-video-update.html"],
        pic: ["images/mbr-2020-04.jpg"],
    },



      { name: '[Template B Standrad], 2020-05',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-05-standard.html"],
        pic: ["images/templated-stnd.jpg"],
      },
      { name: '[Template C Overlap header], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04 -overlap-banner.html"],
        pic: ["images/hero-overlap.jpg"],
      },
      { name: '[Template D Overlap Colour Block], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_overlap-colours.html"],
        pic: ["images/template-cb.jpg"],
      },
      { name: '[Template E Profile Letter], 2020-05',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-05-person-letter.html"],
        pic: ["images/template-newsletter.jpg"],
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
