import React from "react";
import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "5vw",
            display: "flex",
            flexDirection: "row",
            overflowX: "hidden",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="d-flex align-items-end justify-content-end"
            style={{ margin: "2vw 5vw 0vw 0vw" }}
          >
            <Button text={"Add Product"} link={"/add-product"} />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <table
              className="gray "
              style={{ width: "90vw", marginTop: "2vw" }}
            >
              <tbody className="w-100 gray">
                <tr>
                  <th className="gray" style={{ width: "4vw" }}>
                    Sr.
                  </th>
                  <th className="gray">Product Id</th>
                  <th className="gray">Product Name</th>
                  <th className="gray">Product Price</th>
                  <td className="gray">Action</td>
                </tr>
                <tr className="w-100 gray">
                  <td className="gray">1</td>
                  <td className="gray">P0001</td>
                  <td className="gray">Android</td>
                  <td className="gray">Rs.300</td>

                  <td
                    className="gray"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "2px",
                    }}
                    onClick={() => {
                      navigate("/add-product");
                    }}
                  >
                    {" "}
                    Edit
                  </td>
                  <td
                    className="gray"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "2px 5px 2px 5px",
                      margin: "10px",
                    }}
                  >
                    Delete
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
