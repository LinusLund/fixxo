import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email:'', comment:''})
    const [formErrors, setFormErrors] = useState({})
    const[canSubmit, setCanSubmit] = useState()
    


    const handleValidationData =(values) => {

        validateName(values.nameValidation)
        validateEmail(values.emailValidation)
        validateComment(values.commentValidation)

    if(Object.keys(values).length === 0)
        setCanSubmit(true)
    else
        setCanSubmit(false)   

    return formErrors;
            }

    const validateName = (nameValidation) => {
        
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            if(!nameValidation.name)
            nameValidation.name = "You must enter a name"
    

            else if(nameValidation.name.length < 2)
            nameValidation.name = "Your Name must be atleast 2 characters long"
        

            else if(!regex_name.test(nameValidation.name))
            nameValidation.name = "Please use letters and ',.'-' these characters only "

            setFormErrors(formErrors)
            
    }

    const validateEmail = (emvailValidation) => {
                
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        
        if(!emvailValidation.email)
        emvailValidation.email = "You must enter an email"
     
        else if (!regex_email.test(emvailValidation.email))
        emvailValidation.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        setFormErrors(formErrors)
        
            
    }

    const validateComment = (commentValidation) => {
        
        if(!commentValidation.comment)
        commentValidation.comment = "You must enter a comment"
       

        else if(commentValidation.comment.length < 5)
        commentValidation.comment = "Your comment must be atleast five characters long"

            commentValidation(setFormErrors(formErrors)) 
            
    }

    let inputName = 'validSuccessName'
        if(formErrors.name)
        inputName = 'validFailName'

    let inputEmail = 'validSuccessEmail'
        if(formErrors.email)
            inputName ='validFailEmail'

    let inputComment = 'validSuccessComment'
            if(formErrors.comment)
                inputName ='validFailComment'


    const handleChange = (e) => {
        e.preventDefault()
        const {id, value} = e.target
            setContactForm({...contactForm, [id]: value})
    }

    const handleKeyUp = (e) => {
        handleValidationData(setFormErrors(formErrors))
        e.preventDefault()
    }

    const handleSubmit= () => {
        handleValidationData(setFormErrors(formErrors))  
            if(canSubmit === false)
                console.log(formErrors);
            else
                console.log(contactForm)
                
     }

     

    
    return (
        <section className="commentForm">
            <div className="container">
                <>
                        <h5>Come in contact with us</h5>
                        <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input className ={inputName} id="name" type="text"     placeholder='Your Name' value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUp} />
                            <div className='errorMessage'>{formErrors.name}</div>    
                        </div>
                        <div>
                            <input className={inputEmail} id="email" type="email"  placeholder='Your Mail' value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUp} />
                            <div className='errorMessage'>{formErrors.email}</div> 
                        </div>

                        <div className='textarea'>
                            <textarea className={inputComment} id='comment'  placeholder="Comments" value= {contactForm.comment} onChange={handleChange} onKeyUp={handleKeyUp}></textarea>
                            <div className='errorMessage'>{formErrors.comment}</div> 
                        </div>

                        <div>
                            <button type="submit" className="btn-submit">Post Comments</button>
                        </div>
                    </form>
                </>
        </div>
    </section> 

)
}                                    
                

export default ContactForm