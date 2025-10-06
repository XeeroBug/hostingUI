// import React from 'react'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bath, BedDouble, Heart, MapPinHouse, Pencil } from "lucide-react";

function DashBoard2({ setActivePage }: DashboardProps) {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Property Management</h1>
        <span className="text-gray-400 text-lg flex gap-2">
          You currently have 6 properties!{" "}
          <p className="text-blue-500">Add a new one</p>
        </span>
      </div>
      <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Apartment
          title="Downtown Apartment"
          amount="$350,000"
          address="965 Westwood Avenue, NY"
          bed="2"
          bath="1"
          setActivePage={setActivePage}
        />
        <Apartment
          title="Luxury House"
          amount="$1,230,000"
          address="1333 Stanley Avenue, MA"
          bed="4"
          bath="2"
          setActivePage={setActivePage}
        />
        <Apartment
          title="Detached House"
          amount="$770,000"
          address=" 725 Berkley Street, PA"
          bed="6"
          bath="3"
          setActivePage={setActivePage}
        />
        <Apartment
          title="Renovated Cottage"
          amount="$220,000"
          address="961 South Street, TX"
          bed="2"
          bath="1"
          setActivePage={setActivePage}
        />
        <Apartment
          title="Renovated Apartment"
          amount="$680,000"
          address="1890 Locust View Drive, CA"
          bed="2"
          bath="1"
          setActivePage={setActivePage}
        />
        <Apartment
          title="New Apartment"
          amount="$680,000"
          address="1890 Locust View Drive, CA"
          bed="2"
          bath="1"
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}
export default DashBoard2;
interface DashboardProps {
  setActivePage: (page: string) => void;
}
const Apartment = ({
  title,
  amount,
  address,
  bed,
  bath,
  setActivePage,
}: DashboardProps & any) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg p-6 pt-12 gap-8">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-4xl">{amount}</p>
        <p className="flex gap-2 text-gray-500 font-semibold">
          <MapPinHouse />
          {address}
        </p>
      </div>
      <Separator />
      <div className="flex justify-between">
        <p className="flex gap-1 text-gray-500 font-semibold">
          <BedDouble />
          <p className="text-black">{bed}</p> Bedrooms
        </p>
        <p className="flex gap-1 text-gray-500">
          <Bath />
          <p className="text-black">{bath}</p> Bathroom
        </p>
      </div>
      <Separator />
      <div className="flex justify-around">
        <Button
          variant="myStyle"
          className="w-[70%]"
          onClick={() => setActivePage("Listing")}
        >
          More Info
        </Button>
        <Button variant="outline" onClick={() => setActivePage("New Listing")}>
          <Pencil />
        </Button>
      </div>
    </div>
  );
};
