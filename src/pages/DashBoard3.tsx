// import React from 'react'

import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart } from "recharts";
import { type ChartConfig } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import {
  Archive,
  Blocks,
  Calendar,
  ChevronDown,
  Circle,
  Heart,
  RefreshCcw,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import React, { ReactNode } from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

function DashBoard3() {
  const table_orders = [
    {
      id: "ORD.1851",
      status: "Completed",
      customer: "Laura Carr",
      value: "$524",
    },
    {
      id: "ORD.1850",
      status: "Processing",
      customer: "Marie Duncan",
      value: "$230",
    },
    {
      id: "ORD.1849",
      status: "Pending",
      customer: "Dennis Stevens",
      value: "$820",
    },
    {
      id: "ORD.1848",
      status: "Processing",
      customer: "Amber Harvey",
      value: "$993",
    },
    {
      id: "ORD.1847",
      status: "Processing",
      customer: "Scott Young",
      value: "$809",
    },
    {
      id: "ORD.1846",
      status: "Completed",
      customer: "sarah Fields",
      value: "$660",
    },
    {
      id: "ORD.1845",
      status: "Canceled",
      customer: "Henry Harrison",
      value: "$345",
    },
    {
      id: "ORD.1844",
      status: "Processing",
      customer: "Carol White",
      value: "$499",
    },
    {
      id: "ORD.1843",
      status: "Completed",
      customer: "Loore Moore",
      value: "$756",
    },
    {
      id: "ORD.1842",
      status: "Completed",
      customer: "Judy Ford",
      value: "$667",
    },
  ];
  const table_Products = [
    {
      id: "PID.258",
      product: "Dark Souls III",
      orders: 912,
      rating: 5,
    },
    {
      id: "PID.198",
      product: "Bioshock Collection",
      orders: 895,
      rating: 5,
    },
    {
      id: "PID.852",
      product: "Alien Isolation",
      orders: 820,
      rating: 5,
    },
    {
      id: "PID.741",
      product: "Bloodborne",
      orders: 793,
      rating: 5,
    },
    {
      id: "PID.985",
      product: "Forza Motorsport 7",
      orders: 782,
      rating: 4,
    },
    {
      id: "PID.056",
      product: "Fifa 18",
      orders: 776,
      rating: 3,
    },
    {
      id: "PID.036",
      product: "Gears of War 4",
      orders: 712,
      rating: 4,
    },
    {
      id: "PID.682",
      product: "Minecraft",
      orders: 670,
      rating: 5,
    },
    {
      id: "PID.952",
      product: "Gran Turismo Sport",
      orders: 640,
      rating: 4,
    },
    {
      id: "PID.478",
      product: "Dishonored 2",
      orders: 640,
      rating: 4,
    },
  ];
  return (
    <div className="bg-[#f1f5f9] py-6 min-h-screen flex flex-col gap-6">
      <div className="">
        <div className="flex flex-col gap-2 font-semibold items-center justify-center h-40 rounded-2xl">
          <h1 className="text-4xl ">e-Commerce Dashboard</h1>
          <span className="text-gray-400 text-lg flex gap-2">
            Welcome Admin, you have{" "}
            <p className="text-blue-500">12 pending orders.</p>
          </span>
        </div>
        <div className=""></div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">
            Statistics Awesome!
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
          <div className="bg-linear-to-bl from-violet-500 to-blue-500 rounded-4xl h-40 hover:opacity-70 duration-100">
            {Data(<Blocks />, "EARNINGS", "$2420")}
          </div>
          <div className="rounded-4xl bg-linear-65 from-purple-500 to-blue-500 hover:opacity-70">
            {Data(<Archive />, "ORDERS", "30")}
          </div>
          <div className="rounded-4xl bg-linear-65 from-blue-800 to-purple-400 hover:opacity-70">
            {Data(<Users />, "NEW CUSTOMERS", "15")}
          </div>
          <div className="rounded-4xl bg-linear-100 from-cyan-600 to-teal-500 hover:opacity-70">
            {Data(<ShoppingCart />, "CONVERSION", "5.6%")}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-black text-lg font-semibold">
            Orders Overview
          </span>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex hover:bg-gray-200 m-1 rounded-sm p-1.5 duration-100 gap-2">
                This Week
                <ChevronDown />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 mr-2">
                <DropdownMenuLabel className="bg-[#f1f5f9]">
                  <div className=" flex justify-start gap-2 ">
                    <Calendar /> This Week
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
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
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Overview
            title="Earnings"
            text_1="PROFIT"
            text_2="EXPENSES"
            value_1="$9,587"
            value_2="$8,087"
            value_3="$1,500"
          />
          <Overview2
            title="Volume"
            text_1="Completed"
            text_2="Cancelled"
            value_1="183"
            value_2="175"
            value_3="8"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <span className="font-bold text-lg">Latest Orders</span>
          <Separator />
          <MyTable text_1="STATUS" text_2="CUSTOMER" text_3="VALUE">
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
                <TableCell className="font-medium text-lg hover:text-gray-600 text-blue-500">
                  {item.customer}
                </TableCell>
                <TableCell className="text-right text-lg">
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </MyTable>
        </div>
        <div>
          <span className="font-bold text-lg">Top Products</span>
          <Separator />
          <MyTable text_1="PRODUCT" text_2="ORDERS" text_3="RATING">
            {table_Products.map((item) => (
              <TableRow key={item.id} className="">
                <TableCell className="font-bold text-blue-600">
                  {item.id}
                </TableCell>
                <TableCell className="font-medium text-lg hover:text-gray-600 text-blue-500">
                  {item.product}
                </TableCell>
                <TableCell className="text-lg">{item.orders}</TableCell>
                <TableCell className=" grid grid-cols-3">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <Star key={index} color="orange" />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </MyTable>
        </div>
      </div>
    </div>
  );
}
export default DashBoard3;
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
const Overview = ({
  title,
  text_1,
  text_2,
  value_1,
  value_2,
  value_3,
}: {
  title: string;
  text_1: string;
  text_2: string;
  value_1: string;
  value_2: string;
  value_3: string;
}) => {
  const chartData = [
    { month: "January", All: 9587, Profit: 8087, Expenses: 1500 },
    { month: "February", All: 10500, Profit: 8500, Expenses: 2000 },
    { month: "March", All: 8700, Profit: 7200, Expenses: 1500 },
    { month: "April", All: 7800, Profit: 6000, Expenses: 1800 },
    { month: "May", All: 9200, Profit: 7700, Expenses: 1500 },
    { month: "June", All: 9900, Profit: 8200, Expenses: 1700 },
  ];

  const chartConfig = {
    All: { label: "Total Earnings", color: "#4ade80" },
    Profit: { label: "Profit", color: "#22c55e" },
    Expenses: { label: "Expenses", color: "#ef4444" },
  } satisfies ChartConfig;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <div className="flex justify-between p-3 bg-white">
        <div>{title}</div>
        <div className="flex gap-2">
          <span>
            <RefreshCcw />
          </span>
          <span>
            <Wrench />
          </span>
        </div>
      </div>
      <div className="flex justify-between p-3 px-10">
        <div className="flex flex-col gap-1 text-center">
          ALL
          <h1 className="font-bold text-2xl">{value_1}</h1>
        </div>
        <div className="flex flex-col gap-1">
          {text_1}
          <h1 className="font-bold text-2xl text-green-500">{value_2}</h1>
        </div>
        <div className="flex flex-col gap-1">
          {text_2}
          <h1 className="font-bold text-2xl text-red-500">{value_3}</h1>
        </div>
      </div>
      <div className="bg-white">
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Area Chart - Stacked</CardTitle>
            <CardDescription>
              Showing total earnings for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="All"
                  type="monotone"
                  fill="#4ade80"
                  fillOpacity={0.5}
                  stroke="#4ade80"
                />
                <Area
                  dataKey="Profit"
                  type="monotone"
                  fill="#22c55e"
                  fillOpacity={0.5}
                  stroke="#22c55e"
                />
                <Area
                  dataKey="Expenses"
                  type="monotone"
                  fill="#ef4444"
                  fillOpacity={0.5}
                  stroke="#ef4444"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2025
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
const Overview2 = ({
  title,
  text_1,
  text_2,
  value_1,
  value_2,
  value_3,
}: {
  title: string;
  text_1: string;
  text_2: string;
  value_1: string;
  value_2: string;
  value_3: string;
}) => {
  const chartData = [
    { date: "2024-04-01", desktop: 222, mobile: 150 },
    { date: "2024-04-02", desktop: 97, mobile: 180 },
    { date: "2024-04-03", desktop: 167, mobile: 120 },
    { date: "2024-04-04", desktop: 242, mobile: 260 },
    { date: "2024-04-05", desktop: 373, mobile: 290 },
    { date: "2024-04-06", desktop: 301, mobile: 340 },
    { date: "2024-04-07", desktop: 245, mobile: 180 },
    { date: "2024-04-08", desktop: 409, mobile: 320 },
    { date: "2024-04-09", desktop: 59, mobile: 110 },
    { date: "2024-04-10", desktop: 261, mobile: 190 },
    { date: "2024-04-11", desktop: 327, mobile: 350 },
    { date: "2024-04-12", desktop: 292, mobile: 210 },
    { date: "2024-04-13", desktop: 342, mobile: 380 },
    { date: "2024-04-14", desktop: 137, mobile: 220 },
    { date: "2024-04-15", desktop: 120, mobile: 170 },
    { date: "2024-04-16", desktop: 138, mobile: 190 },
    { date: "2024-04-17", desktop: 446, mobile: 360 },
    { date: "2024-04-18", desktop: 364, mobile: 410 },
    { date: "2024-04-19", desktop: 243, mobile: 180 },
    { date: "2024-04-20", desktop: 89, mobile: 150 },
    { date: "2024-04-21", desktop: 137, mobile: 200 },
    { date: "2024-04-22", desktop: 224, mobile: 170 },
    { date: "2024-04-23", desktop: 138, mobile: 230 },
    { date: "2024-04-24", desktop: 387, mobile: 290 },
    { date: "2024-04-25", desktop: 215, mobile: 250 },
    { date: "2024-04-26", desktop: 75, mobile: 130 },
    { date: "2024-04-27", desktop: 383, mobile: 420 },
    { date: "2024-04-28", desktop: 122, mobile: 180 },
    { date: "2024-04-29", desktop: 315, mobile: 240 },
    { date: "2024-04-30", desktop: 454, mobile: 380 },
    { date: "2024-05-01", desktop: 165, mobile: 220 },
    { date: "2024-05-02", desktop: 293, mobile: 310 },
    { date: "2024-05-03", desktop: 247, mobile: 190 },
    { date: "2024-05-04", desktop: 385, mobile: 420 },
    { date: "2024-05-05", desktop: 481, mobile: 390 },
    { date: "2024-05-06", desktop: 498, mobile: 520 },
    { date: "2024-05-07", desktop: 388, mobile: 300 },
    { date: "2024-05-08", desktop: 149, mobile: 210 },
    { date: "2024-05-09", desktop: 227, mobile: 180 },
    { date: "2024-05-10", desktop: 293, mobile: 330 },
    { date: "2024-05-11", desktop: 335, mobile: 270 },
    { date: "2024-05-12", desktop: 197, mobile: 240 },
    { date: "2024-05-13", desktop: 197, mobile: 160 },
    { date: "2024-05-14", desktop: 448, mobile: 490 },
    { date: "2024-05-15", desktop: 473, mobile: 380 },
    { date: "2024-05-16", desktop: 338, mobile: 400 },
    { date: "2024-05-17", desktop: 499, mobile: 420 },
    { date: "2024-05-18", desktop: 315, mobile: 350 },
    { date: "2024-05-19", desktop: 235, mobile: 180 },
    { date: "2024-05-20", desktop: 177, mobile: 230 },
    { date: "2024-05-21", desktop: 82, mobile: 140 },
    { date: "2024-05-22", desktop: 81, mobile: 120 },
    { date: "2024-05-23", desktop: 252, mobile: 290 },
    { date: "2024-05-24", desktop: 294, mobile: 220 },
    { date: "2024-05-25", desktop: 201, mobile: 250 },
    { date: "2024-05-26", desktop: 213, mobile: 170 },
    { date: "2024-05-27", desktop: 420, mobile: 460 },
    { date: "2024-05-28", desktop: 233, mobile: 190 },
    { date: "2024-05-29", desktop: 78, mobile: 130 },
    { date: "2024-05-30", desktop: 340, mobile: 280 },
    { date: "2024-05-31", desktop: 178, mobile: 230 },
    { date: "2024-06-01", desktop: 178, mobile: 200 },
    { date: "2024-06-02", desktop: 470, mobile: 410 },
    { date: "2024-06-03", desktop: 103, mobile: 160 },
    { date: "2024-06-04", desktop: 439, mobile: 380 },
    { date: "2024-06-05", desktop: 88, mobile: 140 },
    { date: "2024-06-06", desktop: 294, mobile: 250 },
    { date: "2024-06-07", desktop: 323, mobile: 370 },
    { date: "2024-06-08", desktop: 385, mobile: 320 },
    { date: "2024-06-09", desktop: 438, mobile: 480 },
    { date: "2024-06-10", desktop: 155, mobile: 200 },
    { date: "2024-06-11", desktop: 92, mobile: 150 },
    { date: "2024-06-12", desktop: 492, mobile: 420 },
    { date: "2024-06-13", desktop: 81, mobile: 130 },
    { date: "2024-06-14", desktop: 426, mobile: 380 },
    { date: "2024-06-15", desktop: 307, mobile: 350 },
    { date: "2024-06-16", desktop: 371, mobile: 310 },
    { date: "2024-06-17", desktop: 475, mobile: 520 },
    { date: "2024-06-18", desktop: 107, mobile: 170 },
    { date: "2024-06-19", desktop: 341, mobile: 290 },
    { date: "2024-06-20", desktop: 408, mobile: 450 },
    { date: "2024-06-21", desktop: 169, mobile: 210 },
    { date: "2024-06-22", desktop: 317, mobile: 270 },
    { date: "2024-06-23", desktop: 480, mobile: 530 },
    { date: "2024-06-24", desktop: 132, mobile: 180 },
    { date: "2024-06-25", desktop: 141, mobile: 190 },
    { date: "2024-06-26", desktop: 434, mobile: 380 },
    { date: "2024-06-27", desktop: 448, mobile: 490 },
    { date: "2024-06-28", desktop: 149, mobile: 200 },
    { date: "2024-06-29", desktop: 103, mobile: 160 },
    { date: "2024-06-30", desktop: 446, mobile: 400 },
  ];

  const chartConfig = {
    views: {
      label: "Page Views",
    },
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop");

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="flex justify-between p-3 bg-white">
        <div>{title}</div>
        <div className="flex gap-2">
          <span>
            <RefreshCcw />
          </span>
          <span>
            <Wrench />
          </span>
        </div>
      </div>
      <div className="flex justify-between p-3 px-10 bg-[#f1f5f9]">
        <div className="flex flex-col gap-1 text-center">
          ALL
          <h1 className="font-bold text-2xl">{value_1}</h1>
        </div>
        <div className="flex flex-col gap-1">
          {text_1}
          <h1 className="font-bold text-2xl text-green-500">{value_2}</h1>
        </div>
        <div className="flex flex-col gap-1">
          {text_2}
          <h1 className="font-bold text-2xl text-red-500">{value_3}</h1>
        </div>
      </div>
      <Card className="rounded-none ">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Bar Chart - Interactive</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </div>
          <div className="flex">
            {["desktop", "mobile"].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2025
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
const MyTable = ({
  text_1,
  text_2,
  text_3,
  children,
}: {
  text_1: string;
  text_2: string;
  text_3: string;
  children: ReactNode;
}) => {
  return (
    <Table className="mt-6 bg-white rounded-2xl shadow-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-black">ID</TableHead>
          <TableHead className="text-black">{text_1}</TableHead>
          <TableHead className="text-black">{text_2}</TableHead>
          <TableHead
            className={
              text_3 == "VALUE"
                ? "text-right text-black"
                : "text-center text-black"
            }
          >
            {text_3}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};
