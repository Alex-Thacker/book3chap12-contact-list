// A ContactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component.

import apiManager from "./apiManager"

let container = document.querySelector("#display-container")

// const handleData = () => {
//     const nameValue = document.querySelector("#nameForm").value
//     console.log(nameValue)
//     // apiManager.postContact(nameValue)
// }

// const createForm = () => {
//     let nameForm = document.createElement("input")
//     nameForm.id = nameForm
//     nameForm.placeholder = "Name"
//     container.appendChild(nameForm)

//     let numberForm = document.createElement("input")
//     numberForm.id = numberForm
//     numberForm.placeholder = "Number"
//     container.appendChild(numberForm)

//     let addressForm = document.createElement("input")
//     addressForm.id = addressForm
//     addressForm.placeholder = "Address"
//     container.appendChild(addressForm)

//     let saveButton = document.createElement("button")
//     saveButton.id = saveButton
//     saveButton.textContent = "Save"
//     container.appendChild(saveButton)

//     saveButton.addEventListener("click", handleData)
// }


const handleForm = {
    createForm: function () {
        let form = document.createElement("form")
        let fieldset = document.createElement("fieldset")
        let nameForm = document.createElement("input")
        nameForm.id = "nameForm"
        nameForm.placeholder = "Name"
        fieldset.appendChild(nameForm)
    
        let numberForm = document.createElement("input")
        numberForm.id = "numberForm"
        numberForm.placeholder = "Number"
        fieldset.appendChild(numberForm)
    
        let addressForm = document.createElement("input")
        addressForm.id = "addressForm"
        addressForm.placeholder = "Address"
        fieldset.appendChild(addressForm)
    
        let saveButton = document.createElement("button")
        saveButton.id = "saveButton"
        saveButton.textContent = "Save"
        saveButton.type = "submit"
        fieldset.appendChild(saveButton)

        form.appendChild(fieldset)
        container.appendChild(form)
    
        saveButton.addEventListener("click", this.handleData)
    },
    handleData: function () {
        const nameValue = document.querySelector("#nameForm").value
        const numberValue = document.querySelector("#numberForm").value
        const addressValue = document.querySelector("#addressForm").value

        const contactObject = {
            "name": nameValue,
            "number": numberValue,
            "address": addressValue
        }

        apiManager.postContact(contactObject)
    }

}

export default handleForm