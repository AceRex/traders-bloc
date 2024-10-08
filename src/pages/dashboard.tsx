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
import { useSelector } from "react-redux";
import { RootState } from "../redux/interface";

function Dashboard() {
  const navigate = useNavigate();

  const userDetails = useSelector((state: RootState) => state.auth.userDetails);

  return (
    <main>
      <MainHeader />
      <Container>
        <>
          <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-0">
            <div className="overflow-hidden rounded-lg lg:w-2/4 w-full lg:h-[20rem] h-[15rem] bg-black">
              <img
                src={bg}
                alt="bg"
                className="w-[100%] object-contain object-center lg:-translate-y-28"
              />
            </div>
            <div className="lg:w-2/4 w-full flex flex-col place-content-center items-center">
              <p className="font-black lg:text-6xl text-3xl capitalize my-4">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                {userDetails?.company_details}
              </p>
              <div className="lg:w-[70%] w-[100%] lg:my-6">
                <Button
                  text="Submit invoice"
                  onClick={() => navigate("/invoice_submit")}
                />
              </div>
            </div>
          </div>
          <p className="max-md:text-md lg:text-xl max-md:text-text_light mt-8 mb-4 font-extrabold max-md:text-left text-center max-sm:tracking-tighter lg:tracking-tight">
            Quick Links
          </p>
          <FormGroup>
            <div
              onClick={() => navigate("/invoice_submit")}
              className="flex flex-row items-center gap-4 w-full border border-bg_light rounded-lg p-4 px-8 cursor-pointer"
            >
                <GoArrowRight size={30} />
                <p className="font-bold capitalize max-md:text-sm">Submit an invoice</p>
            </div>
            <div
              onClick={() => navigate("/milestone")}
              className="flex flex-row items-center gap-4 w-full border border-bg_light rounded-lg p-4 px-8 cursor-pointer"
            >
              <LuWatch size={30} />
              <p className="font-bold capitalize  max-md:text-sm">Track milestones</p>
            </div>
            <div
              onClick={() => navigate("/funding_request")}
              className="flex flex-row items-center gap-4 w-full border border-bg_light rounded-lg p-4 px-8 cursor-pointer"
            >
              <FaRegMoneyBillAlt size={30} />
              <p className="font-bold capitalize  max-md:text-sm">Request funding</p>
            </div>
          </FormGroup>
          <p className="max-md:text-md lg:text-xl  max-md:text-text_light mt-8 mb-4 font-extrabold max-md:text-left text-center max-sm:tracking-tighter lg:tracking-tight">
            Summary
          </p>
          <FormGroup>
            <div className="flex flex-col gap-1 w-full border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light h-[50%]">Invoices</p>
              <p className="font-bold text-3xl capitalize">12</p>
              <p className=" capitalize text-success">+20%</p>
            </div>
            <div className="flex flex-col gap-1 w-full border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light h-[50%]">Funding requests</p>
              <p className="font-bold text-3xl capitalize">2</p>
              <p className=" capitalize text-success">-50%</p>
            </div>
            <div className="flex flex-col gap-1 w-full border border-bg_light rounded-lg p-4">
              <p className="capitalize text-text_light h-[50%]">Total funded</p>
              <p className="font-bold text-3xl capitalize">$6,000</p>
              <p className=" capitalize text-success">+$2,000</p>
            </div>
            <div className="flex flex-col gap-1 w-full border border-bg_light rounded-lg p-4">
              <p className=" capitalize text-text_light h-[50%]">Upcoming payments</p>
              <p className="font-bold text-3xl capitalize">1</p>
              <p className=" capitalize text-text_light">0%</p>
            </div>
          </FormGroup>
          <p className="max-md:text-md lg:text-xl  max-md:text-text_light mt-8 mb-4 font-extrabold max-md:text-left text-center max-sm:tracking-tighter lg:tracking-tight">
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
    </main>
  );
}

export default Dashboard;
