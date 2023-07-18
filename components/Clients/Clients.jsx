import Image from "next/image";
import Marquee from "react-fast-marquee";

// Images
import Partner1 from "@/public/Images/partner1.png";
import Partner2 from "@/public/Images/partner2.png";
import Partner3 from "@/public/Images/partner3.png";
import Partner4 from "@/public/Images/partner4.png";
import Partner5 from "@/public/Images/partner5.png";
import Partner6 from "@/public/Images/partner6.png";
import Partner7 from "@/public/Images/partner7.png";

const datas = [
    { id: 1, image: Partner1 },
    { id: 2, image: Partner2 },
    { id: 3, image: Partner3 },
    { id: 4, image: Partner4 },
    { id: 5, image: Partner5 },
    { id: 6, image: Partner6 },
    { id: 7, image: Partner7 },
    { id: 8, image: Partner1 },
    { id: 9, image: Partner2 },
    { id: 10, image: Partner3 },
    { id: 11, image: Partner4 },
    { id: 12, image: Partner5 },
    { id: 13, image: Partner6 },
    { id: 14, image: Partner7 },
];

const Client = ({ title }) => {
    return (
        <section>
            {title ? (
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center pb-[40px] sm:pb-[50px]">
                    {title}
                </h2>
            ) : null}
            <Marquee speed={60} pauseOnClick={true}>
                <div className="flex items-center space-x-[50px] h-[82px] sm:h-[102px]">
                    {datas?.map((data) => (
                        <Image
                            className="cursor-pointer w-auto h-auto"
                            key={data?.id}
                            src={data?.image}
                            alt="generator"
                        />
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default Client;
