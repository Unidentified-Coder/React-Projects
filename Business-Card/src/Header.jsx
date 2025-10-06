import { MailIcon } from "/Icon/Font Awesome Free/Brands/Icon.png"
export default function Header(){
  return (
      <header className="header">
        <img src="src/assets/Rodas-Grad-Pic.JPG" alt="Rodas in Graduation Attire"/>

        <h1>Rodas Samson Gebrtensie</h1>
        <h3>Frontend Developer</h3>

        <button className="linkedin-btn">
           <span>Linkedin</span>
        
        <img src= {MailIcon} alt="mail" className="Icon"/>
        </button>
        
      </header>

  )
}