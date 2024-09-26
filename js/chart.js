var ctx = document.getElementById("myChart").getContext("2d");
const gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
gradient.addColorStop(0, "rgba(255, 0, 0, 0.8)");
gradient.addColorStop(0.33, "rgba(255, 255, 0, 0.8)");
gradient.addColorStop(0.66, "rgba(0, 255, 0, 0.8)");
gradient.addColorStop(0.99, "rgba(0, 0, 255, 0.5)");
var myChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "My Dataset",
        data: [95, 30, 60, 50, 80, 91],
        fill: true,
        backgroundColor: gradient,
        borderColor: "white",
        borderWidth: 2,
        pointStyle: false,
        pointHitRadius: 30,
        lineTension: 0.1,
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
        stepSize: 30,
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
          padding: 10,
        },
      },
    },
  },
});
