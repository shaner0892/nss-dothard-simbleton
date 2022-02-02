import { businessInfo, pAInfo } from "./Business.js";
import { getBusinesses, nyBusinesses, manufacturingBusiness, getPurchasingAgents } from "./database.js";

//"document" indicates you want the index.html, .querySelector is a method to assign where you want you list of business to go to a variable
const contentTarget = document.querySelector("#businesses")
const nyTarget = document.querySelector(".businessList--newYork")
const manufacturingTarget = document.querySelector(".businessList--manufacturing")
const pATarget = document.querySelector(".agents")

//defining and exporting a function, no parameters
export const businessList = () => {
    //invoking the imported function and assigning the array of businesses to a variable
    const businessArray = getBusinesses()
    //using the above variable to print your business list in the innerHTML
    contentTarget.innerHTML += "<h1>Active Businesses</h1>"
    //this forEach function iterates through the business array and for each business it adds the business name to the list
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessInfo(businessObject)
        }
    );
}

//defines a function
export const nyBusinessList = () => {
    //defines an array that invokes the function that filtered and found NY companies
    const nyBusinessesArray = nyBusinesses()
    //using the location designated above to add a title to the innerHTML
    nyTarget.innerHTML += "<h1>New York Businesses</h1>"
    //forEach method that goes through the array above and prints the businessInfo for each one
    nyBusinessesArray.forEach(
        (businessObject) => {
            nyTarget.innerHTML += businessInfo(businessObject)
        } )
}

export const manufacturingBusinessList = () => {
    const manufacturingBusinessArray = manufacturingBusiness()
    manufacturingTarget.innerHTML += "<h1>Manufacturing Businesses</h1>"
    manufacturingBusinessArray.forEach(
        (businessObject) => {
            manufacturingTarget.innerHTML += businessInfo(businessObject)
        } )
}

export const pAList = () => {
    const purchasingAgentsArray = getPurchasingAgents()
    pATarget.innerHTML += "<h1>Purchasing Agents</h1>"
    purchasingAgentsArray.forEach(
        (pAObject) => {
            pATarget.innerHTML += pAInfo(pAObject)
        } )
}