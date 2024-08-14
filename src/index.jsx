import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import { MainView } from './components/main-view/main-view'; 

const container = document.getElementById('root'); 
const root = ReactDOM.createRoot(container);
root.render(<MainView />);//hi
=======
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Added import for Bootstrap styles

const App = () => (<div className = 'container'> <MainView /></div>);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
>>>>>>> 8d4870a4bc2a956558a7b4a9889d194a65dd53a9
