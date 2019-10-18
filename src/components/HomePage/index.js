import React from "react";
import NavBar from './NavBar';
import CurrentRecipes from './CurrentRecipes';
import Footer from './Footer';
import RecipeCard from "./Card";



export default function HomePage() {
    return (
        <>
            <NavBar />
            {/* <CurrentRecipes /> */}
            <RecipeCard />
            <Footer />
        </>
    )
};

