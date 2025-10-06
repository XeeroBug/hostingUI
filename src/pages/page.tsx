import React from "react";
import "../styles.css";
import {
  Check,
  ChevronDown,
  ChevronUp,
  CirclePlus,
  CircleX,
  Clock4,
  Flag,
  Heart,
  LogOut,
  Logs,
  MailOpen,
  Menu,
  Pencil,
  Plus,
  RefreshCcw,
  RefreshCw,
  Search,
  StickyNote,
  TriangleAlert,
  User,
  Users,
  Wallet,
  Wrench,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import DashBoard from "./DashBoard";
import SideNav from "./sideNav";
import Email from "./Email";
import Accounts from "./Accounts";
import Support from "./Support";
import DashBoard2 from "./DashBoard2";
import Listing from "./listing";
import NewListing from "./newlisting";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth, db } from "@/Firebase/firebase.util";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Profile from "./profile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DashBoard3 from "./DashBoard3";
import Orders from "./Orders";
import Order from "./Order";

export default function Page() {
  const [activePage, setActivePage] = React.useState("");
  const [activeUser, setActiveUser] = React.useState<any>("");
  const [userInfo, setUserInfo] = React.useState<any>("");
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return <DashBoard />;
        break;
      case "Email":
        return <Email />;
        break;
      case "Accounts":
        return <Accounts />;
        break;
      case "Support":
        return <Support />;
        break;
      case "Dashboard2":
        return <DashBoard2 setActivePage={setActivePage} />;
        break;
      case "Listing":
        return <Listing />;
        break;
      case "New Listing":
        return <NewListing />;
        break;
      case "profile":
        return <Profile />;
        break;
      case "Dashboard3":
        return <DashBoard3 />;
        break;
      case "Orders":
        return <Orders />;
        break;
        case "Order":
          return <Order />;
          break;
      default:
        return <DashBoard />;
        break;
    }
  }
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
    <div className="flex">
      <div
        className={`${
          sidebarOpen ? "w-[20%]" : "w-0 overflow-hidden"
        } border-r border-gray-200 transition-all duration-300 sticky top-0 left-0 overflow-y-auto h-screen`}
      >
        <SideNav setActivePage={setActivePage} />
      </div>
      <div className="min-h-screen bg-[#f1f5f9] px-8 py-8 w-full">
        <div className="flex justify-between">
          <div className=" flex space-x-3">
            <div
              onClick={toggleSidebar}
              className="hover:bg-gray-300 rounded-sm p-1.5 duration-100"
            >
              <Menu />
            </div>
            <div className="hover:bg-gray-300 rounded-sm p-1.5 duration-100">
              <Search />
            </div>
            <div className="hover:bg-gray-300 rounded-sm p-1.5 duration-100">
              <Wrench />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex hover:bg-gray-300 rounded-sm p-1.5 duration-100 gap-2">
                  {userInfo
                    ? `${userInfo?.firstName} ${userInfo?.lastName}`
                    : "Ghost"}
                  <ChevronDown />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40">
                  <DropdownMenuLabel className="text-center bg-[#f1f5f9]">
                    {userInfo
                      ? `${userInfo?.firstName} ${userInfo?.lastName}`
                      : "Ghost"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="flex justify-between"
                    onClick={() => setActivePage("profile")}
                  >
                    Profile
                    <User color="gray" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-between">
                    Inbox
                    <MailOpen color="gray" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-between">
                    Invoices
                    <StickyNote color="gray" />
                  </DropdownMenuItem>
                  <Separator />
                  <DropdownMenuItem className="flex justify-between">
                    Settings
                    <Wrench color="gray" />
                  </DropdownMenuItem>
                  <Separator />
                  <DropdownMenuItem
                    className="flex justify-between"
                    onClick={() => signOut(auth)}
                  >
                    Log out
                    <LogOut color="gray" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex hover:bg-gray-300 rounded-sm p-1.5 duration-100 gap-2">
                    <Flag />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-70">
                    <DropdownMenuLabel className="text-center bg-[#f1f5f9]">
                      Notications
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex justify-between items-start gap-2 font-semibold">
                      <Check color="green" />
                      <div className="flex flex-col gap-3">
                        You've upgraded to a vip Account Successfully!
                        <span className="text-gray-400">15 min ago</span>
                      </div>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="flex justify-between items-start gap-2 font-semibold">
                      <TriangleAlert color="orangered" />
                      <div className="flex flex-col gap-3">
                        Please check your payment info since we can't validate
                        them!
                        <span className="text-gray-400">50 min ago</span>
                      </div>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="flex justify-between items-start gap-2 font-semibold">
                      <X color="red" />
                      <div className="flex flex-col gap-3">
                        Web server stopped and was automatically restarted!
                        <span className="text-gray-400">4 hours ago</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex justify-between items-start gap-2 font-semibold">
                      <TriangleAlert color="orangered" />

                      <div className="flex flex-col gap-3">
                        Please consider upgrading your plan. You are running out
                        of resources!
                        <span className="text-gray-400">16 hours ago</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-start gap-2 font-semibold">
                      <Plus color="blue" />

                      <div className="flex flex-col gap-3">
                        New purchases! +$250
                        <span className="text-gray-400">1 day ago</span>
                      </div>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="flex place-content-center bg-[#f1f5f9] gap-2 font-semibold">
                      <Flag color="gray" />
                      View All
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div>
              <div className="hover:bg-gray-300 rounded-sm p-1.5 duration-100">
                <Sheet>
                  <SheetTrigger>
                    <Logs />
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader className="">
                      <div className="flex justify-start items-center gap-2 py-2">
                        <img
                          src="src/assets/testi_1.png"
                          alt="#"
                          onClick={() => setActivePage("profile")}
                          className="w-10 h-10 rounded-full hover:scale-110 duration-300"
                        />
                        <p
                          className="font-medium hover:underline"
                          onClick={() => setActivePage("profile")}
                        >
                          {userInfo
                            ? `${userInfo?.firstName} ${userInfo?.lastName}`
                            : "Ghost"}
                        </p>
                      </div>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 mt-5">
                      <div className="flex border rounded-lg items-center">
                        <Input
                          className="border-0 w-100 focus:border-4 focus:border-blue-300 outline-none"
                          placeholder="Search..."
                        />
                        <Search
                          className="bg-gray-600 h-10 rounded-br-lg rounded-r-lg font-semibold p-3"
                          size="48"
                          color="white"
                        />
                      </div>
                      <div className="flex justify-between items-center bg-[#f1f5f9] p-2 rounded-lg">
                        <div className="px-3">
                          <span className="text-gray-600 font-medium">
                            CLIENTS
                          </span>
                          <p>$460</p>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            SALES
                          </span>
                          <p>$728</p>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            EARNING
                          </span>
                          <p>$7,860</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center bg-[#f1f5f9] p-2 rounded-lg">
                          <span className="flex gap-2 text-gray-600 font-semibold">
                            <Users />
                            Friends
                          </span>
                          <span className="flex gap-2 text-gray-600">
                            <RefreshCcw />
                            <ChevronUp />
                          </span>
                        </div>
                        <Friend
                          name="Sara Fields"
                          role="Photographer"
                          src="src/assets/barbara.jpg"
                        />
                        <Friend
                          name="Carl Wells"
                          role="Web Designer"
                          src="src/assets/adam.png"
                        />
                        <Friend
                          name="Lori Grant"
                          role="UI Designer"
                          src="src/assets/paul.png"
                        />
                        <Friend
                          name="Thomas Rilley"
                          role="Copywriter"
                          src="src/assets/testi_1.png"
                        />
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center bg-[#f1f5f9] p-2 rounded-lg mb-4">
                          <span className="flex gap-2 text-gray-600 font-semibold">
                            <Clock4 />
                            Activity
                          </span>
                          <span className="flex gap-2 text-gray-600">
                            <RefreshCcw />
                            <ChevronUp />
                          </span>
                        </div>
                        <Activity
                          title="+$29 New sale"
                          description="Photographer"
                          icon={<Wallet color="gray" />}
                          time="5 min ago"
                        />
                        <Activity
                          title="Project removed"
                          description="Best Icon Set"
                          icon={<CircleX color="red" />}
                          time="26 min ago"
                        />
                        <Activity
                          title="You edited the file"
                          description="Docs.doc"
                          icon={<Pencil color="blue" />}
                          time="3 hours ago"
                        />
                        <Activity
                          title="New user"
                          description="StudioWeb - View Profile"
                          icon={<CirclePlus color="gray" />}
                          time="5 hours ago"
                        />
                        <Activity
                          title="App v5.5 is available"
                          description="Update now"
                          icon={<Wrench color="orange" />}
                          time="8 hours ago"
                        />
                        <Activity
                          title="+1 Friend Request"
                          description="Accept"
                          icon={<User color="orange" />}
                          time="1 day ago"
                        />
                      </div>
                      <Accordion type="single" collapsible className="mt-6">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="w-full flex justify-between items-center bg-[#f1f5f9] p-2 rounded-lg py-4 mb-1">
                            <div className="flex justify-between items-center">
                              <span className="flex gap-2 text-gray-600 font-semibold">
                                <Pencil color="gray" />
                                Profile
                              </span>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="mt-4 flex flex-col gap-4">
                            <form className="flex flex-col gap-6">
                              <label htmlFor="">
                                Name
                                <Input type="text" placeholder="John Smith" />
                              </label>
                              <label htmlFor="">
                                Email Address
                                <Input
                                  type="email"
                                  placeholder="example@gmail.com"
                                />
                              </label>
                              <label htmlFor="">
                                New Password
                                <Input
                                  type="password"
                                  placeholder="New Password..."
                                />
                              </label>
                              <label htmlFor="">
                                Confirm New Password
                                <Input
                                  type="password"
                                  placeholder="Confirm New Password..."
                                />
                              </label>
                              <Button variant="myStyle" className="w-50">
                                <RefreshCw />
                                Update
                              </Button>
                            </form>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible className="">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="w-full flex justify-between items-center bg-[#f1f5f9] p-2 rounded-lg py-4 mb-1">
                            <div className="flex justify-between items-center">
                              <span className="flex gap-2 text-gray-600 font-semibold">
                                <Wrench color="gray" />
                                Settings
                              </span>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="mt-4 flex flex-col gap-4">
                            <Checkbox
                              title="Online Status"
                              description="Show your status to all"
                            />
                            <Checkbox
                              title="Verify on Login"
                              description="Most secure option"
                            />
                            <Checkbox
                              title="Auto Updates"
                              description="Keep app updated"
                            />

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
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
        {renderPage()}
        <footer className="flex justify-between bottom-0">
          <p>
            <span className="font-semibold text-blue-900 text-xl">skyVibe</span>{" "}
            ©2025
          </p>
          <p className="flex gap-1 text-xl">
            Crafted with <Heart color="red" /> by{" "}
            <span className="font-semibold text-blue-900">Bin-Abdoul</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
const Friend = ({ name, role, src }: any) => {
  return (
    <div className="flex gap-3 items-center px-2 hover:bg-[#f1f5f9] bg-white shadow-sm relative">
      <div>
        <img src={src} alt="#" className="rounded-full h-15 w-15" />
      </div>
      <div className="flex flex-col gap-2 p-4 items-center">
        <p className="font-bold text-blue-600 hover:text-black">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};
const Activity = ({ icon, title, description, time }: any) => {
  return (
    <div className="flex gap-3 items-center px-4 hover:bg-[#f1f5f9] bg-white shadow-sm relative">
      <div>{icon}</div>
      <div className="flex flex-col p-4">
        <p className="font-bold text-black">{title}</p>
        <p className=" text-blue-600 hover:text-black font-medium">
          {description}
        </p>
        <p className="text-gray-600 text-sm">{time}</p>
      </div>
    </div>
  );
};
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
