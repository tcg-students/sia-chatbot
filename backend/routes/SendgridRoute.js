const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendGridRoute = (app) => {
  app.post("/send_email", (req, res) => {
    console.log("req.body", req.body);
    const emailSendTO = "ramollosamuel2@gmail.com";
    const emailSendFrom = "sia.chatbot1@gmail.com";

    const getApplicantsDetails = _ => {
      if (
        "The kind of training or mentorship you’re able to offer (Optional)" in
        req.body
      ) {
        console.log("Mentorship or training")
        return `<strong> 
        <div style="width:70%; margin:auto; padding-top:20px; margin:auto; background-position: center ;background-repeat:no-repeat; background-image: url(http://thecodingground.com/img/Logo-White.png); background-color: #033333;height:45vh">
        <div style="width:50%; margin:auto;color:white; font-size: 2rem;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            <p style="text-align: center;"><u>Mentorship or training</u></p>
        </div>
       <div style="display:grid; grid-template-columns: auto auto;width:90%; margin:auto">
        <div>
            <div >
                <h2 style="color:white"><a style="color:red;" href="#">${req.body["Email Address"]}</a></h2>
           <h3 style="color:white;">Hi...</h3>
           </div>
           <div style="color:white;padding-top:5px">
           <div><h3>My name is ${req.body.Name}</h3></div>
           <div><h3>From ${req.body["Business Name"]}</h3></div>
           <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
        </div>
        
        
    </div>
    <div style="margin-left:20rem;">
            <div><h2 style="color:white">Applicant message</h2></div>
            <div><p style="color:white"> ${req.body["The kind of training or mentorship you’re able to offer (Optional)"]}</p></div>
    </div>
       </div>
       </div>
          </strong>`;
      } else if ("Add Message (Optional)" in req.body) {
        console.log("Funancial Support")

        return `<strong>
        <div style="width:70%; margin:auto; padding-top:20px; margin:auto; background-position: center ;background-repeat:no-repeat; background-image: url(http://thecodingground.com/img/Logo-White.png); background-color: #033333;height:45vh">
        <div style="width:50%; margin:auto;color:white; font-size: 2rem;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            <p style="text-align: center;"><u>Funancial Support</u></p>
        </div>
       <div style="display:grid; grid-template-columns: auto auto;width:90%; margin:auto">
        <div>
            <div >
                <h2 style="color:white"><a style="color:red;" href="#">${req.body["Email Address"]}</a></h2>
           <h3 style="color:white;">Hi...</h3>
           </div>
           <div style="color:white;padding-top:5px">
           <div><h3>My name is ${req.body.Name}</h3></div>
           <div><h3>From ${req.body["Business Name"]}</h3></div>
           <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
        </div>
        
        
    </div>
    <div style="margin-left:20rem;">
            <div><h2 style="color:white">Applicant message</h2></div>
            <div><p style="color:white"> ${req.body["Add Message (Optional)"]}</p></div>
    </div>
       </div>
       </div>
        </strong>`;
      } else if (
        "The kind of support you’d like to offer (Optional)" in req.body
      ) {
        console.log("Other")

        return `<strong>
          <div style="width:70%; margin:auto; padding-top:20px; margin:auto; background-position: center ;background-repeat:no-repeat; background-image: url(http://thecodingground.com/img/Logo-White.png); background-color: #033333;height:45vh">
            <div style="width:50%; margin:auto;color:white; font-size: 2rem;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                <p style="text-align: center;"><u>Other</u></p>
            </div>
           <div style="display:grid; grid-template-columns: auto auto;width:90%; margin:auto">
            <!-- ////// -->
            <div>
                <div >
                    <h2 style="color:white"><a style="color:red;" href="#">${req.body["Email Address"]}</a></h2>
               <h3 style="color:white;">Hi...</h3>
               </div>
               <div style="color:white;padding-top:5px">
               <div><h3>My name is ${req.body.Name}</h3></div>
               <div><h3>From ${req.body["Business Name"]}</h3></div>
               <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
            </div>
        </div>
        <div style="margin-left:20rem;">
                <div><h2 style="color:white">Applicant message</h2></div>
                <div><p style="color:white"> ${req.body["The kind of support you’d like to offer (Optional)"]}</p></div>
        </div>
           </div>
           </div>
          </strong>`;
      } else if (
        "Give us an idea of what you’re looking for (Optional)" in req.body
      ) {
        console.log("I’d like to place TCG interns")

        return `<strong> 
              <div style="width:70%; margin:auto; padding-top:20px; margin:auto; background-position: center ;background-repeat:no-repeat; background-image: url(http://thecodingground.com/img/Logo-White.png); background-color: #033333;height:45vh">
                <div style="width:50%; margin:auto;color:white; font-size: 2rem;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                    <p style="text-align: center;"><u>I’d like to place TCG interns.</u></p>
                </div>
               <div style="display:grid; grid-template-columns: auto auto;width:90%; margin:auto">
                <div>
                    <div >
                        <h2 style="color:white"><a style="color:red;" href="#">${req.body["Email Address"]}</a></h2>
                   <h3 style="color:white;">Hi...</h3>
                   </div>
                   <div style="color:white;padding-top:5px">
                   <div><h3>My name is ${req.body.Name}</h3></div>
                   <div><h3>From ${req.body["Business Name"]}</h3></div>
                   <div><h3>My business/contact number is ${req.body["Contact Number"]}</h3></div>
                </div>
            </div>
            <div style="margin-left:20rem;">
                    <div><h2 style="color:white">Applicant message</h2></div>
                    <div><p style="color:white"> ${req.body["Give us an idea of what you’re looking for (Optional)"]}</p></div>
            </div>
               </div>
               </div>
              
              </strong>`;
      } else if (
        ("Whatsapp Number" ||
        "Date Of Birth") in req.body
      ) {
        console.log('student Application')
        return `<strong>
          <div style="display:grid; grid-template-columns: 50% 50%; margin:auto;width:60%; padding-top:20px; margin:auto; background-color: #033333;height:45vh">
                    <div style="background-position:left ;background-repeat:no-repeat;color:white; font-size: 2rem;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                       <div> <p style="text-align: center;"><u>Student Application.</u></p></div>
                       <div><img style="margin-left:8.7rem; height: 33vh;" src="http://thecodingground.com/img/Logo-White.png" alt=""/></div>
                    </div>
                    <div>
                        <div >
                            <h2 style="color:white"><a style="color:red;" href="#">${req.body["Email Address"]}</a></h2>
                       <h3 style="color:white;">Hi...</h3>
                       </div>

                        <div style="color:white;padding-top:5px">
                        <div><h3>${req.body["Full Name"]}</h3></div>
                        <div><h3>${req.body["Contact Number"]}</h3></div>
                        <div><h3>${req.body["Whatsapp Number"]}</h3></div>
                        <div><h3>${req.body["Gender"]}</h3></div>
                        <div><h3>${req.body["Date Of Birth"]}</h3></div>
                        <div><h3>${req.body["Physical Address"]}</h3></div>
                        <div><h3>${req.body.Province}</h3></div>
                     </div>


                    </div>
                </div>
          </strong>`;
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
