import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { MainPage } from "../pages/MainPage";
import { PDFMenu } from "../pages/Tools/PDF/PDFMenu";
import { MergPDF } from "../pages/Tools/PDF/MergPDF";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "PDFMenu", element: <PDFMenu /> },
            { path: "MergPDF", element: <MergPDF /> }
        ],
    }
])