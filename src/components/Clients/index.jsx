import "./style.css";
import { useEffect, useState } from "react";
import { MdBlock } from "react-icons/md";
import Sidebar from "../Sidebar";
import JsonData from "../../MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import { BsFilter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/common";
import animatedScrollTo from "animated-scroll-to";
import ClientInside from "components/ClientInside";
import BlockUser from "components/Modals/BlockUser";

const Clients = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const [modal, setModal] = useState(false)
  const [block, setBlock] = useState(false)

  const forPerPage = 9;
  const pagesVisited = pageNumber * forPerPage;

  useEffect(() => {
    setUsers(JsonData);
    animatedScrollTo(0)
  }, []);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + forPerPage)
    .map((user, i) => {
      return (
        <div
          key={i}
          onClick={() => setModal(true)}
          className={`grid grid-cols-6 ${
            i % 2 === 0 ? "bg-grey-hover" : "bg-white"
          } px-2 py-4 cursor-pointer hover:bg-grey-light`}
        >
          <div className="col-span-2">
            <div className="text-black">Абдувахидов {user.name}</div>
          </div>
          <div className="col-span-1 flex pr-1">
            <div className="text-black">02.05.2021</div>
            <div className="text-black ml-2">16:00</div>
          </div>
          <div className="col-span-2 text-blue ml-1">+998 99 314 42 63</div>
          <div 
            onClick={() => setBlock(true)}
            className="relative col-span-1 text-red flex justify-end items-center cursor-pointer group mr-10">
            <div className="mr-6">Заблокировать</div>
            <MdBlock className="absolute ml-px text-xl transition-all transform group-hover:rotate-45" />
          </div>
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
      <div className="orders-table col-span-12 lg:col-span-9 flex flex-wrap justify-between lg:justify-end xl:justify-between items-center mt-28 px-6">
        <div className="w-full xl:w-auto flex mb-4 xl:mb-0">
          <div className="relative pr-11 mr-2 text-blue cext-lg font-bold cursor-pointer hover:underline">
            Все <span className="absolute -top-1 right-0">(1346)</span>
          </div>
          <div className="relative pr-11 text-black cext-lg font-bold cursor-pointer hover:underline">
            Заказавшие <span className="absolute -top-1 right-0">(1215)</span>
          </div>
        </div>
        <ReactPaginate
          previousLabel={prev}
          nextLabel={next}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination flex text-grey-dark font-medium"
          activeClassName="text-white bg-blue"
        />
        <BsFilter
          onClick={() => dispatch(setFilter(true))}
          className="lg:hidden cursor-pointer text-4xl text-blue"
        />
      </div>

      <div className="orders-table col-span-12 lg:col-span-9 lg:pr-4 mt-4">
        {/* title */}
        <div className="grid grid-cols-6 bg-white p-2 text-grey-dark ctext-base font-medium">
          <div className="col-span-2">Клиент</div>
          <div className="col-span-1">Дата регистрации</div>
          <div className="col-span-2">Телефон / E - mail</div>
          <div className="col-span-1 text-right mr-10">Действие</div>
        </div>
        {/* content */}
        {displayUsers}
      </div>
      <Sidebar />
      <ClientInside modal={modal} setModal={setModal} />
      <BlockUser bolck={block} setBlock={setBlock} />
    </div>
  );
};

export default Clients;
