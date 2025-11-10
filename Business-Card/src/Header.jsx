import { motion } from "framer-motion"
import './Components/index.css'
export default function Header(){
  return (
    <motion.div
        initial={{ y: -100, opacity: 0 }}     
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={{ once: true }}       
        transition={{duration: 1.8 , ease: "easeOut",                    
      }}
    >
    <div className='Main-Container'>
        <div className='Business-Card'>

        <header className="header">
            <img className= 'main-img' src="src/assets/Rodas-Grad-Pic.JPG" alt="Rodas in Graduation Attire"/>
        </header>
        <div className='Secondary-Container'>

            <h1 className='Name-ttl'>Rodas Samson Gebrtensie</h1>
            <h3 className='Sub-ttl'>Frontend Developer</h3>
            
            <div className='Buttons'>

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
                    
                    href="https://www.linkedin.com/in/rodas-samson-8a53922a9"
                    target="_blank"
                    >
                    <img className="li-img-icon" src="src/assets/linkedin.png" alt="blue l" />
                    <span className='linkedin-header'>Linkedin</span>
                </a>
            </div>
            
            <div className='About-info'>
                <h1 className='title-txt'>
                    About

                </h1>
                <span className='about-txt'>
                    I'm a Frontend / Web Developer with intrests in UI/UX. 
                    I also like making complicated things very simple. 
                    I'm always open to suggestion in improving my coding techniques 
                </span>
            </div>

            <h1 className='Intrest-ttl'>
                Intrests
            
            </h1>

                <ul>
                    <li>My favourite team is Chelsea</li>
                    <li>I love to do the complicated stuff</li>
                    <li>Gaming fnatic</li>
                    <li>Always on the internet trying to adapt to new challenges along the way</li>
                </ul>
            </div>
        </div>
    </div>  
    
    </motion.div>    



  )
}