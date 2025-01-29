// import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth/context/AuthContext";
import LoginForm from "./auth/login";
import Analytics from "./components/pages/analytics/Analytics";
import Profile from "./components/pages/profile/Profile";
import Home from "./components/pages/home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {/* <LoginForm /> */}
          {/* <Analytics /> */}
          {/* <Profile /> */}
          <Home />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
