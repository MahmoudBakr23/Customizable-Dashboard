import './sidebar.css';
import { 
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutline,
    StoreOutlined,
    MoneyOutlined,
    Equalizer,
    MailOutline,
    FeedbackOutlined,
    MessageOutlined,
    WorkOutline,
    ErrorOutline,
} from '@material-ui/icons';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className='sidebarlist'>
                        <li className='sidebaritem active'>
                            <LineStyle className='sidebaricon' />
                            Home
                        </li>
                        <li className='sidebaritem'>
                            <Timeline className='sidebaricon' />
                            Analytics
                        </li>
                        <li className='sidebaritem'>
                            <TrendingUp className='sidebaricon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className='sidebarlist'>
                        <li className='sidebaritem'>
                            <PersonOutline className='sidebaricon' />
                            Users
                        </li>
                        <li className='sidebaritem'>
                            <StoreOutlined className='sidebaricon' />
                            Products
                        </li>
                        <li className='sidebaritem'>
                            <MoneyOutlined className='sidebaricon' />
                            Transactions
                        </li>
                        <li className='sidebaritem'>
                            <Equalizer className='sidebaricon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
                    <ul className='sidebarlist'>
                        <li className='sidebaritem'>
                            <MailOutline className='sidebaricon' />
                            Mail
                        </li>
                        <li className='sidebaritem'>
                            <FeedbackOutlined className='sidebaricon' />
                            Feedback
                        </li>
                        <li className='sidebaritem'>
                            <MessageOutlined className='sidebaricon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Staff</h3>
                    <ul className='sidebarlist'>
                        <li className='sidebaritem'>
                            <WorkOutline className='sidebaricon' />
                            Manage
                        </li>
                        <li className='sidebaritem'>
                            <Timeline className='sidebaricon' />
                            Analytics
                        </li>
                        <li className='sidebaritem'>
                            <ErrorOutline className='sidebaricon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;