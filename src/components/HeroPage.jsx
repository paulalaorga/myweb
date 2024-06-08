import React from "react";
import "../styles/HeroPage.css";
import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";

export default function HeroPage() {

    return (
        <div className="HeroPage">
        <Header />
        <Cards />
        </div>
    );
    }