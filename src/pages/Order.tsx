import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import {
  Check,
  Loader,
  Mail,
  Phone,
  ShoppingBag,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import {
  TableRow,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

import avatarImg from "@/assets/testi_1.png";

function Order() {
  const table_orders = [
    {
      id: "ORD.300",
      status: "Completed",
      submitted: "2025/1/08",
      customer: "John Smith",
      value: "$832",
    },
    {
      id: "ORD.798",
      status: "Completed",
      submitted: "2025/1/09",
      customer: "John Smith",
      value: "$179",
    },
    {
      id: "ORD.296",
      status: "Completed",
      submitted: "2025/1/15",
      customer: "John Smith",
      value: "$105",
    },
    {
      id: "ORD.722",
      status: "Completed",
      submitted: "2025/2/17",
      customer: "John Smith",
      value: "$643",
    },
  ];
  const table_Products = [
    {
      id: "PID.258",
      products: "Dark Souls III",
      stock: 92,
      qty: 1,
      unit: "$6,900",
      price: "$6,900",
    },
    {
      id: "PID.263",
      products: "Bloodborne",
      stock: 32,
      qty: 1,
      unit: "$2,900",
      price: "$2,900",
    },
    {
      id: "PID.214",
      products: "The Surge",
      stock: 15,
      qty: 1,
      unit: "$5,900",
      price: "$5,900",
    },
    {
      id: "PID.358",
      products: "Bioshock Collection",
      stock: 77,
      qty: 1,
      unit: "$3,900",
      price: "$3,900",
    },
    {
      id: "PID.428",
      products: "Until Dawn",
      stock: 25,
      qty: 1,
      unit: "$4,900",
      price: "$4,900",
    },
  ];
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="">
        <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
          <h1 className="text-4xl ">ORD.1185</h1>
          <span className="text-gray-400 text-lg flex gap-2">
            Currently processing..
          </span>
        </div>
        <div className=""></div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">Progress</span>
          <div className="flex gap-6">
            <span className="flex gap-1">
              <X color="red" /> cancel
            </span>
            <span className="flex gap-1">
              <Check color="green" /> complete
            </span>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-4 gap-8 py-6">
          {Data(<Check color="green" size={52} />, "1. SUBMITTED")}
          {Data(<Check color="green" size={52} />, "2. PAYMENT")}
          {Data(
            <Loader color="orange" size={52} className="animate-spin" />,
            "3. PACKAGING"
          )}
          {Data(<X color="gray" size={52} />, "4. COMPLETED")}
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">Customer</span>
          <div className="flex gap-2">
            <Mail color="gray" size={24} /> contact
          </div>
        </div>
        <Separator />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 rounded-2xl overflow-hidden">
          <div className="bg-linear-90 from-purple-500 to-blue-500 gap-5 flex-col flex pt-3">
            <img
              src={avatarImg}
              alt="#"
              className="size-25 rounded-full border-4 mx-auto"
            />
            <div className="bg-black opacity-60 flex flex-col p-2">
              <span className="flex gap-1 font-semibold text-white  mx-auto">
                John Smith <Star color="gray" />
              </span>
              <span className="text-white mx-auto">Premium Member</span>
            </div>
          </div>
          <div className="bg-white flex justify-around p-5">
            <span className="flex flex-col gap-1">
              <ShoppingBag size={48} /> 6 Orders
            </span>
            <span className="flex flex-col gap-1 ">
              <ShoppingCart size={48} /> 15 Products
            </span>
          </div>
        </div>
        <div className="bg-white px-4 rounded-2xl overflow-hidden shadow-lg pb-4 col-span-2">
          <span className="flex items-center font-medium bg-gray-100 -mx-4 p-4">
            Past Orders
          </span>
          <Table className="mt-6 bg-white shadow-sm">
            <TableBody>
              {table_orders.map((item) => (
                <TableRow key={item.id} className="">
                  <TableCell className="font-bold text-blue-600">
                    {item.id}
                  </TableCell>
                  <TableCell className="">
                    <Button
                      variant="link"
                      className="hover:no-underline text-white font-semibold bg-green-400 rounded-lg"
                    >
                      {" "}
                      {item.status}{" "}
                    </Button>{" "}
                  </TableCell>
                  <TableCell className="font-medium text-lg">
                    {item.submitted}
                  </TableCell>
                  <TableCell className="font-medium text-lg hover:text-gray-600 text-blue-500">
                    {item.customer}
                  </TableCell>
                  <TableCell className="text-right text-lg">
                    {item.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">Addresses</span>
        </div>
        <Separator />
        <div className="grid-cols-2 grid gap-4 pt-4">
          <Address title="Billing" />
          <Address title="Shipping" />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">Products(5)</span>
        </div>
        <Separator />
        <Table className="mt-6 bg-white shadow-sm rounded-2xl overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-black">ID</TableHead>
              <TableHead className="text-black">PRODUCT</TableHead>
              <TableHead className="text-black">STOCK</TableHead>
              <TableHead className="text-black">QTY</TableHead>
              <TableHead className="text-black">UNIT</TableHead>
              <TableHead className={"text-right text-black"}>PRICE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {table_Products.map((item) => (
              <TableRow key={item.id} className="">
                <TableCell className="font-bold text-blue-600">
                  {item.id}
                </TableCell>
                <TableCell className="font-medium text-lg hover:text-gray-600 text-blue-500">{item.products}</TableCell>
                <TableCell className="font-medium text-lg">
                  {item.stock}
                </TableCell>
                <TableCell className="font-medium text-lg">
                  {item.qty}
                </TableCell>
                <TableCell className="font-medium text-lg ">
                  {item.unit}
                </TableCell>
                <TableCell className="text-right text-lg">
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="font-bold text-lg text-black">Total Price:	</TableCell>
              <TableCell className="text-right text-lg">$245,00</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="font-bold text-lg text-black">Total Paid:	</TableCell>
              <TableCell className="text-right text-lg">$245,00</TableCell>
            </TableRow>
            <TableRow className="bg-green-200">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="font-bold text-lg text-black">TOTAL DUE:	</TableCell>
              <TableCell className="text-right text-lg">$0,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default Order;
const Data = (icon: any, value: string) => {
  return (
    <div className="font-bold shadow-sm bg-white rounded-lg p-8 flex flex-col">
      <h1 className="text-center text-white font-bold pb-4 mx-auto">{icon}</h1>
      <h2 className="text-center text-black font-bold">{value}</h2>
    </div>
  );
};
const Address = ({ title }: { title: string }) => {
  return (
    <div className="bg-white overflow-hidden rounded-lg flex flex-col">
      <div className="bg-gray-200 flex gap-2 font-semibold text-gray-800 p-4">
        {title} Address
      </div>
      <div className="flex justify-between flex-col gap-4 p-4">
        <div className="">
          <span className="font-semibold">John Smith</span>
          <p>5110 8th Ave </p>
          <p>New York 11220</p>
          <p>United States</p>
          <p></p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex gap-2">
            <Phone />
            <p>(999) 111-222222</p>
          </span>
          <span className="flex gap-2">
            <Mail />
            <p className="text-blue-400">company@example.com</p>
          </span>
        </div>
      </div>
    </div>
  );
};
