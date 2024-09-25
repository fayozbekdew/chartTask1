var ctx = document.getElementById('myChart').getContext('2d');
const gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200); // Markazda
gradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');      // Yuqori rang (qizil)
gradient.addColorStop(0.33, 'rgba(255, 255, 0, 0.8)'); // O'rta yuqori rang (sariq)
gradient.addColorStop(0.66, 'rgba(0, 255, 0, 0.8)');   // O'rta pastki rang (yashil)
gradient.addColorStop(0.99, 'rgba(0, 0, 255, 0.5)'); 
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
            label: 'My Dataset',
            data: [95, 30,  60, 50,80, 91,],
            fill: true,
            backgroundColor: gradient,
            borderColor: 'blue',
            borderWidth: 2,
            pointStyle:false,
            pointHitRadius: 30,
            lineTension: 0.1,
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 30,
                ticks: {
                    display: false,
                    backdropColor: 'rgba(0, 0, 0, 0.1)',
                },
                pointLabels: {
                    display: false
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    zIndex: 20,
                    lineWidth: 3,
                    padding: 10,
                },
            }
        }
    }
});

