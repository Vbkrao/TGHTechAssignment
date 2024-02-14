import { memo } from "react";
import FormContainer from "./FormContainer";
import "./FeedContainer.css";

const FeedContainer = memo(() => {
  return (
    <div className="feed7">
      <div className="nav-wrapper1">
        <div className="nav3">
          <img className="home-icon3" alt="" src="/home.svg" />
          <img className="home-icon3" alt="" />
          <img className="home-icon3" alt="" />
          <img className="home-icon3" alt="" src="/like.svg" />
        </div>
      </div>
      <div className="keyboard-backspace-group">
        <img
          className="keyboard-backspace-icon1"
          alt=""
          src="/keyboard-backspace.svg"
        />
        <div className="comments">Comments</div>
      </div>
      <div className="thread13">
        <div className="thread14">
          <img className="avatar-icon13" alt="" src="/avatar.svg" />
          <img className="thread-child2" alt="" src="/vector-1.svg" />
          <img className="avatar-icon14" alt="" src="/avatar.svg" />
        </div>
        <div className="infos-actions-parent1">
          <div className="infos-actions11">
            <div className="infos19">
              <div className="heading-infos8">
                <div className="aura5">Mahatma Gandhi</div>
                <div className="right-infos8">
                  <div className="min8">1min</div>
                  <div className="dots8">
                    <div className="dots-child21" />
                    <div className="dots-child21" />
                    <div className="dots-child21" />
                  </div>
                </div>
              </div>
              <div className="forgiveness-is-choosing1">
                Forgiveness is choosing to love. It is the first skill of
                self-giving love.
              </div>
            </div>
            <div className="carrossel11">
              <img
                className="carrossel-child19"
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className="carrossel-child19"
                alt=""
                src="/rectangle-8@2x.png"
              />
            </div>
            <div className="actions8">
              <img className="home-icon3" alt="" src="/like.svg" />
              <img className="home-icon3" alt="" src="/comment.svg" />
              <img className="repost-icon7" alt="" src="/repost.svg" />
              <img className="home-icon3" alt="" src="/send.svg" />
            </div>
            <div className="respostas-e-curtidas15">
              <div className="respostas11">7 respostas</div>
              <div className="respostas-e-curtidas-child13" />
              <div className="respostas11">59 curtidas</div>
            </div>
          </div>
          <div className="respostas-e-curtidas16">
            <div className="wisdom5">wisdom</div>
            <div className="respostas-e-curtidas-child14" />
            <div className="respostas11">love</div>
          </div>
          <div className="respostas-e-curtidas16">
            <div className="likes1">12 Likes</div>
            <div className="respostas-e-curtidas-child14" />
            <div className="respostas11">2 Comments</div>
          </div>
        </div>
      </div>
      <FormContainer />
      <FormContainer />
      <div className="thread15">
        <img className="avatar-icon13" alt="" src="/avatar.svg" />
        <div className="add-your-comment">Add your comment here....</div>
        <div className="post">POST</div>
      </div>
    </div>
  );
});

export default FeedContainer;
