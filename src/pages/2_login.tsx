import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { InputField } from "../components/inputField";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
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
            <h4 className="">Login</h4>
          </div>

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
          <Button text="Login" link="" />
          <p>
            Create account?{" "}
            <span
              className="btn-primary"
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
