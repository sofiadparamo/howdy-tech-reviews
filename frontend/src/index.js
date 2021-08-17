import React from 'react';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';

Sentry.init({
  dsn: "https://3b4279d3c3814f89884479ac04aa2ab5@o961376.ingest.sentry.io/5909788",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
