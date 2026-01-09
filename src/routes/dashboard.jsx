import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../services/auth.jsx";


const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    clearToken();
    navigate("/login");
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
      );

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {loading && <p className="loader">Loading dashboard...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
