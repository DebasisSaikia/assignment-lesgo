// import "./App.css";
import { AuthProvider } from "./auth/context/AuthContext";
import LoginForm from "./auth/login";

function App() {
  return (
    <div>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  );
}

export default App;
