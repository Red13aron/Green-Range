import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RecipeCard from "./Card";
import Header from "../Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <NavBar />

      <RecipeCard />
      <Footer />
    </>
  );
}
