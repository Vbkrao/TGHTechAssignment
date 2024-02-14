import UserCard from "../components/UserCard";
import FeedContainer from "../components/FeedContainer";
import TrendingTopicsContainer from "../components/TrendingTopicsContainer";
import "./QuotePage.css";

const QuotePage = () => {
  return (
    <div className="quote-page">
      <div className="feed2">
        <div className="logo1">
          <img className="threads-logo-icon1" alt="" />
          <div className="quotverse1">Quotverse</div>
        </div>
        <div className="avatar1">
          <div className="righ-infos1">
            <img className="hamburger-icon1" alt="" src="/hamburger.svg" />
          </div>
        </div>
        <UserCard />
        <FeedContainer />
        <TrendingTopicsContainer quotesButtonText="show all quotes" />
      </div>
    </div>
  );
};

export default QuotePage;
