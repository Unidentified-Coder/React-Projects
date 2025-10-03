import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function Header(){
  return (
      <header className="header">
        <img src="src/assets/Rodas-Grad-Pic.JPG" width="100px" alt="Rodas in Graduation Attire"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact me</li>

        </ul>
      </nav>
      </header>

  )
}
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