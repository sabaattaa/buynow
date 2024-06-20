import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  link: string,
  // inputType:string
  // color: string;
  // loading: boolean;
  // count: number;
  
}

export const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <button type="submit" className="btn btn-primary" onClick={()=>{navigate(link)}}>
        {text}

        {/* <span className="spinner-border spinner-border-sm"></span> */}
      </button>
    </>
  );
};
