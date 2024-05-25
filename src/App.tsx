import React, { useState } from 'react';
import { Car } from './car';


const App: React.FC = () => {
  const [car] = useState(new Car("Toyota", "Corolla", 2021));

  return (
    <div>
      <h1>Car Information</h1>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={() => car.start()}>Start Car</button>
    </div>
  );
};

export default App;