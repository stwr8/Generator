import Catolog from "@/components/Catolog/Catolog";
import Contact from "@/components/Contact/Contact";
import Design from "@/components/Design/Design";
import Factory from "@/components/Factory/Factory";
import Hero from "@/components/Hero/Hero";
import Partner from "@/components/Partner/Partner";
import Services from "@/components/Services/Services";

export default function Home() {
    return (
        <>
            <Hero />
            <Factory />
            <Catolog />
            <Services />
            <Design />
            <Partner />
            <Contact />
        </>
    );
}
