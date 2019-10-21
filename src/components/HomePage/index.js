import React from "react";
import NavBar from "../LandingPage/NavBar";
import Footer from "./Footer";
import RecipeCard from "./Card";
import Header from "../LandingPage/Header";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <RecipeCard />
      <Footer />
    </>
  );
}
