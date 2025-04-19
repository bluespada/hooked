import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@hooked/app-main/App';

const rootEl = document.getElementById("hades");

if(!rootEl?.innerHTML){
    const appRoot = createRoot(rootEl!);
    appRoot.render(<App/>)
}