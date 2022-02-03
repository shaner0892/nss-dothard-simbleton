import { businessInfo, pAInfo } from "./Business.js";
import { getBusinesses, nyBusinesses, manufacturingBusiness, getPurchasingAgents } from "./database.js";

//"document" indicates you want the index.html, .querySelector is a method to assign where you want you list of business to go to a variable
const contentTarget = document.querySelector("#businesses")
const nyTarget = document.querySelector(".businessList--newYork")
const manufacturingTarget = document.querySelector(".businessList--manufacturing")
const pATarget = document.querySelector(".agents")


const businessArray = getBusinesses()



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
//designating where you will put the company search results
const companySearchResults = document.querySelector(".foundCompanies")

document
    //selects the string that is input into the search bar?
    .querySelector("#companySearch")
        //adds an event listener for a key press
        .addEventListener(
            "keypress",
            //defines a function for what to do when the key press event happens
            keyPressEvent => {
                //.charCode points to a specific event according to the #, 13 is keyEnter
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                   
                    const searchValue = document.querySelector("#companySearch").value
                
                    //use the .find method to search the business array that matches the search
                    const foundBusiness = businessArray.find(business => {
                        return business.companyName.includes(searchValue)
                    })
                    //adding the results to the inner HTML
                    companySearchResults.innerHTML = businessInfo(foundBusiness) 
                }
            }
        )



// my attempt
// const searchFor = document.getElementById("companySearch").value

// //create a function using the .find() method that finds a matching company to the one searched
// export const findSearchedCompany = () => {
//   const matchingCompany = businesses.find(business => searchFor === business.companyName)

//   return matchingCompany
// }

// document.addEventListener("keypress",
//   (logKey) => {
//       const itemClicked = clickEvent.target
//   }
// )