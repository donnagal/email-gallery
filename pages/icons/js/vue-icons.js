new Vue({
  el: "#items",
  created() {
    this.paginate_total = this.items.length / this.paginate;
  },
  data: {
    current: 1,
    items: [
      {
        group: "ms",
        text: "calculator, hand, push button",
        url: "calculator--blue-1.png",
      },
      {
        group: "ms",
        text: "calculator, hand, push button",
        url: "calculator--blue-2.png",
      },
      {
        group: "cbus",
        text: "calculator, hand, push button",
        url: "calculator--green.png",
      },
      {
        group: "cbus",
        text: "calculator, hand, push button",
        url: "calculator--grey.png",
      },
      {
        group: "cbus",
        text: "calculator, hand, push button",
        url: "calculator--pine.png",
      },
      {
        group: "ms",
        text: "calculator, hand, push button",
        url: "calculator--purple-3.png",
      },
      {
        group: "ms",
        text: "calculator, hand, push button",
        url: "calculator--purple-4.png",
      },
      {
        group: "ms",
        text: "calculator, hand, push button",
        url: "calculator--purple-leg.png",
      },
      {
        group: "cbus",
        text: "calculator, hand, push button",
        url: "calculator--purple.png",
      },
      {
        group: "cbus",
        text: "calculator, hand, push button",
        url: "calculator--white.png",
      },
      {
        group: "ms",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--blue-1.png",
      },
      {
        group: "ms",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--blue-2.png",
      },
      {
        group: "cbus",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--green.png",
      },
      {
        group: "cbus",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--grey.png",
      },
      {
        group: "cbus",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--pine.png",
      },
      {
        group: "ms",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--purple-3.png",
      },
      {
        group: "ms",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--purple-4.png",
      },
      {
        group: "ms",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--purple.png",
      },
      {
        group: "cbus",
        text: "Your super will continue to work for you in retirement, managed benefit",
        url: "calendar-tick-chart--white.png",
      },
      {
        group: "ms",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--blue-1.png",
      },
      {
        group: "ms",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--blue-2.png",
      },
      {
        group: "cbus",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--green.png",
      },
      {
        group: "cbus",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--grey.png",
      },
      {
        group: "cbus",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--pine.png",
      },
      {
        group: "ms",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--purple-3.png",
      },
      {
        group: "ms",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--purple-4.png",
      },
      {
        group: "ms",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--purple.png",
      },
      {
        group: "cbus",
        text: "Get a regular pay check in retirement, money benefit",
        url: "cash-in-hand--white.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance",
        url: "chart-up--blue-1.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance",
        url: "chart-up--blue-2.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance",
        url: "chart-up--green.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance",
        url: "chart-up--grey.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance",
        url: "chart-up--pine.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance",
        url: "chart-up--purple-3.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance",
        url: "chart-up--purple-4.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance",
        url: "chart-up--purple-leg.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance",
        url: "chart-up--purple.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance",
        url: "chart-up--white.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--blue-1.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--blue-2.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--green.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--grey.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--pine.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--purple-3.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--purple-4.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--purple-leg.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--purple.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance, strong returns",
        url: "chart-up-solid--white.png",
      },
      {
        group: "ms",
        text: "login online, Log in to Employer Portal",
        url: "click-button--blue-1.png",
      },
      {
        group: "ms",
        text: "login online, Log in to Employer Portal",
        url: "click-button--blue-2.png",
      },
      {
        group: "cbus",
        text: "login online, Log in to Employer Portal",
        url: "click-button--green.png",
      },
      {
        group: "cbus",
        text: "login online, Log in to Employer Portal",
        url: "click-button--grey.png",
      },
      {
        group: "cbus",
        text: "login online, Log in to Employer Portal",
        url: "click-button--pine.png",
      },
      {
        group: "ms",
        text: "login online, Log in to Employer Portal",
        url: "click-button--purple-3.png",
      },
      {
        group: "ms",
        text: "login online, Log in to Employer Portal",
        url: "click-button--purple-4.png",
      },
      {
        group: "ms",
        text: "login online, Log in to Employer Portal",
        url: "click-button--purple-leg.png",
      },
      {
        group: "cbus",
        text: "login online, Log in to Employer Portal",
        url: "click-button--purple.png",
      },
      {
        group: "cbus",
        text: "login online, Log in to Employer Portal",
        url: "click-button--white.png",
      },
      {
        group: "ms",
        text: "Submit online, Submit your payment",
        url: "click-button-action--blue-1.png",
      },
      {
        group: "ms",
        text: "Submit online, Submit your payment",
        url: "click-button-action--blue-2.png",
      },
      {
        group: "cbus",
        text: "Submit online, Submit your payment",
        url: "click-button-action--green.png",
      },
      {
        group: "cbus",
        text: "Submit online, Submit your payment",
        url: "click-button-action--grey.png",
      },
      {
        group: "cbus",
        text: "Submit online, Submit your payment",
        url: "click-button-action--pine.png",
      },
      {
        group: "ms",
        text: "Submit online, Submit your payment",
        url: "click-button-action--purple-3.png",
      },
      {
        group: "ms",
        text: "Submit online, Submit your payment",
        url: "click-button-action--purple-4.png",
      },
      {
        group: "ms",
        text: "Submit online, Submit your payment",
        url: "click-button-action--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Submit online, Submit your payment",
        url: "click-button-action--purple.png",
      },
      {
        group: "cbus",
        text: "Submit online, Submit your payment",
        url: "click-button-action--white.png",
      },
      {
        group: "ms",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--blue-1.png",
      },
      {
        group: "ms",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--blue-2.png",
      },
      {
        group: "cbus",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--green.png",
      },
      {
        group: "cbus",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--grey.png",
      },
      {
        group: "cbus",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--pine.png",
      },
      {
        group: "ms",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--purple-3.png",
      },
      {
        group: "ms",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--purple-4.png",
      },
      {
        group: "ms",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--purple-leg.png",
      },
      {
        group: "cbus",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--purple.png",
      },
      {
        group: "cbus",
        text: "coffee, save, savings, same price as a cup of coffee",
        url: "coffee-cup--white.png",
      },
      {
        group: "ms",
        text: "Target, managed benefit",
        url: "date-target--blue-1.png",
      },
      {
        group: "ms",
        text: "Target, managed benefit",
        url: "date-target--blue-2.png",
      },
      {
        group: "cbus",
        text: "Target, managed benefit",
        url: "date-target--green.png",
      },
      {
        group: "cbus",
        text: "Target, managed benefit",
        url: "date-target--grey.png",
      },
      {
        group: "cbus",
        text: "Target, managed benefit",
        url: "date-target--pine.png",
      },
      {
        group: "ms",
        text: "Target, managed benefit",
        url: "date-target--purple-3.png",
      },
      {
        group: "ms",
        text: "Target, managed benefit",
        url: "date-target--purple-4.png",
      },
      {
        group: "ms",
        text: "Target, managed benefit",
        url: "date-target--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Target, managed benefit",
        url: "date-target--purple.png",
      },
      {
        group: "cbus",
        text: "Target, managed benefit",
        url: "date-target--white.png",
      },
      { group: "ms", text: "factory, building", url: "factory--blue-1.png" },
      { group: "ms", text: "factory, building", url: "factory--blue-2.png" },
      { group: "cbus", text: "factory, building", url: "factory--green.png" },
      { group: "cbus", text: "factory, building", url: "factory--grey.png" },
      { group: "cbus", text: "factory, building", url: "factory--pine.png" },
      {
        group: "ms",
        text: "factory, building",
        url: "factory--purple-3.png",
      },
      {
        group: "ms",
        text: "factory, building",
        url: "factory--purple-4.png",
      },
      {
        group: "ms",
        text: "factory, building",
        url: "factory--purple-leg.png",
      },
      {
        group: "cbus",
        text: "factory, building",
        url: "factory--purple.png",
      },
      { group: "cbus", text: "factory, building", url: "factory--white.png" },
      {
        group: "ms",
        text: "first place, podium, winner, star",
        url: "first-place--blue-1.png",
      },
      {
        group: "ms",
        text: "first place, podium, winner, star",
        url: "first-place--blue-2.png",
      },
      {
        group: "cbus",
        text: "first place, podium, winner, star",
        url: "first-place--green.png",
      },
      {
        group: "cbus",
        text: "first place, podium, winner, star",
        url: "first-place--grey.png",
      },
      {
        group: "cbus",
        text: "first place, podium, winner, star",
        url: "first-place--pine.png",
      },
      {
        group: "ms",
        text: "first place, podium, winner, star",
        url: "first-place--purple-3.png",
      },
      {
        group: "ms",
        text: "first place, podium, winner, star",
        url: "first-place--purple-4.png",
      },
      {
        group: "ms",
        text: "first place, podium, winner, star",
        url: "first-place--purple-leg.png",
      },
      {
        group: "cbus",
        text: "first place, podium, winner, star",
        url: "first-place--purple.png",
      },
      {
        group: "cbus",
        text: "first place, podium, winner, star",
        url: "first-place--white.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--blue-1.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--blue-2.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--green.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--grey.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--pine.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--purple-3.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--purple-4.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--purple-leg.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--purple.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation, front counters",
        url: "front-counter--white.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--blue-1.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--blue-2.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--green.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--grey.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--pine.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--purple-3.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--purple-4.png",
      },
      {
        group: "ms",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--purple-leg.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--purple.png",
      },
      {
        group: "cbus",
        text: "customer, advisor, desk, consultation",
        url: "group-people-list--white.png",
      },
      {
        group: "ms",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--blue-1.png",
      },
      {
        group: "ms",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--blue-2.png",
      },
      {
        group: "cbus",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--green.png",
      },
      {
        group: "cbus",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--grey.png",
      },
      {
        group: "cbus",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--pine.png",
      },
      {
        group: "ms",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--purple-3.png",
      },
      {
        group: "ms",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--purple-4.png",
      },
      {
        group: "ms",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--purple-leg.png",
      },
      {
        group: "cbus",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--purple.png",
      },
      {
        group: "cbus",
        text: "access to super when needed, time saver, sis benefit",
        url: "hand-clock--white.png",
      },
      {
        group: "ms",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--blue-1.png",
      },
      {
        group: "ms",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--blue-2.png",
      },
      {
        group: "cbus",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--green.png",
      },
      {
        group: "cbus",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--grey.png",
      },
      {
        group: "cbus",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--pine.png",
      },
      {
        group: "ms",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--purple-3.png",
      },
      {
        group: "ms",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--purple-4.png",
      },
      {
        group: "ms",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--purple-leg.png",
      },
      {
        group: "cbus",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--purple.png",
      },
      {
        group: "cbus",
        text: "handshake, gesture, easy, partnership, work togther",
        url: "hand-shake--white.png",
      },
      {
        group: "ms",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--blue-1.png",
      },
      {
        group: "ms",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--blue-2.png",
      },
      {
        group: "cbus",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--green.png",
      },
      {
        group: "cbus",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--grey.png",
      },
      {
        group: "cbus",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--pine.png",
      },
      {
        group: "ms",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--purple-3.png",
      },
      {
        group: "ms",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--purple-4.png",
      },
      {
        group: "ms",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--purple-leg.png",
      },
      {
        group: "cbus",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--purple.png",
      },
      {
        group: "cbus",
        text: "hand, gesture, left, right, horizontal",
        url: "hand-swipe--white.png",
      },
      {
        group: "ms",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--blue-1.png",
      },
      {
        group: "ms",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--blue-2.png",
      },
      {
        group: "cbus",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--green.png",
      },
      {
        group: "cbus",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--grey.png",
      },
      {
        group: "cbus",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--pine.png",
      },
      {
        group: "ms",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--purple-3.png",
      },
      {
        group: "ms",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--purple-4.png",
      },
      {
        group: "ms",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--purple.png",
      },
      {
        group: "cbus",
        text: "Hardhat light, construction work job",
        url: "hardhat-light--white.png",
      },
      {
        group: "ms",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--blue-1.png",
      },
      {
        group: "ms",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--blue-2.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--green.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--grey.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--pine.png",
      },
      {
        group: "ms",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--purple-3.png",
      },
      {
        group: "ms",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--purple-4.png",
      },
      {
        group: "ms",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--purple-leg.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--purple.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, webinar, event, education sessions",
        url: "laptop--white.png",
      },
      {
        group: "ms",
        text: "laptop, register online, enter details",
        url: "laptop-lines--blue-1.png",
      },
      {
        group: "ms",
        text: "laptop, register online, enter details",
        url: "laptop-lines--blue-2.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, enter details",
        url: "laptop-lines--green.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, enter details",
        url: "laptop-lines--grey.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, enter details",
        url: "laptop-lines--pine.png",
      },
      {
        group: "ms",
        text: "laptop, register online, enter details",
        url: "laptop-lines--purple-3.png",
      },
      {
        group: "ms",
        text: "laptop, register online, enter details",
        url: "laptop-lines--purple-4.png",
      },
      {
        group: "ms",
        text: "laptop, register online, enter details",
        url: "laptop-lines--purple-leg.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, enter details",
        url: "laptop-lines--purple.png",
      },
      {
        group: "cbus",
        text: "laptop, register online, enter details",
        url: "laptop-lines--white.png",
      },
      {
        group: "ms",
        text: "document, checklist, tick, approve",
        url: "list-done--blue-1.png",
      },
      {
        group: "ms",
        text: "document, checklist, tick, approve",
        url: "list-done--blue-2.png",
      },
      {
        group: "cbus",
        text: "document, checklist, tick, approve",
        url: "list-done--green.png",
      },
      {
        group: "cbus",
        text: "document, checklist, tick, approve",
        url: "list-done--grey.png",
      },
      {
        group: "cbus",
        text: "document, checklist, tick, approve",
        url: "list-done--pine.png",
      },
      {
        group: "ms",
        text: "document, checklist, tick, approve",
        url: "list-done--purple-3.png",
      },
      {
        group: "ms",
        text: "document, checklist, tick, approve",
        url: "list-done--purple-4.png",
      },
      {
        group: "ms",
        text: "document, checklist, tick, approve",
        url: "list-done--purple-leg.png",
      },
      {
        group: "cbus",
        text: "document, checklist, tick, approve",
        url: "list-done--purple.png",
      },
      {
        group: "cbus",
        text: "document, checklist, tick, approve",
        url: "list-done--white.png",
      },
      {
        group: "ms",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--blue-1.png",
      },
      {
        group: "ms",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--blue-2.png",
      },
      {
        group: "cbus",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--green.png",
      },
      {
        group: "cbus",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--grey.png",
      },
      {
        group: "cbus",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--pine.png",
      },
      {
        group: "ms",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--purple-3.png",
      },
      {
        group: "ms",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--purple-4.png",
      },
      {
        group: "ms",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--purple-leg.png",
      },
      {
        group: "cbus",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--purple.png",
      },
      {
        group: "cbus",
        text: "checklist, checkmark, tick, list",
        url: "list-tick--white.png",
      },
      {
        group: "ms",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--blue-1.png",
      },
      {
        group: "ms",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--blue-2.png",
      },
      {
        group: "cbus",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--green.png",
      },
      {
        group: "cbus",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--grey.png",
      },
      {
        group: "cbus",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--pine.png",
      },
      {
        group: "ms",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--purple-3.png",
      },
      {
        group: "ms",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--purple-4.png",
      },
      {
        group: "ms",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--purple-leg.png",
      },
      {
        group: "cbus",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--purple.png",
      },
      {
        group: "cbus",
        text: "movie clapperboard, performance, media work job",
        url: "media-snapboard--white.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance decrease",
        url: "money-down--blue-1.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance decrease",
        url: "money-down--blue-2.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance decrease",
        url: "money-down--green.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance decrease",
        url: "money-down--grey.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance decrease",
        url: "money-down--pine.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance decrease",
        url: "money-down--purple-3.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance decrease",
        url: "money-down--purple-4.png",
      },
      {
        group: "ms",
        text: "track money, investment updates, performance decrease",
        url: "money-down--purple-leg.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance decrease",
        url: "money-down--purple.png",
      },
      {
        group: "cbus",
        text: "track money, investment updates, performance decrease",
        url: "money-down--white.png",
      },
      {
        group: "ms",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--blue-1.png",
      },
      {
        group: "ms",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--blue-2.png",
      },
      {
        group: "cbus",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--green.png",
      },
      {
        group: "cbus",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--grey.png",
      },
      {
        group: "cbus",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--pine.png",
      },
      {
        group: "ms",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--purple-3.png",
      },
      {
        group: "ms",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--purple-4.png",
      },
      {
        group: "ms",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--purple-leg.png",
      },
      {
        group: "cbus",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--purple.png",
      },
      {
        group: "cbus",
        text: "lightbulb, dollar sign, idea, money smart",
        url: "money-globe--white.png",
      },
      {
        group: "ms",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--blue-1.png",
      },
      {
        group: "ms",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--blue-2.png",
      },
      {
        group: "cbus",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--green.png",
      },
      {
        group: "cbus",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--grey.png",
      },
      {
        group: "cbus",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--pine.png",
      },
      {
        group: "ms",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--purple-3.png",
      },
      {
        group: "ms",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--purple-4.png",
      },
      {
        group: "ms",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--purple-leg.png",
      },
      {
        group: "cbus",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--purple.png",
      },
      {
        group: "cbus",
        text: "document, statement, tick, money",
        url: "money-paperwork-done--white.png",
      },
      {
        group: "ms",
        text: "money, plant, growth",
        url: "money-plant--blue-1.png",
      },
      {
        group: "ms",
        text: "money, plant, growth",
        url: "money-plant--blue-2.png",
      },
      {
        group: "cbus",
        text: "money, plant, growth",
        url: "money-plant--green.png",
      },
      {
        group: "cbus",
        text: "money, plant, growth",
        url: "money-plant--grey.png",
      },
      {
        group: "cbus",
        text: "money, plant, growth",
        url: "money-plant--pine.png",
      },
      {
        group: "ms",
        text: "money, plant, growth",
        url: "money-plant--purple-3.png",
      },
      {
        group: "ms",
        text: "money, plant, growth",
        url: "money-plant--purple-4.png",
      },
      {
        group: "ms",
        text: "money, plant, growth",
        url: "money-plant--purple-leg.png",
      },
      {
        group: "cbus",
        text: "money, plant, growth",
        url: "money-plant--purple.png",
      },
      {
        group: "cbus",
        text: "money, plant, growth",
        url: "money-plant--white.png",
      },
      { group: "ms", text: "no tax benefit", url: "no-tax--blue-1.png" },
      { group: "ms", text: "no tax benefit", url: "no-tax--blue-2.png" },
      { group: "cbus", text: "no tax benefit", url: "no-tax--green.png" },
      { group: "cbus", text: "no tax benefit", url: "no-tax--grey.png" },
      { group: "cbus", text: "no tax benefit", url: "no-tax--pine.png" },
      { group: "ms", text: "no tax benefit", url: "no-tax--purple-3.png" },
      { group: "ms", text: "no tax benefit", url: "no-tax--purple-4.png" },
      { group: "ms", text: "no tax benefit", url: "no-tax--purple-leg.png" },
      { group: "cbus", text: "no tax benefit", url: "no-tax--purple.png" },
      { group: "cbus", text: "no tax benefit", url: "no-tax--white.png" },
      {
        group: "ms",
        text: "document, tick, approve document",
        url: "paperwork-done--blue-1.png",
      },
      {
        group: "ms",
        text: "document, tick, approve document",
        url: "paperwork-done--blue-2.png",
      },
      {
        group: "cbus",
        text: "document, tick, approve document",
        url: "paperwork-done--green.png",
      },
      {
        group: "cbus",
        text: "document, tick, approve document",
        url: "paperwork-done--grey.png",
      },
      {
        group: "cbus",
        text: "document, tick, approve document",
        url: "paperwork-done--pine.png",
      },
      {
        group: "ms",
        text: "document, tick, approve document",
        url: "paperwork-done--purple-3.png",
      },
      {
        group: "ms",
        text: "document, tick, approve document",
        url: "paperwork-done--purple-4.png",
      },
      {
        group: "ms",
        text: "document, tick, approve document",
        url: "paperwork-done--purple-leg.png",
      },
      {
        group: "cbus",
        text: "document, tick, approve document",
        url: "paperwork-done--purple.png",
      },
      {
        group: "cbus",
        text: "document, tick, approve document",
        url: "paperwork-done--white.png",
      },
      {
        group: "ms",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--blue-1.png",
      },
      {
        group: "ms",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--blue-2.png",
      },
      {
        group: "cbus",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--green.png",
      },
      {
        group: "cbus",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--grey.png",
      },
      {
        group: "cbus",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--pine.png",
      },
      {
        group: "ms",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--purple-3.png",
      },
      {
        group: "ms",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--purple-4.png",
      },
      {
        group: "ms",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--purple-leg.png",
      },
      {
        group: "cbus",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--purple.png",
      },
      {
        group: "cbus",
        text: "Call, Phone, App, Login keep on track",
        url: "phone-hand--white.png",
      },
      {
        group: "ms",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--blue-1.png",
      },
      {
        group: "ms",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--blue-2.png",
      },
      {
        group: "cbus",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--green.png",
      },
      {
        group: "cbus",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--grey.png",
      },
      {
        group: "cbus",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--pine.png",
      },
      {
        group: "ms",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--purple-3.png",
      },
      {
        group: "ms",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--purple-4.png",
      },
      {
        group: "ms",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--purple-leg.png",
      },
      {
        group: "cbus",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--purple.png",
      },
      {
        group: "cbus",
        text: "pig, piggybank, coins, savings",
        url: "piggybank--white.png",
      },
      {
        group: "ms",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--blue-1.png",
      },
      {
        group: "ms",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--blue-2.png",
      },
      {
        group: "cbus",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--green.png",
      },
      {
        group: "cbus",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--grey.png",
      },
      {
        group: "cbus",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--pine.png",
      },
      {
        group: "ms",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--purple-3.png",
      },
      {
        group: "ms",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--purple-4.png",
      },
      {
        group: "ms",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--purple-leg.png",
      },
      {
        group: "cbus",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--purple.png",
      },
      {
        group: "cbus",
        text: "leaf, bolt, cycle, eco, environment friendly",
        url: "renewable--white.png",
      },
      {
        group: "ms",
        text: "sunset, landscape, mountains",
        url: "sunset--blue-1.png",
      },
      {
        group: "ms",
        text: "sunset, landscape, mountains",
        url: "sunset--blue-2.png",
      },
      {
        group: "cbus",
        text: "sunset, landscape, mountains",
        url: "sunset--green.png",
      },
      {
        group: "cbus",
        text: "sunset, landscape, mountains",
        url: "sunset--grey.png",
      },
      {
        group: "cbus",
        text: "sunset, landscape, mountains",
        url: "sunset--pine.png",
      },
      {
        group: "ms",
        text: "sunset, landscape, mountains",
        url: "sunset--purple-3.png",
      },
      {
        group: "ms",
        text: "sunset, landscape, mountains",
        url: "sunset--purple-4.png",
      },
      {
        group: "ms",
        text: "sunset, landscape, mountains",
        url: "sunset--purple-leg.png",
      },
      {
        group: "cbus",
        text: "sunset, landscape, mountains",
        url: "sunset--purple.png",
      },
      {
        group: "cbus",
        text: "sunset, landscape, mountains",
        url: "sunset--white.png",
      },
      {
        group: "ms",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--blue-1.png",
      },
      {
        group: "ms",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--blue-2.png",
      },
      {
        group: "cbus",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--green.png",
      },
      {
        group: "cbus",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--grey.png",
      },
      {
        group: "cbus",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--pine.png",
      },
      {
        group: "ms",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--purple-3.png",
      },
      {
        group: "ms",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--purple-4.png",
      },
      {
        group: "ms",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--purple-leg.png",
      },
      {
        group: "cbus",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--purple.png",
      },
      {
        group: "cbus",
        text: "stethoscope, money, health, financial health",
        url: "super-health-check-stethoscope--white.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person---pine.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person--blue-1.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person--blue-2.png",
      },
      {
        group: "cbus",
        text: "support, help, insurance and benefits",
        url: "support-person--green.png",
      },
      {
        group: "cbus",
        text: "support, help, insurance and benefits",
        url: "support-person--grey.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person--purple-3.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person--purple-4.png",
      },
      {
        group: "ms",
        text: "support, help, insurance and benefits",
        url: "support-person--purple-leg.png",
      },
      {
        group: "cbus",
        text: "support, help, insurance and benefits",
        url: "support-person--purple.png",
      },
      {
        group: "cbus",
        text: "support, help, insurance and benefits",
        url: "support-person--white.png",
      },
      {
        group: "ms",
        text: "toilet paper, wasting money",
        url: "toiletpaper--blue-1.png",
      },
      {
        group: "ms",
        text: "toilet paper, wasting money",
        url: "toiletpaper--blue-2.png",
      },
      {
        group: "cbus",
        text: "toilet paper, wasting money",
        url: "toiletpaper--green.png",
      },
      {
        group: "cbus",
        text: "toilet paper, wasting money",
        url: "toiletpaper--grey.png",
      },
      {
        group: "cbus",
        text: "toilet paper, wasting money",
        url: "toiletpaper--pine.png",
      },
      {
        group: "ms",
        text: "toilet paper, wasting money",
        url: "toiletpaper--purple-3.png",
      },
      {
        group: "ms",
        text: "toilet paper, wasting money",
        url: "toiletpaper--purple-4.png",
      },
      {
        group: "ms",
        text: "toilet paper, wasting money",
        url: "toiletpaper--purple-leg.png",
      },
      {
        group: "cbus",
        text: "toilet paper, wasting money",
        url: "toiletpaper--purple.png",
      },
      {
        group: "cbus",
        text: "toilet paper, wasting money",
        url: "toiletpaper--white.png",
      },
      { group: "ms", text: "tick, coin, cycle", url: "transfer--blue-1.png" },
      { group: "ms", text: "tick, coin, cycle", url: "transfer--blue-2.png" },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--green.png",
      },
      { group: "cbus", text: "tick, coin, cycle", url: "transfer--grey.png" },
      { group: "cbus", text: "tick, coin, cycle", url: "transfer--pine.png" },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-3.png",
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-4.png",
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-leg.png",
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--purple.png",
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--white.png",
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella--blue-1.png",
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella--blue-2.png",
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella--green.png",
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella--grey.png",
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella--pine.png",
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella--purple-3.png",
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella--purple-4.png",
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella--purple-leg.png",
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella--purple.png",
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella--white.png",
      },
      {
        group: "ms",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--blue-1.png",
      },
      {
        group: "ms",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--blue-2.png",
      },
      {
        group: "cbus",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--green.png",
      },
      {
        group: "cbus",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--grey.png",
      },
      {
        group: "cbus",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--pine.png",
      },
      {
        group: "ms",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--purple-3.png",
      },
      {
        group: "ms",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--purple-4.png",
      },
      {
        group: "ms",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--purple-leg.png",
      },
      {
        group: "cbus",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--purple.png",
      },
      {
        group: "cbus",
        text: "cash, wallet, cash sticking out of wallet",
        url: "wallet-cash--white.png",
      },
      {
        group: "ms",
        text: "mouse, form, field, input",
        url: "web-search--blue-1.png",
      },
      {
        group: "ms",
        text: "mouse, form, field, input",
        url: "web-search--blue-2.png",
      },
      {
        group: "cbus",
        text: "mouse, form, field, input",
        url: "web-search--green.png",
      },
      {
        group: "cbus",
        text: "mouse, form, field, input",
        url: "web-search--grey.png",
      },
      {
        group: "cbus",
        text: "mouse, form, field, input",
        url: "web-search--pine.png",
      },
      {
        group: "ms",
        text: "mouse, form, field, input",
        url: "web-search--purple-3.png",
      },
      {
        group: "ms",
        text: "mouse, form, field, input",
        url: "web-search--purple-4.png",
      },
      {
        group: "ms",
        text: "mouse, form, field, input",
        url: "web-search--purple-leg.png",
      },
      {
        group: "cbus",
        text: "mouse, form, field, input",
        url: "web-search--purple.png",
      },
      {
        group: "cbus",
        text: "mouse, form, field, input",
        url: "web-search--white.png",
      },
      {
        group: "ms",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--blue-1.png",
      },
      {
        group: "ms",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--blue-2.png",
      },
      {
        group: "cbus",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--green.png",
      },
      {
        group: "cbus",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--grey.png",
      },
      {
        group: "cbus",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--pine.png",
      },
      {
        group: "ms",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--purple-3.png",
      },
      {
        group: "ms",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--purple-4.png",
      },
      {
        group: "ms",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--purple-leg.png",
      },
      {
        group: "cbus",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--purple.png",
      },
      {
        group: "cbus",
        text: "webinar, event, seminar, education sessions",
        url: "webinar--white.png",
      },
      {
        group: "ms",
        text: "work cart, moving resources",
        url: "work-cart--blue-1.png",
      },
      {
        group: "ms",
        text: "work cart, moving resources",
        url: "work-cart--blue-2.png",
      },
      {
        group: "cbus",
        text: "work cart, moving resources",
        url: "work-cart--green.png",
      },
      {
        group: "cbus",
        text: "work cart, moving resources",
        url: "work-cart--grey.png",
      },
      {
        group: "cbus",
        text: "work cart, moving resources",
        url: "work-cart--pine.png",
      },
      {
        group: "ms",
        text: "work cart, moving resources",
        url: "work-cart--purple-3.png",
      },
      {
        group: "ms",
        text: "work cart, moving resources",
        url: "work-cart--purple-4.png",
      },
      {
        group: "ms",
        text: "work cart, moving resources",
        url: "work-cart--purple-leg.png",
      },
      {
        group: "cbus",
        text: "work cart, moving resources",
        url: "work-cart--purple.png",
      },
      {
        group: "cbus",
        text: "work cart, moving resources",
        url: "work-cart--white.png",
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--blue-1.png"
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--blue-2.png"
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--green.png"
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--grey.png"
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--pine.png"
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-3.png"
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-4.png"
      },
      {
        group: "ms",
        text: "tick, coin, cycle",
        url: "transfer--purple-leg.png"
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--purple.png"
      },
      {
        group: "cbus",
        text: "tick, coin, cycle",
        url: "transfer--white.png"
      },
      {
        group: "ms",
        text: "money, streams, account, cycle",
        url: "multi-transfer--blue-1.png"
      },
      {
        group: "ms",
        text: "money, streams, account, cycle",
        url: "multi-transfer--blue-2.png"
      },
      {
        group: "cbus",
        text: "money, streams, account, cycle",
        url: "multi-transfer--green.png"
      },
      {
        group: "cbus",
        text: "money, streams, account, cycle",
        url: "multi-transfer--grey.png"
      },
      {
        group: "cbus",
        text: "money, streams, account, cycle",
        url: "multi-transfer--pine.png"
      },
      {
        group: "ms",
        text: "money, streams, account, cycle",
        url: "multi-transfer--purple-3.png"
      },
      {
        group: "ms",
        text: "money, streams, account, cycle",
        url: "multi-transfer--purple-4.png"
      },
      {
        group: "ms",
        text: "money, streams, account, cycle",
        url: "multi-transfer--purple-leg.png"
      },
      {
        group: "cbus",
        text: "money, streams, account, cycle",
        url: "multi-transfer--purple.png"
      },
      {
        group: "ms",
        text: "Energy, transmission tower",
        url: "power-tower--blue-1.png"
      },
      {
        group: "ms",
        text: "Energy, transmission tower",
        url: "power-tower--blue-2.png"
      },
      {
        group: "cbus",
        text: "Energy, transmission tower",
        url: "power-tower--green.png"
      },
      {
        group: "cbus",
        text: "Energy, transmission tower",
        url: "power-tower--grey.png"
      },
      {
        group: "cbus",
        text: "Energy, transmission tower",
        url: "power-tower--pine.png"
      },
      {
        group: "ms",
        text: "Energy, transmission tower",
        url: "power-tower--purple-3.png"
      },
      {
        group: "ms",
        text: "Energy, transmission tower",
        url: "power-tower--purple-4.png"
      },
      {
        group: "ms",
        text: "Energy, transmission tower",
        url: "power-tower--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Energy, transmission tower",
        url: "power-tower--purple.png"
      },
      {
        group: "ms",
        text: "Energy, wind, power",
        url: "wind-energy--blue-1.png"
      },
      {
        group: "ms",
        text: "Energy, wind, power",
        url: "wind-energy--blue-2.png"
      },
      {
        group: "cbus",
        text: "Energy, wind, power",
        url: "wind-energy--green.png"
      },
      {
        group: "cbus",
        text: "Energy, wind, power",
        url: "wind-energy--grey.png"
      },
      {
        group: "cbus",
        text: "Energy, wind, power",
        url: "wind-energy--pine.png"
      },
      {
        group: "ms",
        text: "Energy, wind, power",
        url: "wind-energy--purple-3.png"
      },
      {
        group: "ms",
        text: "Energy, wind, power",
        url: "wind-energy--purple-4.png"
      },
      {
        group: "ms",
        text: "Energy, wind, power",
        url: "wind-energy--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Energy, wind, power",
        url: "wind-energy--purple.png"
      },
      {
        group: "ms",
        text: "Energy, sun, eco, power",
        url: "solar-power--blue-1.png"
      },
      {
        group: "ms",
        text: "Energy, sun, eco, power",
        url: "solar-power--blue-2.png"
      },
      {
        group: "cbus",
        text: "Energy, sun, eco, power",
        url: "solar-power--green.png"
      },
      {
        group: "cbus",
        text: "Energy, sun, eco, power",
        url: "solar-power--grey.png"
      },
      {
        group: "cbus",
        text: "Energy, sun, eco, power",
        url: "solar-power--pine.png"
      },
      {
        group: "ms",
        text: "Energy, sun, eco, power",
        url: "solar-power--purple-3.png"
      },
      {
        group: "ms",
        text: "Energy, sun, eco, power",
        url: "solar-power--purple-4.png"
      },
      {
        group: "ms",
        text: "Energy, sun, eco, power",
        url: "solar-power--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Energy, sun, eco, power",
        url: "solar-power--purple.png"
      },
      {
        group: "ms",
        text: "power battery, storage",
        url: "power-house--blue-1.png"
      },
      {
        group: "ms",
        text: "power battery, storage",
        url: "power-house--blue-2.png"
      },
      {
        group: "cbus",
        text: "power battery, storage",
        url: "power-house--green.png"
      },
      {
        group: "cbus",
        text: "power battery, storage",
        url: "power-house--grey.png"
      },
      {
        group: "cbus",
        text: "power battery, storage",
        url: "power-house--pine.png"
      },
      {
        group: "ms",
        text: "power battery, storage",
        url: "power-house--purple-3.png"
      },
      {
        group: "ms",
        text: "power battery, storage",
        url: "power-house--purple-4.png"
      },
      {
        group: "ms",
        text: "power battery, storage",
        url: "power-house--purple-leg.png"
      },
      {
        group: "cbus",
        text: "power battery, storage",
        url: "power-house--purple.png"
      },
      {
        group: "ms",
        text: "People, Name tag",
        url: "profile-id--blue-1.png"
      },
      {
        group: "ms",
        text: "People, Name tag",
        url: "profile-id--blue-2.png"
      },
      {
        group: "cbus",
        text: "People, Name tag",
        url: "profile-id--green.png"
      },
      {
        group: "cbus",
        text: "People, Name tag",
        url: "profile-id--grey.png"
      },
      {
        group: "cbus",
        text: "People, Name tag",
        url: "profile-id--pine.png"
      },
      {
        group: "ms",
        text: "People, Name tag",
        url: "profile-id--purple-3.png"
      },
      {
        group: "ms",
        text: "People, Name tag",
        url: "profile-id--purple-4.png"
      },
      {
        group: "ms",
        text: "People, Name tag",
        url: "profile-id--purple-leg.png"
      },
      {
        group: "cbus",
        text: "People, Name tag",
        url: "profile-id--purple.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "hydro-energy--blue-1.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "hydro-energy--blue-2.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "hydro-energy--green.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "hydro-energy--grey.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "hydro-energy--pine.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "hydro-energy--purple-3.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "hydro-energy--purple-4.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "hydro-energy--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "hydro-energy--purple.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "power-distribution--blue-1.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "power-distribution--blue-2.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "power-distribution--green.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "power-distribution--grey.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "power-distribution--pine.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "power-distribution--purple-3.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "power-distribution--purple-4.png"
      },
      {
        group: "ms",
        text: "Energy, power",
        url: "power-distribution--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Energy, power",
        url: "power-distribution--purple.png"
      },
      {
        group: "cbus",
        text: "Buildings, Government house",
        url: "gov-house--blue-1.png"
      },
      {
        group: "cbus",
        text: "Buildings, Government house",
        url: "gov-house--blue-2.png"
      },
      {
        group: "ms",
        text: "Buildings, Government house",
        url: "gov-house--green.png"
      },
      {
        group: "ms",
        text: "Buildings, Government house",
        url: "gov-house--grey.png"
      },
      {
        group: "ms",
        text: "Buildings, Government house",
        url: "gov-house--pine.png"
      },
      {
        group: "cbus",
        text: "Buildings, Government house",
        url: "gov-house--purple-3.png"
      },
      {
        group: "cbus",
        text: "Buildings, Government house",
        url: "gov-house--purple-4.png"
      },
      {
        group: "cbus",
        text: "Buildings, Government house",
        url: "gov-house--purple-leg.png"
      },
      {
        group: "ms",
        text: "Buildings, Government house",
        url: "gov-house--purple.png"
      },
      {
        group: "ms",
        text: "Buildings development",
        url: "building-dev--blue-1.png"
      },
      {
        group: "ms",
        text: "Buildings development",
        url: "building-dev--blue-2.png"
      },
      {
        group: "cbus",
        text: "Buildings development",
        url: "building-dev--green.png"
      },
      {
        group: "cbus",
        text: "Buildings development",
        url: "building-dev--grey.png"
      },
      {
        group: "cbus",
        text: "Buildings development",
        url: "building-dev--pine.png"
      },
      {
        group: "ms",
        text: "Buildings development",
        url: "building-dev--purple-3.png"
      },
      {
        group: "ms",
        text: "Buildings development",
        url: "building-dev--purple-4.png"
      },
      {
        group: "ms",
        text: "Buildings development",
        url: "building-dev--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Buildings development",
        url: "building-dev--purple.png"
      },
      {
        group: "ms",
        text: "Buildings, hard hat",
        url: "construction-site--blue-1.png"
      },
      {
        group: "ms",
        text: "Buildings, hard hat",
        url: "construction-site--blue-2.png"
      },
      {
        group: "cbus",
        text: "Buildings, hard hat",
        url: "construction-site--green.png"
      },
      {
        group: "cbus",
        text: "Buildings, hard hat",
        url: "construction-site--grey.png"
      },
      {
        group: "cbus",
        text: "Buildings, hard hat",
        url: "construction-site--pine.png"
      },
      {
        group: "ms",
        text: "Buildings, hard hat",
        url: "construction-site--purple-3.png"
      },
      {
        group: "ms",
        text: "Buildings, hard hat",
        url: "construction-site--purple-4.png"
      },
      {
        group: "ms",
        text: "Buildings, hard hat",
        url: "construction-site--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Buildings, hard hat",
        url: "construction-site--purple.png"
      },
      {
        group: "ms",
        text: "Buildings",
        url: "construction-buildings--blue-1.png"
      },
      {
        group: "ms",
        text: "Buildings",
        url: "construction-buildings--blue-2.png"
      },
      {
        group: "cbus",
        text: "Buildings",
        url: "construction-buildings--green.png"
      },
      {
        group: "cbus",
        text: "Buildings",
        url: "construction-buildings--grey.png"
      },
      {
        group: "cbus",
        text: "Buildings",
        url: "construction-buildings--pine.png"
      },
      {
        group: "ms",
        text: "Buildings",
        url: "construction-buildings--purple-3.png"
      },
      {
        group: "ms",
        text: "Buildings",
        url: "construction-buildings--purple-4.png"
      },
      {
        group: "ms",
        text: "Buildings",
        url: "construction-buildings--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Buildings",
        url: "construction-buildings--purple.png"
      },
      {
        group: "ms",
        text: "Digital chat bot",
        url: "chat-bot-1--blue-1.png"
      },
      {
        group: "ms",
        text: "Digital chat bot",
        url: "chat-bot-1--blue-2.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot",
        url: "chat-bot-1--green.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot",
        url: "chat-bot-1--grey.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot",
        url: "chat-bot-1--pine.png"
      },
      {
        group: "ms",
        text: "Digital chat bot",
        url: "chat-bot-1--purple-3.png"
      },
      {
        group: "ms",
        text: "Digital chat bot",
        url: "chat-bot-1--purple-4.png"
      },
      {
        group: "ms",
        text: "Digital chat bot",
        url: "chat-bot-1--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot",
        url: "chat-bot-1--purple.png"
      },
      {
        group: "ms",
        text: "Digital mobile in hand",
        url: "mobile-access--blue-1.png"
      },
      {
        group: "ms",
        text: "Digital mobile in hand",
        url: "mobile-access--blue-2.png"
      },
      {
        group: "cbus",
        text: "Digital mobile in hand",
        url: "mobile-access--green.png"
      },
      {
        group: "cbus",
        text: "Digital mobile in hand",
        url: "mobile-access--grey.png"
      },
      {
        group: "cbus",
        text: "Digital mobile in hand",
        url: "mobile-access--pine.png"
      },
      {
        group: "ms",
        text: "Digital mobile in hand",
        url: "mobile-access--purple-3.png"
      },
      {
        group: "ms",
        text: "Digital mobile in hand",
        url: "mobile-access--purple-4.png"
      },
      {
        group: "ms",
        text: "Digital mobile in hand",
        url: "mobile-access--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Digital mobile in hand",
        url: "mobile-access--purple.png"
      },
      {
        group: "ms",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--blue-1.png"
      },
      {
        group: "ms",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--blue-2.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--green.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--grey.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--pine.png"
      },
      {
        group: "ms",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--purple-3.png"
      },
      {
        group: "ms",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--purple-4.png"
      },
      {
        group: "ms",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--purple-leg.png"
      },
      {
        group: "cbus",
        text: "Digital chat bot, mobile in hand",
        url: "mobile-chat--purple.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-rain--blue-1.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-rain--blue-2.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-rain--green.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-rain--grey.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-rain--pine.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-rain--purple-3.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-rain--purple-4.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-rain--purple-leg.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-rain--purple.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-tick--blue-1.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-tick--blue-2.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-tick--green.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-tick--grey.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-tick--pine.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-tick--purple-3.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-tick--purple-4.png"
      },
      {
        group: "ms",
        text: "umbrella, insurance",
        url: "umbrella-tick--purple-leg.png"
      },
      {
        group: "cbus",
        text: "umbrella, insurance",
        url: "umbrella-tick--purple.png"
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
