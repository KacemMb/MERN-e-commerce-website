import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers ,deleteUser } from '../Actions/users';
import '../Styles/Users.css';

const Users = ({ usersData, fetchUsers,deleteUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
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

const mapStateToProps = state => ({
  usersData: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
