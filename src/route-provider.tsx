import React, { FC } from "react";
import { Router } from "react-router";

import history from "src/utils/history";
import getRoutes, { TRoute } from "src/utils/routes";

type TChildProps = {
    routes: Array<TRoute>;
};

interface IProps {
    children: ({ routes }: TChildProps) => React.ReactNode;
};

const RouteProvider: FC<IProps> = ({ children }) => {
    const routes = getRoutes();

    return (
        <Router history={history}>
            {children({ routes })}
        </Router>
    );
};

export default RouteProvider;
