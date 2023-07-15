import Link from "next/link";

const Hero = ({ title, text, link, route, bgImage }) => {
    return (
        <section
            className={`${
                bgImage == "about"
                    ? "bg-hero-first-mobile sm:bg-hero-first"
                    : bgImage == "catalog"
                    ? "bg-hero-second-mobile sm:bg-hero-second"
                    : bgImage == "service"
                    ? "bg-hero-third-mobile sm:bg-hero-third"
                    : bgImage == "partner"
                    ? "bg-hero-fourth-mobile sm:bg-hero-fourth"
                    : bgImage == "contact"
                    ? "bg-hero-fifth-mobile sm:bg-hero-fifth"
                    : null
            } bg-no-repeat bg-cover`}
        >
            <div className="container ">
                <div className="hidden sm:flex items-center pt-[6px]">
                    <Link
                        className="font-normal text-[20px] text-link-color"
                        href={"/"}
                    >
                        Главная /{" "}
                    </Link>{" "}
                    <span className="inline-block font-normal text-[20px] text-white ml-[3px]">
                        {route}
                    </span>
                </div>
                <div
                    className={`${
                        bgImage == "partner" || "contact"
                            ? "pt-[170px] sm:pt-[180px] pb-[206px] sm:pb-[213px]"
                            : "pt-[170px] sm:pt-[137px] pb-[206px] sm:pb-[166px]"
                    } sm:max-w-[630px] w-full `}
                >
                    <h1
                        className={`font-bold ${
                            bgImage == "partner" || "contact"
                                ? "text-[30px] md:text-[40px]"
                                : "text-[30px] md:text-[50px]"
                        } ${
                            bgImage == "about"
                                ? "!text-[46px] sm:!text-[60px]"
                                : null
                        } leading-60 text-white uppercase`}
                    >
                        {title}
                    </h1>
                    <p className="text-[18px] md:text-[24px] text-white opacity-80 mt-[10px] md:mt-[16px]">
                        {text}
                    </p>
                    {link ? (
                        <Link
                            href={`tel:+998980013666`}
                            className="flex items-center w-fit font-semibold text-white text-[18px] bg-[#4762FF] rounded-[8px] px-[30px] py-[15px] mt-[32px]"
                        >
                            Консультация
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Hero;
