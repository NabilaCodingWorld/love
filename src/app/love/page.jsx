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
              As I sit down to pour my heart onto this page, I am overwhelmed by
              the enormity of my feelings for you. How can mere words
              encapsulate the depth of my love, the breadth of my gratitude, and
              the intensity of my admiration for the incredible man that you
              are? From the moment you entered my life, you brought with you a
              sense of wonder, joy, and purpose that I had never known before.
              Your presence, like a gentle breeze on a hot summer's day, swept
              me off my feet and filled my world with a warmth that I never knew
              I was missing. With each passing day, my love for you has grown
              deeper, richer, and more profound, as if it were a river carving
              its way through the landscape of my heart. I am endlessly grateful
              for the love that you shower upon me—the way you hold me close
              when I'm feeling small, the way you make me laugh when I'm feeling
              down, and the way you always know exactly what to say to lift my
              spirits. Your unwavering support, your unwavering belief in me,
              and your unwavering commitment to our partnership fill me with a
              sense of security and contentment that I never knew was possible.
              You are my rock, my anchor, and my safe harbor in the stormy seas
              of life. Your strength, both physical and emotional, has been my
              shelter in times of trouble, and your wisdom, patience, and
              compassion have guided me through some of my darkest moments. With
              you by my side, I feel invincible—ready to take on the world, come
              what may.
              <br /> <br />
              But it's not just the big things that make me love you—it's the
              little things too. It's the way you make me a cup of tea just the
              way I like it, the way you leave love notes for me to find when I
              least expect them, and the way you always know how to make me
              smile, even when the world feels like it's falling apart.
              <br /> <br />
              As we journey through life together, hand in hand, I promise to
              stand by your side through thick and thin, through joy and sorrow,
              through laughter and tears. I promise to support you in your
              dreams, to celebrate your victories, and to hold you close in
              times of need. You are my partner, my confidant, and my best
              friend, and I am grateful every single day for the gift of your
              love.
              <br /> <br />
              Thank you for being the love of my life, my soulmate, and my
              everything. Thank you for the memories we've shared, the
              adventures we've embarked on, and the love we've built together. I
              love you more than words can say, more than any letter can
              express, and more than all the stars in the sky.
            </p>
            <div className="bottom-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovePage;
