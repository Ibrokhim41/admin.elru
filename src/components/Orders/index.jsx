import "./style.css"
import { useEffect, useState } from "react";
import { RiTruckLine } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import Sidebar from "../Sidebar";
import JsonData from "../../MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import {BsFilter} from "react-icons/bs"
import { useDispatch } from "react-redux";
import {setFilter} from '../../redux/common'
import animatedScrollTo from "animated-scroll-to"
import OrderInside from "components/OrderInside";

const Orders = () => {

  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)

  const [users, setBooks] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const forPerPage = 9;
  const pagesVisited = pageNumber * forPerPage;

  useEffect(() => {
    setBooks(JsonData);
    animatedScrollTo(0)
  }, []);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + forPerPage)
    .map((user, i) => {
      return (
        <div 
          key={i}
          onClick={() => setModal(true)}
          className={`grid grid-cols-5 ${i % 2 === 0 ? 'bg-grey-hover' : 'bg-grey-white'} p-2 cursor-pointer hover:bg-grey-light`}>
          <div className="col-span-1 flex flex-col">
            <div className="text-black">№ 102 908 999</div>
            <div className="flex text-grey">
              02.05.2021 <span className="ml-1">16:00</span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="text-black">
              {user.name}
              {/* Абдувахидов Анвар */}
            </div>
            <div className="text-grey-dark">+998 99 314 42 63 </div>
          </div>
          <div className="col-span-1 text-green">12 000 сум</div>
          <div className="col-span-1 text-blue">12 000 сум</div>
          <div className="col-span-1 text-grey-dark">52 000 сум</div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / forPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    // animateScrollTo(0, { speed: 200 });
  };

  const prev = (
    <div className="flex items-center ctext-xs">
      <VscChevronLeft className="ml-1 text-2xl" />
      Назад
    </div>
  );
  const next = (
    <div className="flex items-center ctext-xs">
      Вперед
      <VscChevronRight className="mr-1 text-2xl" />
    </div>
  );

  return (
    <div className="overflow-scroll container no-padding mx-auto grid grid-cols-12 bg-grey-bg">
      <div className="orders-table col-span-12 lg:col-span-9 flex justify-between items-center mt-28 px-2">
        <ReactPaginate
          previousLabel={prev}
          nextLabel={next}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination col-span-9 w-full flex text-grey-dark font-medium"
          activeClassName="text-white bg-blue"
        />
        <BsFilter 
          onClick={() => dispatch(setFilter(true))}
          className="lg:hidden cursor-pointer text-4xl text-blue" />
      </div>

      <div className="orders-table col-span-12 lg:col-span-9 lg:pr-4 mt-4">
        {/* title */}
        <div className="grid grid-cols-5 bg-white p-2 text-grey-dark ctext-base font-medium">
          <div className="col-span-1">Заказ</div>
          <div className="col-span-1">Клиент</div>
          <div className="col-span-1 flex text-green">
            <RiTruckLine className="text-2xl mr-1" /> Доля курьерской службы
          </div>
          <div className="col-span-1 flex text-blue">
            <BiBuildings className="text-2xl mr-1" /> Доля компании
          </div>
          <div className="col-span-1">Итогова сумма</div>
        </div>
        {/* content */}
        {displayUsers}
        {/* footer */}
        <div className="flex justify-end text-green ctext-base font-medium mt-2 px-8">
            <div>
            Доля курьерской службы: 52 000 000 сум
            </div>
            <div className="ml-4 text-blue">
            Доля компании: 52 000 000 сум
            </div>
        </div>
        <div className="flex justify-end text-black-black ctext-lg font-bold my-2 px-8">Итого сумма: <span className="ml-4 text-black font-medium">52  000 000 сум</span></div>
      </div>
      <Sidebar />
      
      {/* modal */}
      <OrderInside modal={modal} setModal={setModal} />
    </div>
  );
};

export default Orders;
