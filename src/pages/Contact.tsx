import EmailForm from '../components/EmailForm';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  return (
    <div className='py-[3.5rem] sm:py-[5rem] text-center sm:text-start text-primaryDark dark:text-bgLight'>
      <p>Please get in touch with me if you have any questions or even just to say hi.</p>
      <EmailForm />
      <div className='max-w-md flex justify-center items-center mt-[3rem]'>
        <SocialMedia isInSection={true} />
      </div>
    </div>
  );
};

export default Contact;
