import { memo, useMemo } from "react";
import "./AuraThreadContainer.css";

const AuraThreadContainer = memo(
  ({ duration, min1, ellipseDiv, propWidth }) => {
    const minStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className="thread16">
        <div className="thread17">
          <img className="avatar-icon16" alt="" src="/avatar.svg" />
          <img className="thread-child3" alt="" src="/vector-1.svg" />
          <img className="avatar-icon17" alt="" src="/avatar.svg" />
        </div>
        <div className="infos-actions12">
          <div className="infos20">
            <div className="heading-infos9">
              <div className="aura6">aura</div>
              <div className="right-infos9">
                {!min1 && (
                  <div className="min9" style={minStyle}>
                    {duration}
                  </div>
                )}
                <div className="dots9">
                  <div className="dots-child24" />
                  <div className="dots-child24" />
                  {!ellipseDiv && <div className="dots-child26" />}
                </div>
              </div>
            </div>
            <div className="tempor-dolor-proident4">
              Hold onto your seats, folks! The new iPhone is coming in hot,
              ready to rock our world! Imagine the stunning photos and videos
              I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
              #BeyondExcited
            </div>
          </div>
          <div className="carrossel12">
            <img
              className="carrossel-child21"
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className="carrossel-child21"
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
          <div className="actions9">
            <img className="like-icon12" alt="" src="/like.svg" />
            <img className="like-icon12" alt="" src="/comment.svg" />
            <img className="repost-icon8" alt="" src="/repost.svg" />
            <img className="like-icon12" alt="" src="/send.svg" />
          </div>
          <div className="respostas-e-curtidas18">
            <div className="respostas12">7 respostas</div>
            <div className="respostas-e-curtidas-child16" />
            <div className="respostas12">59 curtidas</div>
          </div>
        </div>
      </div>
    );
  },
);

export default AuraThreadContainer;
