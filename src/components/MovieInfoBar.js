import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faClock, faWallet } from '@fortawesome/free-solid-svg-icons'
import { calcTime, convertMoney } from '../helpers';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-time" icon={faClock} name="clock-o" size="2x" />
        <span className="movieinfobar-info">
          Running time : {calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-budget" icon={faWallet} name="money" size="2x" />
        <span className="movieinfobar-info">
          Budget : {convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-revenue" icon={faMoneyBill} name="ticket" size="2x" />
        <span className="movieinfobar-info">
          Revenue : {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);
export default MovieInfoBar;