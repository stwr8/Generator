import Link from "next/link";

const Hero = ({ title, text, link, route }) => {
    return (
        <section className="bg-hero-onas bg-no-repeat bg-cover">
            <div className="container ">
                <div className="hidden sm:flex items-center mt-[6px]">
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
                <div className="max-w-[582px] w-full pt-[170px] sm:pt-[137px] pb-[206px] sm:pb-[166px]">
                    <h1 className="font-bold text-[30px] md:text-[50px] leading-60 text-white uppercase">
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
