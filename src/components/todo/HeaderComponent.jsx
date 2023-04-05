import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logout() {
    authContext.logout();
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 p-1">
          <Link className="navbar-brand m-1" to="/login">
            Todo App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/welcome/sai">
                    Home
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
