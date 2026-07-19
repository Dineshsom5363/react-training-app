import { useState } from "react";

import usersData from "../Data/users";

function Home() {

  const [users, setUsers] = useState(usersData);

  const [search, setSearch] = useState("");


  const filteredUsers = users.filter((user) =>

    user.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );


  const deleteUser = (id) => {

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

  };


  return (

    <div className="app-container">


      {/* Sidebar */}

      <aside className="sidebar">

        <h1 className="logo">
          ⚛️ React Training App
        </h1>


        <nav>

          <div className="menu-item active">
            🏠 Dashboard
          </div>

          <div className="menu-item">
            👥 Users
          </div>

          <div className="menu-item">
            📊 Reports
          </div>

          <div className="menu-item">
            ⚙️ Settings
          </div>

        </nav>


        <div className="logout">
          🚪 Logout
        </div>

      </aside>


      {/* Main Content */}

      <main className="main-content">


        {/* Navbar */}

        <header className="navbar">

          <span className="menu-icon">
            ☰
          </span>


          <div className="profile">

            🔔

            <span>
              👤 Dinesh
            </span>

          </div>

        </header>


        {/* Dashboard */}

        <section className="dashboard">


          <div className="heading">

            <div>

              <h2>
                Dashboard
              </h2>

              <p>
                Welcome back, Dinesh! 👋
              </p>

            </div>


            <button className="add-button">
              + Add User
            </button>

          </div>


          {/* Cards */}

          <div className="cards">


            <div className="card blue-card">

              <span className="card-icon">
                👥
              </span>

              <div>

                <p>
                  Total Users
                </p>

                <h3>
                  {users.length}
                </h3>

              </div>

            </div>


            <div className="card green-card">

              <span className="card-icon">
                ✓
              </span>

              <div>

                <p>
                  Active Users
                </p>

                <h3>
                  {users.filter(
                    (user) =>
                      user.status === "Active"
                  ).length}
                </h3>

              </div>

            </div>


            <div className="card purple-card">

              <span className="card-icon">
                📄
              </span>

              <div>

                <p>
                  Total Reports
                </p>

                <h3>
                  35
                </h3>

              </div>

            </div>


          </div>


          {/* User Management */}

          <div className="table-container">


            <div className="table-header">

              <h2>
                User Management
              </h2>


              <div className="table-actions">

                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />


                <button className="add-button">
                  + Add User
                </button>

              </div>

            </div>


            {/* Table */}

            <table>

              <thead>

                <tr>

                  <th>
                    Name
                  </th>

                  <th>
                    Age
                  </th>

                  <th>
                    City
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredUsers.map((user) => (

                  <tr key={user.id}>


                    <td>

                      <div className="user-name">

                        <span className="avatar">
                          {user.name.charAt(0)}
                        </span>

                        {user.name}

                      </div>

                    </td>


                    <td>
                      {user.age}
                    </td>


                    <td>
                      {user.city}
                    </td>


                    <td>

                      <span
                        className={
                          user.status === "Active"
                            ? "status active-status"
                            : "status inactive-status"
                        }
                      >

                        {user.status}

                      </span>

                    </td>


                    <td>

                      <button className="edit-button">
                        Edit
                      </button>


                      <button
                        className="delete-button"
                        onClick={() =>
                          deleteUser(user.id)
                        }
                      >
                        Delete
                      </button>

                    </td>


                  </tr>

                ))}

              </tbody>

            </table>

          </div>


        </section>


        <footer>

          © 2025 React Training App.
          All rights reserved.

        </footer>


      </main>

    </div>

  );

}

export default Home;