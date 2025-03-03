import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Clients = ({ clientsLogo }) => {
  return (
    <Swiper
      style={{ marginTop: "20px" }}
      spaceBetween={20}
      slidesPerView={3.5}
      centeredSlides={true}
      modules={[Autoplay]}
      breakpoints={{
        640: { slidesPerView: 1 }, // Small screens (sm)
        768: { slidesPerView: 2 }, // Medium screens (md)
        1024: { slidesPerView: 3 }, // Large screens (lg)
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {clientsLogo.map((logo, index) => (
        <div className="" key={index}>
          <SwiperSlide className="!flex !justify-center !items-center">
            <img
              src={logo.logo}
              alt={`Client Logo ${index}`}
              className="object-contain "
            />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Clients;
