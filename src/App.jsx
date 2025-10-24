import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Product from "./components/Product.jsx";
import Hero from "./components/Hero.jsx";
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <Product/>
        </main>
    )
}
export default App
