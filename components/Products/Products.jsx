"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Images
import Generator from "@/public/Images/generator.png";
import Up from "@/public/Images/chevron-right.svg";
import axios from "axios";

// Css
import "./product.css";

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

const Product = () => {
    const [drop, setDrop] = useState(false);
    const [drop1, setDrop1] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoriesId, setCategoriesId] = useState("");
    const power = [
        { id: 1, kb: "12.4" },
        { id: 2, kb: "10" },
        { id: 3, kb: "7" },
    ];

    useEffect(() => {
        // ---> Category get
        axios
            .get("https://api.generatoruz.com/category/all", {
                headers: { lang: "en" },
            })
            .then((res) => setCategories(res?.data?.data?.result))
            .catch((err) => console.log(err));

        // ---> Product
        axios
            .get(
                `${
                    categoriesId.length > 0
                        ? `https://api.generatoruz.com/product/all?categoryId=${categoriesId}&Pover=12.4`
                        : "https://api.generatoruz.com/product/all"
                }`,
                {
                    headers: { lang: "en" },
                }
            )
            .then((res) => setProducts(res?.data?.data?.result))
            .catch((err) => console.log(err));
    }, []);

    console.log(products);
    return (
        <section>
            <div className="container">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center mt-5">
                    Каталог
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-start sm:justify-between space-y-[40px] sm:space-y-0 sm:space-x-[40px] !py-[20px] sm:!py-[50px]">
                    <div className="max-w-[300px] w-full mx-auto sm:mx-0">
                        <button
                            type="button"
                            onClick={() => setDrop(!drop)}
                            className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px] uppercase"
                        >
                            Производители{" "}
                            <Image
                                className={`${
                                    drop ? "rotate-180" : "rotate-0"
                                } duration-300`}
                                src={Up}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        {drop ? (
                            <form
                                className="px-[15px]"
                                autoComplete="off"
                                method="GET"
                            >
                                {categories.length > 0 &&
                                    categories?.map((data) => (
                                        <div
                                            key={data?.id}
                                            className="flex items-center space-x-[10px] py-[5px] bg-white"
                                        >
                                            <input
                                                className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                                                type="checkbox"
                                                name={data?.name}
                                                id={data?.name}
                                                onClick={() =>
                                                    setCategoriesId(data?._id)
                                                }
                                            />
                                            <label
                                                htmlFor={data?.name}
                                                className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                                            >
                                                {data?.name}
                                            </label>
                                        </div>
                                    ))}
                            </form>
                        ) : null}
                        <button
                            type="button"
                            onClick={() => setDrop1(!drop1)}
                            className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px]"
                        >
                            кВа{" "}
                            <Image
                                className={`${
                                    drop1 ? "rotate-180" : "rotate-0"
                                } duration-300`}
                                src={Up}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        {drop1 ? (
                            <form
                                className="px-[15px]"
                                autoComplete="off"
                                method="GET"
                            >
                                {power?.map((data) => (
                                    <div
                                        key={data?.id}
                                        className="flex items-center space-x-[10px] py-[5px] bg-white"
                                    >
                                        <input
                                            className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                                            type="checkbox"
                                            name={data?.kb}
                                            id={data?.kb}
                                            // onClick={() =>
                                            //     setCategoriesId(data?._id)
                                            // }
                                        />
                                        <label
                                            htmlFor={data?.kb}
                                            className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                                        >
                                            {data?.kb} кВа
                                        </label>
                                    </div>
                                ))}
                            </form>
                        ) : null}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-auto sm:mx-0">
                        {products?.map((product) => (
                            <div
                                key={product?._id}
                                className="max-w-[250px] bg-white rounded-md shadow-card_shadow"
                            >
                                <Image
                                    className="w-full h-[165px] rounded-md"
                                    src={`https://api.generatoruz.com/public/uploads/${product?.image}`}
                                    alt="generator"
                                    width={230}
                                    height={161}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
