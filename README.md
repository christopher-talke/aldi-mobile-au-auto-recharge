# Aldi Mobile Auto Recharging

This is a mini app to allow auto recharging of Aldi Mobile Australia Pay-as-you-go services, their web portal doesn't support this at all, however, I found that their entire backend portal is Server Side Rendered and I've been playing with headless Chrome allot lately, so I figure... why not automate this?

Plan is to create an API that will scrape their website, look for the available balance and trigger a recharge of the service when the value is too low. My plan is to complete an automatic check at 0800, 1200 and 2000 UTC time.

When a recharge is triggered, this would email or text message a notification to a desired number.

**To Do List**

- [ ] Balance Checker
- [ ] Recharge Trigger
- [ ] Email Notification
- [ ] SMS Notification
- [ ] Authentication
- [ ] Login UI
- [ ] Settings UI
- [ ] Log UI

**Technology**

- Express
- Puppeteer
- Node Schedule
- Sequelize
- Node Mailer
- Twilio SMS
- ReactJS (Create React App)
- Styled Components
- Reactstrap
- Docker
