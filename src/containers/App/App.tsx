import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import {
  PROFILE_PAGE,
  MESSAGES,
  NEWS,
  MUSIC,
  SETTINGS
} from "../../constants/url";
import { MainLayout } from "../../layouts/MainLayout";

import "./App.scss";

// Import pages
const ProfilePage = lazy(() => import("../../routes/ProfilePage"));
// const TopResultsPage = lazy(() => import("../../routes/TopResultsPage"));
// const ArtistsPage = lazy(() => import("../../routes/ArtistsPage"));
// const SongsPage = lazy(() => import("../../routes/SongsPage"));
// const AlbumsPage = lazy(() => import("../../routes/AlbumsPage"));

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact component={ProfilePage} path={PROFILE_PAGE} />
            {/* <Route exact component={TopResultsPage} path={TOP_RESULTS} />
            <Route exact component={ArtistsPage} path={ARTISTS} />
            <Route exact component={SongsPage} path={SONGS} />
            <Route exact component={AlbumsPage} path={ALBUMS} /> */}

            <Redirect to={PROFILE_PAGE} />
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};
