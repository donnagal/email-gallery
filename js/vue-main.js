new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
      { name: 'Template A MASTER, 2020-04',
        group: 'template',
        url: ["/emails/templates/2020-04_master.html"],
        pic: ["images/master-template.jpg"],
      },
      { name: 'Template B Overlap header, 2020-04',
        group: 'template',
        url: ["https://m.marketing.cbussuper.com.au/nl/jsp/m.jsp?c=@6ii8idCNGl9oxxUCx6YoyCgWpr0l8qYcHDV5j7mTvIo=&fbclid=IwAR23ZNOKa8_Uyu5mhGPIQg_W9dcy6dg5NlZGI5cGUwZ6S6gkMTbDulQOx3Q"],
        pic: ["images/hero-overlap.jpg"],
      },
      { name: 'Cbus Retirement Planning webinar, 2020-04',
        group: 'event',
        url: ["https://m.marketing.cbussuper.com.au/nl/jsp/m.jsp?c=%40Nd3eTnakrS7v6W5EcAg3bY%2FobChq73YWvZSCNka7t%2F4%3D"],
        pic: ["images/event-2020-04.jpg"],
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
