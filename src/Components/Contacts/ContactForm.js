import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email:'', comment:''})
    const [formErrors, setFormErrors] = useState({})
    const[canSubmit, setCanSubmit] = useState()
    




    const validateName = (value) => {
        
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if(!value.name)
            return"You must enter a name"
    

            else if(value.name.length < 2)
            return"Your Name must be atleast 2 characters long"
        

            else if(!regex_name.test(value.name))
            return "Please use letters and ',.'-' these characters only "

        
         return;   
    }

    const validateEmail = (value) => {
               
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        
        if(!value.email)
         return "You must enter an email"
     
        else if (!regex_email.test(value.email))
         return "You must enter a valid e-mail address (eg. name@domain.com)"

        
        
        return ;
    }

    const validateComment = (value) => {
         
        if(!value.comment)
        return "You must enter a comment"
       

        else if(value.comment.length < 5)
        return "Your comment must be atleast five characters long"

        return;


            
    }
    
    const handleValidationData =(data) => {
        const  errors={}

        errors.name = validateName(data)
        errors.email = validateEmail(data)
        errors.comment = validateComment(data)
   
       if(Object.keys(errors).length === 0)
           setCanSubmit(true)
       else
           setCanSubmit(false)
        
        return canSubmit;

               }
// ändrar klass på inputfälten baserat på huruvida det finns felmeddelande eller inte. Scss ändrar bordern om det finns fel.
    let inputName = 'validSuccess'
        if(formErrors.name)
        inputName = 'validFail'

    let inputEmail = 'validSuccess'
        if(formErrors.email)
            inputEmail ='validFail'

    let inputComment = 'validSuccess'
            if(formErrors.comment)
                inputComment ='validFail'

//fyller på contactForm med värden från inputfälten
    const handleChange = (e) => {
        
        const {id, value} = e.target
            setContactForm({...contactForm, [id]: value})
    }
    //Spreadar formErrors och skriver över det valda fältet, ändrar inte de andra.
    const handleKeyUpName = (e) => {
        setFormErrors({...formErrors, name: validateName(contactForm)})
        
    }

    const handleKeyUpEmail = (e) => {
        setFormErrors({...formErrors, email: validateEmail(contactForm)})
        
    }

    const handleKeyUpComment = (e) => {
        setFormErrors({...formErrors, comment: validateComment(contactForm)})
        
    }
    //kallar handleValidation data att köra valideringen med allt som finns i contactForm.
    //därefter skriver den antingen ut formErrors eller contactForm beroende på status på canSubmit.

    const handleSubmit= (e) => {
        handleValidationData(contactForm) 
        e.preventDefault()
            if(canSubmit === false)
                console.log(formErrors);
            else
                console.log(contactForm)
        
             return  ;
     }

     

    
    return (
        <section className="commentForm">
            <div className="container">
            {

             canSubmit?

                     (<div class="container-sm style=d-flex">Thank you for your comment!</div>)
                    
                 :
                 (  
                    <>
                        <h5>Come in contact with us</h5>
                        <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input className ={inputName} id="name" type="text" placeholder='Your Name' value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUpName} />
                            <div className='errorMessage'>{formErrors.name}</div>    
                        </div>
                        <div>
                            <input className={inputEmail} id="email" type="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUpEmail} />
                            <div className='errorMessage'>{formErrors.email}</div> 
                        </div>

                        <div className='textarea'>
                            <textarea className={inputComment} id='comment' placeholder="Comments" value= {contactForm.comment} onChange={handleChange} onKeyUp={handleKeyUpComment}></textarea>
                            <div className='errorMessage'>{formErrors.comment}</div> 
                        </div>

                        <div>
                            <button type="submit" className="btn-submit">Post Comments</button>
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