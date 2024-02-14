import { memo } from "react";
import "./UserCard.css";

const UserCard = memo(() => {
  return (
    <div className="infos6">
      <div className="infos7">
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <div className="infos8">
          <div className="infos9">
            <b className="jhon-doe">Jhon Doe</b>
            <div className="infos10">
              <div className="jhondoe">jhondoe</div>
            </div>
          </div>
          <div className="ui-developer">
            UI Developer | Let's redesign the world
          </div>
        </div>
      </div>
      <div className="infos11">
        <div className="respostas-e-curtidas7">
          <div className="likes">2957 likes</div>
          <div className="respostas-e-curtidas-child5" />
        </div>
      </div>
    </div>
  );
});

export default UserCard;
