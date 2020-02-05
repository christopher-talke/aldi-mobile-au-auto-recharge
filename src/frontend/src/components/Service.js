import React from 'react';
import Input from './Input';
import Dropdown from './Dropdown';

const Service = () => {
  return (
    <div>
      <h1>Service Settings</h1>
      <Input label="Number" type="text" />
      <Input label="Password" type="password" />
      <Input label="Minimum Value" type="number" />
      <Dropdown
        label="Recharge Value"
        options={[
          { friendlyName: 'Option 1 - $15.00', path: 'payg15' },
          { friendlyName: 'Option 2 - $25.00', path: 'payg25' },
          { friendlyName: 'Option 3 - $35.00', path: 'payg35' }
        ]}
      />
      <button>Verify</button> <button>Save</button>
    </div>
  );
};

export default Service;
