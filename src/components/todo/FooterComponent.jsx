import { useAuth } from "./security/AuthContext";
function FooterComponent() {
  const authContext = useAuth();
  return (
    <footer className="footer">
      <div className="container">Footer</div>
    </footer>
  );
}

export default FooterComponent;
