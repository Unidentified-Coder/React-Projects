import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer.Jsx"
const root = createRoot(document.getElementById("root"))

function MainPage(){
  return(
    <>
    <Header />
    <Footer />
    </>
  )
}

root.render(
  < MainPage />
)