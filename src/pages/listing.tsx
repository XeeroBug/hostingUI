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
} from "lucide-react";

function Listing() {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Downtown Apartment</h1>
        <span className="text-gray-400 text-lg flex gap-2">
          <MapPinHouseIcon />
          965 Westwood Avenue, NY
        </span>
      </div>
      <div className="rounded-lg bg-white flex flex-col overflow-hidden">
        <div className="py-25 gap-3 bg-gray-600 text-white font-semibold text-center">
          <h1 className="text-4xl">$350,000</h1>
          <Button variant="myStyle" className="">
            For Sale
          </Button>
        </div>
        <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-200 py-8 px-5">
          <div className="flex gap-1">
            <Bed />
            <span>2</span>Bedrooms
          </div>
          <div className="flex gap-1">
            <Bath />
            <span>1</span>bathroom
          </div>
          <div className="flex gap-1">
            <CarFront />
            <span>1</span>parking
          </div>
          <div className="flex gap-1">
            <Expand />
            <span>1</span>sq.ft
          </div>
          <div className="flex gap-1">
            <Flame />
            <span></span>electricity
          </div>
          <div className="flex gap-1">
            <Globe />
            <span>1</span>Gbps
          </div>
        </div>
        <div className=" flex-wrap grid grid-cols-2  gap-8">
          <p className="p-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea
            architecto, voluptatem, sit adipisci excepturi dolores enim labore
            commodi omnis ratione quia aut modi deserunt eos explicabo qui
            perferendis sed. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Architecto, est esse. Esse odio quo cumque consequatur ullam
            obcaecati excepturi magni blanditiis? Repellendus omnis laborum
            similique non, porro architecto iste dolorum.
          </p>
          <p className="p-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea
            architecto, voluptatem, sit adipisci excepturi dolores enim labore
            commodi omnis ratione quia aut modi deserunt eos explicabo qui
            perferendis sed. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Architecto, est esse. Esse odio quo cumque consequatur ullam
            obcaecati excepturi magni blanditiis? Repellendus omnis laborum
            similique non, porro architecto iste dolorum.
          </p>
          <p className="p-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea
            architecto, voluptatem, sit adipisci excepturi dolores enim labore
            commodi omnis ratione quia aut modi deserunt eos explicabo qui
            perferendis sed. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Architecto, est esse. Esse odio quo cumque consequatur ullam
            obcaecati excepturi magni blanditiis? Repellendus omnis laborum
            similique non, porro architecto iste dolorum.
          </p>
          <p className="p-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea
            architecto, voluptatem, sit adipisci excepturi dolores enim labore
            commodi omnis ratione quia aut modi deserunt eos explicabo qui
            perferendis sed. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Architecto, est esse. Esse odio quo cumque consequatur ullam
            obcaecati excepturi magni blanditiis? Repellendus omnis laborum
            similique non, porro architecto iste dolorum.
          </p>
        </div>
        <Separator />
        <div className="flex justify-between p-4">
          <Button variant="myStyle" className="p-4 flex gap-2">
            <Mail color="gray" />
            Get in touch
          </Button>
          <Button variant="destructive" className="p-4 flex">
            <Heart color="orange" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
