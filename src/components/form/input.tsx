import PropTypes from "prop-types";
import React, { useState } from "react";

function Input({
  label,
  inputWidth,
  type = "text",
  subText,
  placeholder,
  rows,
  options = [],
  value,
  onChange,
  isMultiSelect = false,
}: {
  label: string;
  inputWidth?: string;
  type?: string;
  subText?: string;
  placeholder?: string;
  rows?: number;
  options?: { value: string; label: string }[];
  value?: string | string[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  isMultiSelect?: boolean;
}) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
    onChange(e);
  };

  const removeOption = (optionToRemove: string) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option !== optionToRemove
    );
    setSelectedOptions(updatedOptions);
    onChange({
      target: { value: updatedOptions },
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

  let inputElement;

  if (type === "text" || type === "password") {
    inputElement = (
      <div className="flex flex-col gap-2 mb-7">
        <label className="text-sm text-text">{label}</label>
        <input
          type={type}
          value={value as string}
          onChange={onChange}
          className={`bg-bg_light p-2 rounded-xl focus:outline focus:outline-secondary ${
            inputWidth ? inputWidth : "w-full"
          }`}
          placeholder={placeholder}
        />
        {subText && <p className="text-xs text-text_light">{subText}</p>}
      </div>
    );
  } else if (type === "textarea") {
    inputElement = (
      <div className="flex flex-col gap-2 mb-7">
        <label className="text-sm text-text">{label}</label>
        <textarea
          rows={rows}
          value={value as string}
          onChange={onChange}
          className={`bg-bg_light p-2 rounded-xl focus:outline focus:outline-secondary resize-none ${
            inputWidth ? inputWidth : "w-full"
          }`}
          placeholder={placeholder}
        />
        {subText && <p className="text-xs text-text_light">{subText}</p>}
      </div>
    );
  } else if (type === "select") {
    inputElement = isMultiSelect ? (
      <div className="flex flex-col gap-2 mb-7">
        <label className="text-sm text-text">{label}</label>
        <div className="relative">
          <select
            multiple
            value={selectedOptions}
            onChange={handleSelectChange}
            className={`bg-bg_light p-2 rounded-xl flex flex-row focus:outline focus:outline-secondary ${
              inputWidth ? inputWidth : "w-full"
            }`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="p-2">
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <div
                key={option}
                className="flex capitalize items-center px-2 py-1 bg-secondary text-white rounded-full"
              >
                {options.find((opt) => opt.value === option)?.label}
                <button
                  className="ml-1 text-xs hover:text-gray-200"
                  onClick={() => removeOption(option)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
        {subText && <p className="text-xs text-text_light">{subText}</p>}
      </div>
    ) : (
      <div className="flex flex-col gap-2 mb-7">
        <label className="text-sm text-text">{label}</label>
        <select
          value={value as string}
          onChange={onChange}
          className={`bg-bg_light p-2 rounded-xl focus:outline focus:outline-secondary ${
            inputWidth ? inputWidth : "w-full"
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              <p className="capitalize text-sm ">{option.label}</p>
            </option>
          ))}
        </select>
        {subText && <p className="text-xs text-text_light">{subText}</p>}
      </div>
    );
  } else if (type === "checkbox") {
    inputElement = (
      <div className="flex items-center justify-center  gap-2 mb-7">
        <input
          type="checkbox"
          id="terms"
          // checked={isChecked}
          // onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4 text-secondary bg-light border-text_light rounded focus:ring-secondary"
        />
        <label htmlFor="terms" className="max-md:text-xs lg:text-sm text-text_light">
         {label}
        </label>
      </div>
    );
  }

  return inputElement;
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputWidth: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "textarea", "select"]).isRequired,
  subText: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool,
};

export default Input;
