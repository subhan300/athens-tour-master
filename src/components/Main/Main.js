import React from 'react'
import Header from "../Header/header"
import Banner from "../banner/Banners"
import Section1 from "../Sections/Section1/Section1"
import Section2 from "../Sections/Section2/Section2"
import Section3 from "../Sections/Section3/Section3"
import Section4 from "../Sections/Section4/Section4"
import Section5 from "../Sections/Section5/Section5"
import Section6 from "../Sections/Section6/Section6"
import Footer from "../Footer/Footer"
import "./main.css"
import {GlobalProvider} from "../GlobalContext/GlobalContext"
function Main() {
    return (
        <div>
        
            <GlobalProvider>

            <div className="bg__main">
                <Header />
                <Banner />
            </div>
            <Section1  />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />

            </GlobalProvider>
        </div>
    )
}

export default Main
