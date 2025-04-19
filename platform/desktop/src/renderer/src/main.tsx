import React from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById("hades");

if(!rootEl?.innerHTML){
    const appRoot = createRoot(rootEl!);
    appRoot.render(<React.StrictMode>
        <h1>Hello there</h1>
    </React.StrictMode>)
}