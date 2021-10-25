import { useState } from 'react';
import './App.scss';
import Routes from './Routes';

const App = () => {
  const [colors, setColors] = useState<IColor[]>([]);

  function addColor(locationState: IColorO) {
    const color: any = locationState.color;
    if (!color) return;
    setColors(colors => [...colors, color]);
    delete locationState.color
    console.log(colors);
  }

  return (
    <main className="App">
      <Routes colors={colors} addColor={addColor} />
    </main>
  );
};

export default App;
