import React from "react";
import { useSelector } from "react-redux";
import { serverUrl } from "../../API/API";
import { HiDotsVertical } from "react-icons/hi";
export const Categories = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log(categories);

  return (
    <div className="vh-100 bg-light container-fluid  ">
      <div className=" bg-white">
        <table className="w-100 py-5 rounded ">
          <thead>
            <tr className="border-bottom p-3">
              <th>ID</th>
              <th>Category Image</th>
              <th>Category title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="border-bottom ">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${serverUrl}/uploads/categories/${category.image}`}
                    alt=""
                    className="rounded-pill"
                  />
                </td>
                <td>{category.title}</td>

                <td>
                  <HiDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
