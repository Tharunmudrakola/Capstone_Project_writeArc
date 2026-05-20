import { NavLink, Outlet, useNavigate } from "react-router";
import { pageWrapper, navLinksClass, navLinkClass, navLinkActiveClass, divider, ghostBtn } from "../styles/common";
import { useAuth } from "../store/authStore";
import React from "react";
import toast from "react-hot-toast";
function AuthorProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();
    const onLogout = async () => {
      await logout();
      toast.success("Logged out successfully");
      navigate("/login");
    };
  return (
    <div className={pageWrapper}>
      <div className="text-end">
        <p className="text-2xl"> Welcome, {currentUser?.firstName}</p>
        <img src={currentUser?.profileImageUrl} className="w-14 mr-2 rounded-full block ms-auto" alt="" />
      
        <div className="flex justify-end gap-3 mt-2">
                  <button
                    className={ghostBtn}
                    onClick={() => navigate("change-password")}
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
      {/* Author Navigation */}
      <div className="flex gap-6 mb-6">
        <NavLink to="articles" className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
          Articles
        </NavLink>

        <NavLink to="write-article" className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}>
          Write Article
        </NavLink>
      </div>
      
      <div className={divider}></div>

      {/* Nested route content */}
      <Outlet />
    </div>
  );
}

export default AuthorProfile;
