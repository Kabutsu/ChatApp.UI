import { matchPath } from "react-router";

import { TDefaultObject } from "src/types/general";

import Home from "src/pages/home";

export type TRoute = {
    id: string;
    path: string;
    getPath?: (p?: {[key: string]: any}) => string;
    component: any;
};

export const routeIds = {
    homePage: 'home-route',
};

const getRoutes = (): Array<TRoute> => [{
    id: routeIds.homePage,
    path: '/',
    component: Home,
}];

export const getRoute = (id: string) => getRoutes().find(x => x.id === id);

export const getRoutePath = (id: string, params: {[key: string]: any} = null) => !!params
    ? getRoute(id)?.getPath(params)
    : getRoute(id)?.path;

export default getRoutes;
