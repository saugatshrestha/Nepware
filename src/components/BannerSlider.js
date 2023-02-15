import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Container } from 'react-bootstrap';
import sliderThumb from '../assets/images/slide-thumb.webp';

export default function BannerSlider() {
    // const [swiperPagination, setswiperPagination] = useState({
    //     clickable: true,
    // });
    const swiperSlides = [
        "value1", "value2", "value3"
    ];
    return (
        <>
            <div className='banner-slider'>
                <Container>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                    >
                        {swiperSlides.map((swiperSlide) => 
                            <SwiperSlide>
                                <img src={sliderThumb} alt="Slider Thumb" className='mw-100'/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Container>
            </div>
        </>
    );
};