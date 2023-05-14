import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../resources/layout.css";
function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.users);
  const userMenu = [
    {
      name: "Home",
      icon: "ri-home-line",
      path: "/userhome",
    },
    {
      name: "Booking",
      icon: "ri-file-list-line",
      path: "/booking",
    },
    {
      name: "Profile",
      icon: "ri-user-line",
      path: "/profile",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/userhome",
      icon: "ri-home-line",
    },
    {
      name: "Matches",
      path: "/admin-matches",
      icon: "ri-tv-line",
    },
    {
      name: "Users",
      path: "/admin-users",
      icon: "ri-user-line",
    },
    {
      name: "Bookings",
      path: "/booking",
      icon: "ri-file-list-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];
  const menuToBeRendered =  user?.isadmin ? adminMenu : userMenu;
  let activeRoute = window.location.pathname;
  if(window.location.pathname.includes("book-now")){
    activeRoute = "/userhome"
  }
  return (
    <div>
      <div className="layout-parent">
        <div className="sidebar" style={{marginLeft:'-1%', marginTop:'-.9%'}}>
            <div className="sidebar-header">
                <h1 className="logo">Welcome</h1>
                <h1 className="role"> {user?.name} <br></br> <span style={{fontSize:"14px" }}>Role : {user?.isadmin ? 'Admin' : 'User'}</span></h1>
                {/* <div className="sidebr-header-logo">
                    <img src="/logo.png" alt="logo"></img>
                </div> */}
            </div>
            <div className="d-flex flex-column gap-3 justify-content-start menu">
              {menuToBeRendered.map((item, index) => {
                return (
                  <div
                    className={`${
                      activeRoute === item.path && "active-menu-item"
                    } menu-item`}
                  >
                    <i className={item.icon}></i>
                    {!collapsed && (
                      <span
                        onClick={() => {
                          if (item.path === "/logout") {
                            localStorage.removeItem("token");
                            navigate("/login");
                          } else {
                            navigate(item.path);
                          }
                        }}
                      >
                        {item.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
        </div>
        <div className="body">
          <div className="content"> {children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
