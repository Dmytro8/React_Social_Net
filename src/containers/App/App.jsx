import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { PROFILE, MESSAGES, NEWS, MUSIC, SETTINGS } from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import "./App.scss";
import { DialogOpen } from "../../components/DialogOpen";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
const MessagesPage = lazy(() => import("../../routes/MessagesPage"));
const NewsPage = lazy(() => import("../../routes/NewsPage"));
const MusicPage = lazy(() => import("../../routes/MusicPage"));
const SettingsPage = lazy(() => import("../../routes/SettingsPage"));

export const App = ({ state, dispatch }) => {
  let userDataRoutes = state.messagesData.messagesData.map(user => (
    <Route
      exact
      render={() => (
        <DialogOpen
          user={user}
          dispatch={dispatch}
          newMessageBody={state.messagesData.newMessageBody}
        />
      )}
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
              render={() => (
                <ProfilePage
                  profileData={state.profileData}
                  dispatch={dispatch}
                />
              )}
              path={PROFILE}
            />
            <Route
              exact
              render={() => (
                <MessagesPage userData={state.messagesData.messagesData} />
              )}
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
