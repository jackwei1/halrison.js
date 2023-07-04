import React, { useEffect } from 'react';

function HalrisonComponent() {
  useEffect(() => {
    console.log('halrison.js is Good');
  }, []);

  return <div>Hello Halrison!</div>;
}

function App() {
  return (
    <div>
      <h1>Welcome to My Vue App</h1>
      <HalrisonComponent />
    </div>
  );
}

export default App;
