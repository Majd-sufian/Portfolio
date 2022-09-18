import { useState } from "react";

const Speaker: React.FC<{}> = ({}) => {
  const [speakerState, setSpeakerState] = useState("muted");

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  return (
    <div className="speaker">
      <div
        onClick={handleSpeaker}
        className={`${"speaker__toggle"} ${
          speakerState === "unmuted" ? `${"speaker__toggle--anim"}` : ``
        }`}
      >
        &nbsp;
      </div>
      <div className="speaker__muted">
        <img src="svg/muted.svg" alt="muted icon" />
      </div>
      <div className="speaker__unmuted">
        <svg
          width="14"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.599976"
            y="1.06665"
            width="1.4"
            height="10"
            fill="#F2F2F2"
            className="rect1-anim"
          />
          <rect
            x="9"
            y="1.06665"
            width="1.4"
            height="10"
            fill="#F2F2F2"
            className="rect2-anim"
          />
          <rect
            x="4.79999"
            y="1.06665"
            width="1.4"
            height="10"
            fill="#F2F2F2"
            className="rect3-anim"
          />
          <rect
            x="13.2"
            y="1.06665"
            width="1.4"
            height="10"
            fill="#F2F2F2"
            className="rect4-anim"
          />
        </svg>
      </div>
    </div>
  );
};

export default Speaker;
