import './Components/index.css'
export default function Header(){
  return (

      <header className="header">
        <img className= 'main-img' src="src/assets/Rodas-Grad-Pic.JPG" alt="Rodas in Graduation Attire"/>

        <h1>Rodas Samson Gebrtensie</h1>
        <h3>Frontend Developer</h3>

        <a 
            className="email-btn"
            
            href = "mailto:rsamson139@gmail.com"
            target="_blank"
            >
            
            
            <img className="email-img-icon" src="src/assets/Icon.png" alt="mail logo" />
           <span className='email-header'>Email</span>
        </a>
          
        <a 
            className="linkedin-btn"
            
            href="https://www.linkedin.com/in/rodas-samson-gebrtensea-8a53922a9"
            target="_blank"
            >
            <img className="li-img-icon" src="src/assets/linkedin.png" alt="blue l" />
            <span className='linkedin-header'>Linkedin</span>
        </a>
        
      </header>

  )
}