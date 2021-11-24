import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Sitemate!</h1>
  <button id="clickme">Click Me! </button>
`

let clickMeButton=document.getElementById("clickme")
clickMeButton.addEventListener("click",()=>onClickButton("Hola"))

export function onClickButton(message){
    
    let app=document.querySelector("#app")

    let dialogDiv=document.createElement("div")
    
    let messageOnDiv=document.createElement("p")
    
    messageOnDiv.innerHTML=message
    
    dialogDiv.append(messageOnDiv)
    
    let acceptButton=document.createElement("button")
    acceptButton.innerHTML="Yes"

    acceptButton.addEventListener("click",()=>{
      app.removeChild(dialogDiv)
      let acceptMessage=document.createElement("p")
      acceptMessage.innerHTML="You just clicked Yes"
      app.append(acceptMessage)
    })

    let denyButton=document.createElement("button")
    denyButton.innerHTML="Cancel"
    
    denyButton.addEventListener("click",()=>{
      app.removeChild(dialogDiv)
      let denyMessage=document.createElement("p")
      denyMessage.innerHTML="You just clicked 'Cancel'"
      app.append(denyMessage)
    })
    
    dialogDiv.append(acceptButton)
    dialogDiv.append(denyButton)

    app.append(dialogDiv)
    
  }