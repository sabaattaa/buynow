import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IoMdStar } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

interface InputProps {
  errorMessage: string;
  placeholder: string;
  fieldName: string;
  fieldType: string;
  titale: string;
  star: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export const InputField: React.FC<InputProps> = ({
  fieldType,
  placeholder,
  errorMessage,
  fieldName,
  titale,
  star,
  register,
  errors,
}) => {
  return (
    <>
      <div className="column">
        <div className="d-flex align-items-start">
          <label htmlFor={fieldName} className="input-label-style">
            {titale}
          </label>{" "}
          {star && <IoMdStar className="stare-style" />}
          {errors[fieldName]?.message && (
            <>
              <p className="text-danger error-text">
                {String(errors[fieldName]?.message)}
              </p>
              <MdErrorOutline className="icons-style" />
            </>
          )}
        </div>

        <input
          className="d-flex input-field"
          id={fieldName}
          type={fieldType}
          placeholder={placeholder}
          {...register(fieldName, { required: errorMessage })}
        />
      </div>
    </>
  );
};
