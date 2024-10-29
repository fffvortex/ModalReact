import "./Modal3.css";
import { useState } from "react";
import Button from "../Button/Button";

export default function Modal3() {
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }} >
        <Button onClick={() => setOpenModal3(true)} className="open-modal-btn">
          open modal3 😀
        </Button>
        <div className={`overlay animated ${openModal3? 'show' : ''}` }>
          <div className="modal3">
            <svg
              onClick={() => setOpenModal3(false)}
              height="200"
              viewBox="0 0 200 200"
              width="200"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJvN21mMGtvbDVpdTY5ZDc4ZThhNGxidGQzNHBkNWpoeDkwOTR4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5Zesu5VPNGJlm/200.webp" />
          </div>
        </div>
      </div>
    </>
  );
}


