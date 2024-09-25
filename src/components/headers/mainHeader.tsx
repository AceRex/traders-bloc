import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/profileImg.png";

function MainHeader() {
  const navigate = useNavigate();
  const links = [
    { title: "Dashboard", url: "/" },
    { title: "Invoices", url: "/invoice_submit" },
    { title: "Payment", url: "/funding_request" },
    { title: "Funding", url: "/funding_request" },
    { title: "Transaction", url: "/transaction_tracking" },
    { title: "Report", url: "/transaction_tracking" },
  ];
  return (
    <div className="border-b border-b-bg-light px-12 p-4 flex flex-row items-center justify-between">
      <p className="font-extrabold text-xl tracking-tight w-[20%]">
        Traders by bloc
      </p>
      <div className="w-[80%]">
        <ul className="flex flex-row justify-end items-center text-sm gap-6">
          {links.map(({ title, url }) => (
            <li onClick={() => navigate(`${url}`)} className="cursor-pointer">
              {title}
            </li>
          ))}
          <div className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <IoSearchOutline size={17} />
          </div>
          <div className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <VscBell size={17} />
          </div>
          <div className="bg-bg_light rounded-full cursor-pointer overflow-hidden" onClick={() => navigate('/profile')}>
            <img
              src={profileImage}
              alt="profile-image"
              className="object-contain w-[40px] h-[40px]"
            />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MainHeader;
