import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer.Jsx"
const root = createRoot(document.getElementById("root"))

function MainPage(){
  return(
    <>
    <Header />
<<<<<<< HEAD
=======
    <About />
>>>>>>> parent of 208aaa6 (Intrest added)
    <Footer />
    </>
  )
}

root.render(
  < MainPage />
)