"use client";
import Image from "next/image";

// Images
import Sertificait from "@/public/Images/sertificait.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./documentation.css"

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const datas = [
    {
        id: 1,
        image: Sertificait,
    },
    {
        id: 2,
        image: Sertificait,
    },
    {
        id: 3,
        image: Sertificait,
    },
    {
        id: 4,
        image: Sertificait,
    },
    {
        id: 5,
        image: Sertificait,
    },
    {
        id: 6,
        image: Sertificait,
    },
    {
        id: 7,
        image: Sertificait,
    },
    {
        id: 8,
        image: Sertificait,
    },
    {
        id: 9,
        image: Sertificait,
    },
    {
        id: 10,
        image: Sertificait,
    },
];

const Documentation = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] !pb-[20px] sm:!pb-[70px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center py-[30px] sm:py-[57px]">
                    Документация
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
                                    alt="Sertificait"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Documentation;
