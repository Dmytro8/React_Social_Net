import React, { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import {
  MAIN,
  PROFILE,
  MESSAGES,
  USERS,
  NEWS,
  MUSIC,
  SETTINGS,
  REGISTRATION,
  LOGIN
} from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import { connect } from "react-redux";

import "./App.scss";

import { DialogOpenContainer } from "../../containers/DialogOpenContainer";
import { Preloader } from "../../components/common/Preloader";
import { AuthLayout } from "../../layouts/AuthLayout";
import { AuthenticationPage } from "../../routes/AuthenticationPages/AuthenticationPage";
import { LoginPage } from "../../routes/AuthenticationPages/LoginPage";
import { RegistrationPage } from "../../routes/AuthenticationPages/RegistrationPage";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
const UsersPage = lazy(() => import("../../routes/UsersPage"));
const MessagesPage = lazy(() => import("../../routes/MessagesPage"));
const NewsPage = lazy(() => import("../../routes/NewsPage"));
const MusicPage = lazy(() => import("../../routes/MusicPage"));
const SettingsPage = lazy(() => import("../../routes/SettingsPage"));

export const AppRaw = ({ state }) => {
  let userDataRoutes = state.usersData.usersData.map(user => (
    <Route
      exact
      key={user.id}
      render={() => <DialogOpenContainer key={user.id} user={user} />}
      path={`${MESSAGES}/${user.id}`}
    />
  ));

  const spinnerStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    marginLeft: "-20px",
    marginTop: "-20px"
  };

  return (
    <>
      {state.authData.isAuthorized ? (
        <MainLayout>
          <Suspense
            fallback={
              <div style={spinnerStyle}>
                <Preloader />
              </div>
            }
          >
            <Switch>
              <Route component={ProfilePage} path={`${PROFILE}/:userId?`} />
              <Route exact component={MessagesPage} path={MESSAGES} />
              {userDataRoutes}
              <Route exact component={UsersPage} path={USERS} />
              <Route exact component={NewsPage} path={NEWS} />
              <Route exact component={MusicPage} path={MUSIC} />
              <Route exact component={SettingsPage} path={SETTINGS} />
              <Redirect to={PROFILE} />
            </Switch>
          </Suspense>
        </MainLayout>
      ) : (
        <AuthLayout>
          <Suspense
            fallback={
              <div style={spinnerStyle}>
                <Preloader />
              </div>
            }
          >
            <Switch>
              <Route exact component={AuthenticationPage} path={MAIN} />
              <Route exact component={LoginPage} path={LOGIN} />
              <Route exact component={RegistrationPage} path={REGISTRATION} />
              <Redirect to={MAIN} />
            </Switch>
          </Suspense>
        </AuthLayout>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export const App = connect(mapStateToProps)(AppRaw);
