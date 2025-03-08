import { useState } from 'react';
import emailjs from '@emailjs/browser';
import successImage from '../assets/images/success.png';

const EmailForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formData, import.meta.env.VITE_EMAIL_PUBLIC_KEY);
      setSuccess(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const inputStyle = `px-3 py-3 sm:py-4 text-sm sm:text-[0.9rem] outline-accent overflow-hidden text-primaryDark dark:text-accent bg-bgLight dark:bg-blackTrans border-[2px] dark:border-0 border-bgDark`;

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 max-w-md mx-auto ${success && 'hidden'}`}>
        <input type='text' name='name' placeholder='Your Name' required className={inputStyle} onChange={handleChange} />
        <input type='email' name='email' placeholder='Your Email' required className={inputStyle} onChange={handleChange} />
        <textarea name='message' placeholder='Your Message' required className={inputStyle} onChange={handleChange} />
        <button type='submit' className='p-2 bg-blue-500 text-primaryDark dark:text-bgLight rounded '>
          Send
        </button>
      </form>
      {success && (
        <div className='w-full text-center'>
          <img src={successImage} alt='email success' className='w-14 h-14 sm:w-24 sm:h-24 mx-auto' />
          <p className='mt-2 text-sm sm:text-base text-primaryDark dark:text-bgLight font-medium'>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
