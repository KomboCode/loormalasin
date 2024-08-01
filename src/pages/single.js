import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowAltCircleLeft, faArrowAltCircleRight, faComment, faLocation, faLocationDot, faMap, faMapLocation, faMapLocationDot, faMapMarkedAlt, faMapPin, faMapSigns, faPlayCircle, faSms } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from "react";
import { MbugaContext } from "../contexts/mbugaContext";

const Single = () => {

    const { single } = useContext(MbugaContext);
    const { id, title, text, photo, maelezo, zaid, picha, ramani } = single;

    console.log("tyone", picha.length);

    const [ count, setCount ] = useState(1);

    const handleNext = () => {
        setCount((count) => {
            count = count + 1;
            if ( count === picha.length) {
                count = 0
            }
            return count;
        })
    }

    
    const handlePrev = () => {
        setCount((count) => {
            count = count - 1;
            if ( count === -1 ) {
                count = picha.length - 1
            }
            return count;
        })
    }


    return (
        <div 
           className="single"
           style={
            {
                backgroundImage: `url(${photo})`

            }
           }
        >
            <div className="upper">
                <div className="image">
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
                    <img src={picha[count]}/>
                    <h2>Overview</h2>
                    <p className="text">{maelezo}</p>
                </div>
                <div className="words">
                    <h2>{title}</h2>
                    <div className='map'>
                        <h4>MAP</h4>
                        <FontAwesomeIcon icon={faLocationDot} className='edita'/>
                    </div>
                    <div className="ramani">
                        <img src={ramani}/>
                    </div>
                </div>
            </div>
            <h2 className='did'>Did You Know?</h2>
            <p className='zaidi'>{zaid}</p>
        </div>
    )
}

export default Single;