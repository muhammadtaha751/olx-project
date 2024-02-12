import Carousel from 'react-bootstrap/Carousel';

export default function Slider(){
    return (
        <div className='carousel'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/404507106-800x600.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/405056607-800x600.webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.olx.com.pk/thumbnails/404507292-800x600.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }
