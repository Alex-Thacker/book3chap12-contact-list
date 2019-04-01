// A Contact component that displays a person's name, phone number, and address.
import contactForm from "./contactForm"

let container = document.querySelector("#display-container")


const createElement = (elementName, text) => {
    let htmlElement = document.createElement(elementName)
    htmlElement.textContent = text
    return htmlElement
}






const displayContact = {
    display: function (name, number, address) {
        container.appendChild(createElement("h1", name))
        container.appendChild(createElement("p", number))
        container.appendChild(createElement("p", address))
    }
}



export default displayContact