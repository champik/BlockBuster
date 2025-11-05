import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../layouts/Layout";
import Loader from "../shared/components/Loader";
import NotFound from "../routes/NotFound/NotFound";

import { MOVIE, TV } from '../shared/constants';

const Home = lazy(() => import("../routes/Home/Home"));
const MovieDetail = lazy(() => import("../routes/Movie/Detail/container"));
const MovieGrid = lazy(() => import("../routes/Movie/Grid"));
const MovieList = lazy(() => import("../routes/Movie/List"));

const BlogList = lazy(() => import("../routes/Blog/List"));
const BlogDetail = lazy(() => import("../routes/Blog/Detail"));

const CelebrityGrid = lazy(() => import("../routes/Celebrity/Grid"));
const CelebrityList = lazy(() => import("../routes/Celebrity/List"));
const CelebrityDetail = lazy(() => import("../routes/Celebrity/Detail"));

const UserProfile = lazy(() => import("../routes/User/Profile"));
const UserRate = lazy(() => import("../routes/User/Rate"));
const UserFavorite = lazy(() => import("../routes/User/Favorite/Grid"));

const ComingSoon = lazy(() => import("../routes/ComingSoon/ComingSoon"));

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                
                {/* Movie Routes */}
                <Route exact path="/movie/:id">
                    <Layout>
                        <MovieDetail type={ MOVIE.type }/>
                    </Layout>
                </Route>
                <Route exact path="/movies/grid">
                    <Layout>
                        <MovieGrid />
                    </Layout>
                </Route>
                <Route exact path="/movies/list">
                    <Layout>
                        <MovieList />
                    </Layout>
                </Route>
                
                {/* TV/Series Routes */}
                <Route exact path="/tv/:id">
                    <Layout>
                        <MovieDetail type={ TV.type }/>
                    </Layout>
                </Route>
                
                {/* Blog Routes */}
                <Route exact path="/blog">
                    <Layout>
                        <BlogList />
                    </Layout>
                </Route>
                <Route exact path="/blog/:id">
                    <Layout>
                        <BlogDetail />
                    </Layout>
                </Route>
                
                {/* Celebrity Routes */}
                <Route exact path="/celebrities/grid">
                    <Layout>
                        <CelebrityGrid />
                    </Layout>
                </Route>
                <Route exact path="/celebrities/list">
                    <Layout>
                        <CelebrityList />
                    </Layout>
                </Route>
                <Route exact path="/celebrity/:id">
                    <Layout>
                        <CelebrityDetail />
                    </Layout>
                </Route>
                
                {/* User Routes */}
                <Route exact path="/user/profile">
                    <Layout>
                        <UserProfile />
                    </Layout>
                </Route>
                <Route exact path="/user/favorites">
                    <Layout>
                        <UserFavorite />
                    </Layout>
                </Route>
                <Route exact path="/user/ratings">
                    <Layout>
                        <UserRate />
                    </Layout>
                </Route>
                
                {/* Coming Soon */}
                <Route exact path="/coming-soon">
                    <Layout>
                        <ComingSoon />
                    </Layout>
                </Route>
                
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
