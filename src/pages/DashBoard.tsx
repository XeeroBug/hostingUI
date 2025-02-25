// import React from "react";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import {
  CircleDot,
  CreditCard,
  Globe,
  Heart,
  Plus,
  RotateCcw,
  Server,
  Wrench,
  X,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
export default function DashBoard() {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-16">
      <div className="bg-white flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Hosting Dashboard</h1>
        <span className="text-gray-400 text-lg">
          You Currently have 1 active server and 3 domains
        </span>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">Overview</span>
        <Separator />
        <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          <Cards
            title="3 Active"
            value="Domains"
            icon={<Globe size={64} color="blue" />}
          />
          <Cards
            title="1 VPS"
            value="Server"
            icon={<Server size={64} color="purple" />}
          />
          <Cards
            title="VIP"
            value="plan"
            icon={<CircleDot size={64} color="red" />}
          />
          <Cards
            title="$49 pending"
            value="Pending"
            icon={<CreditCard size={64} color="green" />}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pb-2">
          <span className="text-black text-lg font-semibold">VPS (1)</span>
          <Button variant="myStyle">
            <Plus />
            Add Server
          </Button>
        </div>
        <Separator />
        <div className=" font-semibold rounded-lg overflow-hidden flex flex-col mt-4">
          <div className="bg-gray-300 h-10 flex items-center px-6">
            vps741_game Los Angeles
          </div>
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <div className="">
                <Progress value={33} />
                2GB of 6GB RAM
              </div>
              <div className="">
                <Progress value={72} />
                78GB of 120GB Disk Space
              </div>
            </div>
            <div className="flex gap-3 pr-5">
              <Button variant="outline">
                <RotateCcw />
                Restart
              </Button>
              <Button variant="outline">
                <Wrench />
                Manage
              </Button>
              <Button variant="destructive">
                <X color="white" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pb-2">
          <span className="text-black text-lg font-semibold">Domains (3)</span>
          <Button variant="myStyle">
            <Plus />
            Add Domain
          </Button>
        </div>
        <Separator />
        <Domains
          title="skyvibe.com"
          description="DNS Visit WebFTP FTP Add IP Email"
          date="Expires on 12th October, 2027"
        />
        <Domains
          title="skyvibe.com"
          description="DNS Visit WebFTP FTP Add IP Email"
          date="Expires on 15th june, 2030"
        />
        <Domains
          title="skyvibe.com"
          description="DNS Visit WebFTP FTP Add IP Email"
          date="Expires in 1 week - Renew Today"
          color="red"
        />
      </div>
      <footer className="flex justify-between bottom-0">
        <p>
          <span className="font-semibold text-blue-900 text-xl">skyVibe</span>{" "}
          &copy;2025
        </p>
        <p className="flex gap-1 text-xl">
          Crafted with <Heart color="red" /> by{" "}
          <p className="font-semibold text-blue-900">Bin-Abdoul</p>
        </p>
      </footer>
    </div>
  );
}

const Cards = ({ title, value, icon }: any) => {
  return (
    <div className="bg-white rounded-lg flex flex-col hover:shadow-2xl duration-100 hover:scale-100 ">
      <div className="flex items-center justify-between flex-col gap-4 p-8">
        <div className="text-gray-600">{icon}</div>
        <div className="text-black font-bold text-2xl">{title}</div>
        <div className="text-gray-600 font-semibold">{value}</div>
      </div>
    </div>
  );
};
const Domains = ({ title, description, date, color }: any) => {
  return (
    <div>
      <div className=" font-semibold rounded-lg flex justify-between items-center mt-4 bg-white">
        <div className="flex flex-col gap-2 p-4">
          <p className="font-semibold text-xl flex items-center gap-1">
            <span
              className={
                color ? "text-red-400 text-6xl" : "text-gray-400 text-6xl"
              }
            >
              •
            </span>
            {title}
          </p>
          <p className="hover:text-black text-blue-700">{description}</p>
          <p className={color ? "text-red-400" : "text-gray-400"}>{date}</p>
        </div>
        <div className="flex gap-2 pr-4">
          <Button variant="outline">
            <Wrench />
            Manage
          </Button>
          <Button variant="destructive">
            <X color="white" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
