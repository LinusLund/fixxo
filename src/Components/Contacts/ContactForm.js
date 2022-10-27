import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email:'', comment:''})
    const [formErrors, setFormErrors] = useState({})
    const[canSubmit, setCanSubmit] = useState()
    const[canValidate, setValidation] = useState()
   
   

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

        if(!values.name)
            errors.name = "You must enter a name"
 

        else if(values.name.length < 2)
            errors.name = "Your Name must be atleast 2 characters long"
     

        else if(!regex_name.test(values.name))
           errors.name = "Please use letters and ',.'-' these characters only "
       
        
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
        e.preventDefault()
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleKeyUp = (e) => {
        setFormErrors(validate(contactForm))
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        if(canSubmit === false)
            console.log(formErrors);
        else
            console.log(contactForm)
            
        return contactForm
     }

    // const handleFocus = (canValidate) => setValidation({isFocused: true}) vill validera ett fält i taget, samt ändra border-color på input-fält när det finns errorMessage.
        

    // const handleBlur = (canValidate) => setValidation({isFocused: false}) vill validera ett fält i taget, samt ändra border-color på input-fält när det finns errorMessage.
          
    return (
        <section className="commentForm">
            <div className="container">
                <>
                        <h5>Come in contact with us</h5>
                        <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input className = "failedValid" id="name" type="text"  onFocus={handleFocus} onBlur={handleBlur}  placeholder='Your Name' value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUp} />
                            <div className='errorMessage'>{formErrors.name}</div>    
                        </div>
                        <div>
                            <input className = "failedValid" id="email" type="email"  placeholder='Your Mail' value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUp} />
                            <div className='errorMessage'>{formErrors.email}</div> 
                        </div>

                        <div className='textarea'>
                            <textarea className = "failedValid" id='comment'  placeholder = "Comments" value= {contactForm.comment} onChange={handleChange} onKeyUp={handleKeyUp} ></textarea>
                            <div className='errorMessage'>{formErrors.comment}</div> 
                        </div>

                        <div>
                            <button type ="submit" className="btn-submit">Post Comments</button>
                        </div>
                    </form>
                </>
        </div>
    </section> 

)
}                                    
                

export default ContactForm