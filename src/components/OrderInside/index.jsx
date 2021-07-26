import "./style.css"
import { RiTruckLine } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const OrderInside = ({modal, setModal}) => {

  return (
    <div className={`${modal ? 'translate-y-0' : '-translate-y-full'} transform transition-all fixed w-screen h-screen overflow-scroll left-0 z-50 bg-grey-dark p-8`}>
      <div className="grid grid-cols-12 rounded-md bg-white">
        {/* left */}
        <div className="col-span-12 md:col-span-4 p-6 border-r border-grey-border">
          <div className="text-grey-dark ctext-lg font-bold mb-7">
            Подробности заказа
          </div>
          <div className="flex flex-col">
            <div className="text-black ctext-base">№ 102 908 999</div>
            <div className="text-grey ctext-sm">02.05.2021 16:00</div>
          </div>

          {/* clicent & deliver */}
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base font-medium">Клиент</div>
            <div className="ml-4">
              <div className="text-black ctext-base">
                Абдувахидов Анвар Ильясович
              </div>
              <div className="text-grey ctext-sm">+998 99 314 42 63 </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="text-grey-dark ctext-base font-medium">Курьер</div>
            <div className="ml-4">
              <div className="text-black ctext-base">
                Абдувахидов Анвар Ильясович
              </div>
              <div className="text-grey ctext-sm">+998 99 314 42 63 </div>
            </div>
          </div>

          {/* payment */}
          <div className="mt-4 bg-grey-light rounded-md border border-grey p-4">
            <div className="text-grey-dark ctext-base font-medium">
              Способ оплаты: PayMe
            </div>
            <div className="mt-4 text-green text-base font-medium flex items-center">
              <RiTruckLine className="text-2xl mr-2" />
              Доля курьерской службы: 52 000 000 сум
            </div>
            <div className="mt-4 text-blue text-base font-medium flex items-center">
              <BiBuildings className="text-2xl mr-2" />
              Доля компании: 52 000 000 сум
            </div>
            <div className="mt-4 text-black ctext-lg font-bold">
              Итого сумма:{" "}
              <span className="text-grey-dark">52 000 000 сум</span>
            </div>
          </div>

          {/* delivery */}
          <div className="text-grey-dark ctext-lg mt-4">
            Доставка в: <span className="text-blue">Ташкент</span>
            <span className="text-black-black">
              , Яккасарайский р-н, д14,кв14,2 подъезд 2 этаж
            </span>
          </div>

          <div className="text-grey-dark ctext-base font-medium mt-4">
            Контактное лицо:{" "}
            <span className="text-black-black ml-1">Владислав Прохоров</span>
          </div>
          <div className="text-grey-dark ctext-base font-medium mt-4">
            Контактный телефон:{" "}
            <span className="text-black-black ml-1">+998 90 970 97 76</span>
          </div>
        </div>

        {/* right */}
        <div className="col-span-12 md:col-span-8 p-6 overflow-scroll hide-scroll">
          {/* close */}
          <IoMdClose 
            onClick={() => setModal(false)}
            className="absolute top-10 right-10 text-blue text-3xl cursor-pointer" />

          <div className="text-grey-dark ctext-lg font-bold mb-7">
            Состав заказа:
          </div>

          {/* table */}
          <div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border pb-2">
              <div className="col-span-3">Книга</div>
              <div className="col-span-2">Стоимость</div>
              <div className="col-span-2">Кол - во</div>
              <div className="col-span-2">Итоговая сумма</div>
          </div>

          <div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div>
          {/* delete */}
          <div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div><div className="order-inside-table grid grid-cols-9 text-grey-dark ctext-base font-medium border-b border-grey-border py-4">
              <div className="col-span-3">
                <div className="text-black ctext-base font-medium">Уродина, в поисках пути к счастью и процветанию</div>
                <div className="text-black ctext-base font-medium">Формат: <span className="text-grey-dark">аудио</span></div>
              </div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">12</div>
              <div className="col-span-2 text-grey-dark ctext-base font-medium">128 000 сум</div>
          </div>
          {/* delete */}
        </div>
      </div>
    </div>
  );
};

export default OrderInside;
