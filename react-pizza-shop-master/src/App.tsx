import React from "react";
import './scss/app.scss'
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import FullPizza from "./Pages/FullPizza";
import {SearchValueContext} from "./context/context";

function App() {
    const [searchValue,setSearchValue] = React.useState('')

    return (
        <SearchValueContext.Provider value={{searchValue,setSearchValue}}>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route element={<Home/>} path={'/react-pizza-shop'}/>
                        <Route element={<Cart/>} path={'/card'}/>
                        <Route element={<FullPizza />} path={'/react-pizza-shop/pizza/:id'}/>
                        <Route element={<NotFound/>} path={'/*'}/>
                    </Routes>
                </div>
            </div>
        </SearchValueContext.Provider>
    );
}

export default App;
