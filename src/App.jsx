import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Product from "./components/Product.jsx";
import Hero from "./components/Hero.jsx";
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <Product/>
            <Showcase/>
        </main>
    )
}
export default App
