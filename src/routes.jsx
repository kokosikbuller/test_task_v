import { BarsOutlined, FundOutlined, HomeOutlined, LineChartOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import Coins from "./pages/Coins/Coins.jsx";
import CoinsPaged from "./pages/CoinsPaged/CoinsPaged.jsx";
import Chart from "./pages/Chart/Chart.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: "/coins", label: "Coins", icon: <FundOutlined />, element: <Coins /> },
    { path: "/coins-paged", label: "Coins Paged", icon: <BarsOutlined  />, element: <CoinsPaged /> },
    { path: "/chart", label: "Chart", icon: <LineChartOutlined />, element: <Chart /> },
];
