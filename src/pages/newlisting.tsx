// import React from 'react'
import "../styles.css";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Bath,
  Bed,
  CarFront,
  Expand,
  Flame,
  Globe,
  Heart,
  Mail,
  MapPinHouseIcon,
  Plus,
} from "lucide-react";

function NewListing() {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl">Add New Listing</h1>
        <span className="text-gray-400 text-lg flex gap-2">
          This is the 7th property you are adding to your portfolio.
        </span>
      </div>
      <div className="rounded-lg bg-white flex flex-col overflow-hidden gap-3 py-18 px-8">
        <span className="font-semibold">Photos</span>
        <Separator />
        <div className="flex-wrap grid grid-cols-2 items-center">
          <span className="text-gray-600 font-semibold">
            Add nice and clean photos to better showcase your property
          </span>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="font-semibold">
              Choose file
            </label>
            <input
              type="file"
              id="file"
              className="rounded-lg p-2 border-1 w-100"
            />
          </div>
        </div>
        <span className="font-bold mt-10">Vital Info</span>
        <Separator />
        <div className="flex items-start mt-5">
          <span className="text-gray-600 font-semibold w-[40%]">
            Pay extra attention since this is the data which customers will see
            first.
          </span>
          <div className="flex flex-col gap-8">
            <MyInput title="Name" placeholder="eg Brand new Appartment" />
            <MyInput title="Address" placeholder="eg Street Name 45, NY" />

            <label htmlFor="status" className="font-semibold">
              Status
              <select
                name=""
                id="status"
                className="rounded-lg p-2 border-1 w-100 block"
              >
                <option value="">Please Select</option>
                <option value="">For Sale</option>
                <option value="">For Rent</option>
                <option value="">Unavailable</option>
              </select>
            </label>

            <MyInput title="price" placeholder="eg $250,000" />
          </div>
        </div>
        <span className="font-semibold mt-10">Additional Info</span>
        <Separator />
        <div className="flex mt-10">
          <span className="text-gray-600 font-semibold w-[40%]">
            Add more details to make your property more appealing and
            interesting
          </span>
          <div className="flex flex-col gap-8">
            <label htmlFor="Description" className="font-semibold">
              Heating
              <textarea
                id=""
                className="rounded-lg p-2 border-1 w-100 block h-50"
                placeholder="How old is it? Which are it's key features?"
              ></textarea>
            </label>
            <Select title="Bedrooms" />
            <Select title="Bedrooms" />
            <Select title="Parking" />
            <label htmlFor="Heating" className="font-semibold">
              Heating
              <select
                name=""
                id="Heating"
                className="rounded-lg p-2 border-1 w-100 block"
              >
                <option value="">Please Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </label>
            <MyInput title="Size (in sq.ft.)" placeholder="eg 300" />
          </div>
        </div>
        <span className="font-semibold mt-10">Contact Info</span>
        <Separator />
        <div className="flex mt-10">
          <span className="text-gray-600 font-semibold w-[40%]">
            How can your customers reach you?
          </span>
          <div className="flex flex-col gap-8">
            <MyInput title="Email" placeholder="" />
            <MyInput title="Phone" placeholder="" />
            <Button variant="myStyle" className="w-[50%]">
              <Plus />
              Add Listing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewListing;

const Select = ({ title }: any) => {
  return (
    <label htmlFor={title} className="font-semibold">
      {title}
      <select
        name=""
        id={title}
        className="rounded-lg p-2 border-1 w-100 block"
      >
        <option value="">Please Select</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10+</option>
      </select>
    </label>
  );
};
const MyInput = ({ title, placeholder }: any) => {
  return (
    <label htmlFor={title} className="font-semibold">
      {title}
      <input
        type="text"
        id={title}
        className="rounded-lg p-2 border-1 w-100 block"
        placeholder={placeholder}
      />
    </label>
  );
};
