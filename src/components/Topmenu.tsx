import './topmenu.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topmenu = () => {
    return(
        <div className='topmenu'>
            <div className="wrapper">
                <div className="topleft">
                    <span className="logo">Lightfront</span>
                </div>
                <div className="topright">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">5</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                    </div>
                    <div className="topBarIconContainer">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topmenu;