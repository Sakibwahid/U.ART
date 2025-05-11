import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PageContext } from './components/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageContext>
      <App />
    </PageContext>
  </StrictMode>,
);