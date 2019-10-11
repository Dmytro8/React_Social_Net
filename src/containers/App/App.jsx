import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { PROFILE, MESSAGES, NEWS, MUSIC, SETTINGS } from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import "./App.scss";

import { DialogOpenContainer } from "../../containers/DialogOpenContainer";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
const MessagesPage = lazy(() => import("../../routes/MessagesPage"));
const NewsPage = lazy(() => import("../../routes/NewsPage"));
const MusicPage = lazy(() => import("../../routes/MusicPage"));
const SettingsPage = lazy(() => import("../../routes/SettingsPage"));

export const App = ({ store }) => {
  let state = store.getState();
  let userDataRoutes = state.messagesData.messagesData.map(user => (
    <Route
      exact
      render={() => <DialogOpenContainer store={store} user={user} />}
      path={`${MESSAGES}/${user.name}-${user.surname}`}
    />
  ));
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              render={() => <ProfilePage store={store} />}
              path={PROFILE}
            />
            <Route
              exact
              render={() => <MessagesPage store={store} />}
              path={MESSAGES}
            />
            {userDataRoutes}
            <Route exact component={NewsPage} path={NEWS} />
            <Route exact component={MusicPage} path={MUSIC} />
            <Route exact component={SettingsPage} path={SETTINGS} />

            <Redirect to={PROFILE} />
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};
