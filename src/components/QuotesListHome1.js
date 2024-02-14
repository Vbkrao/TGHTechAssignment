import { memo } from "react";
import UserCard from "./UserCard";
import TrendingTopicsContainer from "./TrendingTopicsContainer";
import ContainerThread from "./ContainerThread";
import ConfuciusThreadContainer from "./ConfuciusThreadContainer";
import AuraThreadContainer from "./AuraThreadContainer";
import "./QuotesListHome1.css";

const QuotesListHome1 = memo(() => {
  return (
    <div className="quotes-list-home1">
      <div className="feed3">
        <div className="logo2">
          <img className="threads-logo-icon2" alt="" />
          <div className="quotverse2">Quotverse</div>
        </div>
        <div className="avatar2">
          <div className="righ-infos2">
            <img className="hamburger-icon2" alt="" src="/hamburger.svg" />
          </div>
        </div>
        <UserCard />
        <TrendingTopicsContainer quotesButtonText="show  all quotes" />
        <div className="feed4">
          <div className="nav-container">
            <div className="nav1">
              <img className="home-icon1" alt="" src="/home.svg" />
              <img className="home-icon1" alt="" />
              <img className="home-icon1" alt="" />
              <img className="home-icon1" alt="" src="/like.svg" />
            </div>
          </div>
          <div className="keyboard-backspace-parent">
            <img
              className="keyboard-backspace-icon"
              alt=""
              src="/keyboard-backspace.svg"
            />
            <div className="topic-parent">
              <div className="topic">TOPIC</div>
              <div className="wisdom">
                <span className="span">{`# `}</span>
                <span className="wisdom1">Wisdom</span>
              </div>
            </div>
          </div>
          <ContainerThread iconId="/like.svg" />
          <ConfuciusThreadContainer />
          <AuraThreadContainer
            duration="4min"
            min1={false}
            ellipseDiv={false}
            propWidth="28px"
          />
          <AuraThreadContainer min1 ellipseDiv propWidth="unset" />
        </div>
      </div>
    </div>
  );
});

export default QuotesListHome1;
