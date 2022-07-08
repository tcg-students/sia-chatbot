
const sgMail = require('@sendgrid/mail')
const fs = require('fs')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("(process.env.SENDGRID_API_KEY)" , (process.env.SENDGRID_API_KEY))
const sendGridRoute = app => {
  app.post('/send_email' , (req , res) => {
console.log('req.body', req.body)
    const emailSendTO = 'ramollosamuel2@gmail.com'
    const emailSendFrom = 'sia.chatbot1@gmail.com'

    /////check form


    /////////////

    const getApplicantsDetails = () => {
// if () {
//   return `<strong>${ req.body.name},
//   \n ${req.body.surname}</strong>`
// }else if() {
//   return `<strong>${ req.body.name},
//   \n ${req.body.surname}</strong>`
// }else if(){
//   `<strong>${ req.body.name},
//     \n ${req.body.surname}</strong>`
// }else if() {

// }
    }

  //   const msg = {
  //     to: emailSendTO,
  // from: emailSendFrom,
  //   subject: 'THe Coding Ground Applicants',
  //   html: getApplicantsDetails()
  //   };
    // console.log('msg', msg)
    // sgMail
      // .send(msg)
      // .then(() => {}, error => {
      //   console.error(error);
    
        // if (error.response) {
        //   console.error(error.response.body)
        // }
      // });

  })
}

module.exports = {sendGridRoute}





