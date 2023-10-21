const API_KEY = 'a38fa04598d9cd7ee1b08f0e516baaff-3750a53b-7cf1953d';
const DOMAIN = 'sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org';

 import formData from 'form-data';
 import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

export function sendEmail(message){

    const messageData = {
        from: 'EB-2 Visa Advisor <me@sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org>',
        to: ['jjgomezswe@gmail.com', 'gomezcardenasricardo@gmail.com'],
        subject: 'New Visa Information Client!!',
        text: message
      };

    client.messages.create(DOMAIN, messageData)
    .then((res) => {
    console.log(res);
    })
    .catch((err) => {
    console.error(err);
    });
}