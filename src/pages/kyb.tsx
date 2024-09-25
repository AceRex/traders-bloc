import { useNavigate } from "react-router-dom";
import Button from "../components/form/button";
import SignupHeader from "../components/headers/signupHeader";

function KYB() {
  const navigate = useNavigate();
  return (
    <>
      <SignupHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Upload your documents{" "}
        </p>
        <p className="max-md:text-xs lg:text-sm text-text_light m-2 max-md:w-full lg:w-[70%] text-center mb-5">
          Please upload each document as a PDF, PNG, or JPG file. Each file
          cannot exceed 10MB. If you have any questions, please see our FAQ.
        </p>
        <div className="max-md:w-full lg:w-[80%] flex flex-col gap-8 mt-8">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-text text-lg tracking-tight">Business Name</p>
              <p className="text-sm text-text_light">
                The name of the business
              </p>
            </div>
            <div className="">
              <Button text="upload" color={"primary"} className="px-8" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-text text-lg  tracking-tight">
                Legal Address{" "}
              </p>
              <p className="text-sm text-text_light">
                The legal address of the business{" "}
              </p>
            </div>
            <div className="">
              <Button text="upload" color={"primary"} className="px-8" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-text text-lg  tracking-tight">
                Registration Number{" "}
              </p>
              <p className="text-sm text-text_light">
                The business registration number{" "}
              </p>
            </div>
            <div className="">
              <Button text="upload" color={"primary"} className="px-8" />
            </div>
          </div>{" "}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-text text-lg  tracking-tight">
                Tax Information{" "}
              </p>
              <p className="text-sm text-text_light">
                Tax information for the business{" "}
              </p>
            </div>
            <div className="">
              <Button text="upload" color={"primary"} className="px-8" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-text text-lg  tracking-tight">
                Incorporation Documents{" "}
              </p>
              <p className="text-sm text-text_light">
                Incorporation documents{" "}
              </p>
            </div>
            <div className="">
              <Button text="upload" color={"primary"} className="px-8" />
            </div>
          </div>
          <div className="flex flex-row items-end place-content-end justify-end">
            <Button text="Submit" color="secondary" className="lg:w-[20%]" onClick={() => navigate('/invoice_submit')}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default KYB;
