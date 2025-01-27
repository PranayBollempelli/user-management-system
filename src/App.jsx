import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { getUsers, addUser, editUser, deleteUser } from "./api/usersApi";
import "./styles/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users. Please try again later.");
      }
    };
    fetchUsers();
  }, []);

  const handleSave = async (userData) => {
    try {
      if (userData.id) {
        // Existing user - edit
        const updatedUser = await editUser(userData.id, userData);
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
      } else {
        // New user - add
        const newUser = await addUser(userData);
        newUser.id = users.length + 1; // Generate ID locally
        setUsers([...users, newUser]);
      }
      setEditingUser(null);
    } catch (err) {
      setError("Failed to save changes. Please try again.");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">User Management System</h1>
      <div className="app-content">
        <button className="add-user-button" onClick={() => setEditingUser({})}>
          Add New User
        </button>

        {error && <div className="error-message">{error}</div>}

        {editingUser ? (
          <UserForm
            user={editingUser}
            onSave={handleSave}
            onCancel={() => setEditingUser(null)}
          />
        ) : (
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
