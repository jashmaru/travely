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
            <PopularTours />
            <PopularTreks />
            <TestimonialSection />
        </div>
        </>
    )
}