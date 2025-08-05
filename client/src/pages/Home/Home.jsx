import HeroSection from "./HeroSection";
import PopularTours from "./PopularTours";
import PopularTreks from "./PopularTreks";

export default function Home()
{
    return(
        <>
        <div className="HomePage">
            <HeroSection />
            
                <PopularTours />
            
            
                <PopularTreks />
            
        </div>
        </>
    )
}