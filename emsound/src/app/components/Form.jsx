import React, { useState, useRef, useEffect } from 'react';

const Form = () => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleMessageChange = (event) => {
    const { value } = event.target;
    if (value.length <= 200) {
      setMessage(value);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div>
    <h1 className='text-center p-6 text-3xl'>Kontakt</h1>
    <form className='w-full'>
      <div className='flex flex-col justify-center items-center'>
        <div className='input-container pb-4'>
          <input type="text" id="email" name="email" placeholder="Email:" className=''/>
        </div>
        <div className='input-container'>
          <textarea
            id="message"
            name="message"
            placeholder="Message:"
            className=''
            value={message}
            onChange={handleMessageChange}
            ref={textareaRef}
            rows={1}
            maxLength={200}
            style={{ resize: 'none', overflow: 'hidden' }}
          />
            <div className='flex justify-between items-center mt-6'>
            <button type="submit" className='text-sm'>
              Send
            </button>
            <div className='text-right text-sm text-gray-500'>
              {message.length} / 200
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Form;