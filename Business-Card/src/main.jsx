import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
const root = createRoot(document.getElementById("root"))


function Footer(){
  return(
     <footer className="Legals">
        © 2025 Rodz development. All rights reserved."dont touch my shxt nxggaxs"
      </footer>
  )
}
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