import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login/Login';
import Components from "./pages/components/Components";
import Homepage from "./pages/homepage/Homepage";
import RegisterStep1 from "./pages/registers/step1/RegisterStep1";
import RegisterStep2 from "./pages/registers/step2/RegisterStep2";
import RegisterStep3 from "./pages/registers/step3/RegisterStep3";
import RegisterStep4 from "./pages/registers/step4/RegisterStep4";
import OrgStructureForm from "./pages/advisor/examplegenerateorganize/Organization";
import Chart from "./pages/advisor/examplegenerateorganize/Chart";
import CompanyList from "./pages/advisor/companyList/CompanyList";
import Mainpage from "./pages/advisor/mainpage/Mainpage";
import Usage from "./pages/advisor/usage/Usage";
import ExportFile from "./pages/exportDoc/ExportFile";
import TemplateForm from "./pages/exportDoc/export";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Components />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'homepage',
        element: <Homepage />
    },
    {
        path: 'register',
        element: <RegisterStep1 />,
    },
    {
        path: 'register/step2',
        element: <RegisterStep2 />
    },
    {
        path: 'register/step3',
        element: <RegisterStep3 />
    },
    {
        path: 'register/step4',
        element: <RegisterStep4 />
    },
    {
        path: 'organization',
        element: <OrgStructureForm />
    },
    {
        path: 'chart',
        element: <Chart />
    },
    {
        path: 'advisor',
        element: <Mainpage />,
    },
    {
        path: 'company-list',
        element: <CompanyList />
        
    }, {
        path: 'preview',
        element: <TemplateForm />
    }
]);

export default router;