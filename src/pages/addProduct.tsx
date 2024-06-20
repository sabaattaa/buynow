import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { InputField } from "../components/inputField";
import { useState } from "react";

export const AddProduct: React.FC = () => {
  const [allStates, setAllStates] = useState({
    images: [],
  });
  const allFunctions = {
    handleFileChange: (e: any) => {
      const files = Array.from(e.target.files);
      setAllStates((prevState: any) => ({
        ...prevState,
        images: [...prevState.images, ...files],
      }));
      console.log("files", files);
    },
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    console.log(allStates, "this is form data", data);
  };

  return (
    <>
      <div className="main-div">
        <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
          {allStates.images.map((item, index) => (
            <img
              src={URL.createObjectURL(item)}
              key={index}
              className="small-img"
              alt={`upload-${index}`}
            />
          ))}
        </div>

        <input
          style={{ marginBottom: "1vw" }}
          type="file"
          multiple
          accept=".png, .jpg, .jpeg"
          onChange={(e) => allFunctions.handleFileChange(e)}
        />

        <form onSubmit={handleSubmit(onSubmit)} className="add-product">
          <InputField
            titale="Product Name"
            star={true}
            fieldType="text"
            placeholder="Enter Product Name"
            errorMessage="Product name is required"
            fieldName="proName"
            register={register}
            errors={errors}
          />

          <InputField
            titale="Product Price"
            star={true}
            fieldType="number"
            placeholder="Enter Product Price"
            errorMessage="Product Price is required"
            fieldName="price"
            register={register}
            errors={errors}
          />

          <Button text="Save" link="" />
        </form>
      </div>
    </>
  );
};
