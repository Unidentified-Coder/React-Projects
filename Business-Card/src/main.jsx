import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
import About from "./About"
import Footer from "./Footer.Jsx"
const root = createRoot(document.getElementById("root"))

function MainPage(){
  return(
    <>
    <Header />
    <About />
    <Footer />
    </>
  )
}

root.render(
  < MainPage />
)