import AppleLogo from './AppleLogo';
import NetflixLogo from './NetflixLogo';
import StarbucksLogo from './StarbucksLogo';
import AmazonLogo from './SVGs/AmazonLogo';
import NikeLogo from './SVGs/NikeLogo';

export default function RecentActivity() {
  return (
    <div className="md:w-28p right-0 right-0 p-4 pb-24 w-full h-full bg-gray4 md:fixed md:p-6">
      <div className="p-4 w-full h-full bg-white rounded-lg">
        <div className="flex justify-between">
          <h4 className="text-gray5 text-lg font-medium">Recent Activity</h4>
        </div>

        <ul>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <AmazonLogo />
              <div className="ml-4">
                <h5 className="font-medium">Amazon</h5>
                <span className="text-gray5 text-sm">Just now</span>
              </div>
            </div>
            <span>$377.23</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <NikeLogo />
              <div className="ml-4">
                <h5 className="font-medium">Nike</h5>
                <span className="text-gray5 text-sm">Today</span>
              </div>
            </div>
            <span>$237,737,55.23</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <StarbucksLogo />
              <div className="ml-4">
                <h5 className="font-medium">Starbucks</h5>
                <span className="text-gray5 text-sm">Yesterday</span>
              </div>
            </div>
            <span>$873,873,834.3</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <NetflixLogo />
              <div className="ml-4">
                <h5 className="font-medium">Netflix</h5>
                <span className="text-gray5 text-sm">June 17</span>
              </div>
            </div>
            <span>$599</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <AppleLogo />

              <div className="ml-4">
                <h5 className="font-medium">Apple</h5>
                <span className="text-gray5 text-sm">June 15</span>
              </div>
            </div>
            <span>$872</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <StarbucksLogo />

              <div className="ml-4">
                <h5 className="font-medium">Starbucks</h5>
                <span className="text-gray5 text-sm">June 13</span>
              </div>
            </div>
            <span>$244.55</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <NikeLogo />
              <div className="ml-4">
                <h5 className="font-medium">Nike</h5>
                <span className="text-gray5 text-sm">June 11</span>
              </div>
            </div>
            <span>$452</span>
          </li>
          <li className="flex items-center justify-between my-8">
            <div className="flex items-center">
              <AppleLogo />
              <div className="ml-4">
                <h5 className="font-medium">Apple</h5>
                <span className="text-gray5 text-sm">June 09</span>
              </div>
            </div>
            <span>$990</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
