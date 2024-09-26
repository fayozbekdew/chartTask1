var ctx3 = document.getElementById("myChart3").getContext("2d");
const gradient3 = ctx3.createRadialGradient(200, 200, 0, 200, 200, 200); // Markazda
gradient3.addColorStop(0, "rgba(255, 0, 0, 0.8)"); // Yuqori rang (qizil)
gradient3.addColorStop(0.33, "rgba(255, 255, 0, 0.8)"); // O'rta yuqori rang (sariq)
gradient3.addColorStop(0.66, "rgba(0, 255, 0, 0.8)"); // O'rta pastki rang (yashil)
gradient3.addColorStop(0.99, "rgba(0, 0, 255, 0.5)");
var myChart = new Chart(ctx3, {
  type: "radar",
  data: {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "My Dataset",
        data: [95, 30, 60, 50, 80, 91],
        fill: true,
        backgroundColor: gradient3,
        borderColor: "blue",
        borderWidth: 2,
        // pointStyle: false,
        lineTension: 0.2,
        pointHitRadius: 30,
      },
    ],
  },
  options: {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20, 
          count: 5,
          display: false,
          backdropColor: "rgba(244,244,244,0.5)",
        },
        pointLabels: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.3)",
          z: 1,
          lineWidth: 1,
        },
      },
    },
  },
});
