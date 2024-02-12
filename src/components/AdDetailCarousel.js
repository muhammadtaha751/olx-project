import Carousel from 'react-bootstrap/Carousel';

export default function AdDetailCarousel(){
    return (
        <div className='carousel'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.olx.com.pk/thumbnails/411371081-800x600.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.olx.com.pk/thumbnails/411371076-800x600.webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.olx.com.pk/thumbnails/411371076-800x600.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }
