// A ContactCollection component that loads existing contacts from a json-server API, and saves new ones.

const apiCalls = {
    getContact: function () {
        return fetch ("http://localhost:8088/contacts")
        .then(response => response.json())
    },
    postContact: function (object) {
        return fetch ("http://localhost:8088/contacts", {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
              "Content-Type": "application/json"
            }
        })
    }
}

export default apiCalls;