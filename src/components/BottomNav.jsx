import ActivityIcon from "./SVGs/ActivityIcon";
import DashboardIcon from "./SVGs/dashboard";
import ProductsIcon from "./SVGs/ProductsIcon";
import WalletIcon from "./SVGs/WalletIcon";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full z-20 bg-white py-3 md:hidden block">
      <ul className="flex justify-around text-sm">
        <li className="flex justify-center flex-wrap">
          <DashboardIcon />
          <p className="w-full mt-2 text-center">Dashboard</p>
        </li>
        <li className="flex justify-center flex-wrap">
          <ActivityIcon />
          <p className="w-full mt-2 text-center">Activity</p>
        </li>
        <li className="flex justify-center flex-wrap text-primary font-medium">
          <WalletIcon />
          <p className="w-full mt-2 text-center">Wallet</p>
        </li>
        <li className="flex justify-center flex-wrap">
          <ProductsIcon />
          <p className="w-full mt-2 text-center">Products</p>
        </li>
      </ul>
    </div>
  )
}
