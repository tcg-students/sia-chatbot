const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendGridRoute = (app) => {
  app.post("/send_email", (req, res) => {
    console.log("req.body", req.body);
    const emailSendTO = "ramollosamuel2@gmail.com";
    const emailSendFrom = "sia.chatbot1@gmail.com";

    const getApplicantsDetails = (_) => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).toDateString();


      if ("Traditional one-one mentorship/training" in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
      <div style="background-color: #2a7e5f;">
        <div style="margin:auto; width:20%; padding:2rem;">
          <img  src="" alt="Logo" />
        </div>
      
        
        <div style="padding:1px;">
          <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">TRADITIONAL ONE-ONE MENTORSHIP/TRAINING</p>
        </div>
        <div>
        <p style="color:white;">${today}</p>
        </div>
      </div>
      <div style="padding:2rem">
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
        <div><h3>My name is ${req.body.Name}</h3></div>
        <div><h3>From ${req.body["Business Name"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div><H3> ${req.body["Traditional one-one mentorship/training"]}</H3></div>
      </div>
      </div>
        </html>`;
      }
      if ("Distance/virtual mentorship/training" in req.body) {
        console.log("distance");
        return `<html>
  <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>        
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">DISTANCE/VIRTUAL MENTOSHIP/TRAINING</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;"></p>
        </div>
        <div style="padding:2rem">

        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">Hi...</h3></div>
        <div><h3>My name is ${req.body.Name}</h3></div>
        <div><h3>From ${req.body["Business Name"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div><H3> ${req.body["Distance/virtual mentorship/training"]}</H3></div=>
      </div>
      </div>
    </div>
  </html>`;
      }

      if (["Group training"] in req.body) {
        console.log("group");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">GROUP TRAINING</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;">&#9995;Hi...</p>
        </div>
        <div style="padding:2rem">
          <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
          <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
          <div><h3>My name is ${req.body.Name}</h3></div>
          <div><h3>From ${req.body["Business Name"]}</h3></div>
          <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
          <hr>
          <div><h2 style="color:black">Applicant message</h2></div>
          <div style="border:2px solid black"><H3> ${req.body["Group training"]}</H3></div>
  </div>
        </div>
        </html>`;
      }

      if (["Sponsor TCG"] in req.body) {
        console.log("sponsor TCG");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">SPONSOR TCG</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;"></p>
        </div>
        <div style="padding:1rem">
<h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
<div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
<div><h3>My name is ${req.body.Name}</h3></div>
<div><h3>From ${req.body["Business Name"]}</h3></div>
<div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
<hr>
<div><h2 style="color:black">Applicant message</h2></div>
<div><H3>${req.body["Sponsor TCG"]}</H3></div>
        </div>
</div>
        </html>`;
      }

      if (["Sponsor a student"] in req.body) {
        console.log("sponsor student");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">SPONSOR STUDENT</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;"></p>
        </div>
        <div style="padding:2rem">
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
        <div><h3>My name is ${req.body.Name}</h3></div>
        <div><h3>From ${req.body["Business Name"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div style="border:2px solid black"><H3>${req.body["Sponsor student"]}</H3></div>
        </div>
      </div>
        </html>`;
      }

      if (["The kind of support you’d like to offer (Optional)"] in req.body) {
        console.log("other");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">OTHER</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;"></p>
        </div>
        <div style="padding:2rem">
            <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
            <div><h3>My name is ${req.body.Name}</h3></div>
            <div><h3>From ${req.body["Business Name"]}</h3></div>
            <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
            <hr>
             <div><h2 style="color:black">Applicant message</h2></div>
             <div><h3> ${req.body["The kind of support you’d like to offer (Optional)"]}</h3></div>
      </div>
      </div>
        </html>`;
      }

      if (
        ["Give us an idea of what you’re looking for (Optional)"] in req.body
      ) {
        console.log("Place interns");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div>
          <div style="padding:1px;">
            <p style="text-align:center;color:white; font-weight: bold; font-size: 1.5rem;">PLACE TCG INTERNS</p>
          </div>
          <div>
          <p style="color:white;">${today}</p>
          </div>
        </div>
        <div style="padding:1px;">
          <p style=" font-weight: bold; font-size: 1.5rem;"></p>
        </div>
        <div style="padding:2rem">
      <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["Email Address"]}</a></h2>
      <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
      <div><h3>My name is ${req.body.Name}</h3></div>
      <div><h3>From ${req.body["Business Name"]}</h3></div>
      <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
      <hr>
      <div><h2 style="color:black">Applicant message</h2></div>
      <div><h3> ${req.body["Give us an idea of what you’re looking for (Optional)"]}</H3></div>              
        </div>
      </div>
        </html>`;
      }

      if (["Whatsapp Number"] in req.body) {
        console.log("student app");
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
          <div style="margin:auto; width:20%; padding:2rem;">
            <img  src="" alt="Logo" />
          </div> 
        <div style="padding:1px;">
          <p style="color:white; text-align: center; font-weight: bold; font-size: 1.5rem;">STUDENT APPLICATION</p>
        </div>
        <div>
        <p style="color:white; margin-left:2rem;">${today}</p>
        </div>
        </div>
        <div style="padding:1rem">
        <div><h3>&#128100; Full Name: ${req.body["Full Name"]}</h3></div>
        <div><h3>&#128233; Email Address: <a style="color:black;" href=${req.body["Email Address"]}>${req.body["Email Address"]}</a></h3></div>
        <div><h3>&#128222; Contact Number: ${req.body["Contact Number"]}</h3></div>
        <div><h3>&#128222; Whatsapp Number: ${req.body["Whatsapp Number"]}</h3></div>
         <div><h3>&#128107; Gender: ${req.body["Gender"]}</h3></div>
         <div><h3>&#128198; Date Of Birth: ${req.body["Date Of Birth"]}</h3></div>
         <div><h3>&#127968; Physical Address: ${req.body["Physical Address"]}</h3></div>
         <div><h3>&#127757; Province: ${req.body.Province}</h3></div>
      </div>
      </div>
        </html>`;
      }
    };

    const msg = {
      to: emailSendTO,
      from: emailSendFrom,
      subject: "The Coding Ground Applicants",
      html: getApplicantsDetails(),
    };
    sgMail.send(msg).then(
      () => {
        console.log(msg);
      },
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
  });
};

module.exports = { sendGridRoute };
