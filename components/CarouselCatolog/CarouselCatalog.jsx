"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import Modal from "../Modal/Modal";

import Generator from "@/public/Images/generator.png";
import Mark_x from "@/public/Images/x_black.svg";

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
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const GetProducts = () => {
        axios
            .get(`https://api.generatoruz.com/product/all`, {
                headers: { lang: "uz" },
            })
            .then((res) => setProducts(res?.data?.data?.result))
            .catch(console.log);
    };
    useEffect(() => {
        GetProducts();
    }, []);

    return (
        <div className="bg-white mt-5 sm:mt-[68px]">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] sm:!pb-[100px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center py-[30px] sm:py-[57px]">
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
                    {products?.map((product) => (
                        <SwiperSlide
                            key={product?._id}
                            className="cursor-pointer !flex !justify-center"
                        >
                            <div className="max-w-[250px] bg-white rounded-md shadow-card_shadow">
                                <Image
                                    className="w-full h-[165px] rounded-md"
                                    src={`https://api.generatoruz.com/public/uploads/${product?.image}`}
                                    alt="generator"
                                    width={236}
                                    height={165}
                                />
                                <div className="px-[18px] pb-5">
                                    <h2 className="font-medium text-[20px] text-black">
                                        {product?.title}
                                    </h2>
                                    <p className="font-bold text-[#333] opacity-80 mt-[3px]">
                                        Тип топлива{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {product?.fuel_type}
                                        </span>
                                    </p>
                                    <p className="font-bold text-[#333] opacity-80">
                                        Модель{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {product?.model}
                                        </span>
                                    </p>
                                    <p className="font-bold text-[#333] opacity-80">
                                        Мощность{" "}
                                        <span className="inline-block font-medium text-[#333] opacity-60">
                                            - {product?.power}
                                        </span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                        className="w-full mx-auto font-medium text-[18px] text-white text-center py-2 bg-[#4762FF] rounded-lg mt-[14px]"
                                    >
                                        Подробно
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                    <Modal
                        change={false}
                        isVisible={showModal}
                        onClose={() => {
                            setShowModal(false);
                        }}
                    >
                        <div className="flex items-start justify-between bg-white max-w-[720px] w-full py-[30px] px-[30px] rounded-[26px] border relative">
                            <button
                                type="button"
                                onClick={() => setShowContact(false)}
                                className="absolute top-[20px] right-[25px] w-[30px] h-[30px]"
                            >
                                <Image
                                    src={Mark_x}
                                    width={30}
                                    height={30}
                                    alt="close"
                                />
                            </button>
                            <Image
                                className="!max-w-[300px] !w-full h-[290px]"
                                // src={`https://api.generatoruz.com/public/uploads/${product?.image}`}
                                width={300}
                                height={290}
                            />
                            <div className="mx-10">
                                <h2 className="font-bold text-[20px] leading-[30px] text-text-color">
                                    Название + кВа
                                </h2>
                                <ul className="mt-[30px]">
                                    <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                        Модель - кВа
                                    </li>
                                    <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                        Макс.общая выходная мощность (кВт/л.с.)
                                    </li>
                                    <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                        Объем цилиндра (л){" "}
                                    </li>
                                    <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                        Построение цилиндров Диаметр цилиндра x
                                        Ход поршня (мм*мм)
                                    </li>
                                    <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                        Тип регулятора
                                    </li>
                                </ul>
                                <Link
                                    className="bg-[#4762FF] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                                    href={`/`}
                                >
                                    Подробно
                                </Link>
                            </div>
                        </div>
                    </Modal>
                </Swiper>
            </div>
        </div>
    );
};

export default CarouselCatalog;
