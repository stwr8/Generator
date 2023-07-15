import Hero from "@/components/HeroForPage/Hero";

const Catalog = () => {
    return (
        <>
            <Hero
                title={"Все способы связи с нами 24/7"}
                text={"Мы предоставляем круглосуточную поддержку наших клиентов"}
                route={"Контакты "}
                link={false}
                bgImage={"contact"}
            />
        </>
    );
};

export default Catalog;
