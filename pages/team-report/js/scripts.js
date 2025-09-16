$(function () {
  let visibilityIds = [];
  for (let i = 0; i < 100; i++) {
    visibilityIds.push(`#counters_${i}`);
  }

  let counterClass = ".counter";
  let defaultSpeed = 3000;

  // Helper: check if element is in viewport
  function isInViewport($el) {
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + $(window).height();
    const elTop = $el.offset().top;
    const elBottom = elTop + $el.outerHeight();
    return elBottom >= windowTop && elTop <= windowBottom;
  }

  // Reset and re-run counters for groupId
  function counter_init(groupId) {
    const $group = $(groupId);
    if (!$group.length || $group.data('counted')) return;

    $group.data('counted', true); // only run once

    // Reset values
    $group.find(counterClass).each(function () {
      $(this)
        .stop(true, true)
        .text('0')
        .removeClass(function (i, className) {
          return (className.match(/(^|\s)c_\d+/g) || []).join(' ');
        });
    });

    let index = 0;
    $group.find(counterClass).each(function () {
      let num = $(this).attr("data-TargetNum"),
        speed = $(this).attr("data-Speed") || defaultSpeed,
        direction = $(this).attr("data-Direction"),
        easing = $(this).attr("data-Easing") || "swing";

      $(this).addClass("c_" + index);
      doCount(num, index, speed, groupId, direction, easing);
      index++;
    });
  }

  function doCount(num, index, speed, groupClass, direction, easing) {
    let $el = $(groupClass).find(counterClass + ".c_" + index);
    $el.animate(
      { num },
      {
        duration: +speed,
        easing,
        step: function (now) {
          if (direction === "reverse") {
            $(this).text(num - Math.floor(now));
          } else {
            $(this).text(Math.floor(now));
          }
        },
        complete: function () {
          if (direction === "reverse") {
            $(this).text(0);
          } else {
            $(this).text(num);
          }
        },
      }
    );
  }

  // Animate .count-up from CSV data
  function animateCountUp($el) {
    if ($el.data('counted')) return;
    $el.data('counted', true);

    const target = parseInt($el.text().replace(/,/g, ''), 10);
    if (isNaN(target) || target <= 0) {
      $el.text(target || 0);
      return;
    }

    $({ countNum: 0 }).animate(
      { countNum: target },
      {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $el.text(Math.floor(now).toLocaleString());
        },
        complete: function () {
          $el.text(target.toLocaleString());
        }
      }
    );
  }

  // Parse CSV text into key/value object
  function parseCSV(text) {
    const lines = $.trim(text).split('\n');
    let headers = lines[0].split('\t');
    if (headers.length === 1) headers = lines[0].split(',');
    let values = lines[1].split('\t');
    if (values.length === 1) values = lines[1].split(',');

    const entry = {};
    $.each(headers, function (i, header) {
      entry[$.trim(header)] = values[i] ? $.trim(values[i]) : "0";
    });
    return entry;
  }

  // Update .count-up elements with CSV data
  function updateCounts(countsData) {
    $.each(countsData, function (key, value) {
      $(`.count-up[data-key="${key}"]`).text(value);
    });
  }

  // Combined scroll/resize check for both counter types
  function checkVisibility() {
    // Check #counters_X groups
    $.each(visibilityIds, function (i, item) {
      const $el = $(item);
      if ($el.length && isInViewport($el)) {
        counter_init(item);
      }
    });

    // Check .count-up elements
    $('.count-up').each(function () {
      const $this = $(this);
      if (isInViewport($this)) {
        animateCountUp($this);
      }
    });
  }

  // Fetch CSV and set .count-up values
  $.ajax({
    url: './js/team-report.csv',
    dataType: 'text'
  })
    .done(function (csvText) {
      const data = parseCSV(csvText);
      updateCounts(data);
      checkVisibility(); // run initial check
    })
    .fail(function (jqXHR, textStatus) {
      console.error('Fetch error:', textStatus);
    });

  // Listen for scroll/resize to trigger animations
  $(window).on('scroll resize', checkVisibility);

  /* Menu handling */
  $('.menu-nav > .dropdown > button').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $mainMenu = $(this).siblings('.dropdown-menu');
    $('.menu-nav .dropdown-menu').not($mainMenu).addClass('hidden');
    $mainMenu.toggleClass('hidden');
  });

  $('.menu-nav .dropdown-menu > li').hover(
    function () {
      $(this).children('.dropdown-menu').removeClass('hidden');
    },
    function () {
      $(this).children('.dropdown-menu').addClass('hidden');
    }
  );

  $(document).on('click', function () {
    $('.menu-nav .dropdown-menu').addClass('hidden');
  });
});
