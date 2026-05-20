import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  articleBody,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";


function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();
  //console.log("currentUser in profile",currentUser)
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/user-api/articles`, { withCredentials: true });

        setArticles(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
  <div>
    {error && <p className={errorClass}>{error}</p>}

    {/* Header section */}
    <div className="flex justify-end items-center gap-4 mb-6">
      <div className="text-right">
        <p className="text-2xl">Welcome, {currentUser?.firstName}</p>

        <div className="flex justify-end gap-3 mt-2">
          <button
            className={ghostBtn}
            onClick={() => navigate("/change-password")}
          >
            Change Password
          </button>

          <button
            className={ghostBtn}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <img
        src={currentUser?.profileImageUrl}
        className="w-14 h-14 rounded-full object-cover"
        alt="profile"
      />
    </div>

    {/* Articles grid */}
    <div className={articleGrid}>
      {articles.map((articleObj) => (
        <div className={articleCardClass} key={articleObj._id}>
          <div className="flex flex-col h-full">
            <div>
              <p className={articleTitle}>{articleObj.title}</p>

              <p>{articleObj.content.slice(0, 20)}...</p>

              <p className={timestampClass}>
                {formatDateIST(articleObj.createdAt)}
              </p>
            </div>

            <button
              className={`${ghostBtn} mt-auto pt-4`}
              onClick={() => navigateToArticleByID(articleObj)}
            >
              Read Article →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default UserProfile;
