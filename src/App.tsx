import React from 'react';
import Card, { CardVariant } from './component/Card';

const App = () => {
  return (
    <div>
      <Card onClick={() => console.log("click")} width='200px' height='200px' variant={CardVariant.outlined}>
        <button>button</button>
      </Card>
    </div>
  );
};

export default App;