import { IoMdClose } from "react-icons/io";

const Exit = ({ exit, setExit }) => {
  

  return (
    <div
      className={`z-50 absolute top-0 transform transition-all duration-300 overflow-hidden ${
        exit ? "translate-y-0" : "-translate-y-full"
      } bg-white w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div className="text-black ctext-xl font-bold mb-8">
        Выйти из аккаунта?
      </div>
      <div className="flex ">
        <button className="border border-grey-border rounded-md py-1 sm:py-3 px-10 sm:px-20 mr-2 hover:bg-blue hover:text-white">
          Да
        </button>
        <button className="border border-grey-border rounded-md py-1 sm:py-3 px-10 sm:px-20 ml-2 hover:bg-blue hover:text-white">
          Нет
        </button>
      </div>
      <IoMdClose
        onClick={() => setExit(false)}
        className="absolute right-1 top-10 sm:right-10 text-4xl text-blue cursor-pointer"
      />
    </div>
  );
};

export default Exit;
