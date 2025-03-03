import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
const Clients = ({ clientsLogo }) => {
  return (
    <Swiper
      style={{ marginTop: "20px", overflow: "hidden" }}
      spaceBetween={20}
      slidesPerView={"auto"}
      centeredSlides={false}
      modules={[Autoplay, FreeMode]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      freeMode={true}
      freeModeMomentum={false}
      freeModeMomentumRatio={3}
      freeModeMomentumBounce={false}
      speed={2000}
      autoplay={{
        delay: 0,
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
