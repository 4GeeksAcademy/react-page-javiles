import React from "react";

import {Jumbo} from './jumbotron.jsx';
import {Navbar} from "./navbar.jsx";
import { Card } from "./card.jsx";



const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbo />
            <div className="container d-flex justify-content-even">
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Home;