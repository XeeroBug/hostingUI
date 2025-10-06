// import React from "react";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import {
  Folder,
  Forward,
  Globe,
  Heart,
  Mail,
  MoveDown,
  Plus,
  Wrench,
  X,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { resetUser, setUser } from "@/redux/userSlice";

export default function Email() {
  const user = useSelector((state: RootState) => state.persistedReducer);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-16">
      <div className="bg-white flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
        <h1 className="text-4xl ">Email Management</h1>
        <Button
          onClick={() => {
            dispatch(
              setUser({
                email: "abdoulbin38@gmail.com",
                firsName: "hamza",
                lastName: "abdoulbin",
                uid: "123456789",
                photoURL:
                  "https://avatars.githubusercontent.com/u/123456789?v=4",
              })
            );
          }}
        >
          click me
        </Button>
        <Button
          onClick={() => {
            dispatch(resetUser());
          }}
        >
          reset user
        </Button>
        <span className="text-gray-400 text-lg">
          You currently have 6 active mailboxes and 3 forwarding email
          addresses!
        </span>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold">Overview</span>
        <Separator />
        <div className=" flex-wrap grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
          <Cards
            title="6 Active"
            value="Mailboxes"
            icon={<Mail size={64} color="blue" />}
          />
          <Cards
            title="3 Forwarding"
            value="Email Addresses"
            icon={<Forward size={64} color="purple" />}
          />
          <Cards
            title="1GB Storage"
            value="Current Storage"
            icon={<Folder size={64} color="red" />}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pb-2">
          <span className="text-black text-lg font-semibold">
            Mailboxes (6)
          </span>
          <Button variant="myStyle">
            <Plus />
            Add Mailbox
          </Button>
        </div>
        <Separator />
        <div className=" font-semibold rounded-lg overflow-hidden flex flex-col mt-4">
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <ProgressContainer
                title="info@skyvibe.com"
                value="10.2"
                description="0.12GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
          <Separator />
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <ProgressContainer
                title="support@skyvibe.com"
                value="20.3"
                description="0.23GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
          <Separator />
          <div className="flex items-center justify-between bg-white">
            <div className="p-8 flex flex-col gap-6 font-semibold">
              <ProgressContainer
                title="hostmaster@skyvibe.com"
                value="10.5"
                description="0.15GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
        </div>
        <div className=" font-semibold rounded-lg overflow-hidden flex flex-col mt-4">
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <ProgressContainer
                title="admin@skyvibe.io"
                value="7"
                description="0.07GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
          <Separator />
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <ProgressContainer
                title="hostmaster@skyvibe.io"
                value="3"
                description="0.03GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
        </div>
        <div className=" font-semibold rounded-lg overflow-hidden mt-4">
          <div className="flex items-center justify-between bg-white ">
            <div className="p-8 flex flex-col gap-6">
              <ProgressContainer
                title="info@skyvibe.co.uk"
                value="50"
                description="0.5GB of 1GB Storage"
              />
            </div>
            <Buttons />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pb-2">
          <span className="text-black text-lg font-semibold">
            Email Forwarding (3)
          </span>
          <Button variant="myStyle">
            <Plus />
            Add Forwarder
          </Button>
        </div>
        <Separator />
        <Emails title="skyvibe.com" address="info@skyvibe.com" />
        <Emails title="skyvibe.com" address="hostmaster@skyvibe.io" />
        <Emails title="skyvibe.com" address="admin@skyvibe.io" />
      </div>
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
const Emails = ({ title, address }: any) => {
  return (
    <div>
      <div className=" font-semibold rounded-lg flex justify-between items-center mt-4 bg-white">
        <div className="flex flex-col gap-2 p-4">
          <p className="font-semibold text-xl flex items-center gap-1">
            {title}
          </p>
          <p className="hover:text-black text-blue-700">
            <MoveDown size={18} color="blue" />
          </p>
          <p className="text-gray-400">{address}</p>
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
const Buttons = () => {
  return (
    <div className="flex gap-3 pr-5">
      <Button variant="outline">
        <Globe />
        Webmail
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
  );
};
const ProgressContainer = ({ title, value, description }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {title}
      <Progress value={value} />
      {description}
    </div>
  );
};
