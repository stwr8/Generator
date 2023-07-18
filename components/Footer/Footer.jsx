import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../../public/Images/logoWhite.png";
import Arrow from "../../public/Images/arrow-up.svg";

const Footer = () => {
    return (
        <div className="bg-[#1A1A1A] !pt-[50px] !pb-[35px]">
            <div className="container flex !items-end !pb-[35px] border-b-[0.7px] border-[#474747]">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 items-start space-y-5 sm:space-y-0">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center" href="/">
                            <Image
                                className="w-[140px] sm:w-[170px] h-[35px] sm:h-[50px]"
                                src={Logo}
                                alt="site-logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <p className="block font-bold text-[20px] text-white">
                            Главная
                        </p>
                        <ul className="space-y-[6px] mt-[15px]">
                            <li className="font-normal text-base text-white">
                                <Link href={"/catalog"}>Наш каталог</Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={"/service"}>Наши услуги</Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={"/about"}>O нас</Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={"/contact"}>Оставить заявку</Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={"/partner"}>Наши партнеры</Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={"/contact"}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="block font-bold text-[20px] text-white">
                            Контакты
                        </p>
                        <div className="space-y-[6px] mt-[15px]">
                            <p className="font-bold text-base text-white">
                                Адрес
                            </p>
                            <address className="not-italic inline-block font-normal text-base text-white">
                                Taras shevchenko street. <br /> 34.Tashkent,
                                <Link href={"/"}></Link>Mirabad Uzbekistan
                            </address>
                            <p className="font-bold text-base text-white">
                                Mail
                            </p>
                            <a
                                className="not-italic inline-block font-normal text-base text-white"
                                href="mailto:powermet.infor@gmail.com"
                            >
                                powermet.infor@gmail.com
                            </a>
                            <Link
                                href="tel+998900013666"
                                className="inline-block font-normal text-base text-white"
                            >
                                +998 90 001 3 666
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="block font-bold text-[20px] text-white leading-6">
                            Получите бесплатную консультацию
                        </p>
                        <form
                            className="flex flex-col space-y-5 mt-[15px]"
                            autoComplete="off"
                            method="post"
                        >
                            <input
                                type="text"
                                placeholder="Имя и номер телефона"
                                className="w-full h-[50px] rounded-[8px] outline-none border border-white bg-input-bg-footer text-white placeholder-white px-3"
                            />
                            <button
                                className="w-full h-[50px] rounded-[8px] bg-input-bg-contact font-bold border border-white text-white"
                                type="submit"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
                <Link
                    className="flex items-center justify-center w-[60px] h-[50px] bg-[#313131] rounded-lg ml-[35px] sm:mb-[35px]"
                    href={`/`}
                >
                    <Image src={Arrow} width={21} height={12} alt="arrow-up" />
                </Link>
            </div>
            <p className="container sm:!p-0 font-normal text-[12px] text-[#D9DBE1] !mt-[18px]">
                СП ООО «POWER MET INTERNATIONAL»
            </p>
        </div>
    );
};

export default Footer;
