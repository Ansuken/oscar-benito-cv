import { 
    Banner,
    Jobs,
    NavBar,
    Projects,
    SectionBox,
    Skills
} from "./components";

import { menuItems, projects, technologies, jobExperiences } from "./data";
import { AppRouter } from "./router/AppRouter";

export const CVApp = () => {
    return (
        <>
            <NavBar menuItems={ menuItems } />
            <Banner />

            <SectionBox style="light-section">
                <Jobs jobExperiences={jobExperiences} />
            </SectionBox>

            <SectionBox style="dark-section text-white">
                <Skills technologies={ technologies } />
            </SectionBox>

            <SectionBox style="light-section">
                <Projects projects={ projects } />
            </SectionBox>

            <div className="container">
                <AppRouter/>
            </div>
        </>
    )
}
