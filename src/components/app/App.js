import React from "react";
import { Auth, withNavigation } from "react-uicomp";
import { publicPaths, privatePaths } from "./Routes.app";
import { userRoles } from "./UserRoles.app";

// COMMONS
import Header from "../common/header/Header.common";

// ROOT COMPONENT
const App = () => {
  return (
    <Auth.Provider config={{ isLoggedIn: true, userRole: "admin" }}>
      <Header />
      <Auth.Screens />
    </Auth.Provider>
  );
};

export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
});
