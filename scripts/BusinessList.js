import { businessInfo } from "./Business.js";
import { getBusinesses } from "./database.js";

//"document" indicates you want the index.html, .querySelector is a methto assign where you want you list of business to go to a variable
const contentTarget = document.querySelector("#businesses")

//defining and exporting a function, no parameters
export const businessList = () => {
    //invoking the imported function and assigning the array of businesses to a variable
    const businessArray = getBusinesses()
    //using the above variable to print your business list in the innerHTML
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    //this forEach function iterates through the business array and for each business it adds the business name to the list
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessInfo(businessObject)
        }
    );
}