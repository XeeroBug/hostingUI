import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import {
  Archive,
  Calendar,
  Check,
  ChevronDown,
  Circle,
  Heart,
  Loader,
  Search,
  X,
} from "lucide-react";
import { ReactNode } from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";

function Orders() {
  const table_orders = [
    {
      id: "ORD.1851",
      status: "Pending",
      submitted: "2025/1/07",
      products: "8",
      customer: "Laura Carr",
      value: "$524",
    },
    {
      id: "ORD.1850",
      status: "Completed",
      submitted: "2025/1/08",
      products: "4",
      customer: "Marie Duncan",
      value: "$230",
    },
    {
      id: "ORD.1849",
      status: "Completed",
      submitted: "2025/1/09",
      products: "5",
      customer: "Dennis Stevens",
      value: "$820",
    },
    {
      id: "ORD.1848",
      status: "Pending",
      submitted: "2025/1/10",
      products: "4",
      customer: "Amber Harvey",
      value: "$993",
    },
    {
      id: "ORD.1847",
      status: "Completed",
      submitted: "2025/1/15",
      products: "3",
      customer: "Scott Young",
      value: "$809",
    },
    {
      id: "ORD.1846",
      status: "Pending",
      submitted: "2025/1/24",
      products: "7",
      customer: "sarah Fields",
      value: "$660",
    },
    {
      id: "ORD.1845",
      status: "Canceled",
      submitted: "2025/1/30",
      products: "6",
      customer: "Henry Harrison",
      value: "$345",
    },
    {
      id: "ORD.1844",
      status: "Canceled",
      submitted: "2025/2/02",
      products: "8",
      customer: "Carol White",
      value: "$499",
    },
    {
      id: "ORD.1843",
      status: "Canceled",
      submitted: "2025/2/06",
      products: "5",
      customer: "Ryan Flores",
      value: "$756",
    },
    {
      id: "ORD.1842",
      status: "Completed",
      submitted: "2025/2/17",
      products: "2",
      customer: "Carl Wells",
      value: "$588",
    },
    {
      id: "ORD.1841",
      status: "Canceled",
      submitted: "2025/2/27",
      products: "8",
      customer: "Betty Kelley",
      value: "$332",
    },
    {
      id: "ORD.1840",
      status: "Canceled",
      submitted: "2025/2/29",
      products: "7",
      customer: "Jose Parker",
      value: "$139",
    },
    {
      id: "ORD.1839",
      status: "Processing",
      submitted: "2025/3/06",
      products: "5",
      customer: "Jack Greene",
      value: "$240",
    },
    {
      id: "ORD.1838",
      status: "Processing",
      submitted: "2025/3/11",
      products: "1",
      customer: "Ralph Mooray",
      value: "$711",
    },
    {
      id: "ORD.1837",
      status: "Pending",
      submitted: "2025/3/12",
      products: "1",
      customer: "Danielle Jones",
      value: "$567",
    },
  ];
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="">
        <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
          <h1 className="text-4xl ">Orders</h1>
          <span className="text-gray-400 text-lg flex gap-2">
            You are doing great, keep it up!
          </span>
        </div>
        <div className=""></div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">
            Statistics Looking good!
          </span>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex hover:bg-gray-200 m-1 rounded-sm p-1.5 duration-100 gap-2">
                Today
                <ChevronDown />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 mr-2">
                <DropdownMenuLabel className="bg-[#f1f5f9]">
                  <div className=" flex justify-start gap-2 ">
                    <Calendar /> Today
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className=" flex justify-start align-middle gap-2 ">
                    <Calendar /> This Week
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className=" flex justify-start align-middle gap-2 ">
                    <Calendar /> This Month
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between">
                  <div className=" flex justify-start align-middle gap-2 ">
                    <Calendar /> This Year
                  </div>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem className="flex justify-between">
                  <div className=" flex justify-start align-middle gap-2 ">
                    <Circle size={16} /> All time
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-4 gap-8 py-6">
          <div className="bg-linear-to-bl from-orange-500 to-red-500 rounded-4xl h-40 hover:opacity-70 duration-100">
            {Data(<Loader className="animate-spin" />, "PENDING", "12")}
          </div>
          <div className="rounded-4xl bg-linear-65 from-rose-500 to-red-500 hover:opacity-70">
            {Data(<X />, "CANCELED", "2")}
          </div>
          <div className="rounded-4xl bg-linear-65 from-green-500 to-lime-500 hover:opacity-70">
            {Data(<Check />, "COMPLETED", "21")}
          </div>
          <div className="rounded-4xl bg-linear-100 from-purple-500 to-blue-500 hover:opacity-70">
            {Data(<Archive />, "ALL", "35")}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">Orders (35)</span>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex hover:bg-gray-200 m-1 rounded-sm p-1.5 duration-100 gap-2">
                All
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mr-2">
                <DropdownMenuLabel className="bg-[#f1f5f9]">
                  <div className=" flex justify-start gap-2 ">
                    <Calendar /> All
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex hover:bg-gray-200 m-1 rounded-sm p-1.5 duration-100 gap-2">
                Today
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mr-2">
                <DropdownMenuLabel className="bg-[#f1f5f9]">
                  <div className=" flex justify-start gap-2 ">
                    <Calendar /> Today
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator />
      </div>
      <div className="">
        <div className="bg-white px-4 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex items-center bg-gray-100 -mx-4   p-4">
            <Input
              className="border-0  bg-white focus:border-4 focus:border-blue-300 outline-none"
              placeholder="Search..."
            />
            <Search
              className="bg-blue-700 h-10 rounded-br-lg rounded-r-lg font-semibold p-3"
              size="48"
              color="white"
            />
          </div>

          <MyTable>
            {table_orders.map((item) => (
              <TableRow key={item.id} className="">
                <TableCell className="font-bold text-blue-600">
                  {item.id}
                </TableCell>
                <TableCell className="">
                  <Button
                    variant="link"
                    className={`hover:no-underline text-white font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-400 rounded-lg"
                        : item.status === "Canceled"
                        ? "bg-red-400 rounded-lg"
                        : item.status === "Processing"
                        ? "bg-blue-400 rounded-lg"
                        : "bg-orange-400 rounded-lg"
                    }`}
                  >
                    {" "}
                    {item.status}{" "}
                  </Button>{" "}
                </TableCell>
                <TableCell className="font-medium text-lg">
                  {item.submitted}
                </TableCell>
                <TableCell className="font-medium text-lg text-blue-500">
                  {item.products}
                </TableCell>
                <TableCell className="font-medium text-lg hover:text-gray-600 text-blue-500">
                  {item.customer}
                </TableCell>
                <TableCell className="text-right text-lg">
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </MyTable>
          <div className="flex justify-self-end p-4">
          <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Orders;
const Data = (icon: any, title: string, value: string) => {
  return (
    <div className="font-bold">
      <span className="flex justify-end py-5 px-6 text-gray-300">{icon}</span>
      <h1 className="text-center text-white font-bold text-3xl pb-2">
        {value}
      </h1>
      <h6 className="text-center text-gray-100 font-bold">{title}</h6>
    </div>
  );
};

const MyTable = ({ children }: { children: ReactNode }) => {
  return (
    <Table className="mt-6 bg-white shadow-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-black">ID</TableHead>
          <TableHead className="text-black">STATUS</TableHead>
          <TableHead className="text-black">SUBMITTED</TableHead>
          <TableHead className="text-black">PRODUCTS</TableHead>
          <TableHead className="text-black">CUSTOMERS</TableHead>
          <TableHead className={"text-right text-black"}>VALUE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};
