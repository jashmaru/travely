import HeroSection from "./HeroSection";
import PopularTours from "./PopularTours";

export default function Home()
{
    return(
        <>
        <div className="HomePage">
            <HeroSection />
            <PopularTours />
        </div>
        </>
    )
}