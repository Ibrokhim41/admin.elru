import { IoWalletOutline } from "react-icons/io5";

const Balance = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center py-24 bg-white rounded-md">
          <IoWalletOutline className="text-blue text-5xl" />
          <div className="text-black ctext-xl font-bold ml-2 flex flex-col sm:flex-row items-center">
            Балан на пластике:{" "}
            <span className="text-grey-dark ml-2">134 098 900</span> сум
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
