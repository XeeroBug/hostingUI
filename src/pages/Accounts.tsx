// import React, { ReactNode } from "react";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import { Banknote, CreditCard, Heart, Lock, User, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Accounts() {
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-16">
      <div className="bg-white flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Manage Account</h1>
        <span className="text-gray-400 text-lg">
          View your account and change your settings.
        </span>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">Overview</span>
        <Separator />
        <div className=" flex-wrap grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
          <div>
            <div className="bg-white overflow-hidden rounded-lg flex flex-col hover:shadow-2xl duration-100 hover:scale-100 ">
              <div className="bg-gray-200 flex gap-2 font-semibold text-gray-800 p-4">
                <User size={24} />
                Accounts
              </div>
              <div className="flex justify-between flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <p className="">
                    <span className="font-semibold">Start Date: </span>July 25,
                    2015
                  </p>
                  <p className="">
                    <span className="font-semibold">ID: </span>#687412
                  </p>
                  <p className="">
                    <span className="font-semibold">Name: </span>Business
                    Hosting
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button variant="myStyle">Rename</Button>
                  <Button variant="destructive">Close Account</Button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg flex flex-col hover:shadow-2xl duration-100 hover:scale-100 ">
            <div className="bg-gray-200 flex gap-2 font-semibold text-gray-800 p-4">
              <Banknote size={24} />
              Billing Cycle
            </div>
            <div className="flex justify-between flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">2019-07-25</span> to{" "}
                  <span className="font-semibold">2019-08-25</span>
                </p>
                You are rebilled on day 1 of each month if you owe more than
                $4.99.
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg flex flex-col duration-100 hover:scale-100 ">
            <div className="bg-gray-200 flex gap-2 font-semibold text-gray-800 p-4">
              <CreditCard size={24} />
              Amount Due
            </div>
            <div className="flex justify-between flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold flex gap-2">
                  $49<p className="text-blue-400">View Invoice</p>
                </span>
                Save time and hassle by setting up automatic recurring payments!
              </div>
              <div className="flex gap-4">
                <Button variant="myStyle">Set Up Autopay</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="text-black text-lg font-semibold">Settings</span>
        <Separator />
        <div className="bg-white overflow-hidden rounded-lg flex mt-6 flex-col duration-100 hover:scale-100 ">
          <div className="bg-gray-200 flex gap-2 font-semibold text-gray-800 p-4">
            <UserPen size={24} />
            Accounts
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              Your account’s vital info. Your name should match your public ID.
            </div>
            <form className="flex flex-col gap-6">
              <label htmlFor="">
                Name
                <Input type="text" placeholder="John Smith" />
              </label>
              <label htmlFor="">
                Email Address
                <Input type="email" placeholder="example@gmail.com" />
              </label>
              <Button variant="myStyle" className="w-50">
                Update
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-white overflow-hidden rounded-lg flex items-center mt-6 flex-col duration-100">
          <div className="bg-gray-200 w-full flex gap-2 font-semibold text-gray-800 p-4">
            <Lock size={24} />
            Security
          </div>
          <div className="p-6 grid grid-cols-3">
            <div className="">
              Keep your account as secure and as private as you like.
            </div>
            <div className="flex flex-col gap-5">
              <Checkbox
                title="Online Status"
                description="Show your status to all"
              />
              <Checkbox
                title="Verify on Login"
                description="Most secure option"
              />
              <Checkbox title="Auto Updates" description="Keep app updated" />
            </div>
            <div className="flex flex-col gap-5">
              <Checkbox
                title="Notifications"
                description="For every transaction"
              />
              <Checkbox
                title="API Access"
                description="Enable access from third party apps"
              />
              <Checkbox
                title="Two Factor Auth"
                description="Using an authenticator"
              />
            </div>
          </div>
          <Button variant="myStyle" className="w-50 m-4">
            Update
          </Button>
        </div>
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
const Checkbox = ({ title, description }: any) => {
  return (
    <div className="flex gap-2">
      <input type="checkbox" className="mb-6" id="" />
      <div className="flex flex-col font-semibold">
        {title}
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};
