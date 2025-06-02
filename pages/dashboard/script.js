new Vue({
  el: '#app',
  data() {
    return {
      lists: [],
      totals: {
        openAvg: 0,
        clickAvg: 0,
        delivered: 0,
        unsubAvg: 0,        // new total for unsub-pc avg
      },
      sortKey: 'day',
      sortOrder: 'asc',
      searchTerm: '',
    };
  },
  computed: {
    filteredAndSorted() {
      let filtered = this.lists;

      if (this.searchTerm.trim() !== '') {
        const term = this.searchTerm.trim().toLowerCase();
        filtered = filtered.filter(item => item.label.toLowerCase().includes(term));
      }

      filtered = filtered.slice().sort((a, b) => {
        let valA = a[this.sortKey];
        let valB = b[this.sortKey];

        if (this.sortKey === 'day') {
          valA = new Date(valA);
          valB = new Date(valB);
          if (isNaN(valA)) valA = new Date(0);
          if (isNaN(valB)) valB = new Date(0);
        }

        if (['unique-opens-pc', 'unique-clicks-pc', 'delivered', 'unsub', 'unsub-pc'].includes(this.sortKey)) {
          valA = Number(valA);
          valB = Number(valB);
        }

        if (valA < valB) return this.sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });

      return filtered;
    },
  },
  methods: {
    async fetchExcel() {
      try {
        const response = await fetch('data/ajo-report-fy25.xlsx');
        if (!response.ok) throw new Error('Failed to load Excel file');
        const arrayBuffer = await response.arrayBuffer();
        this.parseExcel(arrayBuffer);
      } catch (error) {
        console.error('Error fetching Excel file:', error);
      }
    },
    parseExcel(data) {
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      let jsonData = XLSX.utils.sheet_to_json(worksheet);

      jsonData = jsonData.map(row => ({
        label: row['Campaign Name'] || row['name'] || '',
        day: this.formatDate(row['Send Date'] || row['date']),
        brand: row['brand'] || '',
        type: row['Campaign Type'] || row['type'] || '',
        'unique-opens-pc': Number(row['Unique Opens %'] || row['unique-opens-pc'] || 0),
        'unique-clicks-pc': Number(row['Unique Clicks %'] || row['unique-clicks-pc'] || 0),
        delivered: Number(String(row['deliveried'] || row['Delivered'] || 0).replace(/,/g, '')) || 0,
        unsub: Number(String(row['unsub'] || 0).replace(/,/g, '')) || 0,
        'unsub-pc': Number(row['unsub-pc'] || 0), // added unsub-pc parsing
      }));

      this.lists = jsonData;
      this.calculateTotals();
    },
    formatDate(dateValue) {
      if (!dateValue) return '';

      if (typeof dateValue === 'number') {
        const jsDate = this.excelDateToJSDate(dateValue);
        if (!jsDate || isNaN(jsDate)) return '';
        return jsDate.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: '2-digit' });
      }

      const d = new Date(dateValue);
      if (isNaN(d)) return dateValue;
      return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: '2-digit' });
    },
    excelDateToJSDate(serial) {
      if (typeof serial !== 'number') return null;
      const utc_days = serial - 25569;
      const utc_value = utc_days * 86400;
      return new Date(utc_value * 1000);
    },
    calculateTotals() {
      if (!this.lists.length) {
        this.totals.openAvg = 0;
        this.totals.clickAvg = 0;
        this.totals.delivered = 0;
        this.totals.unsubAvg = 0;
        return;
      }

      let totalDelivered = 0;
      let totalOpens = 0;
      let totalClicks = 0;
      let totalUnsubPc = 0;

      this.lists.forEach(item => {
        totalDelivered += item.delivered;
        totalOpens += item['unique-opens-pc'];
        totalClicks += item['unique-clicks-pc'];
        totalUnsubPc += item['unsub-pc'] || 0;
      });

      this.totals.delivered = totalDelivered.toLocaleString();
      this.totals.openAvg = (totalOpens / this.lists.length).toFixed(2);
      this.totals.clickAvg = (totalClicks / this.lists.length).toFixed(2);
      this.totals.unsubAvg = (totalUnsubPc / this.lists.length).toFixed(2); // new avg total for unsub-pc
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    }
  },
  mounted() {
    this.fetchExcel();
  }
});
