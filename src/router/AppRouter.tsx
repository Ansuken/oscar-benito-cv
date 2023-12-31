import { Routes, Route } from 'react-router-dom';
import { Home, Projects, ProjectDetail, AboutMe, UnderConstruction } from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about-me' element={<AboutMe />}/>
            <Route path='/under-construction' element={<UnderConstruction />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/projects/:id' element={<ProjectDetail />}/>
            <Route path='*' element={<Home />} />
        </Routes>
    );
}