import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



const Navbar = () => {

    const navigate = useNavigate();


    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src="./saf.png" alt='profile pic' className='log'/>
                <div className='heart'>
                    <FontAwesomeIcon icon={faHeart} className='icon'/>
                    <h5>3</h5>
                </div>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} className='icon'/>
                    <input type='text' placeholder='Event, food and beaches'/>     
                </div>

            </div>

            <div className='menus'>

                <div className='menu'
                     onClick={() => navigate("/")}
                >
                    <FontAwesomeIcon icon={faBars} className='icon'/>
                    <p>MENU</p>
                </div>
            
                <div className='book'
                     onClick={() => navigate("/")}
                >
                    <FontAwesomeIcon icon={faHome} className='icon'/>
                    <p>Home Page</p>
                </div>
                
            </div>
           
        </nav>
    )
}

export default Navbar;