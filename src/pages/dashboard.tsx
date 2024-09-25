import MainHeader from "../components/headers/mainHeader";
import Container from "../components/container";
import bg from "../assets/images/bg_.png";
import Button from "../components/form/button";
import { useNavigate } from "react-router-dom";
import FormGroup from "../components/form/formgroup";
import { GoArrowRight } from "react-icons/go";
import { LuWatch } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import not1 from "../assets/images/not1.png";
import not2 from "../assets/images/not2.png";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <MainHeader />
      <Container>
        <>
          <div className="flex flex-row items-center gap-8">
            <div className="overflow-hidden rounded-lg w-2/4 h-[20rem] bg-black">
              <img
                src={bg}
                alt="bg"
                className="w-[100%] object-contain object-center -translate-y-28"
              />
            </div>
            <div className="w-2/4 flex flex-col place-content-center items-center">
              <p className="font-black text-6xl">Lorem Ipsum</p>
              <div className="w-[70%] my-6">
                <Button
                  text="Submit invoice"
                  onClick={() => navigate("/invoice_submit")}
                />
              </div>
            </div>
          </div>
          <p className="max-md:text-lg lg:text-xl mt-8 mb-4 font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
            Quick Links
          </p>
          <FormGroup>
            <div
              onClick={() => navigate("/invoice_submit")}
              className="flex flex-row items-center gap-4 w-1/3 border border-bg_light rounded-lg p-4 cursor-pointer"
            >
              <GoArrowRight size={30} />
              <p className="font-bold capitalize">Submit an invoice</p>
            </div>
            <div
              onClick={() => navigate("/milestone")}
              className="flex flex-row items-center gap-4 w-1/3 border border-bg_light rounded-lg p-4 cursor-pointer"
            >
              <LuWatch size={30} />
              <p className="font-bold capitalize">Track milestones</p>
            </div>
            <div
              onClick={() => navigate("/funding_request")}
              className="flex flex-row items-center gap-4 w-1/3 border border-bg_light rounded-lg p-4 cursor-pointer"
            >
              <FaRegMoneyBillAlt size={30} />
              <p className="font-bold capitalize">Request funding</p>
            </div>
          </FormGroup>
          <p className="max-md:text-lg lg:text-xl mt-8 mb-4 font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
            Summary
          </p>
          <FormGroup>
            <div className="flex flex-col gap-1 w-1/4 border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light">Invoices</p>
              <p className="font-bold text-3xl capitalize">12</p>
              <p className=" capitalize text-success">+20%</p>
            </div>
            <div className="flex flex-col gap-1 w-1/4 border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light">Funding requests</p>
              <p className="font-bold text-3xl capitalize">2</p>
              <p className=" capitalize text-success">-50%</p>
            </div>
            <div className="flex flex-col gap-1 w-1/4 border border-bg_light rounded-lg p-4">
              <p className="capitalize text-text_light">Total funded</p>
              <p className="font-bold text-3xl capitalize">$6,000</p>
              <p className=" capitalize text-success">+$2,000</p>
            </div>
            <div className="flex flex-col gap-1 w-1/4 border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light">Upcoming payments</p>
              <p className="font-bold text-3xl capitalize">1</p>
              <p className=" capitalize text-text_light">0%</p>
            </div>
          </FormGroup>
          <p className="max-md:text-lg lg:text-xl mt-8 mb-4 font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
            Notification
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-bg_light overflow-hidden w-14 rounded-lg">
                <img src={not1} alt="img" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-text">
                  Invoice 123 from Project Alpha
                </p>
                <p className="text-xs text-text_light">Due date: 5/12/22</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-bg_light overflow-hidden w-14 rounded-lg">
                <img src={not2} alt="img" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-text">Funding request #456</p>
                <p className="text-xs text-text_light">Approved for $3,000</p>
              </div>
            </div>
          </div>
        </>
      </Container>
    </div>
  );
}

export default Dashboard;
