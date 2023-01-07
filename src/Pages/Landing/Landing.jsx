import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="container landing-wrapp">
        <img src="/BACKGROUND LAZERS.png" alt="" />

        <div className="landing-div">
          <img src="/main-ico.png" className="logo" alt="" />
          <div className="main-square">
            <h3>
              <span>We are</span> trend hackers
            </h3>
            {/* <h4>Trending Service</h4> */}
            <p>
              We pride ourselves on being at the cutting edge of each and every
              guerilla marketing campaign technique implementable to baffle and
              manipulate algorithms on all the leading crypto and social
              platforms.
            </p>
            <p>
              This allows us to manipulate the invisible but very real
              boundaries set by platform owners to Limit your visibility.{" "}
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
                ALL OF WHAT WE DO IS DESIGNED TO CREATE VISIBILITY AND ONE THING
                IS FOR CERTAIN,{" "}
              </span>
            </h5>
            <h5>
              <span>
                BEING SPAWNED IN THE DEPTHS OF THE BSC DEGEN COMMUNITY <br />{" "}
                WHERE BUDGET'S ARE LOW AND EXPECTATIONS ARE HIGH.{" "}
              </span>
            </h5>
            <h5 style={{ marginTop: "20px" }}>
              <span>
                THOSE WHO ARE STILL IN BUISINESS CERTAINLY LEARNED SOME THINGS{" "}
              </span>
            </h5>
            <Link to="/contact" className="white-text">
              Fill in the form in the menu For more information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
