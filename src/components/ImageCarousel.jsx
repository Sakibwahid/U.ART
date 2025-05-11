import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { div } from "framer-motion/client";

const images = [
    "/image1.jpg",
    "/image4.jpg",
    "/image2.jpg",
    "/image5.jpg",
    "/image3.jpg",
    "/image6.jpg",
];

const ImageCarousel = () => {
    return (
        <div
            className="relative h-[300px] overflow-hidden 
                   lg:[clip-path:polygon(50%_15%,_100%_0,_100%_100%,_50%_85%,_0_100%,_0_0)]"
        >
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        768: { slidesPerView: 4 },
                    }}
                    spaceBetween={5}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="">
                            <img src={src} className="w-[250px] h-[250px] md:w-[400px] lg:h-[400px] object-cover" alt={`Slide ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageCarousel;


