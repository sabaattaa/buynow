import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { InputField } from "../components/inputField";
import { useNavigate } from "react-router-dom";

interface RegisterProps {}
export const Register: React.FC<RegisterProps> = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    console.log("this is form data", data);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 h100 bg-img">
        <form
          style={{ color: "white" }}
          onSubmit={handleSubmit(onSubmit)}
          className="reg-form "
        >
          <div className="d-flex justify-content-center align-items-center ">
            <h4 className="">Register</h4>
          </div>

          <InputField
            fieldType="text"
            placeholder="Enter username"
            errorMessage="User name is required"
            fieldName="username"
            titale="Username"
            star={true}
            register={register}
            errors={errors}
          />

          <InputField
            titale="Email"
            star={true}
            fieldType="email"
            placeholder="Enter Email"
            errorMessage="email is required"
            fieldName="email"
            register={register}
            errors={errors}
          />

          <InputField
            titale="Password"
            star={true}
            fieldType="password"
            placeholder="Enter password"
            errorMessage="Password is required"
            fieldName="password"
            register={register}
            errors={errors}
          />

          <Button text="Register" link="" />
          <p>
            Have an account?{" "}
            <span
              className="btn-primary"
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
