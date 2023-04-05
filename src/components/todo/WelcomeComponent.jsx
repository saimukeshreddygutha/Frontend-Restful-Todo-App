import { Link, useParams } from "react-router-dom";

function WelcomeComponent() {
  const { username } = useParams();
  return (
    <div className="Welcome">
      <h1>Welcome! {username}</h1>
      <>
        <Link to="/todos">Manage Todos</Link>
      </>
    </div>
  );
}

export default WelcomeComponent;
