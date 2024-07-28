import React, { useEffect } from 'react';
import '../Styles/Users.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../Slices/UsersSlice';
const Users = () => {
  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id);
  };
  if (usersData.loading) return <div>Loading...</div>;
  if (usersData.error) return <div>Error: {usersData.error}</div>;


  return (
    <div className='Users'>
      <table className="Users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>
              <button className="delete-butt"  onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
