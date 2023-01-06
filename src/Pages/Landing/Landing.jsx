import { useEffect } from "react";
import "./Landing.css";

const Landing = () => {
  useEffect(() => {
    // Initialising the canvas
    var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#387d8a";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, 33);
  }, []);

  return (
    <div className="container landing-wrapp">
      <img src="/BACKGROUND LAZERS.png" alt="" />
      <canvas className="code"></canvas>
      {/* <img src="/code.png" className="code" alt="" /> */}
      <div className="landing-div">
        <img src="/main-ico.png" className="logo" alt="" />
        <div className="main-square">
          <h3>
            <span>We are</span> trend hackers
          </h3>
          <h4>Trending Service</h4>
          <p>
            We pride ourselves on being at the cutting edge of each and every
            guerilla marketing campaign technique implementable to baffle and
            manipulate algorithms on all the leading crypt and social platforms.
          </p>
          <p>
            This allows us to manipulate the invisible but very real boundaries
            set by platform owners to Limit your visibility.{" "}
          </p>
          <h5>
            <span>WE ARE THE</span> DIRTY SECRET{" "}
            <span>PEOPLE WHISPER ABOUT</span>
          </h5>
          <h6>
            {" "}
            <span>WE ARE THE</span> RUMOUR{" "}
            <span>YOU HEARD AND DIDN'T BELIEVE </span>
          </h6>
          <p>
            We ARE used by some of the most well known crypto projects and
            marketing agencies across the world , as they outsource this very
            tech heavy part of the job.{" "}
          </p>
          <p>
            Best of all, the majority of what we do provides trackable and
            measurable results across crypto and social media platforms.{" "}
          </p>
          <h5>
            <span>
              ALL OF WHAT WE DO IS DESIGNED TO CREATE vlsosii_rry AND ONE THING
              IS FOR CERTAIN ,{" "}
            </span>
          </h5>
          <h5>
            <span>
              BEING SPAWNED IN THE DEPTHS OF THE BSC DEGEN COMMUNITY <br />{" "}
              WHERE BUDGET'S ARE LOW AND EXPECTATIONS ARE HIGH.{" "}
            </span>
          </h5>
          <p className="white-text">
            EMAIL INFO@TREND-HACKERS COM FOR INQUIRIES{" "}
          </p>
        </div>
        <h5 className="end-text">
          THOSE WHO ARE STILL IN BUISINESS CERTAINLY LEARNED SOME THINGS{" "}
        </h5>
      </div>
    </div>
  );
};

export default Landing;
