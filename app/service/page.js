import Hero from "@/components/HeroForPage/Hero";

const Service = () => {
    return (
        <>
            <Hero
                title={
                    "Услуги нашей кампании"
                }
                text={
                    "На этой старнице вы можете посмотреть всю информацию по фильтрам а также скачать pdf каждого генератора"
                }
                route={"Сервисы"}
                link={true}
                bgImage={"service"}
            />
        </>
    );
};

export default Service;
