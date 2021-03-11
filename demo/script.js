const vm = new Vue({
  el: "#app",
  data: {
    users: [],
    
    sortKey: null,
    reverse: false,
  },
  computed: {},
  methods: {
    sortBy(sortKey) {
      this.users.sort( (a, b) => {
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
      if(this.reverse) this.users.reverse();
      this.sortKey = sortKey;
    }
  },
  mounted() {
    fetch("https://donnagal.github.io/email-gallery/demo/data/datalist.json")
      .then(resp => resp.json())
      .then(json => (this.users = json));
  }
});