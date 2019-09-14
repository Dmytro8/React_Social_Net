import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { PROFILE, MESSAGES, NEWS, MUSIC, SETTINGS } from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import "./App.scss";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
const MessagesPage = lazy(() => import("../../routes/MessagesPage"));
const NewsPage = lazy(() => import("../../routes/NewsPage"));
const MusicPage = lazy(() => import("../../routes/MusicPage"));
const SettingsPage = lazy(() => import("../../routes/SettingsPage"));

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact component={ProfilePage} path={PROFILE} />
            <Route exact component={MessagesPage} path={MESSAGES} />
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
