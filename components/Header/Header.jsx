"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

// ---> Images
import Call from "../../public/Images/call.svg";
import Planet_Black from "../../public/Images/planet_black.svg";
import Vector from "../../public/Images/vector.svg";
import Logo from "../../public/Images/power.png";
import CallWhite from "../../public/Images/call_white.svg";
import Search from "../../public/Images/search.svg";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [scrollDown, setScrollDown] = useState("");

    // ---> Dropdown
    const [drop, setDrop] = useState(false);
    const [drop1, setDrop1] = useState(false);
    // ---> Change Languages
    const [uzb, setUzb] = useState(true);
    const [rus, setRus] = useState(false);
    const [eng, setEng] = useState(false);
    const [tr, setTr] = useState(false);
    const [tg, setTg] = useState(false);
    const [kaz, setKaz] = useState(false);
    const [ky, setKy] = useState(false);

    // ---> Close dropdown
    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.id !== "wrapper") {
                setDrop(false);
                setDrop1(false);
            }
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

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            setScrollDown("bg-white");
        } else {
            setScrollDown("");
        }
    });

    // ---> Change Language
    const ChangeUzb = () => {
        setUzb(true);
        setRus(false);
        setEng(false);
        setTr(false);
        setTg(false);
        setKaz(false);
        setKy(false);
    };
    const ChangeRus = () => {
        setUzb(false);
        setRus(true);
        setEng(false);
        setTr(false);
        setTg(false);
        setKaz(false);
        setKy(false);
    };
    const ChangeEng = () => {
        setUzb(false);
        setRus(false);
        setEng(true);
        setTr(false);
        setTg(false);
        setKaz(false);
        setKy(false);
    };
    const ChangeTg = () => {
        setUzb(false);
        setRus(false);
        setEng(false);
        setTr(false);
        setTg(true);
        setKaz(false);
        setKy(false);
    };
    const ChangeTr = () => {
        setUzb(false);
        setRus(false);
        setEng(false);
        setTr(true);
        setTg(false);
        setKaz(false);
        setKy(false);
    };
    const ChangeKaz = () => {
        setUzb(false);
        setRus(false);
        setEng(false);
        setTr(false);
        setTg(false);
        setKaz(true);
        setKy(false);
    };
    const ChangeKy = () => {
        setUzb(false);
        setRus(false);
        setEng(false);
        setTr(false);
        setTg(false);
        setKaz(false);
        setKy(true);
    };

    return (
        <>
            <header className={`container relative bg-white`}>
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
                            <Link
                                href="tel:+998980013666"
                                className="font-normal text-base text-[#333333] opacity-75 ml-2"
                            >
                                +998 98 001 3666
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/contact"}
                                className="font-normal text-base text-[#333333] opacity-75"
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <span className="inline-block h-[50px] w-[1px] bg-[#333333] opacity-10 ml-[23px] mr-[10px]"></span>
                    {/* ------ Dropdown ------ */}
                    <Image
                        src={Planet_Black}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    <button
                        id="wrapper"
                        onClick={() => setDrop(!drop)}
                        className="relative flex items-center z-50 duration-200 font-medium text-base text-black px-2"
                    >
                        {uzb
                            ? "Uz"
                            : rus
                            ? "Ru"
                            : eng
                            ? "En"
                            : tr
                            ? "Tr"
                            : tg
                            ? "Tg"
                            : kaz
                            ? "Kz"
                            : ky
                            ? "Ky"
                            : null}
                        <Image
                            className={`duration-200 ml-2 ${
                                drop ? "-rotate-180" : ""
                            }`}
                            src={Vector}
                            width={10}
                            height={6}
                            alt="Picture of the author"
                        />
                        {drop ? (
                            <ul className="absolute z-50 -left-[24px] top-[43px] lg:top-[47px] w-[80px] bg-gray-100 rounded-lg duration-500 !text-center">
                                <li
                                    onClick={ChangeUzb}
                                    className="w-full flex font-medium justify-center items-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Uz
                                </li>
                                <li
                                    onClick={ChangeRus}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Ru
                                </li>
                                <li
                                    onClick={ChangeEng}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    En
                                </li>
                                <li
                                    onClick={ChangeTg}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Tg
                                </li>
                                <li
                                    onClick={ChangeTr}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Tr
                                </li>
                                <li
                                    onClick={ChangeKaz}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Kz
                                </li>
                                <li
                                    onClick={ChangeKy}
                                    className="w-full flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                >
                                    Ky
                                </li>
                            </ul>
                        ) : null}
                    </button>
                </div>
                {/* --- Header bottom --- */}
                <div
                    className={`!${scrollDown} fixed top-0 left-0 sm:static z-50 bg-white bg-opacity-40 backdrop-blur-sm w-full flex items-center justify-between px-4 py-[18px]`}
                >
                    <Link className="flex items-center" href="/">
                        <Image
                            className="w-[120px] h-[30px] md:w-[200px] md:h-[50px]"
                            src={Logo}
                            alt="site-logo"
                        />
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-[46px]">
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/catalog"}>Наша продукция</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/service"}>Наши услуги</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/about"}>О нас</Link>
                            </li>
                            <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                                <Link href={"/partner"}>ПАРТНЕРЫ</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex items-center">
                        <input
                            className="relative max-w-[120px] w-full pl-[43px] pr-[8px] py-[8px] border-[1.5px] outline-none border-white focus:border-[#4762FF] rounded-[6px] text-base text-[#4F6E7B] !bg-transparent mr-5"
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
                        <Link
                            href={"contact"}
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
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center space-x-4 ml-10">
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
                        <div className="flex items-center relative z-50 duration-200">
                            {/* ------ Dropdown ------ */}
                            <Image
                                onClick={() => {
                                    setDrop1(!drop1);
                                }}
                                id="wrapper"
                                className="w-[25px] h-[25px] "
                                src={Planet_Black}
                                width={25}
                                height={25}
                                alt="Picture of the author"
                            />
                            {drop1 ? (
                                <ul className="absolute z-50 -left-[30px] top-[50px] lg:top-[47px] w-[80px] bg-gray-100 rounded-b-lg duration-500 !text-center">
                                    <li
                                        onClick={ChangeUzb}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Uz
                                    </li>
                                    <li
                                        onClick={ChangeRus}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Ru
                                    </li>
                                    <li
                                        onClick={ChangeEng}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        En
                                    </li>
                                    <li
                                        onClick={ChangeTg}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Tg
                                    </li>
                                    <li
                                        onClick={ChangeTr}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Tr
                                    </li>
                                    <li
                                        onClick={ChangeKaz}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Kz
                                    </li>
                                    <li
                                        onClick={ChangeKy}
                                        className="flex font-medium items-center justify-center text-sm hover:bg-[#4762FF] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                    >
                                        Ky
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                        <button
                            className="flex flex-col justify-between !w-[35px] h-5 sm:hidden"
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            <span
                                className={`${
                                    showModal
                                        ? "-rotate-45 translate-y-[8.8px]"
                                        : ""
                                } inline-block w-full border border-black opacity-50 duration-300`}
                            ></span>
                            <span
                                className={`${
                                    showModal ? "hidden" : ""
                                } inline-block w-[60%] border border-black opacity-50`}
                            ></span>
                            <span
                                className={`${
                                    showModal
                                        ? "rotate-45 -translate-y-[8.8px]"
                                        : ""
                                } inline-block w-full border border-black opacity-50 duration-300`}
                            ></span>
                        </button>
                    </div>
                </div>

                {/* --- Sidebar --- */}
                <Modal
                    change={true}
                    isVisible={showModal}
                    onClose={() => {
                        setShowModal(false);
                    }}
                >
                    <div className="flex items-center justify-between py-[18px] ">
                        <div
                            onClick={() => setShowModal(false)}
                            className="flex items-center justify-between"
                        >
                            <Link className="flex items-center" href="/">
                                <Image
                                    className="w-[150px] h-[35px] md:w-[200px] md:h-[50px]"
                                    src={Logo}
                                    alt="site-logo"
                                />
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
                                    } inline-block w-full border border-black opacity-50 duration-300`}
                                ></span>
                                <span
                                    className={`${
                                        showModal ? "hidden" : ""
                                    } inline-block w-[60%] border border-black opacity-50`}
                                ></span>
                                <span
                                    className={`${
                                        showModal
                                            ? "rotate-45 -translate-y-[8.8px]"
                                            : ""
                                    } inline-block w-full border border-black opacity-50 duration-300`}
                                ></span>
                            </button>
                        </div>
                    </div>
                    <nav className="block md:hidden mt-[30px]">
                        <ul className="flex items-center flex-col text-center space-y-5">
                            <li
                                onClick={() => setShowModal(false)}
                                className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase"
                            >
                                <Link href={"/catalog"}>Наша продукция</Link>
                            </li>
                            <li
                                onClick={() => setShowModal(false)}
                                className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase"
                            >
                                <Link href={"/service"}>Наши услуги</Link>
                            </li>
                            <li
                                onClick={() => setShowModal(false)}
                                className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase"
                            >
                                <Link href={"/about"}>О нас</Link>
                            </li>
                            <li
                                onClick={() => setShowModal(false)}
                                className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase"
                            >
                                <Link href={"/partner"}>ПАРТНЕРЫ</Link>
                            </li>
                        </ul>
                    </nav>
                    <ul className="flex items-center flex-col text-center space-y-5 mt-5">
                        <li className="font-medium text-base text-[#333] hover:text-[#4762FF] transition ease-in-out duration-200 uppercase">
                            24/7
                        </li>
                        <li className="font-medium text-base text-[#333]  uppercase">
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
                                <p className="font-medium text-base text-[#333] ml-2 hover:text-[#4762FF] transition ease-in-out duration-200">
                                    +998 98 001 3666
                                </p>
                            </Link>
                        </li>
                    </ul>
                </Modal>
            </header>
        </>
    );
};

export default Header;
