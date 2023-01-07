import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact-wrapp">
      <div className="landing-div contact-div">
        <img src="/main-ico.png" alt="" className="logo" />
        <div className="main-square">
          <form>
            <div className="input-div">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" id="name" />
            </div>
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="input-div">
              <label htmlFor="message">Message</label>
              <textarea placeholder="Message" id="message" />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
