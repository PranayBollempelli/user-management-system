# User Management Dashboard

A simple user management dashboard built with React and Vite. This application allows you to view, add, edit, and delete users.

## Features

- View a list of users
- Add a new user
- Edit an existing user
- Delete a user

## Technologies Used

- React
- Vite
- Axios
- CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

### Project Structure

```
/src
  /api
    usersApi.js
  /components
    UserForm.jsx
    UserList.jsx
  /pages
    HomePage.jsx
    NotFound.jsx
  /styles
    App.css
    UserForm.css
    UserList.css
  App.jsx
  axios.js
  main.jsx
```

## CRUD Operations

This application supports the following CRUD operations:

- **Create**: Add a new user using the form.
- **Read**: View the list of users.
- **Update**: Edit an existing user's details.
- **Delete**: Remove a user from the list.

## API

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demonstration purposes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
