
const vm = new Vue({
  el: "#app",
  data: {
    lists: [],
    
    sortKey: null,
    reverse: false,
  },
  computed: {},
  methods: {
    sortBy(sortKey) {
      this.lists.sort( (a, b) => {
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
      if(this.reverse) this.lists.reverse();
      this.sortKey = sortKey;
    },
    
  },
  mounted() {
    //  fetch("https://donnagal.github.io/email-gallery/pages/reports/data/list_icons.json")
   fetch("http://127.0.0.1:5500/cbus/pages/reports/data/list_icons.json")
      .then(resp => resp.json())
      .then(json => (this.lists = json));
  }
});

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

}
