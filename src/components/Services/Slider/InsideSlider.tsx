import {Swiper, SwiperSlide} from 'swiper/react';
import {Dispatch, FC} from 'react';
import {EffectFade} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { slides } from '@/jsonData/slides';

interface SliderProps {
  setInstanceSwiper: Dispatch<any>;
}

const InsideSlider: FC<SliderProps> = ({setInstanceSwiper}) => {
  return (
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      onSwiper={setInstanceSwiper}
      noSwipingClass="no-swipe"
      className="w-full h-[213px] sm:h-[370px] xl:h-[429px] sm:w-[463px] md:w-[463px] lg:w-[607px] mb-[12px] md:mb-0">
      {slides.map((item) => (
        <SwiperSlide key={item.title} className="no-swipe">
          <Image
          priority={true}
            src={item.picture}
            alt={item.title}
            fill
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InsideSlider;