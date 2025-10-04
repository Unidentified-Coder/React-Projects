import {Mail} from "lucide-react"
export default function Header(){
  return (
      <header className="header">
        <img src="src/assets/Rodas-Grad-Pic.JPG" alt="Rodas in Graduation Attire"/>

        <h1>Rodas Samson Gebrtensie</h1>
        <h3>Frontend Developer</h3>

        <button className="email-button">
        <mail className="icon"/>
        <span>Email</span>

        </button>
        <button></button>
      </header>

  )
}