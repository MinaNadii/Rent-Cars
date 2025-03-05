import HeaderCards from "../../Elements/HeaderCards";
import girl from "../../../assets/Testimonials/girl.png";
import man from "../../../assets/Testimonials/man.png";
import BgImg from "../../../assets/Testimonials/bg-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonialsData = [
  {
    id: 1,
    rating: "9.9 Rating",
    name: "Mina Nadi",
    title: "CEO, Company A",
    quote:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: man,
  },
  {
    id: 2,
    rating: "9.9 Rating",
    name: "Someone Name",
    title: "CEO, Company B",
    quote:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: girl,
  },
  {
    id: 3,
    rating: "9.9 Rating",
    name: "Mina Nadi",
    title: "CEO, Company A",
    quote:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: man,
  },
  {
    id: 4,
    rating: "9.9 Rating",
    name: "Someone Name",
    title: "CEO, Company B",
    quote:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: girl,
  },
];
const Testimonials = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="flex flex-col gap-3 px-4 text-center items-center">
          <HeaderCards h2={"testimonials"} p={"what people say about us?"} />
        </header>

        <div className="p-10 max-md:px-5 ">
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={"auto"}
            // centeredSlides={true}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 50,
              },

              1400: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // className="mySwiper "
          >
            {testimonialsData.map((person, index) => (
              <div className="flex justify-center" key={index}>
                <SwiperSlide className="!flex !justify-center !items-center">
                  <div className="flex mx-auto bg-white shadow-lg !w-[500px]  rounded-2xl">
                    <img
                      src={person.image}
                      alt={`Client Logo ${index}`}
                      className="object-cover h-[300px] w-[200px] rounded-l r"
                    />
                    <div className="p-5">
                      <h2 className="font-bold text-2xl pt-2 ">
                        {person.name}
                      </h2>
                      <h4 className="font-semibold text-blue-500 pb-3">
                        {person.title}
                      </h4>
                      <h5 className="font-semibold">{person.rating}</h5>
                      <p className="">{person.quote}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
