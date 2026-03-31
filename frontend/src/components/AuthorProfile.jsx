import { NavLink, Outlet } from "react-router";
import { pageWrapper, navLinksClass, navLinkClass, navLinkActiveClass, divider } from "../styles/common";
import { useAuth } from "../store/authStore";
function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  return (
    <div className={pageWrapper}>
      <div className="text-end">
        <p className="text-2xl"> Welcome, {currentUser?.firstName}</p>
        <img src={currentUser?.profileImageUrl} className="w-14 mr-2 rounded-full block ms-auto" alt="" />
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
