// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

import apiManager from "./apiManager"
import contact from "./contact"

const listAllContact = {
    listAll: function () {
        apiManager.getContact()
        .then(response => response.forEach(entry => {
            contact.display(entry.name, entry.number, entry.address)
        }))
    }
}

export default listAllContact

// contact.display(entry.name, entry.number, entry.address)