import React from 'react';
import Input from './Input';

const Notification = () => {
  return (
    <div>
      <h1>Notification Settings</h1>
      <Input label="Email Address(es)" type="text" />
      <Input label="Mobile Numbers" type="text" />
      <button>Save</button>
    </div>
  );
};

export default Notification;
