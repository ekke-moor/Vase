const shapes = [];
for(let i = 0; i < 200; i++) {
  shapes.push({
    type: 'polygon',
    points: [
      { x: 60, y: 400 },
      { x: 40, y: 250 },
      { x: 70, y: 133 },
      { x: 80, y: 100 },
      { x: 85, y: 67 },
      { x: 115, y: 67 },
      { x: 120, y: 100 },
      { x: 130, y: 133 },
      { x: 160, y: 250 },
      { x: 140, y: 400 }
    ],
    fill: 'rgba(0, 0, 255, 0.5)',
    stroke: 'blue',
    strokeWidth: 2,
    left: Math.random() * 400,  // random position example
    top: Math.random() * 400,
    selectable: false
  });
}

const canvasJSON = JSON.stringify({
  version: '5.3.1',
  objects: shapes
});

// To save as a `.json` file, you can use this JSON string in a file download or server response.
console.log(canvasJSON);q
