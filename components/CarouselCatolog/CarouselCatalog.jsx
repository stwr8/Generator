"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

// Images
import Generator from "@/public/Images/generator.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./catolog.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const datas = [
    {
        id: 1,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 2,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 3,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 4,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 5,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 6,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 7,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 8,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 9,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
    {
        id: 10,
        image: Generator,
        title: "PerkinsPerkins",
        fuel_type: "Дизель",
        model: "AJ-P 10",
        power: "(9кВа / 7кW)",
    },
];

const CarouselCatalog = () => {
    return (
        <div className="bg-white sm:bg-[#191919] mt-5 sm:mt-[68px]">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] sm:!pb-[100px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] sm:text-white text-center py-[30px] sm:py-[57px]">
                    Наш каталог
                </h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation={true}
                    pagination={false}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full z-10 !pb-3 !px-[50px]"
                >
                    {datas.map((data) => (
                        <SwiperSlide
                            key={data?.id}
                            className="cursor-pointer !flex !justify-center"
                        >
                            <div className="max-w-[250px] bg-white rounded-md shadow-card_shadow">
                                <Image
                                    className="w-full h-[165px] rounded-md"
                                    src={data?.image}
                                    alt="generator"
                                />
                                <div className="px-[18px] pb-5">
                                    <h2 className="font-medium text-[20px] text-black">
                                        {data?.title}
                                    </h2>
                                    <p className="font-bold text-[#333] opacity-80 mt-[3px]">
                                        Тип топлива{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {data?.fuel_type}
                                        </span>
                                    </p>
                                    <p className="font-bold text-[#333] opacity-80">
                                        Модель{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {data?.model}
                                        </span>
                                    </p>
                                    <p className="font-bold text-[#333] opacity-80">
                                        Мощность{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {data?.power}
                                        </span>
                                    </p>
                                    <Link
                                        href={"/"}
                                        className="block mx-auto font-medium text-[18px] text-white text-center py-2 bg-[#4762FF] rounded-lg mt-[14px]"
                                    >
                                        Подробно
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CarouselCatalog;
