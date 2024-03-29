const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendGridRoute = (app) => {
  app.post("/send_email", async (req, res) => {
    console.log("req.body", req.body);
    const emailSendTO = "ramollosamuel2@gmail.com";
    const emailSendFrom = "sia.chatbot1@gmail.com";
  
    const getApplicantsDetails = (_) => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).toDateString();

      if ("Traditional one-one mentorship/training" in req.body) {
        return `<html>
        
        <div style="margin: auto; width:30%;padding:0.5rem; background-color:#2a7e5f;">
      <div style="background-color: #2a7e5f;">
        <div style="padding: 17px; display: flex;gap: 1rem;">
        <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
          <p style="text-align:center;color:white; font-weight: bold; font-size: 1rem;">TRADITIONAL ONE-ONE MENTORSHIP/TRAINING</p>
        </div>
        <div>
        <p style="color:white;padding:2rem;">${today}</p>
        </div>
      </div>
      <hr>
      <div style="padding:2rem;">
        <h2 style="color:black">Email Address: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">&#9995;Hi...</h3></div>
        <div><h3>Name: ${req.body["name"]}</h3></div>
        <div><h3>Organisation: ${req.body["businessName"]}</h3></div>
        <div><h3>Business/personal contact number: ${req.body["contactNumber"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div><H3> ${req.body["Traditional one-one mentorship/training"]}</H3></div>
      </div>
      </div>
        </html>`;
      }



      if ("Distance/virtual mentorship/training" in req.body) {
        return `<html>
  <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
        <div style="padding: 17px; display: flex;gap: 1rem;">
          <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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

        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">Hi...</h3></div>
        <div><h3>My name is ${req.body["name"]}</h3></div>
        <div><h3>From ${req.body["businessName"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["contactNumber"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div><H3> ${req.body["Distance/virtual mentorship/training"]}</H3></div=>
      </div>
      </div>
    </div>
  </html>`;
      }



      if (["Group training"] in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
         
        <div style="padding: 17px; display: flex;gap: 1rem;">
          <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">Hi...</h3></div>
        <div><h3>My name is ${req.body["name"]}</h3></div>
        <div><h3>From ${req.body["businessName"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["contactNumber"]}</h3></div>
          <hr>
          <div><h2 style="color:black">Applicant message</h2></div>
          <div style="border:2px solid black"><H3> ${req.body["Group training"]}</H3></div>
  </div>
        </div>
        </html>`;
      }



      if (["Sponsor TCG"] in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
        <div style="padding: 17px; display: flex;gap: 1rem;">
          <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">Hi...</h3></div>
        <div><h3>My name is ${req.body["name"]}</h3></div>
        <div><h3>From ${req.body["businessName"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["contactNumber"]}</h3></div>
<hr>
<div><h2 style="color:black">Applicant message</h2></div>
<div><H3>${req.body["Sponsor TCG"]}</H3></div>
        </div>
</div>
        </html>`;
      }



      if (["Sponsor a student"] in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
        <div style="padding: 17px; display: flex; gap: 1rem;">
                 <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div style="padding-top:1rem;"><h3 style="color:black;">Hi...</h3></div>
        <div><h3>My name is ${req.body["name"]}</h3></div>
        <div><h3>From ${req.body["businessName"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["contactNumber"]}</h3></div>
        <hr>
        <div><h2 style="color:black">Applicant message</h2></div>
        <div style="border:2px solid black"><H3>${req.body["Sponsor student"]}</H3></div>
        </div>
      </div>
        </html>`;
      }



      if (["The kind of support you’d like to offer (Optional)"] in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">

        <div style="padding: 17px; display: flex;gap: 1rem;">
          <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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
        <h2 style="color:black">EmailAddress: <a style="color:rgb(147, 147, 249)" href="#">${req.body["emailAddress"]}</a></h2>
        <div><h3>My name is ${req.body["name"]}</h3></div>
        <div><h3>From ${req.body["businessName"]}</h3></div>
        <div><h3>My business/contact number is ${req.body["contactNumber"]}</h3></div>
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
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">
        <div style="padding: 17px; display: flex;gap: 1rem;">
          <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
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
      <div><h3>My name is ${req.body["Name"]}</h3></div>
      <div><h3>From ${req.body["Business Name"]}</h3></div>
      <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
      <hr>
      <div><h2 style="color:black">Applicant message</h2></div>
      <div><h3> ${req.body["Give us an idea of what you’re looking for (Optional)"]}</H3></div>              
        </div>
      </div>
        </html>`;
      }



      if (["whatsappNumber"] in req.body) {
        return `<html>
        <div style="margin: auto; width:30%; border: 1px solid #2a7e5f;">
        <div style="background-color: #2a7e5f;">

        <div style="padding: 17px; display: flex; gap: 1rem;">
        <img style="width: 30%;" src="http://thecodingground.com/img/Logo-White.png" alt="Logo" />
          <p style="color:white; text-align: center; font-weight: bold; font-size: 1.5rem;">STUDENT APPLICATION</p>
        </div>
        <div>
        <p style="color:white; margin-left:2rem;">${today}</p>
        </div>
        </div>
        <div style="padding:1rem">
        <div><h3>&#128100; Full Name: ${req.body["fullName"]}</h3></div>
        <div><h3>&#128233; Email Address: <a style="color:black;" href=${req.body["emailAddress"]}>${req.body["Email Address"]}</a></h3></div>
        <div><h3>&#128222; Contact Number: ${req.body["contactNumber"]}</h3></div>
        <div><h3>&#128222; Whatsapp Number: ${req.body["whatsappNumber"]}</h3></div>
         <div><h3>&#128107; Gender: ${req.body["Gender"]}</h3></div>
         <div><h3>&#128198; Date Of Birth: ${req.body["dateOfBirth"]}</h3></div>
         <div><h3>&#127968; Physical Address: ${req.body["physicalAddress"]}</h3></div>
         <div><h3>&#127757; Province: ${req.body["province"]}</h3></div>
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
