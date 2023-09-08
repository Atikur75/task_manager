import { createBrowserRouter } from "react-router-dom";
import registration from "./registration";
import login from "./login";
import home from "./home";
import createtask from "./createtask";
import newtask from "./newtask";
import progress from "./progress";
import completed from "./completed";

const router = createBrowserRouter([registration, login, home, createtask, newtask, progress,completed]);

export default router;