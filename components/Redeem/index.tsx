import TabHeader from '../TabHeader';

const header = [
  {
    name: 'COLLATERAL RATIO',
    value: '86.25%',
  },
  {
    name: 'REDEMPTION FEE',
    value: '0.4500%',
  },
  {
    name: 'POOL BALANCE',
    value: '72.35m USDC',
  },
];

export default function Mint() {
  return (
    <div className="font-poppins mint-screen text-white">
      <TabHeader items={header} itemKey="name" label="REDEEM" />
      <div className="md:flex md:justify-between md:h-5/6 mt-5">
        <div className="md:mt-48 md:w-1/4 mt-2">
          <div className="flex justify-center content-center">
            <img src="/logo.png" className="mt-5 pt-3" width="25" height="3" />
            <div className="text-center pt-3">
              <p className="text-sm semibold title">FRAX</p>
              <input
                type="text"
                placeholder="Amount"
                className="rounded border border-gray-300 text-center text-sm"
              />
            </div>
          </div>
          <div className="text-center text-sm">
            <p className="mt-1">0 Available</p>
            <p className="mt-2">
              <a href="#">
                Pool 🌊: <span className="title">0x123...456</span>
              </a>
            </p>
          </div>
        </div>
        <div className="md:w-2/4 mt-10 md:mt-28 md:mb-32">
          <div className="grid place-items-end">
            <div className="redeem-border w-11/12 flex md:mt-16 mt-6">
              <div className="px-3 p-2 text-white text-center redeem-ends text-sm">
                0.45%
              </div>
              <div className=" w-11/12 p-2 text-center text-sm redeem-bg">
                <span>REDEMPTION FEE</span>
              </div>
              <div className="text-white p-2 text-center redeem-ends text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#4BC0C0"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"></path>
                </svg>
              </div>
            </div>

            <div className="redeem-border w-11/12 flex md:mt-16 mt-6">
              <div className="px-3 p-2 text-white text-center redeem-ends text-sm">
                0.45%
              </div>
              <div className=" w-11/12 p-2 text-center text-sm redeem-bg">
                <div className="flex justify-center">
                  <p className="mr-2">POOL</p>
                  <div className="mr-2">
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <circle cx="16" cy="16" r="16" fill="#2775C9" />
                        <path
                          d="M15.75 27.5C9.26 27.5 4 22.24 4 15.75S9.26 4 15.75 4 27.5 9.26 27.5 15.75A11.75 11.75 0 0115.75 27.5zm-.7-16.11a2.58 2.58 0 00-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 01-1.8-.91.68.68 0 00-.61-.39h-.59a.35.35 0 00-.28.41 2.73 2.73 0 002.61 2.08v.84a.705.705 0 001.41 0v-.85a2.62 2.62 0 002.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14 0-.56.6-1.18 1.6-1.18a1.64 1.64 0 011.59.81.8.8 0 00.72.46h.47a.42.42 0 00.31-.5 2.65 2.65 0 00-2.38-2v-.69a.705.705 0 00-1.41 0v.74zm-8.11 4.36a8.79 8.79 0 006 8.33h.14a.45.45 0 00.45-.45v-.21a.94.94 0 00-.58-.87 7.36 7.36 0 010-13.65.93.93 0 00.58-.86v-.23a.42.42 0 00-.56-.4 8.79 8.79 0 00-6.03 8.34zm17.62 0a8.79 8.79 0 00-6-8.32h-.15a.47.47 0 00-.47.47v.15a1 1 0 00.61.9 7.36 7.36 0 010 13.64 1 1 0 00-.6.89v.17a.47.47 0 00.62.44 8.79 8.79 0 005.99-8.34z"
                          fill="#FFF"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="w-5/12 rounded bg-black">
                    <select
                      className="hover:border-white hover:border-2 w-full rounded bg-black"
                      name="cars"
                      id="cars"
                    >
                      <option value="USDC">USDC</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-white p-2 text-center redeem-ends text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#4BC0C0"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"></path>
                </svg>
              </div>
            </div>

            <div className="redeem-border w-11/12 flex md:mt-16 mt-6">
              <div className="px-3 p-2 text-white text-center redeem-ends text-sm">
                0.45%
              </div>
              <div className=" w-11/12 p-2 text-center text-sm redeem-bg">
                <span>FXS</span>
              </div>
              <div className="text-white p-2 text-center redeem-ends text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#4BC0C0"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="md:my-auto md:mx-auto">
          <div className="mx-auto md:mb-10 mt-3 mb-2">
            <div className="flex justify-center">
              <img src="/logo.png" width="25" height="3" />
              <div className="text-center">
                <input
                  type="text"
                  placeholder="-"
                  className="rounded border border-gray-300 text-center text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto md:mb-10 mb-2">
            <div className="flex justify-center">
              <svg
                width="25"
                height="20"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <circle cx="16" cy="16" r="16" fill="#2775C9" />
                  <path
                    d="M15.75 27.5C9.26 27.5 4 22.24 4 15.75S9.26 4 15.75 4 27.5 9.26 27.5 15.75A11.75 11.75 0 0115.75 27.5zm-.7-16.11a2.58 2.58 0 00-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 01-1.8-.91.68.68 0 00-.61-.39h-.59a.35.35 0 00-.28.41 2.73 2.73 0 002.61 2.08v.84a.705.705 0 001.41 0v-.85a2.62 2.62 0 002.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14 0-.56.6-1.18 1.6-1.18a1.64 1.64 0 011.59.81.8.8 0 00.72.46h.47a.42.42 0 00.31-.5 2.65 2.65 0 00-2.38-2v-.69a.705.705 0 00-1.41 0v.74zm-8.11 4.36a8.79 8.79 0 006 8.33h.14a.45.45 0 00.45-.45v-.21a.94.94 0 00-.58-.87 7.36 7.36 0 010-13.65.93.93 0 00.58-.86v-.23a.42.42 0 00-.56-.4 8.79 8.79 0 00-6.03 8.34zm17.62 0a8.79 8.79 0 00-6-8.32h-.15a.47.47 0 00-.47.47v.15a1 1 0 00.61.9 7.36 7.36 0 010 13.64 1 1 0 00-.6.89v.17a.47.47 0 00.62.44 8.79 8.79 0 005.99-8.34z"
                    fill="#FFF"
                  />
                </g>
              </svg>
              <div className="text-center">
                <input
                  type="text"
                  placeholder="-"
                  className="rounded border border-gray-300 text-center text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex justify-center">
              <img
                src="https://app.frax.finance/static/media/FXS_Logo_White.a6e03692.png"
                width="25"
                height="3"
              />
              <div className="text-center">
                <input
                  type="text"
                  placeholder="-"
                  className="rounded border border-gray-300 text-center text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center border-t-2 py-1 mt-20 md:mt-32">
        <button
          disabled
          className="my-2 py-2 px-5 border-2 rounded text-sm bg-gray-300 text-gray-600"
        >
          CONNECT WALLET
        </button>
        <div className="flex absolute right-0">
          <p className="text-sm mt-1">Help</p>
          <span className="mr-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#007bff"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
