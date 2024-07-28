import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Actions/users';
import '../Styles/Users.css';

const Users = ({ usersData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (usersData.loading) return <div>Loading...</div>;
  if (usersData.error) return <div>Error: {usersData.error}</div>;

    //  data for testing
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      address: "456 Elm St",
      email: "alice.johnson@example.com",
      phone: "987-654-3210",
      city: "Springfield",
      state: "IL"
    },
    {
      id: 2,
      name: "Bob Smith",
      address: "789 Maple Ave",
      email: "bob.smith@example.com",
      phone: "456-789-1230",
      city: "Metropolis",
      state: "NY"
    },
    {
      id: 3,
      name: "Charlie Brown",
      address: "123 Oak Dr",
      email: "charlie.brown@example.com",
      phone: "123-456-7890",
      city: "Smallville",
      state: "KS"
    },
    {
      id: 4,
      name: "Alice Johnson",
      address: "456 Elm St",
      email: "alice.johnson@example.com",
      phone: "987-654-3210",
      city: "Springfield",
      state: "IL"
    },
    {
      id: 5,
      name: "Bob Smith",
      address: "789 Maple Ave",
      email: "bob.smith@example.com",
      phone: "456-789-1230",
      city: "Metropolis",
      state: "NY"
    },
    {
      id: 6,
      name: "Charlie Brown",
      address: "123 Oak Dr",
      email: "charlie.brown@example.com",
      phone: "123-456-7890",
      city: "Smallville",
      state: "KS"
    },
    {
      id: 7,
      name: "Alice Johnson",
      address: "456 Elm St",
      email: "alice.johnson@example.com",
      phone: "987-654-3210",
      city: "Springfield",
      state: "IL"
    },
    {
      id: 8,
      name: "Bob Smith",
      address: "789 Maple Ave",
      email: "bob.smith@example.com",
      phone: "456-789-1230",
      city: "Metropolis",
      state: "NY"
    },
    {
      id: 9,
      name: "Charlie Brown",
      address: "123 Oak Dr",
      email: "charlie.brown@example.com",
      phone: "123-456-7890",
      city: "Smallville",
      state: "KS"
    },
    {
      id: 10,
      name: "Alice Johnson",
      address: "456 Elm St",
      email: "alice.johnson@example.com",
      phone: "987-654-3210",
      city: "Springfield",
      state: "IL"
    },
    {
      id: 11,
      name: "Bob Smith",
      address: "789 Maple Ave",
      email: "bob.smith@example.com",
      phone: "456-789-1230",
      city: "Metropolis",
      state: "NY"
    },
    {
      id: 12,
      name: "Charlie Brown",
      address: "123 Oak Dr",
      email: "charlie.brown@example.com",
      phone: "123-456-7890",
      city: "Smallville",
      state: "KS"
    },
    {
      id: 13,
      name: "Alice Johnson",
      address: "456 Elm St",
      email: "alice.johnson@example.com",
      phone: "987-654-3210",
      city: "Springfield",
      state: "IL"
    },
    {
      id: 14,
      name: "Bob Smith",
      address: "789 Maple Ave",
      email: "bob.smith@example.com",
      phone: "456-789-1230",
      city: "Metropolis",
      state: "NY"
    },
    {
      id: 15,
      name: "Charlie Brown",
      address: "123 Oak Dr",
      email: "charlie.brown@example.com",
      phone: "123-456-7890",
      city: "Smallville",
      state: "KS"
    },
  ];

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>
              <button className="delete-butt">Delete</button>
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
