import CardSlider from "./CardSlider";

export default function MainArea() {
  return (
    <div className="border-t border-gray1 w-full md:w-8/12 h-100 px-4 md:px-8 py-12">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#DEF5F2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8459 15.1057C18.9452 14.9232 21.0565 14.9232 23.1558 15.1057L24.1627 15.1932C25.126 15.2769 25.9065 16.01 26.0503 16.9663C26.3527 18.9774 26.3527 21.0225 26.0503 23.0336C26.0238 23.2096 25.9758 23.378 25.9091 23.5361C25.8649 23.641 25.7283 23.6569 25.6518 23.5727L22.7042 20.3303C22.571 20.1838 22.3639 20.1297 22.1761 20.1923L20.4888 20.7547L18.0412 18.0011C17.9497 17.8982 17.8199 17.8376 17.6822 17.8335C17.5446 17.8295 17.4113 17.8824 17.314 17.9798L14.0379 21.2558C13.9371 21.3567 13.7651 21.2925 13.7571 21.1501C13.6782 19.7542 13.743 18.3522 13.9514 16.9663C14.0952 16.01 14.8757 15.2769 15.8391 15.1932L16.8459 15.1057ZM21.3342 18C21.3342 17.4477 21.7819 17 22.3342 17C22.8865 17 23.3342 17.4477 23.3342 18C23.3342 18.5523 22.8865 19 22.3342 19C21.7819 19 21.3342 18.5523 21.3342 18Z" fill="#006156"/>
            <path d="M13.9751 22.7329C13.9382 22.7698 13.9206 22.8218 13.928 22.8735C13.9356 22.9269 13.9434 22.9803 13.9514 23.0336C14.0952 23.9899 14.8757 24.723 15.8391 24.8068L16.8459 24.8943C18.9452 25.0768 21.0565 25.0768 23.1558 24.8943L24.1627 24.8068C24.4458 24.7821 24.713 24.7015 24.953 24.5755C25.044 24.5278 25.0593 24.4076 24.9902 24.3316L22.2563 21.3243C22.2119 21.2755 22.1429 21.2574 22.0803 21.2783L20.4923 21.8077C20.3025 21.8709 20.0934 21.815 19.9605 21.6655L17.7635 19.1939C17.6998 19.1223 17.5889 19.119 17.5211 19.1868L13.9751 22.7329Z" fill="#006156"/>
          </svg>

          <div className="ml-4">
            <h4 className="text-xl font-semibold">Virtual Card</h4>
            <p className="text-gray5">Lorem Ipsum dolor sit amet</p>
          </div>
        </div>
      
        <button className="bg-secondary text-lg rounded-md px-8 py-3 my-6 ml-auto">Create New Card</button>
      </div>

      <CardSlider />

      <div className="bg-gray4 w-full p-4 md:p-8 rounded-3xl my-4 flex flex-wrap items-start">
        <div className="w-full md:w-9/12">
          <p className="flex w-full mb-6"><span className="w-6/12 text-gray5">Card Balance</span><span className="w-6/12 text-primary font-medium text-lg">$3000.73</span></p>
          <p className="flex w-full mb-6"><span className="w-6/12 text-gray5">Name</span><span className="w-6/12 text-grayDark font-medium text-lg">Netflix Card</span></p>
          <p className="flex w-full mb-6"><span className="w-6/12 text-gray5">Card Status</span><span className="w-6/12 text-grayDark font-medium text-lg">Active</span></p>
          <p className="flex w-full mb-6"><span className="w-6/12 text-gray5">Billing Address</span><span className="w-6/12 text-grayDark font-medium text-lg">Patricia HQ, SA 109827</span></p>
          <p className="flex w-full mb-6"><span className="w-6/12 text-gray5">Date Created</span><span className="w-6/12 text-grayDark font-medium text-lg">March 3rd 2020, 9:48:36 am</span></p>
        </div>
        <button className="border-2 border-primary rounded-lg px-4 py-2 font-medium bg-white">Fund Card</button>
      </div>
    </div>
  )
}
