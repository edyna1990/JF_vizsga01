import React from "react";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => { 
    e.preventDefault()
    const formData={email, feedback, timestamp:Date.now()}
    console.log(formData)
  }
  return (
    <div className="container p-2 ">
      <section>
        <h2>Provide Feedback</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Feedback:
            </label>
            <textarea
              className="form-control"
              value={feedback}
              onChange={(e)=>setFeedback(e.target.value)}
              rows="3"
              placeholder="Ez egy feedback"
            ></textarea>
          </div>
          <button className="btn btn-primary">
              Submit
          </button>
        </form>
      </section>
    </div>
  );
};
