import React from "react";
import ContactFormHeader from "./ContactFormHeader";

import "./style.css";

const ContactForm = (props) => (
  <div className="container ContactContainer">
    <ContactFormHeader />
    <div className="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <form className="formInfo">
          <div className="form-group">
            <label for="nameInput">Name</label>
            <input
              type="email"
              class="form-control"
              name="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="emailInput">Email</label>
            <input
              type="email"
              class="form-control"
              name="emailInput"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              name="message"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <br/>
          <button type="button" className="btn btn-primary btn-lg SubmitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;
