import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function MainPage(){
  return(
    <div>
      <header>
        <img src="src/assets/Rodas-Grad-Pic.JPG" width="100px" alt="Rodas in Graduation Attire"/>
      </header>
      <main>
        <h1>
          Who i am
        </h1>
        <h2>
          Name's Rodas I'm a Frontend/Web Developer
        </h2>
        <ul>
          <li>G</li>
        </ul>
      </main>
      <footer>
        "© 2025 Rodz development. All rights reserved."
      </footer>
    </div>
  )
}

root.render(
  < MainPage />
)