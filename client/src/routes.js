import { MAIN_ROUTE, POLLS_ROUTE, FAMILY_ROUTE, POLICY_ROUTE, ANIMALS_ROUTE, ECOLOGY_ROUTE, NEWS_ROUTE, NEW000_ROUTE, NEW001_ROUTE, NEW002_ROUTE, CONTACTS_ROUTE, INFORMATION_ROUTE, AUTH_ROUTE, REG_ROUTE } from "./const";
import Main from "./pages/Main";
import Polls from "./pages/Polls";
import Family from "./pages/Family";
import Policy from "./pages/Policy";
import Animals from "./pages/Animals";
import Ecology from "./pages/Ecology";
import News from "./pages/News";
import New000 from "./pages/New000";
import New001 from "./pages/New001";
import New002 from "./pages/New002";
import Contact from "./pages/Contacts";
import Information from "./pages/Information";
import Auth from './pages/Auth'
import Registration from './pages/Registration'


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: POLLS_ROUTE,
        Component: Polls
    },
    {
        path: FAMILY_ROUTE,
        Component: Family
    },
    {
        path: POLICY_ROUTE,
        Component: Policy
    },
    {
        path: ANIMALS_ROUTE,
        Component: Animals
    },
    {
        path: ECOLOGY_ROUTE,
        Component: Ecology
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: NEW000_ROUTE,
        Component: New000
    },
    {
        path: NEW001_ROUTE,
        Component: New001
    },
    {
        path: NEW002_ROUTE,
        Component: New002
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contact
    },
    {
        path: INFORMATION_ROUTE,
        Component: Information
    },
    {
		path: AUTH_ROUTE,
		Component: Auth
	},
	{
		path: REG_ROUTE,
		Component: Registration
	}
] 