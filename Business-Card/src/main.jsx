import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer.Jsx"
// Fetches id root from index.html to be saved under root for later rendering 
const root = createRoot(document.getElementById("root"))

function MainPage(){
  return(
    <>
    <Header />
    <Footer />
    </>
  )
}

// Renders all contents within MainPage to Index.html to display contents
root.render(
  < MainPage />
)