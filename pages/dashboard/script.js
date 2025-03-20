const vm = new Vue({
  el: "#app",
  data: {
    lists: [],
    totals: {},
    sortKey: null,
    reverse: false,
  },
  computed: {},
  methods: {
    sortBy(sortKey) {
      this.lists.sort((a, b) => {
        //  numeric sort
        if (typeof a[sortKey] === "number") {
          return a[sortKey] - b[sortKey];
        }
        //  alphanumeric sort
        const A = a[sortKey];
        const B = b[sortKey];
        return A < B ? -1 : A > B ? 1 : 0;
      });
      this.reverse = this.sortKey === sortKey ? !this.reverse : false;
      if (this.reverse) this.lists.reverse();
      this.sortKey = sortKey;
    },
  },
  mounted() {
    fetch("./data/dashboard-fy25.json")
      .then((resp) => resp.json())
      .then((json) => {
        let data = json;
        let totalOpens = 0;
        let totalClicks = 0;
        let totalDelivered = 0;

        data.map(({ day }, i) => {
          data[i].date = formatDate(day); // add new sortable value `date`
          data[i]["delivered-int"] = formatNum(data[i].delivered); // add new sortable value `delivered-int`

          totalDelivered = totalDelivered + data[i]["delivered-int"];

          totalOpens =
            parseInt(totalOpens) + parseInt(data[i]["unique-opens-pc"]);

          totalClicks = totalClicks + data[i]["unique-clicks-pc"];
        });

        this.totals.openAvg = formatNum2Decimals(totalOpens / data.length);
        this.totals.clickAvg = formatNum2Decimals(totalClicks / data.length);
        this.totals.delivered = totalDelivered.toLocaleString();
        this.lists = data;
      });
  },
});

/**
 * Converts a date string from "d-MMM-yy" format to "yyyy-mm-dd".
 *
 * @param {string} dateStr - The date string in the format "d-MMM-yy" (e.g., "2-Jul-24").
 * @returns {string} The formatted date string in "yyyy-mm-dd" format.
 */
function formatDate(dateStr) {
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const [day, month, year] = dateStr.split("-");
  const fullYear = `20${year}`;
  const date = new Date(fullYear, months[month], day);

  return date.toISOString().split("T")[0]; // Format as yyyy-mm-dd
}

/**
 * Converts a formatted number string (e.g., "1,234") to a sortable number (e.g., 1234).
 * If the input is already a number, it is returned as is.
 * If the input is a string, it removes commas and converts it to an integer.
 * If the input is neither a string nor a number, it returns 0.
 *
 * @param {string|number} x - The value to be converted.
 * @returns {number} The numeric representation of the input.
 */
function formatNum(x) {
  if (typeof x === "number") return x;
  if (typeof x === "string") return parseInt(x.replace(",", ""));
  return 0;
}

/**
 * Formats a number to have exactly two decimal places if it contains a decimal point.
 * If the number is a whole number, it is returned as is.
 * Uses `Intl.NumberFormat` to ensure proper formatting.
 *
 * @param {number} number - The number to format.
 * @returns {string|number} The formatted number as a string if it has decimals, otherwise the original number.
 */
function formatNum2Decimals(number) {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return number.toString().indexOf(".") == -1
    ? number
    : numberFormatter.format(number);
}
