new Vue({
  el: "#items",
  created() {
    this.paginate_total = this.items.length / this.paginate;
  },
  data: {
    current: 1,
    items: [
      {
        group: "money, productivity, didgital",
        text: "calculator, hand, push button",
        url: "calculator",
      },
      {
        group: "performance, productivity",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart",
      },
      {
        group: "money",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand",
      },
      {
        group: "performance",
        text: "track money, investment updates, performance",
        url: "chart-up",
      },
      {
        group: "performance",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid",
      },
      {
        group: "performance",
        text: "track money, investment updates, performance, strong returns",
        url: "investments-chart-bars",
      },
      {
        group: "performance",
        text: "track money, investment updates, performance, strong returns",
        url: "investments-chart",
      },

      {
        group: "digital",
        text: "login online, Log in to Employer Portal",
        url: "click-button",
      },
      {
        group: "digital",
        text: "Submit online, Submit your payment",
        url: "click-button-action",
      },
      {
        group: "money",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup",
      },
      {
        group: "productivity",
        text: "Target, managed benefit",
        url: "date-target",
      },
      {
        group: "infrastructure",
        text: "factory, building",
        url: "factory",
      },
      {
        group: "protection, performance",
        text: "first place, podium, winner, star",
        url: "first-place",
      },
      {
        group: "people",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter",
      },
      {
        group: "people",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list",
      },
      {
        group: "productivity",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock",
      },
      {
        group: "people",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake",
      },
      {
        group: "digital",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe",
      },
      {
        group: "protection",
        text: "Hardhat light, construction work job",
        url: "hardhat-light",
      },
      {
        group: "digital",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop",
      },
      {
        group: "digital",
        text: "laptop, register online, enter details",
        url: "laptop-lines",
      },
      {
        group: "productivity",
        text: "document, checklist, tick, approve",
        url: "list-done",
      },
      {
        group: "productivity",
        text: "checklist, checkmark, tick, list",
        url: "list-tick",
      },
      {
        group: "performance",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard",
      },
      {
        group: "performance",
        text: "track money, investment updates, performance decrease",
        url: "money-down",
      },
      {
        group: "money",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe",
      },
      {
        group: "productivity",
        text: "document, statement, tick, money",
        url: "money-paperwork-done",
      },
      {
        group: "money",
        text: "money, plant, growth",
        url: "money-plant",
      },
      {
        group: "money",
        text: "no tax benefit",
        url: "no-tax",
      },
      {
        group: "productivity",
        text: "document, tick, approve document",
        url: "paperwork-done",
      },
      {
        group: "digital",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand",
      },
      {
        group: "money",
        text: "pig, piggybank, coins, savings",
        url: "piggybank",
      },
      {
        group: "infrastructure",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable",
      },
      {
        group: "infrastructure",
        text: "sunset, landscape, mountains",
        url: "sunset",
      },
      {
        group: "money",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope",
      },
      {
        group: "people",
        text: "support, help, insurance and benefits",
        url: "support-person",
      },
      {
        group: "money",
        text: "toilet paper, wasting money",
        url: "toiletpaper",
      },
      {
        group: "money",
        text: "tick, coin, cycle",
        url: "transfer",
      },
      {
        group: "protection",
        text: "umbrella, insurance",
        url: "umbrella",
      },
      {
        group: "money",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash",
      },
      {
        group: "digital",
        text: "mouse, form, field, input",
        url: "web-search",
      },
      {
        group: "people",
        text: "webinar, event, seminar, education sessions",
        url: "webinar",
      },
      {
        group: "infrastructure",
        text: "work cart, moving resources",
        url: "work-cart",
      },
      {
        group: "money",
        text: "tick, coin, cycle",
        url: "transfer",
      },
      {
        group: "money",
        text: "money, streams, account, cycle",
        url: "multi-transfer",
      },
      {
        group: "infrastructure",
        text: "Energy, transmission tower",
        url: "power-tower",
      },
      {
        group: "infrastructure",
        text: "Energy, wind, power",
        url: "wind-energy",
      },
      {
        group: "infrastructure",
        text: "Energy, sun, eco, power",
        url: "solar-power",
      },
      {
        group: "infrastructure",
        text: "power battery, storage",
        url: "power-house",
      },
      {
        group: "people, digital, protection",
        text: "People, Name tag",
        url: "profile-id",
      },
      {
        group: "infrastructure",
        text: "Energy, power",
        url: "hydro-energy",
      },
      {
        group: "infrastructure",
        text: "Energy, power",
        url: "power-distribution",
      },
      {
        group: "infrastructure",
        text: "Buildings, Government house",
        url: "gov-house",
      },
      {
        group: "infrastructure",
        text: "Buildings development",
        url: "building-dev",
      },
      {
        group: "infrastructure",
        text: "Buildings, hard hat",
        url: "construction-site",
      },
      {
        group: "infrastructure",
        text: "Buildings",
        url: "construction-buildings",
      },
      {
        group: "infrastructure",
        text: "Buildings",
        url: "retial",
      },
      {
        group: "infrastructure",
        text: "Buildings",
        url: "residential",
      },
      {
        group: "infrastructure, people",
        text: "Buildings",
        url: "contract",
      },
      {
        group: "infrastructure",
        text: "sustainability, environmental",
        url: "enviromental",
      },
      {
        group: "digital",
        text: "Announcement",
        url: "megaphone",
      },
      {
        group: "digital",
        text: "Digital chat bot",
        url: "chat-bot-1",
      },
      {
        group: "digital",
        text: "Digital mobile in hand",
        url: "mobile-access",
      },
      {
        group: "digital",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat",
      },
      {
        group: "protection",
        text: "umbrella, insurance",
        url: "umbrella-rain",
      },
      {
        group: "protection",
        text: "umbrella, insurance",
        url: "umbrella-tick",
      },
    ],
    paginate: 1000,
    paginate_total: 0,
    search_filter: "",
    status_filter: "",
  },
  methods: {
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate;
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        );
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
      this.paginate_total = Math.ceil(
        document.querySelectorAll("tbody tr").length / this.paginate
      );
    },
  },
});

// Force download image to folder
function forceDownload(link) {
  var url = link.getAttribute("data-href");
  var fileName = link.getAttribute("download");
  // link.innerText = "Working...";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement("a");
    tag.href = imageUrl;
    tag.download = fileName;
    // document.body.appendChild(tag);
    tag.click();
    // document.body.removeChild(tag);
    // link.innerText="Download Image";
  };
  xhr.send();
}
