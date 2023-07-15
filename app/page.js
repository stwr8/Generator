import CarouselCatalog from "@/components/CarouselCatolog/CarouselCatalog";
import Contact from "@/components/FormContact/FormContact";
import Design from "@/components/Design/Design";
import Factory from "@/components/Factory/Factory";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/CarouselServices/CarouselServices";
import Client from "@/components/Clients/Clients";

export default function Home() {
    return (
        <>
            <Hero />
            <Factory />
            <CarouselCatalog />
            <Services />
            <Design />
            <Client title={"Наши партнеры"} />
            <Contact />
        </>
    );
}
