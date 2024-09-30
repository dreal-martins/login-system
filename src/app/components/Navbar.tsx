"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <button onClick={handleLogout} className="bg-red-500 py-1 px-3 rounded">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
