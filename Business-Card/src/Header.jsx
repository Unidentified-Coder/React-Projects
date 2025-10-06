export default function Header(){
  return (
      <header className="header">
        <img src="src/assets/Rodas-Grad-Pic.JPG" alt="Rodas in Graduation Attire"/>

        <h1>Rodas Samson Gebrtensie</h1>
        <h3>Frontend Developer</h3>

        <button className="email-btn">
            <img className="img-icon" src="src/assets/Icon.png" alt="mail logo" />
           <span>Email</span>
        </button>
          
        <button className="linkedin-btn">
            <img className="img-icon" src="src/assets/linkedin.png" alt="blue l" />
            <span>Linkedin</span>
        </button>
        
      </header>

  )
}