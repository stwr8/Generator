import Image from "next/image";
import Link from "next/link";

// Image
import FactotyImage from "@/public/Images/factory.png";

const Factory = () => {
    return (
        <section className="container">
            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 sm:pt-[68px]">
                <Image
                    src={FactotyImage}
                    width={530}
                    height={410}
                    alt="factory"
                />
                <div className="max-w-[540px] w-full">
                    <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] sm:text-center mt-2">
                        O нас
                    </h2>
                    <p className="font-normal text-[18px] text-[#333] opacity-80 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc odio in et, lectus sit lorem id integer. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        odio in et, lectus sit lorem id integer. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nunc odio
                        in et, lectus sit lorem id integer. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Nunc odio in et,
                        lectus sit lorem id integer.
                    </p>
                    <div className="flex items-center justify-between w-full mt-[16px] sm:mt-[60px]">
                        <p className="hidden sm:block"></p>
                        <Link
                            href={"/"}
                            className="flex justify-between w-fit font-semibold sm:font-bold text-[16px] sm:text-[18px] text-white px-[30px] sm:px-[45px] py-[12px] sm:py-[15px] bg-[#4762FF] rounded-lg"
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Factory;
