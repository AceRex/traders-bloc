import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/form/input";
import Button from "../components/form/button";
import FormGroup from "../components/form/formgroup";
import { LuWatch } from "react-icons/lu";
import { CiCircleCheck, CiMoneyBill } from "react-icons/ci";

function Milestones() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Set up milestones for invoice #INV-001
        </p>
        <div className="flex flex-row justify-start w-full lg:w-[60%] my-4">
          <p className="max-md:text-lg text-left lg:text-xl font-extrabold max-sm:tracking-tighter lg:tracking-tight">
            Milestone 1:
            <div className="flex flex-row mt-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <LuWatch size={25} />
                <div className="p-0.5 bg-bg_light w-1 h-8"></div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-left font-semibold text-text">
                  Requested
                </p>
                <p className="text-xs text-left font-normal text-text_light">
                  01/01/2023
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-1 gap-4">
              <div className="flex flex-col items-center gap-2">
                <CiCircleCheck size={25} />
                <div className="p-0.5 bg-bg_light w-1 h-8"></div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-left font-semibold text-text">
                  Approved
                </p>
                <p className="text-xs text-left font-normal text-text_light">
                  01/01/2023
                </p>
              </div>
            </div>{" "}
            <div className="flex flex-row mt-1 gap-4">
              <div className="flex flex-col items-center gap-1">
                <CiMoneyBill size={25} />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-left font-semibold text-text">
                  Paid
                </p>
                <p className="text-xs text-left font-normal text-text_light">
                  01/01/2023
                </p>
              </div>
            </div>
          </p>
        </div>
        <div className="max-md:w-full lg:w-[60%] flex flex-col mt-8">
          <Input
            type="textarea"
            isMultiSelect
            label={"Description"}
            onChange={() => {}}
          />
          <Input
            type="text"
            isMultiSelect
            label={"Company Name"}
            placeholder="Enter  vendor's company name"
            onChange={() => {}}
          />
          <FormGroup>
            <div className="w-2/4">
              <Input
                type="text"
                isMultiSelect
                label={"Contact Person"}
                placeholder="  contact person's name"
                onChange={() => {}}
              />
            </div>
            <div className="w-2/4">
              <Input
                type="text"
                isMultiSelect
                label={"Phone Number"}
                placeholder="Enter  phone number"
                onChange={() => {}}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="w-2/4">
              <Input
                type="text"
                isMultiSelect
                label={"Address"}
                placeholder="Enter  address"
                onChange={() => {}}
              />
            </div>
            <div className="w-2/4">
              <Input
                type="text"
                isMultiSelect
                label={"Website"}
                placeholder="Enter  website"
                onChange={() => {}}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="w-2/4">
              <Input
                type="text"
                isMultiSelect
                label={"Email"}
                onChange={() => {}}
              />
            </div>
            <div className="w-2/4">
              <Input
                type="date"
                isMultiSelect
                label={"Due Date"}
                onChange={() => {}}
              />
            </div>
          </FormGroup>
          <div className="flex flex-row items-end place-content-end justify-between">
            <Button
              text="New Milestone"
              color="secondary"
              className="lg:w-[20%]"
              onClick={() => navigate("/funding_request")}
            />
            <Button
              text="Save"
              color="primary"
              className="lg:w-[20%]"
              onClick={() => navigate("/funding_request")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Milestones;
