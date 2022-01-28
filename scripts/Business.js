// import { getBusinesses } from "./database.js"

// const businesses = getBusinesses()

export const businessInfo = ( businessObject) => {
    return `
        <section class="businesses">
            <h2 class="company-name">${businessObject.companyName}</h2>
            <div class="company-address">
                ${businessObject.addressFullStreet}
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
        </section>
    `
}

