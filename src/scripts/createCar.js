/*
    Author: your name here
    Name: createCar.js
    Purpose: Produces a new car object
*/
const CarFactory = (make, model) => {
    const newCar = {
        "make": make,
        "model": model
    }

    return newCar
}

export default CarFactory