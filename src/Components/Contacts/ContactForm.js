import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email:'', comments:''})
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
    




    const validateName = (value) => {
        
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if(!value.name)
            return"You must enter a name"
    

            else if(value.name.length < 2)
            return"Your Name must be atleast 2 characters long"
        

            else if(!regex_name.test(value.name))
            return "Please use letters and ',.'-' these characters only "

            else
            return null  ;
        
           
    }

    const validateEmail = (value) => {
               
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        
        if(!value.email)
         return "You must enter an email"
     
        else if (!regex_email.test(value.email))
           return "You must enter a valid e-mail address (eg. name@domain.com)"

        else
          return null      
        
    }

    const validateComment = (value) => {
         
        if(!value.comments)
        return "You must enter a comment"
       

        else if(value.comments.length < 5)
        return "Your comment must be atleast five characters long"

        else
        return null ;


            
    }
    //tar info från de andra valideringsmetoderna och sätter upp en array med fel. är den tom så Postar den innehållet i formuläret.
    const handleValidationData =(data) => {
        const  errors={}

        errors.name = validateName(data)
        errors.email = validateEmail(data)
        errors.comments = validateComment(data)
   
        
        if(errors.name === null && errors.email === null && errors.comments === null) {

            let json = JSON.stringify(data)
            console.log(json)
    
            fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
         })
         .then(res => {
            console.log(res.status)
        
            if(res.status === 200) {
                setCanSubmit(true)
            }
    
            else
                setCanSubmit(false)
                
         })

      

    }
}

// ändrar klass på inputfälten baserat på huruvida det finns felmeddelande eller inte. Scss ändrar bordern om det finns fel.
    let inputName = 'validSuccess'
        if(formErrors.name)
            inputName = 'validFail'

    let inputEmail = 'validSuccess'
        if(formErrors.email)
            inputEmail ='validFail'

    let inputComment = 'validSuccess'
            if(formErrors.comments)
                inputComment ='validFail'

//fyller på contactForm med värden från inputfälten
    const handleChange = (e) => {
        
        const {id, value} = e.target
            setContactForm({...contactForm, [id]: value})
    }
    //Spreadar formErrors och skriver över det valda fältet, ändrar inte de andra.
    const handleKeyUpName = () => {
        setFormErrors({...formErrors, name: validateName(contactForm)})
        
    }

    const handleKeyUpEmail = () => {
        setFormErrors({...formErrors, email: validateEmail(contactForm)})
        
    }

    const handleKeyUpComment = () => {
        setFormErrors({...formErrors, comments: validateComment(contactForm)})
        
    }

    //kallar handleValidation data att köra valideringen med allt som finns i contactForm.
    const handleSubmit= (e) => {
        e.preventDefault()
        handleValidationData(contactForm)

    }       
    return (
        <section className="commentForm">
            <div className="container">
           
            {
             
             canSubmit?

                     (<div className="alert alert-success text-center" role="alert">
                        <h3>Thank you for your comment!</h3>
                        <p>Now go buy something, this website isnt free you know.</p>
                     </div>)
                    
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
                            <textarea className={inputComment} id='comments' placeholder="Comments" value= {contactForm.comments} onChange={handleChange} onKeyUp={handleKeyUpComment}></textarea>
                            <div className='errorMessage'>{formErrors.comments}</div> 
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