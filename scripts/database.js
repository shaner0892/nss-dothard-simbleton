//array of businesses with objects and key/value pairs
const businesses = [
    {
      purchasingAgent: {
        nameLast: "Kirlin",
        nameFirst: "Kristy",
      },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard",
    },
    {
      purchasingAgent: {
        nameLast: "Steuber",
        nameFirst: "Kamron",
      },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere",
    },
    {
      purchasingAgent: {
        nameLast: "Gutkowski",
        nameFirst: "Kaylee",
      },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee",
    },
    {
      purchasingAgent: {
        nameLast: "Crona",
        nameFirst: "Lauren",
      },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval",
    },
    {
      purchasingAgent: {
        nameLast: "Krajcik",
        nameFirst: "Elvera",
      },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport",
    },
    {
      purchasingAgent: {
        nameLast: "Kling",
        nameFirst: "Ellie",
      },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George",
    },
    {
      purchasingAgent: {
        nameLast: "Robel",
        nameFirst: "Otilia",
      },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper",
    },
    {
      purchasingAgent: {
        nameLast: "Gusikowski",
        nameFirst: "Karolann",
      },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base",
    },
    {
      purchasingAgent: {
        nameLast: "Hartmann",
        nameFirst: "Zena",
      },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville",
    },
    {
      purchasingAgent: {
        nameLast: "Torphy",
        nameFirst: "Celia",
      },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous",
    }
]

//creates a copy/map of the businesses array and exports it
export const getBusinesses = () => {
    return businesses.map(business => ({...business}))
    }

//function that finds all the businesses in NY
const nyCompanies = (business) => {
    if (business.addressStateCode === "NY") {
        return true
    } 
    return false
}

//creates a new array that contains NY companies using .filter method
export const nyBusinesses = () => {
    const nyArray = businesses.filter( nyCompanies )
    return nyArray
}

// //attempting my own .filter, it works and would replace the above two functions, this just uses an anonymous function instead of defining one
// export const myNYcomps = businesses.filter(business => business.addressStateCode === "NY");

//function that finds all the businesses in manufacturing
const manufacturingCompanies = (business) => {
    if (business.companyIndustry === "Manufacturing") {
      return true
    }
}

//export a new array that contains the manufacturing companies using the .filter method
export const manufacturingBusiness = () => {
    const manufacturingArray = businesses.filter( manufacturingCompanies )
    return manufacturingArray
}

// //my own attempt at the shorter method using an anonymous function
// export const myManufacturingCompanies = businesses.filter(businesses => business.companyIndustry === "Manufacturing");

//creates a new array of the purchasing agents only
export const getPurchasingAgents = () => {
  const onlyPAs = businesses.map(business => {
    //creates a new object pulling only certain information from the businesses array
    let pAObject = {
      fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
      company: business.companyName,
      phoneNumber: business.phoneWork
    }
    return pAObject
  })
  return onlyPAs
}