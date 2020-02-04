# Unofficial Aldi Mobile Auto Recharging

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

**Design & Prototype**

I've been really trying to dip my feet into design, given this will be a pretty simple service, a simple UI was required to match this. I went for a very flat design overall, with a few useful configuration / inputs and an easy to digest audit log to review the applications actions.

Desktop Version: [Click Here](https://www.figma.com/proto/esZRwgcc6qULeIpf2ph0kz/Unofficial-Pay-As-You-Go-Automatic-Recharge-Service?node-id=7%3A23&scaling=min-zoom)

Mobile Version: [Click Here](https://www.figma.com/proto/esZRwgcc6qULeIpf2ph0kz/Unofficial-Pay-As-You-Go-Automatic-Recharge-Service?node-id=8%3A15&scaling=scale-down) 
