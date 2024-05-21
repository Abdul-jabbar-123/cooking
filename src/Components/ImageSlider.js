import React, { useState , useEffect} from "react";
import "./Navbar.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/images/food1.jpg',
        '/images/food2.jpg',
        '/images/food3.jpg',
        '/images/food4.jpg'
        
    ];
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <div>
            <Carousel selectedItem={currentImage} showThumbs={false} showIndicators={false} showStatus={false} >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slider image ${index+1}`} className="image" />
                    </div>
                ))}
            </Carousel>
            <div className="dot-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentImage === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;





{/* const ImageSlider = () => {
    const imgStyle = {
        maxHeight: '400px', // Adjust as needed
        maxWidth: '60%', // Ensure image stays within container
    }; 

//     return (
//         <Carousel>
//             <div>
//                 <img src="https://picsum.photos/id/1/200/300" alt="slide 1" style={imgStyle} />
//             </div>
//             <div>
//                 <img src="https://picsum.photos/id/2/200/300" alt="slide 2" style={imgStyle} />
//             </div>
//             {/* Add more slides as needed */}
{/* //         </Carousel> 
//     );
// };

// export default ImageSlider;*/}