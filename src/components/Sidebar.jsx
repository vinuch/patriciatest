import logo from '../assets/img/Logo.svg';
import DashboardIcon from './SVGs/dashboard';

export default function Sidebar() {
  return (
    <div className="border-gray1 py-6 w-2/12 h-full border-r">
      <img
        src={logo}
        alt="Patricia Logo"
        className="mx-auto"
        width={110}
        height={21}
      />

      <ul className="mr-6 mt-24">
        <li className="text-gray2 flex justify-center pl-8 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer">
          <DashboardIcon />
          <span className="ml-4 font-medium">Dashboard</span>
        </li>
        <li className="text-gray2 flex justify-center pl-8 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer">
          <DashboardIcon />
          <span className="ml-4 font-medium">Dashboard</span>
        </li>
        <li className="text-gray2 flex justify-center pl-8 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer">
          <DashboardIcon />
          <span className="ml-4 font-medium">Dashboard</span>
        </li>
        <li className="text-gray2 flex justify-center pl-8 py-5 hover:text-primary text-lg hover:bg-secondary hover:bg-opacity-70 rounded-r-xl cursor-pointer">
          <DashboardIcon />
          <span className="ml-4 font-medium">Dashboard</span>
        </li>
      </ul>
    </div>
  );
}
