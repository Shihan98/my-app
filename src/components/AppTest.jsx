import React from 'react';
import { Stage, Container, Sprite } from '@pixi/react';

const App = () => {
  const imageUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";
  const numRows = 4;
  const numCols = 3;
  const grid = [];

  const handleClick = (row, col) => {
    console.log(`Clicked image at index: ${row * numCols + col}`);
  };

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const x = col * 200 + 100; // Adjust as needed for spacing
      const y = row * 150 + 75; // Adjust as needed for spacing
      grid.push(
        <Sprite
          key={`${row}-${col}`}
          image={imageUrl}
          x={x}
          y={y}
          anchor={0.5}
          interactive={true}
          pointerdown={() => handleClick(row, col)}
        />
      );
    }
  }

  return (
    <Stage width={800} height={600} options={{ backgroundColor: 0x1099bb }}>
      <Container>
        {grid}
      </Container>
    </Stage>
  );
};

export default App;
