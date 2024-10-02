new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
       {
        text:'webinar, event, education sessions',
        group: 'Cbus', 
        name: ["webinar"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Cbus', 
        name: ["webinar-green"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Cbus', 
        name: ["webinar-purple"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Cbus', 
        name: ["webinar-pine"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Cbus, Media', 
        name: ["webinar-white"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Media', 
        name: ["ms-webinar-purple-3"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Media', 
        name: ["ms-webinar-purple-4"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Media', 
        name: ["ms-webinar-blue-1"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Media', 
        name: ["ms-webinar-blue-2"],
       },
       {
        text:'webinar, event, education sessions',
        group: 'Media', 
        name: ["ms-webinar-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-pine-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-solid-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-solid-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-solid-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-solid-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up-solid"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["chart-up"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-action-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-action-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-action-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-action-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-action"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["click-button"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["coffee-cup"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["date-target-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["date-target-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["date-target-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["date-target-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["date-target"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["factory-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["factory-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["factory-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["factory-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["factory"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["first-place"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["front-counter"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["group-people-list"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-clock-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-clock-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-clock-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-clock-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-clock"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-shake"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hand-swipe"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hardhat-light-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hardhat-light-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hardhat-light-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hardhat-light-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["hardhat-light"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-lines-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-lines-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-lines-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-lines-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-lines"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["laptop"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["lightglobe"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-done"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-tick-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-tick-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-tick-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-tick-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["list-tick"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["media-snapboard-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["media-snapboard-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["media-snapboard-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["media-snapboard-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["media-snapboard"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-down-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-down-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-down-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-down-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-down"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["money-plant"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-calendar-tick-chart-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-calendar-tick-chart-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-calendar-tick-chart-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-calendar-tick-chart-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-calendar-tick-chart-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-cash-in-hand-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-cash-in-hand-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-cash-in-hand-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-cash-in-hand-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-cash-in-hand-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-solid-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-solid-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-solid-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-solid-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-chart-up-solid-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-action-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-action-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-action-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-action-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-action-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-click-button-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-date-target-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-date-target-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-date-target-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-date-target-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-date-target-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-factory-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-factory-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-factory-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-factory-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-factory-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hand-clock-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hand-clock-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hand-clock-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hand-clock-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hand-clock-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hardhat-light-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hardhat-light-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hardhat-light-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hardhat-light-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-hardhat-light-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-lines-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-lines-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-lines-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-lines-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-lines-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-laptop-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-list-tick-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-list-tick-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-list-tick-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-list-tick-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-list-tick-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-media-snapboard-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-media-snapboard-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-media-snapboard-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-media-snapboard-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-media-snapboard-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-money-down-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-money-down-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-money-down-pruple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-money-down-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-money-down-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-no-tax-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-no-tax-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-no-tax-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-no-tax-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-no-tax-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-paperwork-done-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-paperwork-done-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-paperwork-done-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-paperwork-done-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-paperwork-done-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-phone-hand-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-phone-hand-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-phone-hand-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-phone-hand-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-phone-hand-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-piggybank-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-piggybank-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-piggybank-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-piggybank-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-piggybank-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-toiletpaper-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-toiletpaper-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-toiletpaper-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-toiletpaper-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-toiletpaper-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-wallet-cash-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-wallet-cash-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-wallet-cash-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-wallet-cash-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-wallet-cash-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-webinar-blue-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-webinar-blue-2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-webinar-purple-3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-webinar-purple-4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-webinar-purple-leg"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-work-cart-c1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-work-cart-c2"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-work-cart-m3"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-work-cart-m4"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["ms-work-cart-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax-1"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax-purple-sis"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["no-tax"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["paperwork-done-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["paperwork-done-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["paperwork-done-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["paperwork-done-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["paperwork-done"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["phone-hand-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["phone-hand-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["phone-hand-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["phone-hand-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["phone-hand"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["piggybank-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["piggybank-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["piggybank-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["piggybank-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["piggybank"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["renewable"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["sunset"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["super-health-check-stethoscope-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["super-health-check-stethoscope-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["super-health-check-stethoscope-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["super-health-check-stethoscope"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["support-person-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["support-person-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["support-person-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["support-person"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["toiletpaper-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["toiletpaper-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["toiletpaper-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["toiletpaper-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["toiletpaper"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["tool-kit"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["umbrella"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["wallet-cash-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["wallet-cash-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["wallet-cash-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["wallet-cash-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["wallet-cash"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["web-search"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["webinar-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["webinar-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["webinar-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["webinar"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["work-cart-green"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["work-cart-pine"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["work-cart-purple"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["work-cart-white"],
       },
       {
        text:'',
        group: 'Cbus, Line', 
        name: ["work-cart"],
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

// Force download image to folder
function forceDownload(link){
  var url = link.getAttribute("data-href");
  var fileName = link.getAttribute("download");
  // link.innerText = "Working...";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = fileName;
      // document.body.appendChild(tag);
      tag.click();
      // document.body.removeChild(tag);
      // link.innerText="Download Image";
  }
  xhr.send();
}