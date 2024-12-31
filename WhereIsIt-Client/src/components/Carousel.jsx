import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/images/carousel1.jpg';
import bgimg2 from '../assets/images/carousel2.jpeg';
import bgimg3 from '../assets/images/carousel3.jpeg';

export default function Carousel() {
  return (
    <div className='px-6 mb-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Lost or Found, Find a Solution Together'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Help Others Recover Their Lost Items or Return Found Ones'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='If You Find Something Lost, You Can Return It!'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
