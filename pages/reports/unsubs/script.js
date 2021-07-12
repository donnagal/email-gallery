var canvas = document.getElementById("canvas");

// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};

// Gradient color - this week
var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientThisWeek.addColorStop(0, '#5555FF');
gradientThisWeek.addColorStop(1, '#9787FF');

// Gradient color - previous week
var gradientPrevWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientPrevWeek.addColorStop(0, '#FF55B8');
gradientPrevWeek.addColorStop(1, '#FF8787');

var config = {
    type: 'line',
    data: {
        labels: ["0", "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
              label: 'Unsubs',
              data: [-100, 69, 70, 70, 68, 68, 68],
              fill: false,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 2,
              pointBackgroundColor: 'transparent',
              pointBorderColor: '#FFFFFF',
              pointBorderWidth: 3,
              pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
              pointHoverBorderWidth: 10,
              lineTension: 0,
          }
        ]
    },
    options: {
    	responsive: false,
      elements: { 
        point: {
          radius: 6,
          hitRadius: 6, 
          hoverRadius: 6 
        } 
      },
      legend: {
        display: false,
      },
      tooltips: {
      	backgroundColor: 'transparent',
        displayColors: false,
        bodyFontSize: 14,
        callbacks: {
          label: function(tooltipItems, data) { 
            return tooltipItems.yLabel + '%';
          }
        }
      },
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
          },
        }]
      }
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);