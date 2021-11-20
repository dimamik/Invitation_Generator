import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from '../pages/success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<>Hello from /</>} />
        <Route path="/form" component={<>Hello from /form</>} />
        <Route path="/success" component={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
