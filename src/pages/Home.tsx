import './home.css';
import Charts from '../components/Charts';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const Home = () => {
    return(
        <div className="home">
            <div className="featured">
                <div className="featuredItem">
                <span className="featuredtitle">Revenue today</span>
                <div className="featuredMoneyContainer">
                    <span className="feat">$94.12</span>
                    <span className="featuredMoneyRate">
                        -14.5
                        <ArrowDownward className="arrow negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
            </div>
                <div className="featuredItem">
                <span className="featuredtitle">Revenue last 7 days</span>
                <div className="featuredMoneyContainer">
                    <span className="feat">$94.12</span>
                    <span className="featuredMoneyRate">
                        -14.5
                        <ArrowDownward className="arrow negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last week</span>
            </div>
                <div className="featuredItem">
                <span className="featuredtitle">Profit last 7 days</span>
                <div className="featuredMoneyContainer">
                    <span className="feat">$94.12</span>
                    <span className="featuredMoneyRate">
                        -14.5
                        <ArrowUpward className="arrow" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last week</span>
            </div>
            </div>
            <Charts />
        </div>
    )
}

export default Home;