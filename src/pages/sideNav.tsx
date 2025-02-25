import React from "react";
import { LogOut, MapPin } from "lucide-react";
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

interface SideNavProps {
  setActivePage: (page: string) => void;
}

export default function SideNav({ setActivePage }: SideNavProps) {
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
          src="src/assets/testi_1.png"
          alt="avatar"
          className="rounded-full w-20 h-20"
        />
        <div className="text-gray-600 flex items-center font-bold mt-2 space-x-4 justify-evenly">
          <div className="hover:underline">
            {`${userInfo?.firstName?.[0]}.${userInfo?.lastName}` || ""}
          </div>
          <span
            className="flex items-center gap-2 hover:underline"
            onClick={() => signOut(auth)}
          >
            <LogOut className="hover:underline" />
          </span>
        </div>
      </div>
      <div className="flex flex-col duration-100 bg-white px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Hosting</AccordionTrigger>
            <div className="overflow-hidden rounded-lg">
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("dashboard")}
                  className="hover:text-black text-gray-500 font-semibold"
                  variant="ghost"
                >
                  Dashboard
                </Button>
              </AccordionContent>
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("email")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Emails
                </Button>
              </AccordionContent>
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("accounts")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Account
                </Button>
              </AccordionContent>
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("support")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Support
                </Button>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col duration-100 bg-white px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Real Estate</AccordionTrigger>
            <div className="overflow-hidden rounded-lg">
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("dashboard2")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Dashboard
                </Button>
              </AccordionContent>
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("listing")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Listing
                </Button>
              </AccordionContent>
              <AccordionContent>
                <Button
                  onClick={() => setActivePage("newlisting")}
                  variant="ghost"
                  className="hover:text-black text-gray-500 font-semibold"
                >
                  Add New Listing
                </Button>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
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
