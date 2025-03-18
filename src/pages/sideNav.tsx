import React, { ReactNode } from "react";
import { LockKeyhole, LogOut, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth, db } from "@/Firebase/firebase.util";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import avatarImg from "@/assets/testi_1.png";

interface SideNavProps {
  children?: ReactNode;
  content?: string;
  name?: string;
  setActivePage: (page: string) => void;
}

export default function SideNav({ setActivePage }: SideNavProps) {
  const Navigate = useNavigate();
  const [activeUser, setActiveUser] = React.useState<any>("");
  const [userInfo, setUserInfo] = React.useState<any>("");
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setActiveUser(user ? user.uid : null);
    });
    return () => unsubscribe();
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
    <div className="">
      <div className="bg-white flex items-center justify-center font-bold text-xl py-4">
        <div className="hover:underline flex">
          <span className="text-blue-600">
            <MapPin className="hover:underline rotate-180" />
          </span>
          sky<span className="text-blue-600">Vibe</span>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col items-center font-bold text-xl p-6 gap-3 justify-between">
        <img
          src={avatarImg}
          alt="avatar"
          className="border-3 border-gray-300 w-24 h-24 rounded-full hover:scale-110 duration-300"
        />
        <div className="text-gray-600 flex items-center font-bold mt-2 space-x-2 justify-evenly">
          <div
            className="hover:underline"
            onClick={() => setActivePage("profile")}
          >
            {userInfo
              ? `${userInfo?.firstName?.[0]}.${userInfo?.lastName}`
              : "Ghost"}
          </div>
          <span className="flex items-center gap-2 hover:underline">
            <LockKeyhole
              className="hover:underline"
              onClick={() => Navigate("/lock")}
            />
          </span>
          <span
            className="flex items-center gap-2 hover:underline"
            onClick={() => signOut(auth)}
          >
            <LogOut className="hover:underline" />
          </span>
        </div>
      </div>
      <Navs name="Hosting" setActivePage={setActivePage}>
        <Content setActivePage={setActivePage} content="Dashboard" />
        <Content setActivePage={setActivePage} content="Email" />
        <Content setActivePage={setActivePage} content="Accounts" />
        <Content setActivePage={setActivePage} content="Support" />
      </Navs>
      <Navs name="Real Estate" setActivePage={setActivePage}>
        <Content setActivePage={setActivePage} content="Dashboard2" />
        <Content setActivePage={setActivePage} content="Listing" />
        <Content setActivePage={setActivePage} content="New Listing" />
      </Navs>

      <Navs name="E-Commerce" setActivePage={setActivePage}>
        <Content setActivePage={setActivePage} content="Dashboard3" />
        <Content setActivePage={setActivePage} content="Orders" />
        <Content setActivePage={setActivePage} content="Order" />
        <Content setActivePage={setActivePage} content="Product" />
        <Content setActivePage={setActivePage} content="Product-edit" />
        <Content setActivePage={setActivePage} content="Customers" />
      </Navs>
    </div>
  );
}
const Navs = ({ children, name }: SideNavProps) => {
  return (
    <div className="flex flex-col duration-100 bg-white px-4 ">
      <Accordion type="single" collapsible>
        <AccordionItem value={name || "default"}>
          <AccordionTrigger>{name}</AccordionTrigger>
          <div className="overflow-hidden rounded-lg">{children}</div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
const Content = ({ setActivePage, content }: SideNavProps) => {
  if (!setActivePage || !content) return null;
  return (
    <AccordionContent>
      <Button
        onClick={() => setActivePage(content)}
        variant="ghost"
        className="hover:text-black text-gray-500 font-semibold"
      >
        {content}
      </Button>
    </AccordionContent>
  );
};
// import React from "react";
// import "../styles.css";
// import { LogOut, MapPin } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import DashBoard from "./DashBoard";

// import Accounts from "./Accounts";
// import Email from "./Email";
// import Support from "./Support";
// import Page from "./page";
// export default function SideNav() {

//   function setActivePage(arg0: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="">
//       <div className="bg-white flex items-center justify-center font-bold text-xl py-4">
//         <div className="hover:underline flex">
//           {" "}
//           <span className="text-blue-600">
//             <MapPin className="hover:underline rotate-180" />
//           </span>
//           sky<span className="text-blue-600">Vibe</span>
//         </div>
//       </div>
//       <div className="bg-gray-200 flex flex-col items-center font-bold text-xl p-6 justify-between">
//         <img
//           src="src/assets/testi_1.png"
//           alt="avatar"
//           className="rounded-full w-20 h-20"
//         />
//         <div className="text-gray-600 flex items-center font-bold mt-2 space-x-4 ">
//           <div className="hover:underline">John Doe</div>
//           <MapPin className="hover:underline rotate-180" />
//           <LogOut className="hover:underline" />
//         </div>
//       </div>
//       <div className="flex flex-col duration-100 bg-white px-4">
//         <Accordion type="single" collapsible>
//           <AccordionItem value="item-1">
//             <AccordionTrigger>Hosting</AccordionTrigger>
//             <div className="overflow-hidden rounded-lg">
//               {" "}
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("dashboard")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Dashboard
//                 </Button>
//               </AccordionContent>
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("email")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Emails
//                 </Button>
//               </AccordionContent>
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("account")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Account
//                 </Button>
//               </AccordionContent>
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("support")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Support
//                 </Button>
//               </AccordionContent>
//             </div>
//           </AccordionItem>
//         </Accordion>
//       </div>
//       <div className="flex flex-col duration-100 bg-white px-4">
//         <Accordion type="single" collapsible>
//           <AccordionItem value="item-1">
//             <AccordionTrigger>Real Estate</AccordionTrigger>
//             <div className="overflow-hidden rounded-lg">
//               {" "}
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("dashboard2")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Dashboard
//                 </Button>
//               </AccordionContent>
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("listing")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Listing
//                 </Button>
//               </AccordionContent>
//               <AccordionContent>
//                 <Button
//                   onClick={() => setActivePage("newlisting")}
//                   variant="ghost"
//                   className="hover:text-black text-gray-500 font-semibold"
//                 >
//                   Add New Listing
//                 </Button>
//               </AccordionContent>
//             </div>
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </div>
//   );
// }
