import { useEffect } from 'react';
import { NameTitle, ProfileDescription, ProfileImg } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startLoadingMainInfo } from '../../store/slices/mainInfo';
import './banner-styles.scss';

export const Banner = () => {

    const { mainInfo } = useAppSelector( state => state.mainInfo );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingMainInfo() );
    }, []);

    return (
        mainInfo[0] && 
        <div className="banner p-3 p-md-5">
            <div className="col-md-6 mx-auto my-3">
                <ProfileImg src={mainInfo[0].profileImg} />
                <NameTitle name={mainInfo[0].name} subject={mainInfo[0].role}/>
                <hr/>
                <ProfileDescription description={mainInfo[0].description} />
                <div className="profile-rrss">
                    {
                        mainInfo[0].rrss.map((item: any)=>(
                            <a className="rrss-item invert"
                                key={item.url}
                                href={item.url} 
                                target="_blank">
                                <i className={item.ico}></i>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
