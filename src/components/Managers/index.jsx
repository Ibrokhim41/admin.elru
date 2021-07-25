import { BsPlus, BsTrash } from "react-icons/bs";

const Managers = () => {
  return (
    <div className="absolute top-0 left-0 w-full pt-20 ">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12">
          <button className="flex items-center bg-blue text-white px-10 py-1.5 rounded-md ctext-base font-medium cursor-pointer group">
            Добавить менеджера <BsPlus className="ml-2 text-2xl transition-all transform group-hover:rotate-90" />
          </button>
        </div>

        <div className="col-span-12 sm:col-span-9 flex justify-between py-4 border-b border-grey-border text-black ctext-base">
          <div className="mr-1">Ниязов Аброр Акилхонович</div>
          <div className="flex items-center">
            <div className="text-blue border-b border-blue pb cursor-pointer">Изменить пароль</div>
            <BsTrash className="ml-2 text-red text-xl cursor-pointer hover:text-2xl" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9 flex justify-between py-4 border-b border-grey-border text-black ctext-base">
          <div className="mr-1">Ниязов Аброр Акилхонович</div>
          <div className="flex items-center">
            <div className="text-blue border-b border-blue pb cursor-pointer">Изменить пароль</div>
            <BsTrash className="ml-2 text-red text-xl cursor-pointer hover:text-2xl" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9 flex justify-between py-4 border-b border-grey-border text-black ctext-base">
          <div className="mr-1">Ниязов Аброр Акилхонович</div>
          <div className="flex items-center">
            <div className="text-blue border-b border-blue pb cursor-pointer">Изменить пароль</div>
            <BsTrash className="ml-2 text-red text-xl cursor-pointer hover:text-2xl" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9 flex justify-between py-4 border-b border-grey-border text-black ctext-base">
          <div className="mr-1">Ниязов Аброр Акилхонович</div>
          <div className="flex items-center">
            <div className="text-blue border-b border-blue pb cursor-pointer">Изменить пароль</div>
            <BsTrash className="ml-2 text-red text-xl cursor-pointer hover:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managers;
