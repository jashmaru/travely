import {
  UtensilsCrossed,
  Hotel,
  UserRound,
  BriefcaseMedical,
  BusFront,
} from "lucide-react";

export default function IncludesSection() {
  return (
    <>
      <div className="flex flex-col shadow-xl gap-2 backdrop-blur-md p-[30px] bg-white rounded-2xl w-full">
        <div className="font-bold text-lg">Includes</div>
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center">
            <UtensilsCrossed className="text-[#FF7A00] bg-gray-100 p-[10px] size-10 rounded-full" />
            <p className="text-xs text-gray-500 capitalize">Food</p>
          </div>
          <div className="flex flex-col items-center">
            <Hotel className="text-[#FF7A00] bg-gray-100 p-[10px] size-10 rounded-full" />
            <p className="text-xs text-gray-500 capitalize">Accomodation</p>
          </div>
          <div className="flex flex-col items-center">
            <UserRound className="text-[#FF7A00] bg-gray-100 p-[10px] size-10 rounded-full" />
            <p className="text-xs text-gray-500 capitalize">Guide</p>
          </div>
          <div className="flex flex-col items-center">
            <BriefcaseMedical className="text-[#FF7A00] bg-gray-100 p-[10px] size-10 rounded-full" />
            <p className="text-xs text-gray-500 capitalize">First Aid</p>
          </div>
          <div className="flex flex-col items-center">
            <BusFront className="text-[#FF7A00] bg-gray-100 p-[10px] size-10 rounded-full" />
            <p className="text-xs text-gray-500 capitalize">Travelling</p>
          </div>
        </div>
      </div>
    </>
  );
}
