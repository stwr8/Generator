import Image from "next/image";
import Link from "next/link";

// Image
import FactotyImage from "@/public/Images/factory.png";

const Factory = () => {
    return (
        <section className="bg-white">
            <div className="container flex flex-col sm:flex-row items-center justify-between !pt-5 sm:!pt-[68px]">
                <Image
                    data-aos="fade-up-right"
                    data-aos-duration="600"
                    className="max-w-[530px] w-full h-[410px] rounded-b-[50px] object-cover"
                    src={FactotyImage}
                    width={530}
                    height={410}
                    alt="factory"
                />
                <div
                    data-aos="fade-up-left"
                    data-aos-duration="600"
                    className="max-w-[540px] w-full"
                >
                    <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] sm:text-center mt-2">
                        O нас
                    </h2>
                    <p className="font-normal text-[18px] text-[#333] opacity-80 my-2">
                        СП OOO `POWER MET INTERNATIONAL` - ваш надежный партнер
                        в обслуживании и импорте индустриальных генераторов. Мы
                        специализируемся на обслуживании и поддержке всех
                        ведущих брендов производителей. Наша компания
                        обеспечивает надежные и эффективные решения для ваших
                        потребностей в энергетике, обеспечивая непрерывность
                        работы вашего бизнеса. Наш опытный и профессиональный
                        персонал гарантирует качество обслуживания и оперативные
                        поставки. Доверьтесь нам и получите высококлассное
                        обслуживание, удовлетворяющее вашим потребностям в
                        области генераторов.
                    </p>
                    <div className="flex items-center justify-between w-full mt-[16px] sm:mt-[60px]">
                        <p className="hidden sm:block"></p>
                        <Link
                            href={`/about`}
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
