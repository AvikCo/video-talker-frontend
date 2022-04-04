import React from 'react';

const UsernameInput = (props) => {
  const { username, setUsername, onEnterPressed } = props;

  return (
    <div className='login-page_input_container'>
      <input
        placeholder='Enter your name'
        type='text'
        value={username}
        onChange={(event) => { setUsername(event.target.value); }}
        className='login-page_input background_main_color text_main_color'
        onKeyPress={(e)=> e.key === 'Enter' && onEnterPressed()}
      />
    </div>
  );
};

export default UsernameInput;
