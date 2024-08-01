import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBed, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { MbugaContext } from "../contexts/mbugaContext";
import Hotels from '../data/hotels';


const Hotel = () => {


    const { hotel, handleHotel } = useContext(MbugaContext);
    const { price, title, location, star, images, mobile } = hotel;
    console.log("images", images[0]);

    const [ count, setCount ] = useState(0);

    const handleNext = () => {
        setCount((count) => {
            count = count + 1;
            if ( count === 9) {
                count = 0
            }
            return count;
        })
    }

    
    const handlePrev = () => {
        setCount((count) => {
            count = count - 1;
            if ( count === -1 ) {
                count = 8
            }
            return count;
        })
    }

const otherHotel = Hotels.filter((item) => item.id !== hotel.id);
console.log("other hotel", otherHotel)

    return (
        <div className="hotels">
            <div className="upper">
                <div className="left">
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} className='sea'/>  
                        <input type='text' placeholder='Search Hotel'/>
                    </div>
                    <div className='bed'>
                        <FontAwesomeIcon icon={faBed} className='icon'/>
                        <p>Ngorongoro Conservation</p>  
                    </div>                    
                    <div className='others'>
                        { otherHotel.map((item, index) => {
                            const { id, photo, title, price, star } = item;
                            return (
                                <div 
                                  key={id}
                                  className='other'
                                  onClick={() => handleHotel(item)}
                                  >
                                    <img src={photo} alt='profile pic'/>
                                    <div>
                                        <p>{title}</p>
                                        <h4>{price}</h4>
                                        <img src='./icons/start3.png' alt='profile pic'/>
                                        <p>{star}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="middle">
                    <div className='img'>
                        <img src={images[count]} alt='profile pic'/>
                    </div>
                    <div className='arrows'>
                        <FontAwesomeIcon 
                           icon={faAngleLeft} 
                           className='icon'
                           onClick={handleNext}
                           />
                        <FontAwesomeIcon 
                           icon={faAngleRight} 
                           className='icon'
                           onClick={handlePrev}
                           />
                    </div>
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <p className='mobile'>
                    <FontAwesomeIcon 
                        icon={faPhone} 
                        className='icon'
                        />
                        {mobile}
                    </p>  
                    <p>Suite: Private Suite, 1 queen bed</p>
                  
                    <p className='maelezo'>
                        Suitable for tourists coming from different
                        parts of the world, With all kinds of food available at all time.</p>
                        <p>{star} 
                    <img src='./icons/start3.png' alt='profile pic'/>
                    </p>
                   
                    <h4>{price} /=</h4>
                  
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hotel;