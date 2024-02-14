import { memo } from "react";
import "./FormContainer.css";

const FormContainer = memo(() => {
  return (
    <div className="thread12">
      <img className="avatar-icon12" alt="" src="/avatar.svg" />
      <div className="infos-actions9">
        <div className="infos17">
          <div className="frame-div">
            <div className="infos-actions10">
              <div className="infos18">
                <div className="heading-infos7">
                  <div className="robert-francis">Robert Francis</div>
                  <div className="right-infos7">
                    <div className="min7">1min</div>
                    <div className="dots7">
                      <div className="dots-child18" />
                      <div className="dots-child18" />
                      <div className="dots-child18" />
                    </div>
                  </div>
                </div>
                <div className="very-true">Very True 💯</div>
              </div>
              <div className="carrossel9">
                <img
                  className="carrossel-child15"
                  alt=""
                  src="/rectangle-9@2x.png"
                />
                <img
                  className="carrossel-child15"
                  alt=""
                  src="/rectangle-8@2x.png"
                />
              </div>
              <div className="actions7">
                <img className="like-icon9" alt="" src="/like.svg" />
              </div>
              <div className="respostas-e-curtidas13">
                <div className="respostas9">7 respostas</div>
                <div className="respostas-e-curtidas-child11" />
                <div className="respostas9">59 curtidas</div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className="carrossel9">
          <img className="carrossel-child15" alt="" src="/rectangle-9@2x.png" />
          <img className="carrossel-child15" alt="" src="/rectangle-8@2x.png" />
        </div>
        <div className="respostas-e-curtidas13">
          <div className="respostas9">{`7 `}</div>
          <div className="respostas-e-curtidas-child11" />
          <div className="respostas9" />
        </div>
      </div>
    </div>
  );
});

export default FormContainer;
