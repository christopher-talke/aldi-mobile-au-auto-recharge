const dashboard = {
  serviceSettings: {
    number: '0400000000',
    minimumValue: 2.0,
    rechargeValue: {
      chosen: 0,
      options: [
        { friendlyName: 'Option 1 - $15.00', path: 'payg15' },
        { friendlyName: 'Option 2 - $25.00', path: 'payg25' },
        { friendlyName: 'Option 3 - $35.00', path: 'payg35' }
      ]
    },
    setupComplete: true
  },
  notificationSettings: {
    emailAddresses: [
      { value: 'john.doe@gmail.com', type: 'email' },
      { value: 'jane.smith@gmail.com', type: 'email' }
    ],
    mobileNumbers: [
      { value: '0400000000', type: 'mobile' },
      { value: '0400000001', type: 'mobile' }
    ]
  },
  auditLog: [
    '2020-02-02 - 0800 - Balance check complete...',
    '2020-02-01 - 2000 - Balance check complete...',
    '2020-02-01 - 1200 - Balance check complete...',
    '2020-02-01 - 0800 - Balance check complete...',
    '2020-01-31 - 2000 - Notification Issued...',
    '2020-01-31 - 2000 - Recharge process complete...',
    '2020-01-31 - 2000 - Starting recharge process...',
    '2020-01-31 - 2000 - Balance check complete, value less than...'
  ]
};

export default dashboard;
