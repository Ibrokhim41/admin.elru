import { IoMdClose } from "react-icons/io";

const ChangePassword = ({ change, setChange }) => {
  return (
    <div
      className={`z-50 absolute top-0 transition-all duration-300 overflow-hidden ${
        change ? "left-0" : "-left-full"
      } bg-white w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div className="text-black ctext-xl font-bold mb-8">Изменить пароль</div>
      <div className="flex flex-col w-full sm:w-2/3 px-4">
        <div className="text-grey-dark ctext-base">Введите новый пароль</div>
        <input type="text" placeholder="Пароль" className="border border-grey-border rounded-md mt-2 p-2 focus:outline-none" />
        <button className="flex bg-blue justify-center items-center text-white ctext-base font-medium py-2 mt-6 rounded-md">Сохранить</button>
      </div>
      <IoMdClose
        onClick={() => setChange(false)}
        className="absolute right-1 top-10 sm:right-10 text-4xl text-blue cursor-pointer"
      />
    </div>
  );
};

export default ChangePassword;
