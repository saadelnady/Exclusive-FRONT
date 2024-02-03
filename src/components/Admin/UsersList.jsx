import { useSelector } from "react-redux";

export const UsersList = () => {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <div>
      <table className="w-100 bg-light rounded">
        <thead>
          <tr className="border-bottom p-3">
            <th>ID</th>
            <th>User Image</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>MobilePhone</th>
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
                    <img src={user.userImage} alt="" />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobilePhone}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
