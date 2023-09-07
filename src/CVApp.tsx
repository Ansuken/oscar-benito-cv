import { NavBar } from "./components";
import { menuItems } from "./data";
import { AppRouter } from "./router/AppRouter";

export const CVApp = () => {
    return (
        <>
            <NavBar menuItems={ menuItems } />
            <AppRouter/>
        </>
    )
}
