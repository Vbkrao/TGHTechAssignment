import { memo } from "react";
import "./ContainerThread.css";

const ContainerThread = memo(({ iconId }) => {
  return (
    <div className="thread9">
      <div className="thread10">
        <img className="avatar-icon9" alt="" src="/avatar.svg" />
        <img className="thread-child1" alt="" src="/vector-1.svg" />
        <img className="avatar-icon10" alt="" src="/avatar.svg" />
      </div>
      <div className="infos-actions-group">
        <div className="infos-actions6">
          <div className="infos14">
            <div className="heading-infos5">
              <div className="aura4">Mahatma Gandhi</div>
              <div className="right-infos5">
                <div className="min5">1min</div>
                <div className="dots5">
                  <div className="dots-child12" />
                  <div className="dots-child12" />
                  <div className="dots-child12" />
                </div>
              </div>
            </div>
            <div className="forgiveness-is-choosing">
              Forgiveness is choosing to love. It is the first skill of
              self-giving love.
            </div>
          </div>
          <div className="carrossel6">
            <img
              className="carrossel-child9"
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className="carrossel-child9"
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
          <div className="actions5">
            <img className="like-icon7" alt="" src={iconId} />
            <img className="like-icon7" alt="" src="/comment.svg" />
            <img className="repost-icon5" alt="" src="/repost.svg" />
            <img className="like-icon7" alt="" src="/send.svg" />
          </div>
          <div className="respostas-e-curtidas8">
            <div className="respostas6">7 respostas</div>
            <div className="respostas-e-curtidas-child6" />
            <div className="respostas6">59 curtidas</div>
          </div>
        </div>
        <div className="respostas-e-curtidas9">
          <div className="wisdom3">wisdom</div>
          <div className="respostas-e-curtidas-child7" />
          <div className="respostas6">love</div>
        </div>
      </div>
    </div>
  );
});

export default ContainerThread;
