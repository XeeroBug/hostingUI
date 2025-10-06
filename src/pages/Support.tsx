// import React from "react";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import {
  Book,
  CircleHelp,
  CircleUser,
  CodeXml,
  Database,
  Globe,
  Heart,
  Lock,
  MailOpen,
  PawPrint,
  Power,
  Rocket,
  Search,
  Send,
  Server,
  Settings,
  Star,
  VenetianMaskIcon,
  Volume2,
  Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Support() {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-16">
      <div className="bg-white flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Hosting Support</h1>
        <span className="text-gray-400 text-lg">Start your search here</span>
        <div className="flex border rounded-lg items-center">
          <Input
            className="border-0 w-100 focus:border-4 focus:border-blue-300 outline-none"
            placeholder="Search Knowledge Base"
          />
          <Search
            className="bg-blue-300 h-10 rounded-br-lg rounded-r-lg font-semibold p-3"
            size="48"
            color="white"
          />
        </div>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">General Topics</span>
        <Separator />
        <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 text-center">
          <Cards
            title="Getting Started"
            value="7 Articles"
            icon={<Rocket size={48} color="gray" />}
          />
          <Cards
            title="General Hosting Topics"
            value="18 Aricles"
            icon={<Power size={48} color="gray" />}
          />
          <Cards
            title="FAQ's"
            value="25 Articles"
            icon={<CircleHelp size={48} color="gray" />}
          />
          <Cards
            title="Account Management"
            value="6 Articles"
            icon={<CircleUser size={48} color="gray" />}
          />
          <Cards
            title="DNS"
            value="9 Articles"
            icon={<Globe size={48} color="gray" />}
          />
          <Cards
            title="Hosting Plans"
            value="3 Aricles"
            icon={<Server size={48} color="gray" />}
          />
          <Cards
            title="PHP"
            value="37 Articles"
            icon={<CodeXml size={48} color="gray" />}
          />
          <Cards
            title="SSI Certificates"
            value="8 Articles"
            icon={<Lock size={48} color="gray" />}
          />
          <Cards
            title="Security/Policies"
            value="12 Articles"
            icon={<VenetianMaskIcon size={48} color="gray" />}
          />
          <Cards
            title="Troubleshooting"
            value="11 Aricles"
            icon={<Wrench size={48} color="gray" />}
          />
          <Cards
            title="Customization"
            value="19 Articles"
            icon={<Settings size={48} color="gray" />}
          />
          <Cards
            title="Announcement"
            value="45 Articles"
            icon={<Volume2 size={48} color="gray" />}
          />
        </div>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">
          Product Support
        </span>
        <Separator />
        <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 text-center">
          <Cards
            title="Dedicated Hosting"
            value="31 Articles"
            icon={<Server size={48} color="gray" />}
          />
          <Cards
            title="Shared Hosting"
            value="29 Aricles"
            icon={<Server size={48} color="gray" />}
          />
          <Cards
            title="VPS Hosting"
            value="28 Articles"
            icon={<Server size={48} color="gray" />}
          />
          <Cards
            title="WordPress"
            value="46 Articles"
            icon={<Book size={48} color="gray" />}
          />
          <Cards
            title="Email"
            value="7 Articles"
            icon={<MailOpen size={48} color="gray" />}
          />
          <Cards
            title="MySQL Databases"
            value="45 Aricles"
            icon={<Database size={48} color="gray" />}
          />
          <Cards
            title="3rd Party Domain"
            value="18 Articles"
            icon={<PawPrint size={48} color="gray" />}
          />
          <Cards
            title="Domains"
            value="13 Articles"
            icon={<Globe size={48} color="gray" />}
          />
        </div>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">
          Product Support
        </span>
        <Separator />
        
          <div className="bg-white rounded-lg grid grid-cols-2 gap-6 p-6 mt-6">
            <Questions question="How do i get started" />
            <Questions question="Security and updates" />
            <Questions question="FTP overview and credentials" />
            <Questions question="How to register a new domain?" />
            <Questions question="How to install your new WordPress website?" />
            <Questions question="How to add a new SSH user?" />
            <Questions question="How to improve performance" />
            <Questions question="How to connect to your MySQL Database?" />
            <Questions question="How to improve your website speed?" />
            <Questions question="Advanced configuration for serverless apps" />
            <Questions question="PHP 7.4 New features" />
            <Questions question="How to add a new SSL certificate to your website" />
            <Questions question="Getting started with Dedicated hosting" />
            <Questions question="Updating to latest WordPress version" />       
        </div>
      </div>
      <div className="bg-white items-center rounded-lg font-semibold flex gap-2  p-6 flex-col mt-6">
        <h1 className=" text-2xl">Didn't find what you're looking for?</h1>
        <p className="text-gray-400 text-xl">Contact our support team today.</p>
        <Button variant="myStyle" className="w-50 mt-3 p-8"><Send/>Customer Support</Button>
      </div>
    </div>
  );
}

const Cards = ({ title, value, icon }: any) => {
  return (
    <div className="bg-white rounded-lg flex flex-col hover:shadow-2xl duration-100 hover:scale-100 p-2">
      <div className="flex items-center justify-between flex-col gap-4 p-4">
        <div className="text-gray-600">{icon}</div>
        <div className="text-black font-bold text-2xl">{title}</div>
        <div className="text-gray-600 font-semibold">{value}</div>
      </div>
    </div>
  );
};
const Questions = ({ question }: any) => {
  return (
    <div className="flex gap-6 text-blue-800 font-semibold hover:text-black">
      <Star color="grey"/>
      <p>{question}</p>
    </div>
  );
};
