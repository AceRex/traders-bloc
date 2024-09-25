import { useNavigate } from "react-router-dom";
import Input from "../components/form/input";
import Button from "../components/form/button";
import Checkbox from "../components/checkbox";
import MainHeader from "../components/headers/mainHeader";

function FundingRequest() {
  const navigate = useNavigate();
  return (
    <>
      <MainHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Funding request
        </p>
        <div className="max-md:w-full lg:w-[60%] flex flex-col gap-2 mt-8">
          <div>
            <p className="max-md:text-lg lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Requested funding amount
            </p>
            <Input type="currency" onChange={() => {}} />
          </div>
          <div>
            <p className="max-md:text-lg lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Your contribution amount{" "}
            </p>
            <Input type="currency" onChange={() => {}} />
          </div>
          <div>
            <p className="max-md:text-lg lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Summary
            </p>
            <div className="flex flex-row justify-between my-3">
              <p className="text-text_light">Approved invoices</p>
              <p className="text-text_light">$0.00</p>
            </div>
            <div className="flex flex-row justify-between my-3">
              <p className="text-text_light">Milestones</p>
              <p className="text-text_light">$0.00</p>
            </div>
          </div>
          <div>
            <p className="max-md:text-lg lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Pre-submission verification
            </p>
            <div className="flex flex-row gap-3 my-3">
              <Checkbox />
              <p className="text-text_light">
                All approved invoices are listed
              </p>
            </div>
            <div className="flex flex-row gap-3 my-3">
              <Checkbox />
              <p className="text-text_light">All milestones are listed</p>
            </div>{" "}
            <div className="flex flex-row gap-3 my-3">
              <Checkbox />
              <p className="text-text_light">
                The total requested amount is the sum of all invoices and
                milestones
              </p>
            </div>
          </div>
          <div className="flex flex-row items-end place-content-end justify-end">
            <Button
              text="Submit request"
              color="secondary"
              className="lg:w-[30%]"
              onClick={() => navigate("/transaction_tracking")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FundingRequest;
