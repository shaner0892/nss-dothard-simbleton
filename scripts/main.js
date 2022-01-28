//import functions

import { businessInfo } from "./Business.js"



const mainContainer = document.querySelector(".container")

const applicationHTML = `
    <h1>Active Businesses</h1>
    <article id="businesses">
        ${businessInfo()}
    </article>
    `
mainContainer.innerHTML = applicationHTML

// const applicationHTML = `
// <h1>Active Businesses</h1>
// <article id="businesses">
//     <section class="detail--column list details__cities">
//         <h2>Cities with Service</h2>
//         ${CityList()}
//     </section>
//     <section class="detail--column list details__cities">
//         <h2>Walkers</h2>
//         ${Walkers()}
//     </section>
//     <section class="detail--column list details__cities">
//         <h2>Pets</h2>
//         ${RegisteredPets()}
//     </section>
// </article>

// <article class="assignments">
//     <h2>Current Assignments</h2>
//     ${Assignments()}
// </article>
// `