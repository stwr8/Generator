import Hero from "@/components/HeroForPage/Hero";

const Catalog = () => {
    return (
        <>
            <Hero
                title={"Полный каталог всех генераторов, а также производителей"}
                text={
                    "На этой старнице вы можете посмотреть всю информацию по фильтрам а также скачать pdf каждого генератора"
                }
                route={"Kаталог"}
                link={true}
                bgImage={"catalog"}
            />
        </>
    );
};

export default Catalog;
