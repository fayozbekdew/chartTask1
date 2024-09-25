// SVG o'lchamlari
var width = 400;
var height = 400;
var svg = d3.select("svg").attr("width", width).attr("height", height);

// Radar chart markazi
var radius = Math.min(width, height) / 2 - 20;
var centerX = width / 2;  // Markazni SVG o'rtasiga joylashtiramiz
var centerY = height / 2; // Markazni SVG o'rtasiga joylashtiramiz

// Ma'lumotlar
var data = [65, 59, 90, 81, 56, 55];
var labels = ['A', 'B', 'C', 'D', 'E', 'F'];
var angleSlice = Math.PI * 2 / labels.length;

// Gradient yaratish
var defs = svg.append("defs");

// Shadow filter qo'shish
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 2);  // Sozlanadigan shadow samarasi

filter.append("feOffset")
    .attr("dx", 1)
    .attr("dy", 3)
    .attr("result", "offsetblur");

filter.append("feMerge").selectAll("feMergeNode")
    .data(["offsetblur", "SourceGraphic"])
    .enter().append("feMergeNode")
    .attr("in", d => d);

var radialGradient = defs.append("radialGradient")
    .attr("id", "radial-gradient")
    .attr("cx", "50%").attr("cy", "50%").attr("r", "50%")
    .attr("fx", "50%").attr("fy", "50%");

radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "yellow")
    .attr("stop-opacity", 0.8);

radialGradient.append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 0.7);

radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 0.5);

// O'qlarni chizish
for (var i = 0; i < labels.length; i++) {
    var angle = i * angleSlice - Math.PI / 2;
    svg.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + radius * Math.cos(angle))
        .attr("y2", centerY + radius * Math.sin(angle))
        .attr("stroke", "gray")
        .attr("stroke-width", 1);
}

// Grid yaratish
var levels = 5;
for (var level = 0; level <= levels; level++) {
    var r = radius * (level / levels);
    var gridData = labels.map((d, i) => {
        var angle = i * angleSlice - Math.PI / 2;
        return {
            x: centerX + r * Math.cos(angle),
            y: centerY + r * Math.sin(angle)
        };
    });

    var gridLine = d3.line()
        .x(d => d.x)
        .y(d => d.y);

    svg.append("path")
        .attr("d", gridLine(gridData) + "Z")
        .attr("fill", "none")
        .attr("stroke", "lightgray")
        .attr("stroke-width", 2)
        .style("opacity", 0.5)
        .style("filter", "url(#drop-shadow)");  // Shadow effektini qo'llash
}

// Radar diagrammasini chizish
var radarData = data.map((d, i) => {
    var angle = i * angleSlice - Math.PI / 2;
    return {
        x: centerX + radius * (d / 100) * Math.cos(angle),
        y: centerY + radius * (d / 100) * Math.sin(angle)
    };
});

var radarLine = d3.line()
    .x(d => d.x)
    .y(d => d.y);

svg.append("path")
    .attr("d", radarLine(radarData) + "Z")
    .attr("fill", "url(#radial-gradient)") 
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .style("z-index", 1)
    .style("opacity", 0.8)
    .style("filter", "url(#drop-shadow)");  // Radar uchun shadow

// Labels qo'shish
labels.forEach((label, i) => {
    var angle = i * angleSlice - Math.PI / 2;
    var x = centerX + (radius + 10) * Math.cos(angle);
    var y = centerY + (radius + 10) * Math.sin(angle);

    svg.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "black")
        // .text(label);
});
