import React from "react";
import { Button } from "./button";

interface ProdctProps {
  image: string;
  price: number;
}

export const ProductCard: React.FC<ProdctProps> = ({ image, price }) => {
  return (
    <>
      <div className="d-flex flex-column product-card">
        <img
          src={image}
          className="product-card-image"
        />
        <p>
          Price:{" "}
          <span style={{ fontWeight: "600", color: "gray" }}> Rs. {price}</span>
        </p>
        <Button text={"Add to Cart"} link="" />
      </div>
    </>
  );
};
