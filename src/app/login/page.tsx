"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const users = [
    { username: "admin", password: "admin123", role: "Admin" },
    { username: "editor", password: "editor123", role: "Editor" },
    { username: "viewer", password: "viewer123", role: "Viewer" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        router.push("/");
      } else {
        setLoading(false);
        setError("Invalid username or password");
      }
    }, 1000);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-8 bg-white shadow-md rounded-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
