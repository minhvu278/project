import React, {Component, useState} from 'react';
import './App.css';
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <div>
            {/*<AddProduct onAdd={onHandleAdd} />*/}
            <Header />
            <Menu />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
