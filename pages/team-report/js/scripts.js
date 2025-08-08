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
    if (!$group.length) return;

    // Remove previous animation classes & stop ongoing animations so we can rerun
    $group.find(counterClass).each(function () {
      $(this)
        .stop(true, true)
        .text('0')
        .removeClass(function(i, className) {
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
    let className = groupClass + " " + counterClass + "." + "c_" + index;
    $(className).animate(
      { num },
      {
        duration: +speed,
        easing,
        step(now) {
          if (direction === "reverse") {
            $(this).text(num - Math.floor(now));
          } else {
            $(this).text(Math.floor(now));
          }
        },
        complete() {
          if (direction === "reverse") {
            $(this).text(0);
          } else {
            $(this).text(num);
          }
        },
      }
    );
  }

  // Check which counters are visible & init their animations
  function getVisibilityStatus() {
    visibilityIds.forEach(function (item) {
      const $el = $(item);
      if (!$el.length) return;
      if (isInViewport($el)) {
        counter_init(item);
      }
    });
  }

  // Run on scroll, and on page load only
  $(window).on("scroll", getVisibilityStatus);
  getVisibilityStatus();
});

$(document).ready(function () {
  // Menu toggle handlers
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

function parseCSV(text) {
  const lines = text.trim().split('\n');
  let headers = lines[0].split('\t');
  if (headers.length === 1) headers = lines[0].split(',');
  let values = lines[1].split('\t');
  if (values.length === 1) values = lines[1].split(',');

  const entry = {};
  headers.forEach((header, i) => {
    entry[header.trim()] = values[i] ? values[i].trim() : "0";
  });
  return entry;
}

// Animate numbers from 0 to value
function animateCountUp(el) {
  if (!el) return;

  const target = parseInt(el.textContent.replace(/,/g, ''), 10);
  if (isNaN(target) || target <= 0) {
    el.textContent = target || 0;
    return;
  }

  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentCount = Math.floor(progress * target);
    el.textContent = currentCount.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  el.textContent = '0';
  requestAnimationFrame(update);
}

// Update all count-up elements with data, animating each
function updateCountsAndAnimate(countsData) {
  Object.entries(countsData).forEach(([key, value]) => {
    // Select all elements with class count-up and data-key attribute matching key
    const elements = document.querySelectorAll(`.count-up[data-key="${key}"]`);
    elements.forEach(el => {
      el.textContent = value; // Set value so it's available for animation
      animateCountUp(el);     // Animate count up from 0 to value
    });
  });
}

// Fetch CSV, parse it, then update counts with animation when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  fetch('./js/team-report.csv')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return res.text();
    })
    .then(csvText => {
      const data = parseCSV(csvText);
      updateCountsAndAnimate(data);
    })
    .catch(err => console.error('Fetch error:', err));
});
