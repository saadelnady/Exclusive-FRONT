import { useSelector } from "react-redux";
import { Loading } from "../../shared/Loading";
import { serverUrl } from "../../../API/API";

export const UsersList = () => {
  const { users, isLoading } = useSelector((state) => state.userReducer);
  return (
    <>
      {isLoading && <Loading />}
      <div className="container">
        <table className="w-100 bg-light rounded text-center">
          <thead>
            <tr className="border-bottom p-3">
              <th>ID</th>
              <th>User Image</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>MobilePhone</th>
              <th>join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user, index) =>
                user.role !== "ADMIN" && (
                  <tr key={index} className="border-bottom ">
                    <td>{index}</td>
                    <td>
                      <img src={`${serverUrl}/${user.userImage}`} alt="" />
                    </td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.mobilePhone}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
