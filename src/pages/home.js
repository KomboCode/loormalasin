import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowAltCircleRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Sally from '../data/sally';
import { MbugaContext } from '../contexts/mbugaContext';
import { useNavigate } from 'react-router-dom';
import Hotels from '../data/hotels';



const Home = () => {

    const { 
           handleSingle,
           handleHotel
         } = useContext(MbugaContext);
    const navigate = useNavigate();


    const [ next, setNext ] = useState(0);
    const [ cov, setCov ] = useState(0);
    const [ more, setMore ] = useState(false);

    const handleNext = () => {
        setNext((next) => {
            next = next + 1;
            if ( next === 7 ) {
                next = 0;
            }
            return next;
        })
    }

    
    const handlePrev = () => {
        setNext((next) => {
            next = next - 1;
            if ( next === -1 ) {
                next = 6;
            }
            return next;
        })
    }

    
    const NextCov = () => {
        setCov((cov) => {
            cov = cov + 1;
            if ( cov === 7 ) {
                cov = 0;
            }
            return cov;
        })
    }

    
    const PrevCov = () => {
        setCov((cov) => {
            cov = cov - 1;
            if ( cov === -1 ) {
                cov = 6;
            }
            return cov;
        })
    }

    
    const handleClick = (item) => {
        handleSingle(item);
        navigate("/single");
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }

    const handleSerena = (item) => {
        console.log("Habdle serena");
        navigate("/hotel");
        handleHotel(item);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }


    return (
        <section className="home">
            <div className="hero">
                {/* <img src="./images/1.jpg" className="land"/> */}
                <div className="words">
                   <div className="left">
                    <h5>WELCOME</h5>
                    <h1>Tour Ngorongoro</h1>
                    <h1>One Heart.</h1>
                    <div className='yellow'>
                        <div className='ybg'></div>
                        <div className='exp'>
                            <div>
                                <h2>Explore Loormalasin</h2>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} className='icon'/>
                            </div>
                            <p>Get started on your vacation planning
                            by exploring Loormalasin Mountain via our website</p>
                        </div>
                    </div>
                </div>
                   <div className='right'>
                    <FontAwesomeIcon icon={faPlayCircle} className='icon'/>
                   </div>
                </div>
            </div>

            <div className='lets'>
                <div className='right'>
                    <img src='./images/lines.png' alt='profile pic' className='lines'/>
                    <div className='explore'>
                        <h1>Let's</h1>
                        <h1>Explore.</h1>
                        <p>
                           Ngorongoro where you will got the chance to see different kinds of 
                           wild animal include Rhinos before they extint, historical sites and
                           museum.
</p>
                        <div className='yellow'>
                            <div></div>
                            <h4>View Our wonders</h4>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='ion'/>
                        </div>
                    </div>
                </div>

                <div className='middle'>
                    <div className='juu'>
                        <img src='./images/lines.png' alt='profile pic'/>
                        <img src='./images/lines.png' alt='profile pic'/>
                    </div>
                    <div className='cycle'></div>
                    <div className='liness'>
                        <img src='./images/lines.png' alt='profile pic'/>
                        <img src='./images/lines.png' alt='profile pic'/>
                    </div>

                    <div className='liness'>
                        <img src='./images/lines.png' alt='profile pic'/>
                        <img src='./images/lines.png' alt='profile pic'/>
                    </div>
                </div>

                <div className='lef'>
                   {/* <div className='island'>
                    <h4>Island Hopping</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                   </div> */}

                   <div className='arrows'>
                   <FontAwesomeIcon 
                     icon={faAngleLeft} 
                     className='ion'
                     onClick={handleNext}
                     />
                   <FontAwesomeIcon 
                     icon={faAngleRight} 
                     className='ion'
                     onClick={handlePrev}
                     />
                   </div>

                   <div className='photos'>
                    { Sally.map((item, index) => {
                        const { id, photo, title, text } = item;
                        return (
                            <div 
                               key={id}
                               className={`jpg ${next === index && "active"} ${next + 1 === index && "prev"} ${((next - 1 === index)) && "next"}`}
                               >
                                <img 
                                  src={photo}
                                  onClick={() => handleClick(item)}
                                  alt='profile pic'
                                  />
                                <div className='island'>
                                    <h4>{title}</h4>
                                    <p>{ more ? text.slice(0,1000) : text.slice(0, 50)}.. <span 
                                    className='more'
                                    onClick={() => setMore(!more)}
                                    >{ more ? "less" : "more" }</span></p>
                                </div>
                            </div>
                        )
                    })}
                   </div>

            
                </div>
            </div>

            <div className='discover'>
                <div className='cov'>
                    <div className='bg'></div>
                    <div className='word'>
                        <h3>Discover</h3>
                        <p>
                           Different kind of creatures, events, food,
                           steep mountain and wild animals. from your
                           only one stop Ngorongoro Reserve.
                        </p>  
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='ion'/>
                    </div>
                    <FontAwesomeIcon 
                       icon={faAngleLeft} className='kulia' onClick={NextCov}/>
                    <FontAwesomeIcon 
                    icon={faAngleRight} className='kushoto' onClick={PrevCov}/>
                </div>
                
                <div className='travel'>
                    <div className='trav'>
                        <h1>Travel</h1>
                        <h1 className='deals'>Deals.</h1>
                    </div>
                    <div className='say'
                         style={
                            { 
                                transform: `translateX(${cov * 200}px)`
                            }
                         }
                    >

                    
                        <div className='images'>
                            { Sally.map((item) => {
                                const { id, photo, title, text } = item;
                                return (
                                    <div 
                                    key={id}
                                    className='img'
                                    onClick={() => handleClick(item)}
                                    alt='profile pic'
                                    >
                                        <div className='texts'>
                                            <p>{title}</p>
                                            <h4>{text.slice(0, 80)}....</h4>
                                        </div>
                                        <img src={photo} alt='profile pic'/>
                                    </div>
                                )
                            })}
                            <div className='img toa'>
                                <img src='./images/9.jpg' alt='profile pic'/>
                                <div className='texts'>
                                    <p>Sonesta Ocean Resort</p>
                                    <h4>New Year, new Adventure</h4>
                                    <h4>Save up to 30%</h4>
                                </div>
                            </div>
                            <div className='img toa'>
                                <img src='./images/10.jpg' alt='profile pic'/>
                            </div>
                            <div className='img toa'>
                                <img src='./images/11.jpg' alt='profile pic'/>
                            </div>
                        </div>
                        
                    </div>
              
                </div>
            </div>

            <div className='experiences'>
                <h1>Ngorongoro Hotels</h1>
                <div className='objects'>
                    <div className='yellow'></div>
                    { Hotels.map((item, index) => {
                        const { id, title, photo, price } = item;
                        return (
                            <div
                            onClick={() => handleSerena(item)}
                            key={id} 
                            className={`img ${index === 0 && "two"}  ${index === 2 && "two"}`}>
                                <img src={photo} alt='profile pic'/>
                                <div>
                            <h4>PRICE</h4>
                            <h3>{price} /=</h3>
                            <p className='title'>{title}</p>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='ion'/>
                        </div>
                            </div>
                        )
                    })}
                  

                </div>
            </div>
            
            <div className='events'>
                    <div className='liness'>
                       <img src='./images/lines.png' alt='profile pic'/>
                       <img src='./images/lines.png' alt='profile pic'/>
                       <img src='./images/lines.png' alt='profile pic'/>
                       <img src='./images/lines.png' alt='profile pic'/>
                       <img src='./images/lines.png' alt='profile pic'/>
                    </div>
                    <div className='other'>
                        <div className='bg'></div>
                        <p>View all events</p>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='ion'/>
                    </div>
            </div>

            <div className='water'>
                <img src='./images/lines.png' className='line' alt='profile pic'/>
                <div className='imag'>
                    <img src='./images/3.jpg' className='under' alt='profile pic'/>
                    <div className='who'>
                        <p>INDULGE IN </p>
                        <div className='und'>
                            <div>
                                <h1>LOORMALASIN</h1>
                                <h1>ADVENTURE</h1>
                            </div>
                            <FontAwesomeIcon icon={faPlayCircle} className='icon'/>
                        </div>
                        <div className='explo'>
                            <div className='bg'></div>
                            <h4>Explore Activities</h4>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='ion'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='scribe'>
                <h2 className='sub'>Subscribe to</h2>
                <h2>our newsletter.</h2>
                <div className='safa'>
                    <div className='bg'></div>
                    <div className='white'>
                        <div className='whi'>
                            <p>safaris@loormalasin.com</p>
                        </div>
                        <div className='black'>SUBSCRIBE</div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Home;