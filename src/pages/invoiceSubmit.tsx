import { useNavigate } from "react-router-dom";
import Button from "../components/form/button";
import FormGroup from "../components/form/formgroup";
import Input from "../components/form/input";
import Subtext from "../components/subtext";
import Checkbox from "../components/checkbox";
import MainHeader from "../components/headers/mainHeader";
import { useState } from "react";
import { invoiceSubmit } from "../redux/invoice";
import { useDispatch } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function InvoiceSubmit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [company, setCompany] = useState();
  const [invoiceupload, setInvoiceupload] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState();
  const [desc, setDesc] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSubmitInvoice = () => {
    const data = {
      // company,
      fileUrl: invoiceupload,
      invoiceNumber,
      description: desc,
      quantity: qty,
      pricePerUnit: price,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(invoiceSubmit(data));

    navigate("/milestone");
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const file = e.target.files[0];
    if (file) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setInvoiceupload(file.name);
    }
  };
  return (
    <>
      <MainHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Submit an invoice
        </p>
        <div className="max-md:w-full lg:w-[60%] flex flex-col gap-8 mt-8">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            className="bg-bg_light p-2 rounded-xl focus:outline focus:outline-secondary"
          />
          <div>
            <p className="max-md:text-lg mb-2 lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Upload your invoice
            </p>
            <Subtext
              text=" Supported file types: .pdf, .jpg, .png"
              className="mb-4"
            />
            <input
              type="file"
              className="lg:w-[50%]"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <p className="max-md:text-lg mb-2 lg:text-xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
              Invoice breakdown
            </p>
            <Input
              type="text"
              placeholder="Invoice  number"
              value={invoiceNumber}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description  of goods or services"
              value={desc}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              onChange={(e) => setDesc(e.target.value)}
            />
            <FormGroup>
              <div className="w-2/4">
                <Input
                  type="text"
                  value={qty}
                  placeholder="Quantity"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
              <div className="w-2/4">
                <Input
                  type="text"
                  value={price}
                  placeholder="Price  per unit"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  onChange={(e) => setPrice(e.target.value)}
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
              onClick={handleSubmitInvoice}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceSubmit;
