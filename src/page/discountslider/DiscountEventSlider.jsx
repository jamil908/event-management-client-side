import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const discountEvents = [
  {
    id: 1,
    name: "Music Concert - Rock Fest",
    image: "https://i.ibb.co/bMstBw8R/people-inside-concert-hall-2263436.jpg",
    originalPrice: 100,
    discountPrice: 80,
    eventDate: "March 15, 2025",
  },
  {
    id: 2,
    name: "tech event",
    image: "https://i.ibb.co/QZfbGDm/ad90ad35f69fedbf3054d81219a33cc2.jpg",
    originalPrice: 50,
    discountPrice: 35,
    eventDate: "April 10, 2025",
  },
  {
    id: 3,
    name: "Food Festival - Taste of Summer",
    image: "https://i.ibb.co/5hxQnxhG/1qpe4158-festival-625x300-25-October-19.webp",
    originalPrice: 40,
    discountPrice: 30,
    eventDate: "May 5, 2025",
  },
  {
    id: 4,
    name: "Sports Championship - Grand Finals",
    image: "https://i.ibb.co/pjtNDXdk/th-4.jpg",
    originalPrice: 60,
    discountPrice: 45,
    eventDate: "June 20, 2025",
  },
];

const DiscountEventSlider = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔥 Discounted Event Tickets</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        id="discount-event"
      >
        {discountEvents.map((event) => (
          <SwiperSlide key={event.id} className="p-4 event-image bg-white shadow-lg rounded-xl">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{event.name}</h3>
            <p className="text-gray-500 line-through">${event.originalPrice}</p>
            <p className="text-red-500 text-xl font-bold">${event.discountPrice}</p>
            <p className="text-sm text-gray-600">Event Date: {event.eventDate}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountEventSlider;
