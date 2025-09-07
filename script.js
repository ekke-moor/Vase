document.addEventListener('DOMContentLoaded', function() {
  // Check if Fabric.js loaded
  if (typeof fabric === 'undefined') {
    alert('Fabric.js failed to load.');
    return;
  }

  // Create a Fabric.js canvas
  var canvas = new fabric.Canvas('vaseCanvas');

  // Example: Draw a simple vase shape
  var ellipse = new fabric.Ellipse({
    left: 270,
    top: 120,
    rx: 60,
    ry: 100,
    fill: '#b5c3d1',
    stroke: '#888',
    strokeWidth: 2
  });

  var neck = new fabric.Rect({
    left: 295,
    top: 80,
    width: 30,
    height: 40,
    fill: '#dee6ef',
    stroke: '#888',
    strokeWidth: 2
  });

  canvas.add(ellipse);
  canvas.add(neck);

  // Example: Make objects selectable/movable
  ellipse.set({ selectable: true });
  neck.set({ selectable: true });

  // Fit canvas to parent
  canvas.setWidth(document.getElementById('container').offsetWidth - 40);
});
