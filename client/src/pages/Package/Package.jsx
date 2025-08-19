import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicDetailsIcons from "./BasicDetailsIcons";
import IncludesSection from "./IncludesSection";
import RightSection from "./RightSection";

export default function Package() {
  const { type, id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/${type}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error In Fetching Data In Package File : " + error);
      });
  }, [type, id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No package found</p>;

  return (
    <>
      {/* Package Page */}
      <div>
        {/* Tour Or Trek Image */}
        <div
          className="w-full h-[50vh] bg-cover bg-center relative p-[50px] flex items-end"
          style={{ backgroundImage: `url(${data.imgurl})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative font-bold font-poppins text-[40px] text-white">
            {data.name}
          </h1>
        </div>

        {/* Package Content & Booking Inquiry Or Booking */}
        <div className="flex bg-gray-100 gap-[50px] p-[50px]">

            {/* Left Content */}
            <div className="w-[70vw] flex flex-col gap-10 bg-inherit">

                {/* Section One */}
                <BasicDetailsIcons duration={data.duration} season={data.best_season} age={data.age_range}/>

                {/* Section Two - Includes Icons */}
                <IncludesSection />

                {/* Right Section Four In Mobile View */}
                <RightSection className="md:hidden w-full gap-4" price={data.price} />

            </div>

            {/* Right Content Sticky */}
            <RightSection className="hidden md:block w-[30vw] " price={data.price} />
        </div>
      </div>
    </>
  );
}
