$(function () {
  let visibilityIds = []; //must be an array, could have only one element
  for (let i = 0; i < 100; i++) {
    const str = `#counters_${i}`;
    visibilityIds.push(str);
  }

  let counterClass = ".counter";
  let defaultSpeed = 3000; //default value

  // END CONFIG

  //init if it becomes visible by scrolling
  $(window).on("scroll", function () {
    getVisibilityStatus();
  });

  //init if it's visible by page loading
  getVisibilityStatus();

  function getVisibilityStatus() {
    elValFromTop = [];
    var windowHeight = $(window).height(),
      windowScrollValFromTop = $(this).scrollTop();

    visibilityIds.forEach(function (item, index) {
      //Call each class
      try {
        //avoid error if class not exist
        elValFromTop[index] = Math.ceil($(item).offset().top);
      } catch (err) {
        return;
      }
      // if the sum of the window height and scroll distance from the top is greater than the target element's distance from the top,
      //it should be in view and the event should fire, otherwise reverse any previously applied methods
      if (windowHeight + windowScrollValFromTop > elValFromTop[index]) {
        counter_init(item);
      }
    });
  }

  function counter_init(groupId) {
    let num,
      speed,
      direction,
      index = 0;
    $(counterClass).each(function () {
      num = $(this).attr("data-TargetNum");
      speed = $(this).attr("data-Speed");
      direction = $(this).attr("data-Direction");
      easing = $(this).attr("data-Easing");
      if (speed == undefined) speed = defaultSpeed;
      $(this).addClass("c_" + index); //add a class to recognize each counter
      doCount(num, index, speed, groupId, direction, easing);
      index++;
    });
  }

  function doCount(num, index, speed, groupClass, direction, easing) {
    let className = groupClass + " " + counterClass + "." + "c_" + index;
    if (easing == undefined) easing = "swing";
    $(className).animate(
      {
        num,
      },
      {
        duration: +speed,
        easing: easing,
        step: function (now) {
          if (direction == "reverse") {
            $(this).text(num - Math.floor(now));
          } else {
            $(this).text(Math.floor(now));
          }
        },
        complete: doCount,
      }
    );
  }
});


  $(document).ready(function () {
    // Toggle main menu on click
    $('.menu-nav > .dropdown > button').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const $mainMenu = $(this).siblings('.dropdown-menu');
      $('.menu-nav .dropdown-menu').not($mainMenu).addClass('hidden'); // Hide others
      $mainMenu.toggleClass('hidden');
    });

    // Show/hide nested submenus on hover
    $('.menu-nav .dropdown-menu > li').hover(
      function () {
        $(this).children('.dropdown-menu').removeClass('hidden');
      },
      function () {
        $(this).children('.dropdown-menu').addClass('hidden');
      }
    );

    // Hide all dropdowns when clicking outside
    $(document).on('click', function () {
      $('.menu-nav .dropdown-menu').addClass('hidden');
    });
  });



  