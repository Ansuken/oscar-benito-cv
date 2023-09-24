import { NavBar } from "./components";
import { menuItems } from "./data";
import { AppRouter } from "./router/AppRouter";

export const CVApp = () => {
    return (
        <>
            { import.meta.env.VITE_APPSTATUS !== 'development' ? <NavBar menuItems={ menuItems } /> : null }
            <AppRouter/>
        </>
    )
}
