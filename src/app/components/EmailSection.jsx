"use client";
import React, { useState } from 'react'
import GithubIcon from "../../../public/icons-github.png"
//import LinkedinIcon from "../../../public/linkedin-icon.svg"
import WhatsappIcon from "../../../public/icons-whatsapp.png"
import GmailIcon from "../../../public/gmail-icon.png"
import Link from "next/link"
import Image from "next/image"
import emailjs from '@emailjs/browser'


const EmailSection = () => {

 const [email, setEmail] = useState('')
 const [subject, setSubject] = useState('')
 const [message, setMessage] = useState('')
 
function sendEmail(e){
  e.preventDefault();

  if (email === '' || subject === '' || message === '' ){
    alert("all fields are required");
    return;
  }

    const templateParams = {
        from_subject: subject,
        email: email,
        message: message,


    }

     emailjs.send("service_y0tqy84", "template_dv2tfys", templateParams, "bEPzEnx8wWsJGIhGI")
     .then((response) => {
      console.log("email sent !", response.status, response.text)
      setEmail('')
      setMessage('')
      setSubject('')
     }, (err) => {
      console.log("Failed: ", err)
     })

}



  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-12 py-24 gap-4 relative' id='contact'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let's Connect
        </h5>

      <p className='text-[#ADB7BE] mb-4 max-w-md'>
        {""}
        I'm currently looking for new opportunities, my inbox is always open.
        Wheter you have a question or just want to say hi, I'll try my best 
        to get back to you !
      </p>
      
      <div className='socials flex flex-row gap-2'>

        <Link href="https://github.com/thinobrega" target='blank'>
          <Image src={GithubIcon} alt='Github Icon'/>
        </Link>
        <Link href="https://github.com/thinobrega" target='blank'>
        </Link>

       {/*  <Link href="linkedin.com">
          <Image src={LinkedinIcon} alt='Linkedin Icon'/>       
        </Link>
        <Link href="linkedin.com">
        </Link>
*/}
        <Link href="https://api.whatsapp.com/send?phone=5585999037775" target='blank'>
          <Image src={WhatsappIcon} alt='Whatsapp Icon'/>       
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5585999037775" target='blank'>
        </Link>

        <Link href="mailto:thibeno2020@gmail.com" target='blank'>
          <Image src={GmailIcon} alt='Gmail Icon'/>       
        </Link>
        <Link href="mailto:thibeno2020@gmail.com" target='blank'>
        </Link>



      </div>
      
      </div>
      <div>
         
          {/*==========================================
          FORM - EMAIL 
          ==========================================*/}
          <form className='flex flex-col' onSubmit={sendEmail}>
            <div className='mb-6'>
            <label 
            htmlFor="email" 
            className='text-white block mb-2 text-sm font-medium' 
            >
              Your email
            </label>

            <input 
            name='email'
            type='email' 
            id='email' 
            required 
            className='bg-[#12191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          </div>

          {/*==========================================
          FORM - SUBJECT 
          ==========================================*/}
            <div className='mb-6'>
          <label 
            htmlFor="subject" 
            className='text-white block mb-2 text-sm  font-medium' 
            >
              Subject
            </label>
            <input 
            name='subject'
            type='text' 
            id='subject' 
            required 
            className='bg-[#12191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Just saying hi'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          </div>

          <div className='mb-6'>
            <label
            htmlFor='message'
            className='text-white block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea
            name='message'
            id='message'
            className='bg-[#12191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="Let's talk about..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />
          </div>
          <button 
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg w-full'>
            Send Message
            </button>
           
           
          </form>
      </div>
      
   
      
    </section>
    
  )
}

export default EmailSection