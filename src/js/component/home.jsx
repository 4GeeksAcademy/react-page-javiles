import React from "react";

import {Jumbo} from './jumbotron.jsx';
import {Navbar} from "./navbar.jsx";
import { Card } from "./card.jsx";
import { Copyright } from "./copyright.jsx";



const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbo />
            <div className="container">
            <div className= "row justify-content-center">
                <div className="col-12 col-md-3 mb-4">
                    <Card />
                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Card />
                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Card />
                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Card />
                </div>
            </div>
            </div>
            <Copyright/>
        </div>
    );
}

export default Home;