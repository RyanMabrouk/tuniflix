import './components.css'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
           <div className='footer_links'>
                <p>Terms Of Use</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
           </div>
           <div className='footer_description'>TuniFlix is a platrform dedicated to cinema lovers such as myself 
           made by Rayen Mabrouk Computer Science student from tunisia.</div>
           <div className='footer_icons'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
           </div>
        </div>
    )
}

export default Footer