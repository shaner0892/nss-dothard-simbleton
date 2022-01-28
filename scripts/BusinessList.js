import { getBusinesses } from "./database.js";

const contentTarget = document.querySelector(".businesses")

const businessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Business List</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += business(businessObject)
        }
    );
}