import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BlogProvider } from "./Admin/Context/BlogContext.jsx";
import { AuthProvider } from "./Admin/Context/AuthContext.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthProvider>
        <Navbar />
        <main className="flex-grow">
          <BlogProvider>
            <Outlet />
          </BlogProvider>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;