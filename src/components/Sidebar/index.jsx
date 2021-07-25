import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/common";
import { useWindowDimensions } from "../../hooks/ScreenWidth";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const filter = useSelector((state) => state.common.filter);
  const dispatch = useDispatch();

  const location = useLocation();
  const { width } = useWindowDimensions();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="relative flex items-center border border-grey-border py-1 px-2 mt-1"
      onClick={onClick}
      ref={ref}
    >
      {value}
      <IoCalendarOutline className="text-blue text-xl ml-4" />
    </button>
  ));

  return (
    <div
      className={`fixed top-0 ${
        filter && "right-0"
      } ${width > 1023 ? 'right-0' : !filter ? '-right-full' : ''} overflow-y-scroll hide-scroll transition-all pt-20 sm:w-1/2 lg:w-3/12 border-l border-grey-border shadow-sm h-screen bg-white`}
    >
      <div className="py-6 px-4">
        {/* title */}
        <div className="flex justify-between">
          <div className="text-black ctext-base font-bold mb-4">Найти:</div>
          <IoMdClose
            onClick={() => dispatch(setFilter(false))}
            className="lg:hidden text-2xl cursor-pointer"
          />
        </div>
        <input
          type="text"
          placeholder="Введите номер заказа..."
          className="text-grey-dark px-4 py-2 w-full rounded-md border border-grey-border focus:outline-none"
        />
        <button className="bg-blue text-white rounded-md mt-2.5 ctext-base font-medium w-full py-2">
          Найти
        </button>
      </div>
      <div className={`px-4 ${location.pathname  !== '/orders' && 'hidden'}`}>
        {/* title */}
        <div className="text-black ctext-base font-bold mb-4">Сортировать:</div>
        <div>
          <div className="flex flex-col justify-between text-grey-dark ctest-sm my-4">
            Дата начала статистики:
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput />}
            />
            {/* <IoCalendarOutline className="absolute right-4 text-blue text-xl" /> */}
          </div>
          <div className="flex flex-col justify-center text-grey-dark ctest-sm my-4">
            Дата конца статистики:
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<CustomInput />}
            />
          </div>
        </div>
        {/* select */}
        <div>
          <Select placeholder="Все заказы" className="my-4" />
          <Select placeholder="Способ оплаты" className="my-4" />
        </div>
        <div className="text-grey ctext-lg text-center cursor-pointer mb-10">
          Отменить сортировку
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
