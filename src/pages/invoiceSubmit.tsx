import { useNavigate } from "react-router-dom";
import Button from "../components/form/button";
import FormGroup from "../components/form/formgroup";
import Input from "../components/form/input";
import SignupHeader from "../components/headers/signupHeader";
import Subtext from "../components/subtext";
import Checkbox from "../components/checkbox";

function InvoiceSubmit() {
  const navigate = useNavigate();
  return (
    <>
      <SignupHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Submit an invoice
        </p>
        <div className="max-md:w-full lg:w-[60%] flex flex-col gap-8 mt-8">
          <Input
            type="select"
            isMultiSelect
            label={"Select a company"}
            onChange={() => {}}
            subText="You can submit invoices for multiple companies"
          />
          <div>
            <p className="max-md:text-lg mb-2 lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Upload your invoice
            </p>
            <Subtext
              text=" Supported file types: .pdf, .jpg, .png"
              className="mb-4"
            />
            <Button
              text="Upload files"
              color="primary"
              className="lg:w-[50%]"
            />
          </div>
          <div>
            <p className="max-md:text-lg mb-2 lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Invoice breakdown
            </p>
            <Input
              type="text"
              placeholder="Invoice  number"
              onChange={() => {}}
            />
            <Input
              type="text"
              placeholder="Description  of goods or services"
              onChange={() => {}}
            />
            <FormGroup>
              <div className="w-2/4">
                <Input type="text" placeholder="Quantity" onChange={() => {}} />
              </div>
              <div className="w-2/4">
                <Input
                  type="text"
                  placeholder="Price  per unit"
                  onChange={() => {}}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="w-2/4">
                <Input
                  type="text"
                  placeholder="Total price"
                  onChange={() => {}}
                />
              </div>

              <div className="w-2/4">
                <Input
                  type="text"
                  placeholder="Payment  terms (e.g. 30 days)"
                  onChange={() => {}}
                />
              </div>
            </FormGroup>
            <Input
              type="text"
              placeholder="Supply  due date (optional)"
              onChange={() => {}}
            />
            <div className="flex flex-row gap-3 my-3">
            <Checkbox />
            <p className="text-text_light">
              I agree to the terms of service and privacy policy.
            </p>
          </div>
          </div>
          <div className="flex flex-row items-end place-content-end justify-end">
            <Button
              text="Submit"
              color="secondary"
              className="lg:w-[20%]"
              onClick={() => navigate("/milestone")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceSubmit;
