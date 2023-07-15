"use client";
import Image from "next/image";

// Images
import Generator from "@/public/Images/gen.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const datas = [
    {
        id: 1,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 2,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 3,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 4,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 5,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 6,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 7,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 8,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 9,
        image: Generator,
        title: "Perkins Perkins",
    },
    {
        id: 10,
        image: Generator,
        title: "Perkins Perkins",
    },
];

const CarouselServices = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] !pb-[20px] sm:!pb-[70px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center py-[30px] sm:py-[57px]">
                    Наши услуги
                </h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{
                        delay: 12000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full z-10 !pb-3 !px-10"
                >
                    {datas.map((data) => (
                        <SwiperSlide
                            key={data?.id}
                            className="cursor-pointer !flex !justify-center"
                        >
                            <div className="max-w-[250px] bg-white rounded-md">
                                <Image
                                    className="w-full h-[250px] rounded-md"
                                    src={data?.image}
                                    alt="generator"
                                />
                                <h2 className="font-medium text-center text-[20px] sm:text-[30px] text-[#333]">
                                    {data?.title}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CarouselServices;
