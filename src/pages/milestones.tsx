import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/form/input";
import Button from "../components/form/button";
import FormGroup from "../components/form/formgroup";

function Milestones() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center mb-4">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Set up milestones for invoice #INV-001
        </p>
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
