import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

serviceWorker.unregister();
