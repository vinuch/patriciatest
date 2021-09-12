// import '../assets/style/card.css'
import { useState } from 'react';
import logo from '../assets/img/logo-white.svg';
import mastercard from '../assets/img/mastercard.png';

export default function DollarCard() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`card relative w-full h-full px-6 py-6 bg-black text-white`}
    >
      <svg
        className={`absolute -top-4 right-0 fill-current text-light`}
        width="177"
        height="169"
        viewBox="0 0 177 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <path d="M176.001 21.3486V20.7406C166.926 28.6603 160.238 46.4606 158.87 66.3891C158.505 71.7855 156.483 75.2665 153.017 76.4674C150.464 77.349 147.256 76.9842 143.73 75.3881C140.218 73.792 136.722 71.147 133.621 67.7268C132.435 66.4195 130.93 64.9298 129.319 63.3489C121.855 56.0068 111.656 45.9438 116.337 37.0208C118.906 32.1413 123.756 31.2292 128.878 30.2716C134.077 29.2987 139.458 28.2954 142.042 22.7471C142.818 21.075 143.365 19.1444 143.684 16.9555H142.757C142.453 19.0076 141.936 20.8014 141.206 22.3671C138.82 27.4898 133.895 28.4171 128.696 29.3899C123.573 30.3476 118.283 31.3356 115.517 36.6104C111.868 43.5724 116.474 50.9601 122.22 57.3749C126.279 62.4673 131.356 67.134 134.32 70.5694C144.505 82.3958 159.888 86.044 161.804 70.3414C163.704 54.882 168.994 40.7907 175.986 31.8981L176.001 21.3486Z" />
          <path d="M10.5997 48.7261C10.3412 50.5046 9.79399 52.3592 9.21636 54.3201C8.22829 57.6795 7.22503 61.1149 7.55945 64.4439C7.27064 67.4081 7.49865 70.3267 8.97314 73.0021C10.7365 76.1943 15.0079 77.2432 18.1545 75.9207C28.02 71.7708 28.5368 56.9195 39.7855 54.8673H39.8007C44.4978 53.5904 49.8638 56.2354 53.3752 59.1388C59.3188 64.0791 64.2135 73.0781 65.2168 81.2106C65.2016 81.5755 65.2016 81.9555 65.1864 82.3203C65.0952 85.5733 65.004 89.176 65.2472 92.7482C65.2776 98.8286 65.8704 105.152 68.865 109.986C73.5773 117.617 85.6773 115.489 83.534 108.314C83.7924 107.98 84.0204 107.615 84.1724 107.235C84.7957 105.745 84.9325 103.206 81.9683 99.6798C78.7609 95.8492 77.3168 92.277 77.3928 88.4463C77.4688 85.0717 78.7305 81.4235 81.4666 76.6199C83.8988 72.3637 87.4862 68.2746 91.3017 63.9575C97.1693 57.2843 103.25 50.3678 104.967 42.5545C106.016 37.7662 105.864 32.2787 104.496 26.2287C103.827 23.2645 102.87 20.1483 101.623 16.9257H100.65C101.942 20.2243 102.93 23.4013 103.614 26.4263C104.952 32.3395 105.104 37.7054 104.086 42.3569C102.414 49.9422 96.4244 56.7674 90.6176 63.3647C86.787 67.7274 83.154 71.8468 80.6762 76.1791C77.8488 81.1194 76.5567 84.9045 76.4807 88.4311C76.3895 92.505 77.9096 96.2596 81.269 100.273C83.382 102.796 84.0812 105.076 83.3212 106.885C82.6371 108.496 80.8282 109.576 78.4569 109.758C75.7663 109.971 71.8292 108.892 69.5339 105.198C65.6272 98.8894 65.8856 89.708 66.0833 82.3355C66.0984 81.5755 66.1289 80.8306 66.1441 80.101C66.3417 71.2844 61.0973 60.1421 53.9529 54.2137C50.3654 51.2343 44.8171 48.5285 39.9679 49.851H39.9528C35.1036 51.2191 31.8354 56.2506 28.6888 61.1301C26.4087 64.6416 24.2653 67.9554 21.6204 69.8707C19.097 71.71 16.4672 72.4397 14.2327 71.938C12.3478 71.5124 10.8125 70.2659 9.67239 68.2138C7.31623 63.9727 8.72993 59.1844 10.0828 54.5633C10.6757 52.572 11.2229 50.6871 11.4965 48.8477C12.2718 43.5578 11.6789 37.3254 9.8396 31.3058C8.09149 25.6206 5.3097 20.5891 1.91988 16.9409H0.658203C4.21523 20.5283 7.14902 25.6966 8.95794 31.5794C10.7517 37.3862 11.3445 43.6338 10.5997 48.7261Z" />
          <path d="M162.426 87.1732C158.094 95.4881 154.005 103.362 149.126 106.053C146.116 107.71 143.532 108.029 141.221 107.041C135.004 104.335 131.979 92.3415 129.304 81.7616C127.297 73.7811 125.549 66.8951 122.722 64.1437C119.332 60.8451 115.714 59.553 111.974 60.2978C101.273 62.4108 92.6996 80.3479 90.3282 85.8051C86.5584 94.4545 87.1816 100.641 92.5324 107.923C93.2012 108.835 93.9916 109.792 94.8277 110.811C98.4911 115.28 103.036 120.859 100.938 126.62C99.2968 131.134 100.315 135.801 103.887 140.103C106.882 143.69 111.579 146.867 116.778 148.798C118.663 149.497 120.624 150.105 122.524 150.698C129.577 152.887 136.235 154.97 140.476 161.567C141.844 163.695 143.197 166.234 144.398 169H145.386C144.125 166.036 142.696 163.33 141.236 161.065C136.813 154.194 129.684 151.975 122.782 149.816C120.897 149.224 118.952 148.631 117.082 147.932C112.02 146.062 107.46 142.991 104.572 139.51C102.231 136.698 99.844 132.229 101.775 126.924C104.055 120.676 99.3272 114.885 95.5117 110.233C94.6909 109.23 93.9156 108.272 93.2468 107.375C88.1241 100.413 87.5312 94.4697 91.1491 86.1699C92.502 83.0689 95.3597 77.0493 99.312 71.5466C103.675 65.4966 107.992 62.0156 112.126 61.1947C115.562 60.5259 118.906 61.7267 122.068 64.7973C124.713 67.3663 126.507 74.4804 128.407 81.9897C131.128 92.7824 134.213 105.004 140.841 107.877C143.395 108.987 146.313 108.637 149.551 106.858C154.674 104.031 158.824 96.0506 163.217 87.5988C167.139 80.0591 171.167 72.337 175.986 68.1416V66.9559C170.772 71.1361 166.546 79.2383 162.426 87.1732Z" />
          <path d="M167.792 104.377C165.345 109.317 163.019 113.984 159.949 116.218C155.145 119.715 149.642 121.083 144.444 120.064C139.138 119.031 134.426 115.58 131.204 110.366C129.911 108.268 128.665 104.179 127.342 99.8318C124.697 91.1368 121.703 81.2866 116.504 79.9793C114.802 79.5537 113.266 79.7513 111.944 80.5721C108.402 82.7611 107.049 88.9479 105.97 93.9034C105.499 96.0467 105.103 97.9013 104.602 99.0413C101.911 105.213 102.367 109.636 106.183 114.835C106.76 115.61 107.399 116.37 108.083 117.191C109.861 119.304 111.716 121.478 112.248 123.986C112.506 125.217 112.278 126.388 112.035 127.634C111.746 129.124 111.442 130.675 112.065 132.255C114.498 138.549 123.269 140.859 130.322 142.714C132.283 143.231 134.137 143.717 135.627 144.234C145.325 147.608 158.596 152.214 164.934 162.065C166.166 163.98 167.367 166.351 168.37 168.935H169.343C168.294 166.154 167.017 163.6 165.695 161.563C159.189 151.454 145.736 146.772 135.916 143.367C134.381 142.835 132.511 142.349 130.535 141.817C123.679 140.008 115.151 137.773 112.886 131.906C112.369 130.553 112.628 129.215 112.902 127.786C113.145 126.51 113.403 125.172 113.114 123.773C112.537 121.037 110.621 118.772 108.767 116.583C108.098 115.793 107.46 115.033 106.912 114.288C103.31 109.393 102.899 105.228 105.438 99.391C105.97 98.1749 106.38 96.2748 106.867 94.0858C107.916 89.2823 109.223 83.3235 112.43 81.3322C113.555 80.6329 114.802 80.4809 116.291 80.8457C121.004 82.0314 124.044 92.0337 126.476 100.09C127.874 104.681 129.075 108.648 130.428 110.837C133.803 116.264 138.713 119.867 144.276 120.946C149.734 122.01 155.479 120.596 160.496 116.948C163.749 114.577 166.12 109.819 168.613 104.772C170.817 100.318 173.082 95.7731 176.016 92.8545V91.5776C172.657 94.5722 170.194 99.5278 167.792 104.377Z" />
          <path d="M169.419 120.4L168.963 120.78C163.172 125.507 156.62 130.858 148.746 128.38C146.8 127.772 144.9 126.754 143.076 125.781C139.048 123.638 134.883 121.418 129.851 123.273C126.796 124.398 125.99 125.994 125.838 127.149C125.61 129.003 126.917 131.01 129.517 132.773C133.454 135.449 138.166 136.65 142.726 137.805C144.93 138.367 147.211 138.945 149.324 139.675C157.836 142.639 169.1 146.545 176.016 154.131V152.808C168.918 145.542 157.958 141.727 149.628 138.823C147.469 138.078 145.174 137.486 142.954 136.923C138.47 135.783 133.849 134.597 130.033 132.013C127.769 130.463 126.568 128.73 126.75 127.255C126.902 125.978 128.088 124.899 130.17 124.124C134.822 122.406 138.622 124.443 142.65 126.587C144.52 127.575 146.451 128.608 148.472 129.247H148.487C156.833 131.861 163.582 126.343 169.556 121.479L170.012 121.099C170.164 120.977 170.377 120.795 170.635 120.582C172.596 118.956 174.39 117.542 176.016 116.356V115.216C173.934 116.706 171.851 118.378 170.042 119.883C169.784 120.111 169.571 120.278 169.419 120.4Z" />
          <path d="M26.4576 80.1906C24.7734 84.388 24.1926 88.1975 24.8057 90.9163C25.6794 94.7866 28.6574 96.917 31.546 98.965C32.5758 99.7095 33.6606 100.484 34.608 101.318C37.0824 103.501 38.3691 106.118 39.7375 108.893C41.1642 111.784 42.6269 114.77 45.5411 117.193L45.6073 117.234C47.1723 118.183 48.6284 118.825 49.9325 119.16C55.274 121.488 61.4311 121.589 63.481 116.301C66.0573 109.637 56.8981 102.168 54.5301 96.421C51.3065 88.6204 55.7779 80.9136 53.5037 72.9142C51.879 67.1911 45.5792 63.4816 43.0023 63.874C42.6921 63.9185 42.3724 63.9957 42.0639 64.0832C41.8706 64.0909 41.6884 64.1088 41.4959 64.1379C38.8545 64.5328 36.0098 66.3127 33.2555 69.2938C30.5416 72.2087 28.0739 76.1789 26.4576 80.1906ZM40.5599 108.473C39.2148 105.74 37.8233 102.923 35.2149 100.616C34.2341 99.7515 33.1381 98.9666 32.0756 98.2126C29.2085 96.1638 26.496 94.2164 25.7011 90.7088C24.528 85.5272 28.2922 75.9873 33.9142 69.9024C36.5241 67.0776 39.1901 65.4017 41.6175 65.0367C44.216 64.6435 46.2444 66.9729 47.6555 71.9192C48.63 75.3444 49.0623 78.931 49.4689 82.411C50.0287 87.0467 50.5945 91.8327 52.4509 96.3418C53.1289 97.9824 54.0527 99.5809 54.9525 101.116C57.2714 105.08 59.4529 108.834 57.6766 113.422C57.12 114.853 56.445 116.009 55.692 116.824C53.5257 119.169 50.3802 119.057 46.0827 116.473C43.3558 114.16 41.9291 111.269 40.5599 108.473Z" />
          <path d="M134.837 41.7053C134.594 42.1005 134.411 42.5413 134.274 43.0126C133.423 45.992 134.305 49.5034 136.676 52.6348C139.443 56.283 143.638 58.6544 147.362 58.6544C147.758 58.6544 148.168 58.624 148.548 58.5784C150.19 58.3504 151.497 57.4991 152.455 56.0398C154.355 53.1212 154.4 48.1505 153.488 44.9431C152.956 43.0886 151.391 41.4013 149.08 40.2004C146.982 39.1059 144.398 38.4827 141.981 38.4827C138.652 38.4979 136.038 39.6683 134.837 41.7053ZM152.607 45.1863C153.352 47.7553 153.549 52.6652 151.679 55.5382C150.874 56.7694 149.779 57.4839 148.411 57.6663C148.062 57.7119 147.712 57.7423 147.347 57.7423C143.897 57.7423 139.975 55.523 137.391 52.0875C135.202 49.1842 134.381 45.9616 135.141 43.2558C135.247 42.8606 135.414 42.4957 135.612 42.1613C136.661 40.398 138.971 39.3947 141.981 39.3947C146.298 39.4099 151.588 41.6141 152.607 45.1863Z" />
          <path d="M83.9177 40.4081C84.0504 39.9634 84.1124 39.4904 84.1226 38.9998C84.1738 35.9016 82.4133 32.738 79.3123 30.3271C75.6957 27.5192 71.0295 26.3145 67.4322 27.2784C67.0504 27.3807 66.6618 27.5163 66.3065 27.6587C64.7798 28.3039 63.7374 29.4644 63.19 31.1219C62.11 34.4328 63.3525 39.246 65.0636 42.108C66.0575 43.7616 68.0066 44.9862 70.5492 45.5482C72.8587 46.0624 75.5162 45.9956 77.8508 45.37C81.0624 44.4937 83.285 42.6864 83.9177 40.4081ZM65.8523 41.6449C64.4679 39.3563 63.0063 34.6648 64.0687 31.4058C64.5282 30.0079 65.4005 29.0346 66.6747 28.5043C67.0007 28.3697 67.3305 28.2499 67.6829 28.1555C71.0159 27.2624 75.3786 28.391 78.7638 31.0406C81.6296 33.2785 83.2566 36.1788 83.2228 38.9891C83.2223 39.3984 83.1552 39.7941 83.0508 40.1683C82.4941 42.143 80.5219 43.7101 77.6147 44.4891C73.4408 45.5917 67.7606 44.8318 65.8523 41.6449Z" />
          <path d="M70.484 64.0918C70.8566 64.7371 71.6132 65.4763 73.073 65.3219C74.4388 65.1787 76.4556 64.2007 77.3879 63.2322C78.7343 61.8382 78.4169 59.0528 77.3363 57.1813C76.5663 55.8475 75.4844 55.0666 74.366 55.067C74.1488 55.0634 73.9225 55.0936 73.6978 55.1516C72.5191 55.445 71.4258 56.6068 70.694 58.32C69.9486 60.0842 69.596 62.5537 70.484 64.0918ZM73.8797 55.8641C74.0444 55.8264 74.2045 55.8056 74.3601 55.8019C75.212 55.8119 76.0513 56.446 76.691 57.5539C77.8833 59.619 77.699 61.8336 76.8511 62.7247C76.0553 63.557 74.1783 64.4543 72.9896 64.5813C72.138 64.6713 71.5144 64.386 71.1294 63.7192C70.4773 62.5898 70.5851 60.4911 71.3839 58.5958C72.0136 57.1279 72.9426 56.104 73.8797 55.8641Z" />
          <path d="M41.9904 13.0258C46.0338 12.4938 50.2597 6.67183 51.8862 4.19406C52.6463 3.02359 53.3455 1.85312 53.9688 0.682641L52.9351 0.682641C52.3878 1.68591 51.7798 2.70437 51.1262 3.69244C47.8732 8.63276 44.4225 11.7946 41.8688 12.129C39.8166 12.4026 38.3573 10.7761 37.5365 7.29507C37.0805 5.37974 37.3085 3.03879 37.7949 0.68264L36.8676 0.68264C36.3812 3.08439 36.1836 5.48616 36.6548 7.50789C37.2933 10.2593 38.7526 13.4515 41.9904 13.0258Z" />
          <path d="M31.0328 48.1539C33.5258 48.2147 36.0036 47.1659 38.6485 44.9617C42.7832 41.4959 45.1698 36.4492 47.4803 31.5849C47.6171 31.2808 47.7539 30.992 47.9059 30.7032C52.9527 20.0777 57.7258 11.4436 64.627 3.87347C64.931 3.53905 65.2655 3.15902 65.6455 2.74859C66.1927 2.14055 66.816 1.44131 67.5 0.696457L66.2687 0.696457C65.7975 1.21329 65.3719 1.69972 64.9766 2.14055C64.6118 2.55098 64.2622 2.93101 63.9734 3.26543C56.9961 10.9267 52.1926 19.6217 47.1003 30.3232C46.9635 30.612 46.8267 30.916 46.6746 31.22C44.4097 36.0084 42.0687 40.9487 38.0861 44.2929C35.6235 46.345 33.3282 47.3331 31.0784 47.2723C28.1294 47.2115 25.6365 46.4362 23.8732 45.0377C21.9578 43.5176 21.0002 41.3743 21.061 38.6533C21.1522 33.8346 23.2955 29.4719 25.3781 25.246C27.4454 21.0354 29.5735 16.7031 29.8016 11.7932C29.984 7.6433 29.4367 3.81266 28.2511 0.696453L27.2782 0.696453C28.4943 3.73665 29.0719 7.5673 28.8895 11.7476C28.6767 16.4599 26.5789 20.7162 24.5572 24.8356C22.4443 29.1375 20.2553 33.5914 20.1489 38.6229C20.0121 44.3385 24.1924 48.0019 31.0328 48.1539Z" />
        </g>
      </svg>

      <svg
        className="absolute -bottom-12 -left-16 w-64 h-64 text-white fill-current"
        viewBox="0 0 133 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.12"
          d="M133 151.394C133 140.708 130.698 131.039 125.583 124.932C121.746 119.843 120.723 117.299 114.84 113.482C108.958 109.411 108.19 108.393 101.029 105.34C97.4481 103.559 94.8904 102.541 93.6115 102.032L85.6827 98.9789L78.5212 96.18H78.2654V66.1556C84.6596 68.4456 89.0077 73.5344 91.5654 81.4222L130.442 59.7944C120.212 37.6578 102.819 25.19 78.2654 22.3911V0H60.3615V21.8822C44.5038 23.1544 31.4596 28.7522 21.2288 38.4211C10.9981 47.8355 5.88269 60.5578 5.88269 76.5878C5.88269 92.8722 10.9981 105.086 21.9962 113.991C32.9942 122.388 41.9462 126.968 58.0596 132.82L60.3615 133.583V163.862C50.3865 161.318 43.4808 154.448 39.6442 143.507L0 165.643C8.44038 190.07 30.4365 205.082 60.3615 207.118V229H78.2654V206.863C111.771 203.047 133 183.2 133 151.394ZM50.3865 76.8422C50.3865 70.7356 53.7115 66.9189 60.3615 65.1378V88.2922C53.7115 84.9844 50.3865 81.1678 50.3865 76.8422ZM78.2654 140.708C85.1712 143.761 88.4962 147.578 88.4962 152.158C88.4962 158.01 85.1712 161.827 78.2654 163.608V140.708Z"
        />
      </svg>

      <div className="flex justify-between w-full">
        <img src={logo} alt="Patricia Logo" className="w-24" />
        <button
          className="z-20 cursor-pointer"
          onClick={() => setHidden(!hidden)}
        >
          {!hidden ? (
            <svg
              className="w-6 fill-current"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.03205 4.41963C7.36785 4.41963 6.82733 4.96015 6.82733 5.62435C6.82733 6.28856 7.36785 6.82908 8.03205 6.82908C8.69625 6.82908 9.23677 6.28856 9.23677 5.62435C9.23677 4.96015 8.69625 4.41963 8.03205 4.41963ZM8.03205 8.43538C6.48197 8.43538 5.22103 7.17443 5.22103 5.62435C5.22103 4.07428 6.48197 2.81333 8.03205 2.81333C9.58213 2.81333 10.8431 4.07428 10.8431 5.62435C10.8431 7.17443 9.58213 8.43538 8.03205 8.43538ZM15.957 5.22336C15.4438 4.33026 12.6143 -0.146497 7.81384 0.00369219C3.37483 0.116936 0.791905 4.02828 0.106016 5.22336C-0.0353386 5.47154 -0.0353386 5.77513 0.106016 6.0233C0.612 6.90435 3.34271 11.2454 8.05157 11.2454C8.11663 11.2454 8.18249 11.2446 8.24915 11.243C12.6882 11.1297 15.2711 7.21839 15.957 6.0233C16.0983 5.77513 16.0983 5.47154 15.957 5.22336Z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 fill-current"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.953 1.25784C13.1599 1.05085 13.1599 0.715255 12.953 0.508268C12.746 0.30128 12.4104 0.30128 12.2034 0.508268L0.896203 11.8155C0.689215 12.0224 0.689215 12.358 0.896203 12.565C1.10319 12.772 1.43878 12.772 1.64577 12.565L3.79061 10.4202C4.72192 10.8498 5.7881 11.1302 6.92458 11.1302C8.77456 11.1302 10.4383 10.3872 11.6371 9.46708C12.2373 9.00643 12.7298 8.49482 13.0753 7.99691C13.4143 7.50849 13.6382 6.99492 13.6382 6.53665C13.6382 6.07838 13.4143 5.5648 13.0753 5.07638C12.7298 4.57847 12.2373 4.06686 11.6371 3.60622C11.4459 3.45945 11.2428 3.31718 11.0291 3.18172L12.953 1.25784ZM9.13563 5.07516L8.35969 5.8511C8.45903 6.05868 8.51465 6.29117 8.51465 6.53665C8.51465 7.41482 7.80275 8.12672 6.92458 8.12672C6.6791 8.12672 6.44661 8.07109 6.23904 7.97176L5.4631 8.7477C5.88205 9.02518 6.38444 9.18677 6.92458 9.18677C8.3882 9.18677 9.5747 8.00027 9.5747 6.53665C9.5747 5.99651 9.41311 5.49411 9.13563 5.07516Z"
              />
              <path d="M7.35799 3.92179C7.442 3.93561 7.52856 3.91104 7.58876 3.85084L8.85311 2.58649C8.98547 2.45414 8.93043 2.22946 8.74937 2.18202C8.17044 2.03033 7.55844 1.9431 6.92458 1.9431C5.0746 1.9431 3.41088 2.68611 2.21204 3.60622C1.61184 4.06686 1.11935 4.57847 0.773817 5.07638C0.434863 5.5648 0.210938 6.07838 0.210938 6.53665C0.210938 6.99492 0.434863 7.50849 0.773817 7.99691C1.05847 8.40709 1.44285 8.82657 1.90503 9.21919C2.00219 9.30173 2.14606 9.29354 2.23621 9.20339L4.23878 7.20083C4.29898 7.14063 4.32354 7.05407 4.30973 6.97006C4.28652 6.82903 4.27446 6.68425 4.27446 6.53665C4.27446 5.07302 5.46096 3.88652 6.92458 3.88652C7.07218 3.88652 7.21696 3.89859 7.35799 3.92179Z" />
            </svg>
          )}
        </button>
      </div>

      {hidden ? (
        <p className="flex justify-between mt-16 text-2xl font-light tracking-widest">
          <span>••••</span>
          <span>••••</span>
          <span>••••</span>
          <span>••••</span>
        </p>
      ) : (
        <p className="flex justify-between mt-16 text-2xl font-light tracking-widest">
          <span>7545</span>
          <span>7545</span>
          <span>7545</span>
          <span>7545</span>
        </p>
      )}

      <p className="flex items-center my-4 text-base">
        <span className="text-xs font-light">BALANCE</span>
        <span className="ml-2 text-xl font-medium">
          {hidden ? '••••' : '$200,000'}
        </span>
      </p>

      <div className="flex items-center justify-between text-xs">
        <p>Card Holder Name</p>

        <div className="flex items-center mx-2">
          <span style={{ fontSize: '9px', lineHeight: '10px' }}>
            VALID <br /> THRU
          </span>
          <span className="ml-2">10/12</span>
        </div>

        <div className="flex items-center mx-2">
          <span style={{ fontSize: '9px', lineHeight: '10px' }}>CVV</span>
          <div className="ml-2 text-lg">••••</div>
        </div>

        <img src={mastercard} alt="" className="w-12 h-8 md:w-16 md:h-10" />
      </div>
    </div>
  );
}
