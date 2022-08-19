window.onload = loadContactMe;

function loadContactMe() {
    let style = `background-color: white; border:4px solid white; border-radius: 4px; color:black; position:absolute; top:40px; right:40px; z-index:1;`;
    var clickMeButton = document.createElement('button');
    clickMeButton.id = 'sia-the-bot';
    clickMeButton.innerHTML = 'Sia-Chatbot';
    clickMeButton.style= style;
    clickMeButton.setAttribute("onclick","toggleBot()")
    var body =  document.body.appendChild(clickMeButton);
}

function toggleBot(){
    let style = `
    border:4px solid #ccc;
    border-radius: 4px;
    color:black;
    background: white;
    min-width: 375px;
    max-width: 667px;
    position:relative;
    bottom:10px;
    right:40px;
    z-index:1;`;
    var botContainer = document.createElement('div');
    botContainer.id = 'sia-chatbot-container';
    botContainer.style= style;
    var body =  document.body.appendChild(botContainer);
    var botScript = document.createElement('script'); 
    botScript.setAttribute("src","http://localhost:4000/bot-box/main")
    var botCssScript = document.createElement('link'); 
    botCssScript.setAttribute("href","http://localhost:4000/bot-box/css")
    botCssScript.setAttribute("rel","stylesheet")
    var head =  document.head.appendChild(botScript);
    var head =  document.head.appendChild(botCssScript);
}
