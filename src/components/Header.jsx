import leftArrow from '../assets/img/left-arrow.png'
import NotificationIcon from './SVGs/NotificationIcon'
import OptionsIcon from './SVGs/OptionsIcon'
import avatar from '../assets/img/avatar.png'
export default function Header() {
  return (
    <div className=" flex justify-between fixed w-full md:w-10/12 z-20 bg-white">
      <div className="bg-white md:w-8/12 px-6 py-9 flex items-center">
        <img src={leftArrow} alt="back icon" /> 
        <h3 className="text-3xl ml-2 text-gray5 font-medium">Cards</h3>
      </div>
      <div className="md:bg-gray4 md:w-4/12 flex items-center justify-end md:px-6">
        <button className="bg-white p-2 mx-2 rounded-md">
          <NotificationIcon showBadge/>
        </button>
        <button className="bg-white p-1 mx-2 rounded-md">
          <img src={avatar} alt="avatar" className="w-10 rounded-md h-10" />
        </button>
        <button>
          <OptionsIcon />
        </button>
      </div>
    </div>
  )
}
