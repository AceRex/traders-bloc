import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", url: "/" },
    { title: "Invoices", url: "/invoice_submit" },
    { title: "Payment", url: "/funding_request" },
    { title: "Transaction", url: "/transaction_tracking" },
  ];
  return (
    <div className="border-b border-b-bg-light px-12 p-4 flex flex-row items-center justify-between">
      <p className="font-extrabold text-xl tracking-tight w-[20%]">
        Traders by bloc
      </p>
      <div className="w-[80%]">
        <ul className="flex flex-row justify-end gap-12">
          {links.map(({ title, url }) => (
            <li onClick={() => navigate(`${url}`)} className="cursor-pointer">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainHeader;
