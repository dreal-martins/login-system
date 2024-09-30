"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const Home = () => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Welcome to the Dashboard, {user.username}
        </h1>
        <p className="text-xl mt-4">
          You are logged in as <strong>{user.role}</strong>.
        </p>
      </div>
    </div>
  );
};

export default Home;
