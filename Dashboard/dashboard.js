function toggleSettingsMenu() {
  var set = document.getElementById("settingOpt");
  if (set.style.display === "block") {
    set.style.display = "none";
  } else {
    set.style.display = "block";
  }
  console.log("clicked");
}

// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartDis);
google.charts.setOnLoadCallback(drawChartExp);

// Draw the chart and set the chart values
function drawChartDis() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Liked", 8],
    ["Disliked", 2],
    ["Total", 10],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "Discoverers",
    titleTextStyle: {
      color: "#ddd",
      fontSize: 20,
    },
    legend: { textStyle: { color: "#fff", fontSize: 14 } },
    backgroundColor: "#2b2b2b",
    width: 400,
    height: 400,
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: "#000",
      fontSize: 14,
    },
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("disCard")
  );
  chart.draw(data, options);
}

function drawChartExp() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Liked", 1290],
    ["Disliked", 711],
    ["Total", 1233],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "Explorers",
    titleTextStyle: {
      color: "#ddd",
      fontSize: 20,
    },
    legend: { textStyle: { color: "#fff", fontSize: 14 }, position: "bottom" },
    backgroundColor: "#2b2b2b",
    width: 400,
    height: 400,
    pieHole: 0.4,
    colors: ["red", "#e05100", "gold"],
    pieSliceTextStyle: {
      color: "#000",
      fontSize: 14,
    },
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("expCard")
  );
  chart.draw(data, options);
}
