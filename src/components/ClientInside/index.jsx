import { IoMdClose } from "react-icons/io";
import { MdBlock } from "react-icons/md";

const ClientInside = ({ modal, setModal }) => {
  return (
    <div
      className={`${
        modal ? "translate-y-0" : "-translate-y-full"
      } transition-all transform fixed w-screen h-screen overflow-scroll top-0 z-50 bg-grey-dark p-8`}
    >
      <div className="grid grid-cols-12 rounded-md bg-white">
        {/* left */}
        <div className="col-span-12 md:col-span-4 p-6 border-r border-grey-border">
          <div className="text-grey-dark ctext-lg font-bold mb-7">Клиент</div>

          {/* clicent & deliver */}
          <div className="text-black ctext-lg">
            Абдувахидова Анивар Ильясович
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base">
              Дата регистрации:{" "}
              <span className="ctext-sm">02.05.2021 16:00</span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base">
              Телефон: <span className="ctext-sm">+998 99 314 42 63 </span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base">
              Дата рождения: <span className="ctext-sm">02.05.1996</span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base">
              Пол: <span className="ctext-sm">женский</span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base">
              Баланс: <span className="ctext-sm">123 400 сум</span>
            </div>
          </div>
          <div className="flex items-center cursor-pointer text-red ctext-base mt-4 group">
            Заблокировать
            <MdBlock className="ml-px text-xl transition-all transform group-hover:rotate-45" />
          </div>
        </div>

        {/* right */}
        <div className="col-span-12 md:col-span-8 p-6 overflow-scroll hide-scroll">
          {/* close */}
          <IoMdClose
            onClick={() => setModal(false)}
            className="absolute top-10 right-10 text-blue text-3xl cursor-pointer"
          />

          <div className="text-grey-dark ctext-lg font-bold mb-7">
            История заказов:
          </div>

          {/* table */}
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer bg-grey-light text-center text-grey-dark ctext-base rounded-md border border-grey-border py-1 m-1">
                <div>№ 102 908 999</div>
                <div className="text-grey">02.05.2021 16:00</div>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer bg-grey-light text-center text-grey-dark ctext-base rounded-md border border-grey-border py-1 m-1">
                <div>№ 102 908 999</div>
                <div className="text-grey">02.05.2021 16:00</div>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer bg-grey-light text-center text-grey-dark ctext-base rounded-md border border-grey-border py-1 m-1">
                <div>№ 102 908 999</div>
                <div className="text-grey">02.05.2021 16:00</div>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer bg-grey-light text-center text-grey-dark ctext-base rounded-md border border-grey-border py-1 m-1">
                <div>№ 102 908 999</div>
                <div className="text-grey">02.05.2021 16:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInside;
