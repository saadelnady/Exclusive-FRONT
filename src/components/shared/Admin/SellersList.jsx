import { useSelector } from "react-redux";

export const SellersList = () => {
  const { sellers } = useSelector((state) => state.sellerReducer);
  return (
    <div>
      <table className="w-100 bg-light rounded">
        <thead>
          <tr className="border-bottom">
            <th>ID</th>
            <th>Seller Image</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobilephone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, index) => (
            <tr key={index} className="border-bottom">
              <td>{index + 1}</td>
              <td>
                <img src={seller.sellerImage} alt="" />
              </td>
              <td>{seller.firstName}</td>
              <td>{seller.lastName}</td>
              <td>{seller.email}</td>
              <td>{seller.mobilePhone}</td>
              <td>
                <button className="btn btn-danger">Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
