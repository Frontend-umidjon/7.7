import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen p-10 bg-gray-900 text-white flex flex-col items-center'>
      <h2 className='text-3xl font-bold text-blue-400'>Contact Us</h2>
      <p className='text-gray-300 text-center max-w-2xl mt-4'>
        Feel free to reach out to us for any inquiries or support.
      </p>
      <form className='mt-6 flex flex-col gap-4 w-full max-w-md'>
        <input type='text' placeholder='Your Name' className='p-3 rounded bg-gray-800 text-white' />
        <input type='email' placeholder='Your Email' className='p-3 rounded bg-gray-800 text-white' />
        <textarea placeholder='Your Message' rows='4' className='p-3 rounded bg-gray-800 text-white'></textarea>
        <button type='submit' className='p-3 bg-blue-500 hover:bg-blue-600 rounded text-white'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
