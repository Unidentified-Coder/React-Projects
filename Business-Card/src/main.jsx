import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
const root = createRoot(document.getElementById("root"))

function MainContent(){
  return(
      <main>
        <h1>
          Who i am
        </h1>
          <h2>
            Name's Rodas I'm a Frontend/Web Developer
          </h2>
          <ul>
            <li>Graduated with a 2.1 in Software Engineering</li>
          </ul>
      </main>

  )
}
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
    <MainContent />
    <Footer />
    </>
  )
}

root.render(
  < MainPage />
)