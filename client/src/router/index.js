import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../layouts/Layout";
import Loader from "../shared/components/Loader";
import NotFound from "../components/NotFound";

const Home = lazy(() => import("../components/Home/containers"));

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
