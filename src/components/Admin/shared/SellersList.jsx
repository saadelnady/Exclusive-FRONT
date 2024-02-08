import { useSelector } from "react-redux";
import { Loading } from "../../shared/Loading";
import { serverUrl } from "../../../API/API";

export const SellersList = () => {
  const { sellers, isLoading } = useSelector((state) => state.sellerReducer);
  return (
    <>
      {isLoading && <Loading />}
      <div className="container">
        <table className="w-100 bg-light rounded text-center ">
          <thead>
            <tr className="border-bottom">
              <th>ID</th>
              <th>Seller Image</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Mobilephone</th>
              <th>join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={index} className="border-bottom ">
                <td>{index + 1}</td>
                <td>
                  <img src={`${serverUrl}/${seller.sellerImage}`} alt="" />
                </td>
                <td>{seller.firstName}</td>
                <td>{seller.lastName}</td>
                <td>{seller.email}</td>
                <td>{seller.mobilePhone}</td>
                <td>{seller.createdAt}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
