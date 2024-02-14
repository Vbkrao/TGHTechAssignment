import { memo } from "react";
import "./ConfuciusThreadContainer.css";

const ConfuciusThreadContainer = memo(() => {
  return (
    <div className="thread11">
      <img className="avatar-icon11" alt="" src="/avatar.svg" />
      <div className="infos-actions7">
        <div className="infos15">
          <div className="infos-actions-container">
            <div className="infos-actions8">
              <div className="infos16">
                <div className="heading-infos6">
                  <div className="confucius1">Confucius</div>
                  <div className="right-infos6">
                    <div className="min6">1min</div>
                    <div className="dots6">
                      <div className="dots-child15" />
                      <div className="dots-child15" />
                      <div className="dots-child15" />
                    </div>
                  </div>
                </div>
                <div className="a-youth-when1">
                  A youth, when at home, should be filial and, abroad,
                  respectful to his elders. He should be earnest and truthful.
                  He should overflow in love to all and cultivate the friendship
                  of the good. When he has time and opportunity, after the
                  performance of these things, he should employ them in polite
                  studies.
                </div>
              </div>
              <div className="carrossel7">
                <img
                  className="carrossel-child11"
                  alt=""
                  src="/rectangle-9@2x.png"
                />
                <img
                  className="carrossel-child11"
                  alt=""
                  src="/rectangle-8@2x.png"
                />
              </div>
              <div className="actions6">
                <img className="like-icon8" alt="" src="/like.svg" />
                <img className="like-icon8" alt="" src="/comment.svg" />
                <img className="repost-icon6" alt="" src="/repost.svg" />
                <img className="like-icon8" alt="" src="/send.svg" />
              </div>
              <div className="respostas-e-curtidas10">
                <div className="respostas7">7 respostas</div>
                <div className="respostas-e-curtidas-child8" />
                <div className="respostas7">59 curtidas</div>
              </div>
            </div>
            <div className="respostas-e-curtidas11">
              <div className="wisdom4">wisdom</div>
              <div className="respostas-e-curtidas-child9" />
              <div className="respostas7">love</div>
            </div>
          </div>
        </div>
        <div className="carrossel7">
          <img className="carrossel-child11" alt="" src="/rectangle-9@2x.png" />
          <img className="carrossel-child11" alt="" src="/rectangle-8@2x.png" />
        </div>
        <div className="respostas-e-curtidas10">
          <div className="respostas7">{`7 `}</div>
          <div className="respostas-e-curtidas-child8" />
          <div className="respostas7" />
        </div>
      </div>
    </div>
  );
});

export default ConfuciusThreadContainer;
