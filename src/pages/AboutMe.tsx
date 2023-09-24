import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks";
import { startLoadingMainInfo } from "../store/slices/mainInfo";
import { Banner, CardDescription, CardImage, CardTitle, Link, SectionBox, SectionTitle, Spinner } from '../components';
import { startLoadingAbout } from '../store/slices/about/thunks';
import { About } from '../interfaces/About';

export const AboutMe = () => {
    const { mainInfo } = useAppSelector( state => state.mainInfo );
    const { about } = useAppSelector( state => state.about );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingMainInfo() );
        dispatch( startLoadingAbout() );
    }, []);

    return (
        
        <>
            {
                mainInfo[0] ?
                <SectionBox style="light-section">
                    <SectionTitle title="About Me" />
                    <Banner />
                    <div className="about-more-things text-center mx-auto my-3 p-4">
                        <h2>But a few more things about me...</h2>
                    </div>

                    <div className="row">
                        {
                            about && about.map((element:About) =>(
                                <div className="col-xl-4 col-md-6 col-sm-12" key={element.title}>
                                    <div 
                                        className="card-box p-3 mb-3 project-card"
                                    >
                                        <CardImage img={`../images/${element.image}`} name={element.title} />
                                        <CardTitle title={element.title} />
                                        <hr/>
                                        <CardDescription description={element.description} />
                                        {
                                            element.url && (
                                                <>
                                                    <hr/>
                                                    <Link url={element.url} text="Show More"/>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </SectionBox>
                : <Spinner />
            }
        </>
    )
}