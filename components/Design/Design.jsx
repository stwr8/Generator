"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import Prev from "@/public/Images/prev.svg";
import Next from "@/public/Images/next.svg";
import Generator from "@/public/Images/big_generator.png";

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
    },
    {
        id: 2,
        image: Generator,
    },
    {
        id: 3,
        image: Generator,
    },
    {
        id: 4,
        image: Generator,
    },
];

const Design = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div className="bg-white mt-5">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] !pb-[30px] sm:!pb-[70px]">
                <div className="max-w-[980px] w-full mx-auto">
                    <h2 className="font-bold text-[40px] leading-10 sm:leading-[40px] sm:text-[48px] text-[#333] text-center">
                        Запатентованый дизайн кабины
                    </h2>
                    <p className="font-normal text-[16px] sm:text-[18px] text-[#333] text-center opacity-80 mt-[15px]">
                        Звукоизоляция и монтаж на месте установки генераторов,
                        оснащенных кабиной, обеспечивает надежную и бесшумную
                        работу двигателя, позволяя избежать высокий уровень
                        шума, который возникает во время работы двигателя.
                    </p>
                </div>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    autoplay={{
                        delay: 20000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    pagination={false}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full z-10 !pb-3 !px-2 sm:!px-20"
                >
                    {datas.map((data) => (
                        <SwiperSlide
                            key={data?.id}
                            className="cursor-pointer !flex !justify-center"
                        >
                            <div className="w-full bg-white rounded-md">
                                <Image
                                    className="!w-full h-[170px] sm:h-[490px] rounded-md"
                                    src={data?.image}
                                    alt="generator"
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    <div
                        ref={navigationPrevRef}
                        className="cursor-pointer rounded-full"
                    >
                        <Image
                            className="absolute top-14 sm:top-52 -left-[8px] cursor-pointer z-20"
                            src={Prev}
                            width={60}
                            height={60}
                            alt="bg"
                        />
                    </div>
                    <div
                        ref={navigationNextRef}
                        className="cursor-pointer rounded-full"
                    >
                        <Image
                            className="absolute top-14 sm:top-52 -right-[8px] cursor-pointer z-20"
                            src={Next}
                            width={60}
                            height={60}
                            alt="bg"
                        />
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Design;
