import { memo } from "react";
import "./TrendingTopicsContainer.css";

const TrendingTopicsContainer = memo(({ quotesButtonText }) => {
  return (
    <div className="infos12">
      <div className="infos13">
        <div className="title">
          <b className="trending-topics">Trending Topics</b>
          <img className="settings-icon" alt="" src="/settings.svg" />
        </div>
      </div>
      <div className="show-all-quotes">{quotesButtonText}</div>
      <div className="treanding">
        <div className="topic1">
          <div className="age">AGE</div>
          <div className="age1">#age</div>
          <div className="trending-topics">123 quotes</div>
        </div>
        <div className="topic1">
          <div className="age">EDUCATION</div>
          <div className="age1">#education</div>
          <div className="trending-topics">93 quotes</div>
        </div>
        <div className="topic1">
          <div className="age">SCIENCE</div>
          <div className="age1"> #science</div>
          <div className="trending-topics">85 quotes</div>
        </div>
        <div className="topic1">
          <div className="age">games</div>
          <div className="age1">#games</div>
          <div className="trending-topics">71 quotes</div>
        </div>
        <div className="topic1">
          <div className="age">Design</div>
          <div className="age1">#design</div>
          <div className="trending-topics">69 quotes</div>
        </div>
      </div>
    </div>
  );
});

export default TrendingTopicsContainer;
