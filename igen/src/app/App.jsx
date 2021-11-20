import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Success from '../pages/success';
import {GlobalStyles} from "../styles/GlobalStyles";
import Home from "../pages/home";

function App() {
    return (
        <>
        <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/form" element={<>Hello from /form</>}/>
                    <Route path="/success"  element = {<Success />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
