import { UsersRound, CloudSun, Calendar } from "lucide-react";

export default function BasicDetailsIcons({duration,season,age}) {
  return (
    <>
      <div className="flex w-full gap-10">
        {/* Calender */}
        <div className="flex gap-2 items-center">
          <Calendar className="w-[40px] h-[36px] text-[#FF7A00]" />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold">Duration</h4>
            <p className="text-sm text-gray-500 -mt-1 ">{duration}</p>
          </div>
        </div>

        {/* Best Season */}
        <div className="flex gap-2 items-center">
          <CloudSun className="w-[40px] h-[36px] text-[#FF7A00]" />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold">Best Season</h4>
            <p className="text-sm text-gray-500 -mt-1 ">{season}</p>
          </div>
        </div>

        {/* Age Range */}
        <div className="flex gap-2 items-center">
          <UsersRound className="w-[40px] h-[36px] text-[#FF7A00]" />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold">Age Limit</h4>
            <p className="text-sm text-gray-500 -mt-1 capitalize ">
              {age}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
