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
              As I sit down to write this letter, my heart fills with an
              overwhelming sense of love and gratitude for you. You are the
              anchor of my life, the rock upon which I lean, and the source of
              my greatest joy. <br /> <br />
              From the moment we met, I knew there was something special about
              you. Your smile, your kindness, and your unwavering love captured
              my heart in a way I never thought possible. With each passing day,
              my love for you grows deeper, stronger, and more enduring.
              <br /> <br />
              You are my partner, my confidant, and my best friend. You know me
              better than anyone else in this world, and you love me despite my
              flaws and imperfections. Your unwavering support and encouragement
              have lifted me up in my darkest moments and inspired me to be the
              best version of myself. <br /> <br />
              I am grateful for every moment we have shared—the laughter, the
              tears, the triumphs, and the challenges. Together, we have created
              a lifetime of memories that I will cherish forever. Whether we are
              exploring new places, cuddled up on the couch, or simply enjoying
              each others company, every moment with you is a gift I treasure.{" "}
              <br /> <br />
              As we journey through life together, I promise to stand by your
              side through thick and thin, to support you in your dreams, and to
              love you with all that I am. You are my soulmate, my
              partner-in-crime, and my forever love. With you, I feel complete.{" "}
              <br /> <br />
              Thank you for being my husband, my lover, and my best friend.
              Thank you for your unwavering love, your unwavering support, and
              your unwavering belief in us. I am grateful every single day for
              the gift of your love. <br /> <br />I love you more than words can
              express, more than any letter can convey. You are my sunshine, my
              moonlight, and my stars.
            </p>
            <div className="bottom-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovePage;
