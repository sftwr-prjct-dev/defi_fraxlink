export const MetamaskBtnContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-black text-white border border-borderCol md:border-l-0 py-3">
      {children}
    </div>
  );
};

export const MetamaskBtn = () => (
  <button className="text-white bg-borderCol text-xs font-thin h-6 px-3 outline-none focus:outline-none rounded-sm hover:bg-gray-800">
    Add tokens to Metamask
  </button>
);
