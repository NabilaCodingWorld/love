import Image from "next/image";
import React from "react";
import "./love.css";

const LovePage = () => {
  return (
    <div>
      <audio autoPlay loop style={{ display: "none" }}>
        <source src="song.mp3" type="audio/mpeg" />
      </audio>
      <div className="body ">
        <div className="main">
          <div className="box">
            <div className="top-border"></div>
            <center>
              <Image
                src="/—Pngtree—cartoon couple_285510.png"
                width={300}
                height={300}
                className="cycle"
              />
            </center>
            <br />

            <p className="md:text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestias obcaecati labore distinctio animi, ipsam sapiente quos
              reiciendis nobis! Maxime obcaecati enim, tempora tempore quae
              quaerat distinctio inventore eveniet aperiam.
            </p>
            <div className="bottom-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovePage;
