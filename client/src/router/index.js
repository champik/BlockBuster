import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../layouts/Layout";
import Loader from "../shared/components/Loader";
import NotFound from "../routes/NotFound";

import { MOVIE, TV } from '../shared/constants';

const Home = lazy(() => import("../routes/Home"));
const Movie = lazy(() => import("../routes/Movie"));

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route exact path="/movie/:id">
                    <Layout>
                        <Movie type={ MOVIE.type }/>
                    </Layout>
                </Route>
                <Route exact path="/tv/:id">
                    <Layout>
                        <Movie type={ TV.type }/>
                    </Layout>
                </Route>
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
