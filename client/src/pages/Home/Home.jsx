import HeroSection from "./HeroSection";
import PopularTours from "./PopularTours";
import PopularTreks from "./PopularTreks";
import TestimonialSection from "./Testimonial";

export default function Home()
{
    return(
        <>
        <div className="HomePage">
            <HeroSection />
            <div className="Content bg-gray-50">
                <PopularTours />
                <PopularTreks />
                <TestimonialSection />
            </div>
        </div>
        </>
    )
}