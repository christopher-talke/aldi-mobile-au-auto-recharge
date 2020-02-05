# Unofficial Aldi Mobile Auto Recharging

This is a mini app to allow auto recharging of Aldi Mobile Australia Pay-as-you-go services, their web portal doesn't support this at all, however, I found that their entire backend portal is Server Side Rendered and I've been playing with headless Chrome allot lately, so I figure... why not automate this?

Plan is to create an API that will scrape their website, look for the available balance and trigger a recharge of the service when the value is too low. My plan is to complete an automatic check at 0800, 1200 and 2000 UTC time.

When a recharge is triggered, this would email or text message a notification to a desired number.

**To Do List**

- [x] Design & Prototype
- [x] Data Structure
- [x] Database Design
- [ ] Balance Checker
- [ ] Recharge Trigger
- [ ] Email Notification
- [ ] SMS Notification
- [ ] Authentication
- [ ] Login UI
- [ ] Settings UI
- [ ] Log UI
- [ ] Setup UI (Bonus)

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

**Database Design**

Service Settings Table

| Column        | Type    | PK   | FK  | AR   | Nullable |
| ------------- | ------- | ---- | --- | ---- | -------- |
| id            | int     | true | -   | true | false    |
| number        | varchar | -    | -   | -    | true     |
| password      | varchar | -    | -   | -    | true     |
| minimumValue  | int     | -    | -   | -    | false    |
| rechargeValue | int     | -    | -   | -    | false    |
| setupComplete | bol     | -    | -   | -    | false    |

Recharge Values Table

| Column       | Type    | PK   | FK  | AR   | Nullable |
| ------------ | ------- | ---- | --- | ---- | -------- |
| id           | int     | true | -   | true | false    |
| friendlyName | varchar | -    | -   | -    | true     |
| path         | varchar | -    | -   | -    | true     |

Notifications Table

| Column | Type    | PK   | FK  | AR   | Nullable |
| ------ | ------- | ---- | --- | ---- | -------- |
| id     | int     | true | -   | true | false    |
| type   | varchar | -    | -   | -    | true     |
| value  | varchar | -    | -   | -    | true     |

Log Table

| Column | Type    | PK   | FK  | AR   | Nullable |
| ------ | ------- | ---- | --- | ---- | -------- |
| id     | int     | true | -   | true | false    |
| value  | varchar | -    | -   | -    | true     |

User Table

| Column   | Type    | PK   | FK  | AR   | Nullable |
| -------- | ------- | ---- | --- | ---- | -------- |
| id       | int     | true | -   | true | false    |
| username | varchar | -    | -   | -    | true     |
| password | varchar | -    | -   | -    | true     |
| active   | bol     | -    | -   | -    | false    |

**Example Data Structure**

Below is an example data structure for the main dashboard, based on the database design.

```JSON
{
	"serviceSettings": {
		"number": "0400000000",
		"minimumValue": 2,
		"rechargeValue": {
			"chosen": 0,
			"options": [{
					"friendlyName": "Option 1 - $15.00",
					"path": "payg15"
				},
				{
					"friendlyName": "Option 2 - $25.00",
					"path": "payg25"
				},
				{
					"friendlyName": "Option 3 - $35.00",
					"path": "payg35"
				}
      ]
    },
    "setupComplete" : true
	},
	"notificationSettings": {
		"emailAddresses": [
			"john.doe@gmail.com",
			"jane.smith@gmail.com"
		],
		"mobileNumbers": [
			"0400000000",
			"0400000001"
		]
	},
	"auditLog": [
		"2020-02-02 - 0800 - Balance check complete...",
		"2020-02-01 - 2000 - Balance check complete...",
		"2020-02-01 - 1200 - Balance check complete...",
		"2020-02-01 - 0800 - Balance check complete...",
		"2020-01-31 - 2000 - Notification Issued...",
		"2020-01-31 - 2000 - Recharge process complete...",
		"2020-01-31 - 2000 - Starting recharge process...",
		"2020-01-31 - 2000 - Balance check complete, value less than..."
	]
}
```

**Design & Prototype**

I've been really trying to dip my feet into design, given this will be a pretty simple service, a simple UI was required to match this. I went for a very flat design overall, with a few useful configuration / inputs and an easy to digest audit log to review the applications actions.

Desktop Version: [Click Here](https://www.figma.com/proto/esZRwgcc6qULeIpf2ph0kz/Unofficial-Pay-As-You-Go-Automatic-Recharge-Service?node-id=7%3A23&scaling=min-zoom)

Mobile Version: [Click Here](https://www.figma.com/proto/esZRwgcc6qULeIpf2ph0kz/Unofficial-Pay-As-You-Go-Automatic-Recharge-Service?node-id=8%3A15&scaling=scale-down)
