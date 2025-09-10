export function setupVaseCanvas() {
  // ... existing setup code ...

  var canvas = new fabric.Canvas('vaseCanvas');
  // Array to store polygons
  var polygons = [];

  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  }

  function randomPolygonPoints(centerX, centerY, radius, sides) {
    let points = [];
    let angleOffset = Math.random() * Math.PI * 2;
    for (let i = 0; i < sides; i++) {
      let angle = angleOffset + (2 * Math.PI * i) / sides;
      let r = radius * (0.7 + Math.random() * 0.6);
      points.push({
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle)
      });
    }
    return points;
  }

  // Create 5 random polygons
  for (let i = 0; i < 5; i++) {
    let centerX = 80 + i * 100;
    let centerY = 350 + Math.random() * 60;
    let sides = 3 + Math.floor(Math.random() * 5);
    let radius = 30 + Math.random() * 30;
    let points = randomPolygonPoints(centerX, centerY, radius, sides);
    let fill = randomColor();

    let polygon = new fabric.Polygon(points, {
      left: 0,
      top: 0,
      fill: fill,
      stroke: '#333',
      strokeWidth: 2,
      selectable: true
    });
    canvas.add(polygon);
    polygons.push(polygon);
  }

  // Button click handler to save polygons as JSON
  document.getElementById('savePolygonsBtn').onclick = function() {
    // Gather all polygon data from Fabric objects
    const polygonsData = polygons.map(poly => {
      return {
        points: poly.get('points'),
        fill: poly.get('fill'),
        stroke: poly.get('stroke'),
        strokeWidth: poly.get('strokeWidth'),
        left: poly.get('left'),
        top: poly.get('top')
      };
    });

    // Convert to JSON string
    const jsonStr = JSON.stringify(polygonsData, null, 2);

    // Trigger download
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "polygons.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
}
