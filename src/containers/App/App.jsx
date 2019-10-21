import React, { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { PROFILE, MESSAGES, NEWS, MUSIC, SETTINGS } from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import { connect } from "react-redux";

import "./App.scss";

import { DialogOpenContainer } from "../../containers/DialogOpenContainer";
import { Message } from "../../components/MessagesComponents/Message";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
const MessagesPage = lazy(() => import("../../routes/MessagesPage"));
const NewsPage = lazy(() => import("../../routes/NewsPage"));
const MusicPage = lazy(() => import("../../routes/MusicPage"));
const SettingsPage = lazy(() => import("../../routes/SettingsPage"));

export const AppRaw = ({ state }) => {
  let userDataRoutes = state.messagesData.messagesData.map(user => (
    <Route
      exact
      render={() => <DialogOpenContainer user={user} />}
      path={`${MESSAGES}/${user.id}`}
    />
  ));
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Switch> */}
        <Route exact component={ProfilePage} path={PROFILE} />
        <Route
          exact
          render={() => <MessagesPage state={state} />}
          path={MESSAGES}
        />
        {userDataRoutes}
        <Route exact component={NewsPage} path={NEWS} />
        <Route exact component={MusicPage} path={MUSIC} />
        <Route exact component={SettingsPage} path={SETTINGS} />

        <Redirect to={PROFILE} />
        {/* </Switch> */}
      </Suspense>
    </MainLayout>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export const App = connect(mapStateToProps)(AppRaw);
