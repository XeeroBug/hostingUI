import React from "react";
import "../styles.css";
import {
  Check,
  ChevronDown,
  Flag,
  LogOut,
  Logs,
  MailOpen,
  Menu,
  Plus,
  Search,
  StickyNote,
  TriangleAlert,
  User,
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
import Lock from "./lock";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth, db } from "@/Firebase/firebase.util";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Profile from "./profile";

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
      case "dashboard":
        return <DashBoard />;
        break;
      case "email":
        return <Email />;
        break;
      case "accounts":
        return <Accounts />;
        break;
      case "support":
        return <Support />;
        break;
      case "dashboard2":
        return <DashBoard2 setActivePage={setActivePage} />;
        break;
      case "listing":
        return <Listing />;
        break;
      case "newlisting":
        return <NewListing />;
        break;
      case "profile":
        return <Profile />;
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
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}
