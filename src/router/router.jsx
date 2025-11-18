import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// pages
import Home from "../pages/Home";
import AcademicYearPage from "../pages/AcademicYearPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import ProfilePage from "../pages/ProfilePage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,  // ⬅ layout that contains navbar
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/academic-year/:yearId", element: <AcademicYearPage /> },
			{ path: "/course/:courseId", element: <CourseDetailsPage /> },
			{ path: "/profile", element: <ProfilePage /> },
			{ path: "/signin", element: <Signin /> }, 
			{ path: "/signup", element: <Signup /> },  
		],
	},
]);

export default router;