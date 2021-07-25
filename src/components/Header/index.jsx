import "./style.css";
import elru_logo from "../../assets/images/logo_elru.svg";
import { FiBox } from "react-icons/fi";
import { BsTrash, BsPeople } from "react-icons/bs";
import { BiExit, BiUserCircle } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { Squash as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Exit from "components/Modals/Exit";
import Delete from "components/Modals/Delete";

const Header = () => {
  const login = useSelector((state) => state.common.login);
  const [showMenu, setShowMenu] = useState(false);

  const [exit, setExit] = useState();
  const [remove, setRemove] = useState();

  const route = useHistory();
  const location = useLocation();

  return (
    <div
      className={`fixed top-0 z-50 ${
        login ? "block" : "hidden"
      } shadow-md w-full container-full bg-white`}
    >
      <div className="container mx-auto flex justify-between items-center xl:grid grid-cols-8">
        {/* logo */}
        <div className="z-50 col-span-1 flex items-center justify-start cursor-pointer py-4">
          <img src={elru_logo} alt="logo" />
        </div>
        {/* menu */}
        <div className="col-span-7 hidden xl:grid grid-cols-7">
          <div className="col-span-5 flex justify-around">
            <div
              onClick={() => route.push("/orders")}
              className={`${
                location.pathname === "/orders" && "bg-blue"
              } px-6 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <FiBox
                className={`${
                  location.pathname === "/orders" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/orders"
                    ? "text-white"
                    : "text-grey-dark"
                }  ctext-base group-hover:text-white font-bold`}
              >
                Заказы
              </div>
            </div>
            <div
              onClick={() => route.push("/clients")}
              className={`${
                location.pathname === "/clients" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <BsPeople
                className={`${
                  location.pathname === "/clients" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/clients"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Клиенты
              </div>
            </div>
            <div
              onClick={() => route.push("/balance")}
              className={`${
                location.pathname === "/balance" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <IoWalletOutline
                className={`${
                  location.pathname === "/balance" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/balance"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Баланс на пластике
              </div>
            </div>
            <div
              onClick={() => route.push("/managers")}
              className={`${
                location.pathname === "/managers" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <BiUserCircle
                className={`${
                  location.pathname === "/managers" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/managers"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Менеджеры и пароли
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-end">
            <div
              onClick={() => setRemove(true)}
              className="flex items-center h-full text-grey ctext-base cursor-pointer"
            >
              Удалить аккаунт
              <BsTrash className="text-2xl ml-2" />
            </div>
            <div
              onClick={() => setExit(true)}
              className="flex items-center h-full ml-4 text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Выйти
              <BiExit className="text-2xl ml-2" />
            </div>
          </div>
        </div>
        {/* mobile-menu */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden cursor-pointer"
        >
          <Hamburger size={24} color={"#3E4549"} toggled={showMenu} />
        </div>
        {/* mob-menu */}
        <div
          className={`fixed top-0 ${
            showMenu ? "left-0" : "-left-full"
          } transition-all bg-white h-screen z-40 pt-14 shadow-xl`}
        >
          <div className="flex flex-col justify-around">
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/orders");
              }}
              className={`${
                location.pathname === "/orders" && "bg-blue"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <FiBox
                className={`${
                  location.pathname === "/orders" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/orders"
                    ? "text-white"
                    : "text-grey-dark"
                }  ctext-base group-hover:text-white font-bold`}
              >
                Заказы
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/clients");
              }}
              className={`${
                location.pathname === "/clients" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <BsPeople
                className={`${
                  location.pathname === "/clients" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/clients"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Клиенты
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/balance");
              }}
              className={`${
                location.pathname === "/balance" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <IoWalletOutline
                className={`${
                  location.pathname === "/balance" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/balance"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Баланс на пластике
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/managers");
              }}
              className={`${
                location.pathname === "/managers" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <BiUserCircle
                className={`${
                  location.pathname === "/managers" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/managers"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Менеджеры и пароли
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <div
              onClick={() => setRemove(true)}
              className="flex items-center h-full px-6 mt-6 text-grey ctext-base cursor-pointer"
            >
              Удалить аккаунт
              <BsTrash className="text-2xl ml-2" />
            </div>
            <div
              onClick={() => setExit(true)}
              className="flex items-center h-full px-6 mt-6 text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Выйти
              <BiExit className="text-2xl ml-2" />
            </div>
          </div>
        </div>
      </div>
      <Exit exit={exit} setExit={setExit} />
      <Delete remove={remove} setRemove={setRemove} />
    </div>
  );
};

export default Header;
