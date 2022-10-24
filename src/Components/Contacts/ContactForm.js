import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email:'', comment:''})
    const [formErrors, setFormErrors] = useState({})
    const[canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if(!values.name)
            errors.name = "You must enter a name"
        
        if(!values.email)
            errors.email = "You must enter an email"
        else if (!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be atleast five characters long"
        
        if(Object.keys(errors).length === 0)
            setCanSubmit(true)
        else
            setCanSubmit(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    return (
        <section className="commentForm">
            <div className="container">

            {
                canSubmit ?
                    (<div className ="d-flex justify-content-center align-items-center">
                        <div>Thank you for your comment!</div>
                    </div>)
                :
                (
                <>
                        <h5>Come in contact with us</h5>
                        <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input id="name" type="text"  placeholder='Your Name' value={contactForm.name} onChange={handleChange} />
                            <div className='errorMessage'>{formErrors.name}</div>    
                        </div>
                        <div>
                            <input id="email" type="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange} />
                            <div className='errorMessage'>{formErrors.email}</div> 
                        </div>

                        <div className='textarea'>
                            <textarea id='comment' placeHolder = "Comments" value= {contactForm.comment} onChange={handleChange}></textarea>
                            <div className='errorMessage'>{formErrors.comment}</div> 
                        </div>

                        <div>
                            <button type ="submit" className="btn-submit">Post Comments</button>
                        </div>
                    </form>
                </>
                )
                }
        </div>
    </section> 

)
}                                    
                

export default ContactForm