import { memo } from "react";
import UserCard from "./UserCard";
import TrendingTopicsContainer from "./TrendingTopicsContainer";
import ContainerThread from "./ContainerThread";
import ConfuciusThreadContainer from "./ConfuciusThreadContainer";
import "./QuotesListHome.css";

const QuotesListHome = memo(() => {
  return (
    <div className="quotes-list-home">
      <div className="feed">
        <div className="logo">
          <img className="threads-logo-icon" alt="" />
          <div className="quotverse">Quotverse</div>
        </div>
        <div className="avatar">
          <div className="righ-infos">
            <img className="hamburger-icon" alt="" src="/hamburger.svg" />
          </div>
        </div>
        <UserCard />
        <TrendingTopicsContainer quotesButtonText="show  all quotes" />
        <div className="feed1">
          <div className="nav-wrapper">
            <div className="nav">
              <img className="home-icon" alt="" src="/home.svg" />
              <img className="home-icon" alt="" />
              <img className="home-icon" alt="" />
              <img className="home-icon" alt="" src="/like.svg" />
            </div>
          </div>
          <ContainerThread iconId="/like.svg" />
          <ConfuciusThreadContainer />
          <div className="thread">
            <div className="thread1">
              <img className="avatar-icon" alt="" src="/avatar.svg" />
              <img className="thread-child" alt="" src="/vector-1.svg" />
              <img className="avatar-icon1" alt="" src="/avatar.svg" />
            </div>
            <div className="infos-actions">
              <div className="infos">
                <div className="heading-infos">
                  <div className="quotverse">aura</div>
                  <div className="right-infos">
                    <div className="min">4min</div>
                    <div className="dots">
                      <div className="dots-child" />
                      <div className="dots-child" />
                      <div className="dots-inner" />
                    </div>
                  </div>
                </div>
                <div className="tempor-dolor-proident">
                  Hold onto your seats, folks! The new iPhone is coming in hot,
                  ready to rock our world! Imagine the stunning photos and
                  videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
                  #BeyondExcited
                </div>
              </div>
              <div className="carrossel">
                <img
                  className="carrossel-child"
                  alt=""
                  src="/rectangle-9@2x.png"
                />
                <img
                  className="carrossel-child"
                  alt=""
                  src="/rectangle-8@2x.png"
                />
              </div>
              <div className="actions">
                <img className="home-icon" alt="" src="/like.svg" />
                <img className="home-icon" alt="" src="/comment.svg" />
                <img className="repost-icon" alt="" src="/repost.svg" />
                <img className="home-icon" alt="" src="/send.svg" />
              </div>
              <div className="respostas-e-curtidas">
                <div className="respostas">7 respostas</div>
                <div className="respostas-e-curtidas-child" />
                <div className="respostas">59 curtidas</div>
              </div>
            </div>
          </div>
          <div className="thread">
            <div className="thread1">
              <img className="avatar-icon" alt="" src="/avatar.svg" />
              <img className="thread-child" alt="" src="/vector-1.svg" />
              <img className="avatar-icon1" alt="" src="/avatar.svg" />
            </div>
            <div className="infos-actions">
              <div className="infos">
                <div className="heading-infos">
                  <div className="quotverse">aura</div>
                  <div className="right-infos">
                    <div className="min1" />
                    <div className="dots">
                      <div className="dots-child" />
                      <div className="dots-child" />
                      <div className="dots-child" />
                    </div>
                  </div>
                </div>
                <div className="tempor-dolor-proident">
                  Hold onto your seats, folks! The new iPhone is coming in hot,
                  ready to rock our world! Imagine the stunning photos and
                  videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
                  #BeyondExcited
                </div>
              </div>
              <div className="carrossel">
                <img
                  className="carrossel-child"
                  alt=""
                  src="/rectangle-9@2x.png"
                />
                <img
                  className="carrossel-child"
                  alt=""
                  src="/rectangle-8@2x.png"
                />
              </div>
              <div className="actions">
                <img className="home-icon" alt="" src="/like.svg" />
                <img className="home-icon" alt="" src="/comment.svg" />
                <img className="repost-icon" alt="" src="/repost.svg" />
                <img className="home-icon" alt="" src="/send.svg" />
              </div>
              <div className="respostas-e-curtidas">
                <div className="respostas">7 respostas</div>
                <div className="respostas-e-curtidas-child" />
                <div className="respostas">59 curtidas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuotesListHome;
