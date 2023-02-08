import React, {useState, useRef} from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const [formState, setFormState] = useState({ user_name: '', user_email: '', message: '' })
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState(false);
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    function handleChange(e) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    // console.log(e.target.value)
    //     if (e.target.name === 'user_email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }

    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) 

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formState.user_name || !formState.user_email || !formState.message) {
        setErrorMessage(true)
        return
    } else {
        emailjs.sendForm('contact_service', 'contact_form', form.current, '9jcStzq7A8P-L8R8y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset()
    form.current.elements.message.value = ""
    setErrorMessage(false)
    setFormState({ user_name: '', user_email: '', message: '' })
    }
  };

    return (
        <section id='contact'>
            <h1 id='contact-title'>Contact me</h1>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div>
                    <label htmlFor="name"></label>
                    <input type="text" name="user_name" defaultValue={name} onBlur={handleChange} placeholder='Name'/>
                    </div>
                    <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="user_email" defaultValue={email} onBlur={handleChange} placeholder='email: John.Doe@gmail.com'/>
                    </div>
                    <div>
                    <label htmlFor="message"></label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder='Your message here'/>
                    </div>
                
                {errorMessage && (
                    <div>
                        <p className="error-text">Please fill out all feilds</p>
                    </div>
                )}
                <button type="submit" onClick={sendEmail}>Submit</button>
            </form>
        </section>
    )
}

export default Contact