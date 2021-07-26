import { IoMdClose } from "react-icons/io";
import {MdBlock} from "react-icons/md"

const BlockUser = ({ block, setBlock }) => {
  return (
    <div
      className={`z-50 fixed top-0 transform transition-all duration-300 overflow-hidden ${
        block ? "translate-y-0" : "translate-y-full"
      } bg-white w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div className="text-black ctext-xl font-bold mb-4 sm:mb-8">
        Причина блокировки:
      </div>
      <div className="flex flex-col w-full sm:w-2/3 px-4">
        <div className="text-grey-dark ctext-base">Напишите причину блокировки<span className="text-red">*</span></div>
        <textarea className="border border-grey-border rounded-md mt-2 p-2 focus:outline-none" name="" id="" cols="30" rows="4"></textarea>
        <button className="flex bg-red justify-center items-center text-white ctext-base font-medium py-2 mt-6 rounded-md">Отправить и заблокировать <MdBlock className="ml-1" /></button>
      </div>
      <IoMdClose
        onClick={() => setBlock(false)}
        className="absolute right-1 top-10 sm:right-10 text-4xl text-blue cursor-pointer"
      />
    </div>
  );
};

export default BlockUser;
