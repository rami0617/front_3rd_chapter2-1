import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

function main() {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />,
    </React.StrictMode>,
  );
}

main();
