import React from 'react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventsPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="bg-[#17153B]">
            <Navbar />
            <div style={{ padding: '20px 30px', height: '90vh' }}>
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400?text=New+Events"
                            alt="New Events"
                            style={{ width: '100%', height: '500px', borderRadius: '0px' }}
                        />
                    </div>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400?text=Present+Events"
                            alt="Present Events"
                            style={{ width: '100%', height: '500px', borderRadius: '0px' }}
                        />
                    </div>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400?text=Upcoming+Events"
                            alt="Upcoming Events"
                            style={{ width: '100%', height: '500px', borderRadius: '0px' }}
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

