new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
      { name: '[Template A MASTER], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_master.html"],
        pic: ["images/master-template.jpg"],
      },
      { name: '[Template B Overlap header], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04 -overlap-banner.html"],
        pic: ["images/hero-overlap.jpg"],
      },
      { name: '[Template C Overlap Colour Block], 2020-04',
        group: 'template',
        url: ["https://email-gallery.netlify.app/emails/templates/2020-04_overlap-colours.html"],
        pic: ["images/template-cb.jpg"],
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
