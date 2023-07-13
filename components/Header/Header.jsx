"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

// ---> Images
import Call from "../../public/Images/call.svg";
import Planet from "../../public/Images/planet.svg";
import Vector from "../../public/Images/vector.svg";
import Logo from "../../public/Images/logo.svg";
import CallWhite from "../../public/Images/call_white.svg";
import Search from "../../public/Images/search.svg";

const Header = () => {
    const [scrollDown, setScrollDown] = useState("");
    const [showModal, setShowModal] = useState(false);
    // ---> Dropdown
    const [drop, setDrop] = useState(false);
    // ---> Change Languages
    const [uzb, setUzb] = useState(true);
    const [rus, setRus] = useState(false);
    const [eng, setEng] = useState(false);

    // ---> Close dropdown
    useEffect(() => {
        // ---> Close dropdown
        const handleClick = (e) => {
            if (e.target.id !== "wrapper") setDrop(false);
        };
        if (typeof window !== "undefined") {
            window.addEventListener("click", handleClick);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("click", handleClick);
            }
        };
    }, []);

    // ---> Change Language
    const ChangeUzb = () => {
        setUzb(true);
        setRus(false);
        setEng(false);
    };
    const ChangeRus = () => {
        setRus(true);
        setUzb(false);
        setEng(false);
    };
    const ChangeEng = () => {
        setEng(true);
        setRus(false);
        setUzb(false);
    };

    return (
        <>
            <div className={`container`}>
                {/* --- Header top --- */}
                <div className="hidden md:flex items-center justify-end py-[11px] border-b-[1px]">
                    <ul className="flex items-center space-x-5">
                        <li>
                            <p className="font-normal text-base text-[#333333] opacity-75">
                                24/7
                            </p>
                        </li>
                        <li className="flex items-center">
                            <Image
                                src={Call}
                                width={20}
                                height={20}
                                alt="Picture of call"
                            />
                            <a
                                href="tel:+998980013666"
                                className="font-normal text-base text-[#333333] opacity-75 ml-2"
                            >
                                +998 98 001 3666
                            </a>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="font-normal text-base text-[#333333] opacity-75"
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <span className="inline-block h-[50px] w-[1px] bg-[#333333] opacity-10 ml-[23px] mr-[10px]"></span>
                    {/* ------ Dropdown ------ */}
                    <Image
                        src={Planet}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    <button
                        className="relative flex items-center z-0 duration-200"
                        id="wrapper"
                        type="button"
                        onClick={() => setDrop(!drop)}
                    >
                        <p
                            onClick={() => setDrop(!drop)}
                            className="font-medium text-base text-black mx-2"
                        >
                            {uzb ? "Uz" : rus ? "Ru" : eng ? "En" : ""}
                        </p>
                        <Image
                            className={`duration-200 ${
                                drop ? "-rotate-180" : ""
                            }`}
                            src={Vector}
                            width={10}
                            height={6}
                            alt="Picture of the author"
                        />
                        {drop ? (
                            <ul className="absolute z-50 left-0 top-[43px] lg:top-[30px] w-[80px] bg-gray-100 rounded-b-md duration-300">
                                <li
                                    onClick={ChangeUzb}
                                    className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150 py-1 px-3 rounded-b-md"
                                >
                                    UZB
                                </li>
                                <li
                                    onClick={ChangeRus}
                                    className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150  py-1 px-3"
                                >
                                    RUS
                                </li>
                                <li
                                    onClick={ChangeEng}
                                    className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150 pt-1 pb-2 px-3 rounded-b-md"
                                >
                                    ENG
                                </li>
                            </ul>
                        ) : null}
                    </button>
                </div>
                {/* --- Header bottom --- */}
                <div className="flex items-center justify-between py-[18px]">
                    <Link className="flex items-center" href="/">
                        <Image
                            className="w-[25px] h-[25px] md:w-[41px] md:h-[41px]"
                            src={Logo}
                            alt="site-logo"
                        />
                        <p className="font-medium text-xl text-[#333] ml-[6px]">
                            Generators
                        </p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-[46px]">
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/"}>Наша продукция</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/"}>Наши услуги</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/"}>O нас</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex items-center">
                        <input
                            className="relative max-w-[120px] w-full pl-[43px] pr-[8px] py-[8px] border-[1.5px] outline-none border-white focus:border-[#4762FF] rounded-[6px] text-base text-[#4F6E7B] mr-5"
                            type="text"
                            placeholder="Поиск"
                        />
                        <Image
                            className="absolute ml-[13px]"
                            src={Search}
                            width={22}
                            height={22}
                            alt="search"
                        />
                        <a
                            href="tel:+998980013666"
                            className="flex items-center bg-[#4762FF] rounded-[6px] px-[15px] py-[8px] "
                        >
                            <Image
                                src={CallWhite}
                                width={20}
                                height={20}
                                alt="call-image"
                            />
                            <p className="font-medium text-white text-base tracking-[0.12px] ml-[6px]">
                                Консультация
                            </p>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <div className="relative flex items-center">
                            <input
                                className="max-w-[140px] w-full pl-[35px] pr-[8px] py-[7px] border-[1.5px] outline-none border-white focus:border-[#4762FF] rounded-[6px] text-base text-[#4F6E7B]"
                                type="text"
                                placeholder="Поиск"
                            />
                            <Image
                                className="absolute left-[8px]"
                                src={Search}
                                width={22}
                                height={22}
                                alt="search"
                            />
                        </div>
                        <button
                            className="flex flex-col justify-between w-[26px] h-5 sm:hidden"
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            <span
                                className={`${
                                    showModal
                                        ? "-rotate-45 translate-y-[8.8px]"
                                        : ""
                                } inline-block w-full h-[2px] border border-[#4762FF] duration-300`}
                            ></span>
                            <span
                                className={`${
                                    showModal ? "hidden" : ""
                                } inline-block w-[60%] h-[2px] border border-[#4762FF]`}
                            ></span>
                            <span
                                className={`${
                                    showModal
                                        ? "rotate-45 -translate-y-[8.8px]"
                                        : ""
                                } inline-block w-full h-[2px] border border-[#4762FF] duration-300`}
                            ></span>
                        </button>
                    </div>
                </div>

                {/* Modal */}

                <Modal
                    isVisible={showModal}
                    onClose={() => {
                        setShowModal(false);
                    }}
                >
                    <div className="flex items-center justify-between py-[18px]">
                        <div className="flex items-center justify-between">
                            <Link className="flex items-center" href="/">
                                <Image
                                    className="w-[25px] h-[25px] md:w-[41px] md:h-[41px]"
                                    src={Logo}
                                    alt="site-logo"
                                />
                                <p className="font-medium text-xl text-[#333] ml-[6px]">
                                    Generators
                                </p>
                            </Link>
                        </div>
                        <div className="md:hidden flex items-center space-x-4">
                            <div className="relative flex items-center">
                                <input
                                    className="max-w-[140px] w-full pl-[35px] pr-[8px] py-[7px] border-[1.5px] outline-none border-white focus:border-[#4762FF] rounded-[6px] text-base text-[#4F6E7B]"
                                    type="text"
                                    placeholder="Поиск"
                                />
                                <Image
                                    className="absolute left-[8px]"
                                    src={Search}
                                    width={22}
                                    height={22}
                                    alt="search"
                                />
                            </div>
                            <button
                                className="flex flex-col justify-between w-[26px] h-5 sm:hidden"
                                onClick={() => {
                                    setShowModal(!showModal);
                                }}
                            >
                                <span
                                    className={`${
                                        showModal
                                            ? "-rotate-45 translate-y-[8.8px]"
                                            : ""
                                    } inline-block w-full h-[2px] border border-[#4762FF] duration-300`}
                                ></span>
                                <span
                                    className={`${
                                        showModal ? "hidden" : ""
                                    } inline-block w-[60%] h-[2px] border border-[#4762FF]`}
                                ></span>
                                <span
                                    className={`${
                                        showModal
                                            ? "rotate-45 -translate-y-[8.8px]"
                                            : ""
                                    } inline-block w-full h-[2px] border border-[#4762FF] duration-300`}
                                ></span>
                            </button>
                        </div>
                    </div>
                    <nav className="block md:hidden mt-[30px]">
                        <ul className="flex items-center flex-col text-center space-y-5">
                            <li className="font-medium text-base text-[#333] uppercase">
                                <Link href={"/"}>Наша продукция</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] uppercase">
                                <Link href={"/"}>Наши услуги</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] uppercase">
                                <Link href={"/"}>O нас</Link>
                            </li>
                        </ul>
                    </nav>
                    <ul className="flex items-center flex-col text-center space-y-5">
                        <li className="font-medium text-base text-[#333] uppercase">
                            24/7
                        </li>
                        <li className="font-medium text-base text-[#333] uppercase">
                            <Link
                                href={`tel:+998980013666`}
                                className="flex items-center"
                            >
                                <Image
                                    src={Call}
                                    width={20}
                                    height={20}
                                    alt="call-image"
                                />
                                <p className="font-medium text-base text-[#333] ml-2">
                                    +998 98 001 3666
                                </p>
                            </Link>
                        </li>
                        <li className="font-medium text-base text-[#333] uppercase">
                            <Link href={"/"}>O нас</Link>
                        </li>
                        <li className="flex items-center">
                            {/* ------ Dropdown ------ */}
                            <button
                                id="wrapper"
                                type="button"
                                onClick={() => setDrop(!drop)}
                                className="relative flex items-center z-0 duration-200"
                            >
                                <Image
                                    src={Planet}
                                    width={20}
                                    height={20}
                                    alt="Picture of the author"
                                />
                                <p className="font-medium text-base text-black mx-2">
                                    {uzb ? "Uz" : rus ? "Ru" : eng ? "En" : ""}
                                </p>
                                <Image
                                    className={`duration-200 ${
                                        drop ? "-rotate-180" : ""
                                    }`}
                                    src={Vector}
                                    width={10}
                                    height={6}
                                    alt="Picture of the author"
                                />
                                {drop ? (
                                    <ul className="absolute z-50 left-0 top-[43px] lg:top-[30px] w-[80px] bg-gray-100 rounded-b-md duration-300">
                                        <li
                                            onClick={ChangeUzb}
                                            className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150 py-1 px-3 rounded-b-md"
                                        >
                                            UZB
                                        </li>
                                        <li
                                            onClick={ChangeRus}
                                            className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150  py-1 px-3"
                                        >
                                            RUS
                                        </li>
                                        <li
                                            onClick={ChangeEng}
                                            className="flex font-medium items-center text-sm hover:bg-[#fff] text-[#454545] hover:text-[#0071E3] duration-150 pt-1 pb-2 px-3 rounded-b-md"
                                        >
                                            ENG
                                        </li>
                                    </ul>
                                ) : null}
                            </button>
                        </li>
                    </ul>
                </Modal>
            </div>
        </>
    );
};

export default Header;
