//defines a function that returns the business name and address in html format
export const businessInfo = ( businessObject ) => {
    return `
        <section class="businesses">
            <h2 class="company-name">${businessObject.companyName}</h2>
            <div class="company-address">
                ${businessObject.addressFullStreet} <br>
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
        </section>
    `
}


export const pAInfo = ( pAObject ) => {
    return `
        <section class="agent">
            <h2 class="agent-name">${pAObject.fullName}</h2>
            <h3 class="agent-info">${pAObject.company}</h3>
            <h3 class="agent-info">${pAObject.phoneNumber}</h3>
        </section>
    `
}
