import { 
    Banner,
    Jobs,
    Projects,
    SectionBox,
    Skills,
} from "../components"

export const Home = () => {
    return (
        <>
            <Banner />
            <SectionBox style="light-section">
                <Jobs />
            </SectionBox>

            <SectionBox style="dark-section text-white">
                <Skills />
            </SectionBox>

            <SectionBox style="light-section">
                <Projects />
            </SectionBox>
        </>
    )
}
