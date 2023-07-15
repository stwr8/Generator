import Image from "next/image";
import Marquee from "react-fast-marquee";

// Images
import Perkins from "@/public/Images/perkins.png";
import Shanghai from "@/public/Images/shanghai.png";

const datas = [
    { id: 1, image: Perkins },
    { id: 2, image: Shanghai },
    { id: 3, image: Perkins },
    { id: 4, image: Shanghai },
    { id: 5, image: Perkins },
    { id: 6, image: Shanghai },
    { id: 7, image: Perkins },
    { id: 8, image: Shanghai },
    { id: 9, image: Perkins },
    { id: 10, image: Shanghai },
    { id: 11, image: Perkins },
    { id: 12, image: Shanghai },
];

const Client = () => {
    return (
        <section>
            <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center pb-[20px] sm:pb-[30px]">
                Наши партнеры
            </h2>
            <Marquee speed={50} gradientWidth={0} pauseOnClick={true}>
                <div className="flex items-center space-x-[30px]">
                    {datas?.map((data) => (
                        <Image
                            className="cursor-pointer w-auto h-[62px] sm:h-[102px]"
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
