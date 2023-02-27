import axios from "axios";

export function getAnimals(){
    // Create request object
    axios.get("https://animals.azurewebsites.net/api/animals")
    
    // Send request
    .then(function (response){
        console.log(response.data);
    });

}