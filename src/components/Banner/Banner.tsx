import { NameTitle, ProfileDescription, ProfileImg } from "..";
import './banner-styles.scss';

export const Banner = () => {
    return (
        <div className="banner position-relative p-3 p-md-5">
            <div className="col-md-5 mx-auto my-3">
                <ProfileImg src="https://yt3.googleusercontent.com/p5qML_V_6csuGy24gKSy_V_iY7mHJX-ie2PgJAi_UqPxFmvbsGKL4k4H6acGv86ycBA8Yd97fQ=s900-c-k-c0x00ffffff-no-rj" />
                <NameTitle name="Oscar Benito" subject="Front-end developer"/>
                <hr/>
                <ProfileDescription description="More than <span class='w-700 ob-text-primary'>10 years</span> and more than <span class='w-700 ob-text-primary'>20 projects</span> of experience developing web apps in both <span class='w-700 ob-text-primary'>React</span> and <span class='w-700 ob-text-primary'>Angular</span> in the latest versions." />
            </div>
        </div>
    )
}
