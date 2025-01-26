import "./styles/UserList.css";

const UserList = ({ users, onEdit, onDelete }) => {
  const parseName = (name) => {
    const names = name?.split(" ") || [];
    return {
      firstName: names[0] || "",
      lastName: names.slice(1).join(" ") || "",
    };
  };

  return (
    <div className="user-list">
      {users.map((user) => {
        const { firstName, lastName } = parseName(user.name);
        return (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <h3>
                {firstName} {lastName}
              </h3>
            </div>
            <div className="user-card-body">
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Department:</strong> {user.company?.name || "N/A"}
              </p>
            </div>
            <div className="user-card-actions">
              <button onClick={() => onEdit(user)} className="edit">
                Edit
              </button>
              <button onClick={() => onDelete(user.id)} className="delete">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
