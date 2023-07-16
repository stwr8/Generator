"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import Hero_bg from "@/public/Images/hero_car.jpg";
import Hero_bg1 from "@/public/Images/hero_car1.png";
import Hero_bg2 from "@/public/Images/hero_car2.png";
import Hero_bg_mobile from "@/public/Images/hero_car_mobile.png";
import Hero_bg_mobile1 from "@/public/Images/hero_car_mobile1.png";
import Hero_bg_mobile2 from "@/public/Images/hero_car_mobile2.png";
import Prev from "@/public/Images/prev.svg";
import Next from "@/public/Images/next.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Css
import "./hero.css";

const Hero = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                autoplay={{
                    delay: 3000,
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper w-full h-[700px] md:h-[650px] relative bg-hero-gradient z-40 mt-[75.7px] sm:mt-0"
            >
                <SwiperSlide>
                    <Image
                        className="hidden md:block"
                        src={Hero_bg}
                        layout="fill"
                        alt="bg"
                    />
                    <Image
                        className="block md:hidden"
                        src={Hero_bg_mobile}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="hidden md:block"
                        src={Hero_bg1}
                        layout="fill"
                        alt="bg"
                    />
                    <Image
                        className="block md:hidden"
                        src={Hero_bg_mobile1}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="hidden md:block"
                        src={Hero_bg2}
                        layout="fill"
                        alt="bg"
                    />
                    <Image
                        className="block md:hidden"
                        src={Hero_bg_mobile2}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>

                <div className="container absolute inset-0 top-[110px] z-10">
                    <div className="max-w-[582px] w-full">
                        <h1 className="font-bold text-[30px] md:text-[40px] text-white uppercase">
                            Мы поставляем бензиновые и дизельные генераторы
                        </h1>
                        <p className="font-normal text-[18px] md:text-[24px] text-white opacity-80 mt-[10px] md:mt-[16px]">
                            Наша кампания предоставляет такие услуги как продажа
                            и монтаж генераторов в любос ассортименте
                        </p>
                        <Link
                            href={`contact`}
                            className="flex items-center w-fit text-white text-[18px] bg-[#4762FF] rounded-[8px] px-[30px] py-[15px] mt-[32px]"
                        >
                            Консультация
                        </Link>
                    </div>
                    <div className="hidden absolute bottom-[60%] right-0 md:flex items-center">
                        <div
                            ref={navigationPrevRef}
                            className="cursor-pointer rounded-full hover:scale-125 duration-200"
                        >
                            <Image src={Prev} width={60} height={60} alt="bg" />
                        </div>
                        <div
                            ref={navigationNextRef}
                            className="cursor-pointer rounded-full hover:scale-125 duration-200"
                        >
                            <Image src={Next} width={60} height={60} alt="bg" />
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default Hero;
