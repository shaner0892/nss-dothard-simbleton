//import functions
import { businessList } from "./BusinessList.js"
import { nyBusinesses } from "./database.js"

businessList()

const mainContainer = document.querySelector(".businessList--newYork")
const applicationHTML = `
<h1>New York Companies</h1>
${nyBusinesses}
`
mainContainer.innerHTML = applicationHTML