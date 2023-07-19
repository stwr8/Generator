"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import Generator from "@/public/Images/generator.png";
import Up from "@/public/Images/chevron-right.svg";
import Animation from "@/public/Images/animation.svg";

import "./product.css";

const motionConfig = {
  layout: true,
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0 },
  exit: { opacity: 0, scale: 0 },
};

const Product = () => {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [productPower, setproductPower] = useState(null);
  const power = [
    { id: 1, kb: "12.4" },
    { id: 2, kb: "5" },
    { id: 3, kb: "7" },
  ];

  const getProducts = () => {
    const url = new URL(`https://api.generatoruz.com/product/all`);
    const headers = { lang: "en" };

    if (activeCategory) url.searchParams.append("categoryId", activeCategory);
    if (productPower) url.searchParams.append("Pover", productPower);

    axios
      .get(url.toString(), {
        headers,
      })
      .then((res) => setProducts(res?.data?.data?.result))
      .catch(console.log);
  };

  const getAllCategories = () => {
    axios
      .get("https://api.generatoruz.com/category/all", {
        headers: { lang: "en" },
      })
      .then((res) => setCategories(res?.data?.data?.result))
      .catch(console.log);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [activeCategory, productPower]);

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
                className={`${drop ? "rotate-180" : "rotate-0"} duration-300`}
                src={Up}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            {drop ? (
              <form className="px-[15px]" autoComplete="off" method="GET">
                {categories.length > 0 &&
                  categories?.map((data) => (
                    <div
                      key={data?._id}
                      className="flex items-center space-x-[10px] py-[5px] bg-white"
                    >
                      <input
                        className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                        type="checkbox"
                        checked={activeCategory === data?._id}
                        name={data?.name}
                        id={data?.name}
                        onClick={() =>
                          setActiveCategory(
                            activeCategory === data?._id ? null : data?._id
                          )
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
                className={`${drop1 ? "rotate-180" : "rotate-0"} duration-300`}
                src={Up}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            {drop1 ? (
              <form className="px-[15px]" autoComplete="off" method="GET">
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
                      checked={productPower === data?.kb}
                      onClick={() =>
                        setproductPower(
                          productPower === data?.kb ? null : data?.kb
                        )
                      }
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
            <AnimatePresence>
              {products.length ? (
                products?.map((product) => (
                  <motion.div
                    {...motionConfig}
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
                  </motion.div>
                ))
              ) : (
                <motion.div {...motionConfig} key={0}>
                  No items found :(
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
