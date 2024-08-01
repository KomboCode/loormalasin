import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        
        <footer>
        <img src='./saf.png' alt='profile pic' className='logo'/>
    
        <div className='village'>
            <ul>
                <li><h4>Our Story</h4></li>
                <li><p>Our History & Culture</p></li>
                <li><p>Must-See Attractions</p></li>
            </ul>

            <ul>
                <li><h4>Where to stay</h4></li>
                <li><p>Hotels</p></li>
                <li><p>Villas</p></li>
                <li><p>Guest Houses</p></li>
                <li><p>Apartments</p></li>
            </ul>

            
            <ul className='izi'>
                <li><h4>Getting here</h4></li>
                <li><p>Airlines</p></li>
                <li><p>Cruises</p></li>
                <li><p>Mount Kilimanjaro</p></li>
            </ul>



            <ul className='izi'>
                <li><h4>Resources</h4></li>
                <li><p>Get in touch</p></li>
                <li><p>Press Room</p></li>
                <li><p>Trevel Trade</p></li>
                <li><p>Media Gallery</p></li>
            </ul>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faCommentDots} className='ion'/>
                </li>
            </ul>
        </div>

        <div className='chini'>
            <div>
                <p className='offi'>The Official Website of Loormalasin Adventure and Safari's</p>
                <p>© 2024 All rights reserved.</p>
            </div>
            <div className='cons'>
                <FontAwesomeIcon icon={faInstagram} className='ion'/>
                <FontAwesomeIcon icon={faFacebookF} className='ion'/>
                <FontAwesomeIcon icon={faTwitter} className='ion'/>
            </div>
        </div>
     
    </footer>
    )
}


export default Footer;