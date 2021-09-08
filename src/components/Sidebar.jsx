import logo from '../assets/img/Logo.svg';
import GiftIcon from './GiftIcon';
import ActivityIcon from './SVGs/ActivityIcon';
import DashboardIcon from './SVGs/dashboard';
import HelpIcon from './SVGs/HelpIcon';
import ProductsIcon from './SVGs/ProductsIcon';
import WalletIcon from './SVGs/WalletIcon';

export default function Sidebar() {
  return (
    <div className="border-gray1 py-6 w-2/12 h-full border-r relative">
      <img
        src={logo}
        alt="Patricia Logo"
        className="mx-auto w-32"

      />

      <ul className="mr-6 mt-24">
        <li className="text-gray2 flex items-center justify-start pl-16 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer my-3">
          <DashboardIcon />
          <span className="ml-4 font-medium">Dashboard</span>
        </li>
        <li className="text-gray2 flex items-center justify-start pl-16 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer my-3">
          <ActivityIcon />
          <span className="ml-4 font-medium">Activity</span>
        </li>
        <li className="flex items-center justify-start pl-16 py-5 text-primary text-lg bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer my-3">
          <WalletIcon />
          <span className="ml-4 font-medium">Wallet</span>
        </li>
        <li className="text-gray2 flex items-center justify-start pl-16 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer my-3">
          <ProductsIcon />
          <span className="ml-4 font-medium">Products</span>
        </li>
        <li className="text-gray2 flex items-center justify-start pl-16 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer my-3">
          <GiftIcon />
          <span className="ml-4 font-medium">Referrals</span>
        </li>
      </ul>

      <div className="absolute bottom-6 flex items-center justify-center text-gray2 font-medium  w-full">
        <HelpIcon />
        <span className="ml-5">Help Center</span> 
      </div>
    </div>
  );
}
