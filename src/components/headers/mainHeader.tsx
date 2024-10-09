// import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/profileImg.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

function MainHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Dashboard", url: "/" },
    { title: "Invoices", url: "/invoice_submit" },
    { title: "Payment", url: "/funding_request" },
    { title: "Funding", url: "/funding_request" },
    { title: "Transaction", url: "/transaction_tracking" },
    { title: "Report", url: "/transaction_tracking" },
  ];
  return (
    <div className="border-b border-b-bg-light relative px-12 p-4 flex flex-row items-center justify-between">
    <p className="font-extrabold text-xl tracking-tight w-[50%] lg:w-[20%]">
      Traders by bloc
    </p>
    <div className="hidden lg:block w-[50%] lg:w-[80%]">
      <ul className="flex flex-row justify-end items-center text-sm gap-6">
        {links.map(({ title, url }) => (
          <li onClick={() => navigate(`${url}`)} className="cursor-pointer">
            {title}
          </li>
        ))}
        <div className="bg-bg_light p-2 rounded-xl cursor-pointer">
          <VscBell size={17} />
        </div>
        <div
          className="bg-bg_light rounded-full cursor-pointer overflow-hidden"
          onClick={() => navigate("/profile")}
        >
          <img
            src={profileImage}
            alt="profile-image"
            className="object-contain w-[40px] h-[40px]"
          />
        </div>
      </ul>
    </div>
    <div className="lg:hidden">
      <CiMenuBurger size={18} onClick={() => setOpen(!open)} />
      {open && (
        <ul className="absolute w-full h-[70vh] left-0 top-[3.8rem] bg-bg_light flex flex-col text-center list-none">
          {links.map(({ title, url }) => (
            <li
              onClick={() => navigate(`${url}`)}
              className="cursor-pointer my-8"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
}

export default MainHeader;
