import React from 'react'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Cake,
  CircleUserRound,
  Gift,
  GiftIcon,
  Globe,
  Grid2X2,
  Heart,
  Mail,
  Pencil,
  Plus,
  Smartphone,
  SquarePen,
  Star,
  Users,
} from "lucide-react";
import { auth, db } from '@/Firebase/firebase.util';
import { doc, getDoc } from 'firebase/firestore';

export default function Profile() {
    const [activeUser, setActiveUser] = React.useState<any>("");
      const [userInfo, setUserInfo] = React.useState<any>("");
     React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            setActiveUser(user.uid);
          } else {
            setActiveUser(null);
          }
        });
      }, []);
      const getUserInfo = async () => {
        const docRef = doc(db, "users", activeUser);
        const fetchData = await getDoc(docRef);
        setUserInfo(fetchData.data());
      };
      React.useEffect(() => {
        if (!activeUser) return;
        getUserInfo();
      }, [activeUser]);
  return (
    <div className="py-6">
      <div className="bg-gray-400 flex flex-col items-center justify-center gap-2 p-8">
        <img
          src="src/assets/testi_1.png"
          alt="#"
          className="border-3 border-gray-200 w-24 h-24 rounded-full hover:scale-110 duration-300"
        />
        <h1 className="font-bold text-white text-3xl">
        {userInfo ? (`${userInfo?.firstName} ${userInfo?.lastName}`): "Ghost"}
        </h1>
        <p className="text-white font-semibold">
        {userInfo ? (`Id: ${userInfo?.email}`): "Ghost"}

        </p>
        <div className="flex gap-3">
          <Button variant="myStyle">
            <Mail color="gray" />
            Message
          </Button>
          <Button variant="secondary" className="text-gray-900">
            <Pencil color="gray" />
            Edit
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 mt-4">
        <p className="flex gap-2 font-semibold">
          <Gift />
          Projects
        </p>
        <Button variant="ghost">View More...</Button>
      </div>
      <Separator />
      <div className="grid grid-cols-4 mt-8 gap-6">
        <Card1
          amount="2500"
          color="bg-red-600"
          title="Website Design"
          description="https://example.com"
          icon={<Globe color="white" size={34} />}
        />
        <Card1
          amount="499"
          color="bg-lime-600"
          title="Special Icon Set"
          description="3000 icons"
          icon={<Cake color="white" size={34} />}
        />
        <Card1
          amount="2999"
          color="bg-blue-600"
          title="Windows App"
          description="Accounting Dashboard"
          icon={<Grid2X2 color="white" size={34} />}
        />
        <Card1
          amount="3999"
          color="bg-orange-400"
          title="Website Design"
          description="https://example.com"
          icon={<Smartphone color="white" size={34} />}
        />
      </div>
      <div className="flex justify-between items-center p-2 mt-8">
        <p className="flex gap-2 font-semibold">
          <Users />
          colleagues
        </p>
        <Button variant="ghost">View More...</Button>
      </div>
      <Separator />
      <div className="grid grid-cols-4 mt-8 gap-6">
        <Card2
          name="Barbara Scott"
          role="Product Designer"
          src="src/assets/barbara.jpg"
        />
        <Card2
          name="Adam McCoy"
          role="Senior Developer"
          src="src/assets/adam.png"
        />
        <Card2
          name="Albert Ray"
          role="Junior Designer"
          src="src/assets/albert.jpg"
        />
        <Card2 name="Paul Johnson" role="Marketer" src="src/assets/paul.png" />
      </div>
      <div className="flex justify-between items-center p-2 mt-8">
        <p className="flex gap-2 font-semibold">
          <SquarePen />
          Articles
        </p>
        <Button variant="ghost">View More...</Button>
      </div>
      <Separator />
      <div className="mt-8 gap-6">
        <Article
          article="5 things i've learned from building a startup"
          time="12 minutes"
        />
        <Article article="Vue.js or React.js? Lets dive in" time="3 hours" />
        <Article
          article="10 important  tips for your next interview"
          time="1 day"
        />
        <Article
          article="Bringing your ideas to life with design"
          time="3 weeks"
        />
        <Article
          article="Creating a successful product launch strategy"
          time="1 month"
        />
        <Article
          article="Creating a super smooth user experience"
          time="2 months"
        />
      </div>
      <footer className="flex justify-between bottom-0 mt-8">
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
const Card1 = ({ amount, color, title, description, icon }: any) => {
  return (
    <div className="flex flex-col gap-6 py-10 rounded-lg bg-white shadow-sm relative">
      <span className="absolute bg-blue-600 rounded-lg py-2 px-4 -right-3 top-5">
        ${amount}
      </span>
      <div className="flex flex-col gap-2 items-center">
        <div className={`rounded-full bg-{red}-500 p-6 ${color}`}>{icon}</div>
        <div className="flex">
          <p>
            <Star color="orange" />
          </p>
          <p>
            <Star color="orange" />
          </p>
          <p>
            <Star color="orange" />
          </p>
          <p>
            <Star color="orange" />
          </p>
          <p>
            <Star color="orange" />
          </p>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col gap-2 p-4 items-center">
        <p className="font-bold">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-center p-4">
        <Button variant="outline">
          <GiftIcon />
          View Project
        </Button>
      </div>
    </div>
  );
};

const Card2 = ({ name, role, src }: any) => {
  return (
    <div className="flex flex-col gap-6 py-4 rounded-lg bg-white shadow-sm relative">
      <div className="flex flex-col gap-2 items-center">
        <img src={src} alt="#" className="rounded-full h-25 w-25" />
      </div>
      <div className="bg-gray-100 flex flex-col gap-2 p-4 items-center">
        <p className="font-bold">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="myStyle">
          <Plus />
          Add
        </Button>
        <Button variant="outline" className="bg-gray-200 hover:bg-gray-300">
          <CircleUserRound color="gray" />
          Profile
        </Button>
      </div>
    </div>
  );
};
const Article = ({ article, time }: any) => {
  return (
    <div className="bg-white my-3 flex justify-between p-6 rounded-lg shadow-sm hover:shadow-lg">
      <p className="text-blue-500 font-bold text-xl">{article}</p>
      <p className="font-semibold text-gray-600">{time} ago</p>
    </div>
  );
};
