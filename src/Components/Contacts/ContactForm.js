import React from 'react'

const ContactForm = () => {
  return (
    <>
    <section className="commentForm">

        <h5>Come in contact with us</h5>
        <form commentForm = "onsubmit(event)"novalidate>
            <div className="contact_container">
                <div className="mb-4">
                    <input id="comment_name" type="name" autoComplete="given-name" placeholder="Your Name" Required data-required-min="2"></input>
                    <div id="firstname-error" className="text-danger"></div>
                </div>

                <div className="mb-4">
                    <input id="comment_email" type="email" autoComplete="email" placeholder="Your Mail" Required data-required-min="4"></input>
                    <div id="email-error" className="text-danger"></div>
                </div>
            </div>

            <div className="comment_container">
                <div className="mb-4">
                    <textarea id="comment_comment" type="TextArea" placeholder="Comments" rows ="3" Required data-required-min="2"></textarea>
                    <div id="comment-error" className="text-danger"></div>
                </div>
            </div>
            <button type="submit" className="btn btn-theme">Post Comments</button>
        </form>

    </section>
</>

  )
}

export default ContactForm