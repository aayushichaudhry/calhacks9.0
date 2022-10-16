const box = document.querySelector(".box");
let checkedPreferance = [];
let apiDict = { type: "lease" };
let apiDictValues = [];

box.addEventListener("click", () => {
  /** Price */
  let lessThan2000 = document.getElementById("less-than-2000");
  let from2000_2500 = document.getElementById("2000-2500");
  let from2500_3000 = document.getElementById("2500-3000");
  let from3000_3500 = document.getElementById("3000-3500");
  let from3500_4000 = document.getElementById("3500-4000");

  /** Bed and Bath */
  let bed1bath1 = document.getElementById("1bed1bath");
  let bed2bath1 = document.getElementById("2bed1bath");
  let bed2bath2 = document.getElementById("2bed2bath");
  let bed3bath1 = document.getElementById("3bed1bath");
  let bed3bath2 = document.getElementById("3bed2bath");

  /** Apartment type */
  let apartment = document.getElementById("apartment");
  let condo = document.getElementById("condo");
  let townhouse = document.getElementById("townhouse");
  let studio = document.getElementById("studio");

  /** Leasing Period */
  let yearly = document.getElementById("yearly");
  let halfYear = document.getElementById("halfYear");
  let quarterly = document.getElementById("quarterly");
  let monthly = document.getElementById("monthly");

  /** Safety rating */
  let sr1 = document.getElementById("sr1");
  let sr2 = document.getElementById("sr2");
  let sr3 = document.getElementById("sr3");
  let sr4 = document.getElementById("sr4");
  let sr5 = document.getElementById("sr5");

  /** Amenities */
  let wheelchair = document.getElementById("wheelchair");
  let pool = document.getElementById("pool");
  let laundry = document.getElementById("laundry");
  let elevator = document.getElementById("elevator");
  let gym = document.getElementById("gym");
  let parking = document.getElementById("parking");

  /** Furnished */
  let furnished = document.getElementById("furnished");
  let notFurnished = document.getElementById("not-furnished");

  let apiPreferance = [
    "maxPrice",
    "minPrice",
    "maxBeds",
    "maxBaths",
    "propertyType",
    "amenities",
  ];

  for (const category in checkedPreferance) {
    for (const propery in category) {
      if (property == lessThan2000) {
        apiDict[""];
        apiDictValues.push([2000, 2000]);
      } else if (property == from2000_2500) {
        apiDictValues.push([2500, 2000]);
      } else if (property == from2500_3000) {
        apiDictValues.push([3000, 2500]);
      }
    }
  }

  for (const category in apiPreferance) {
    if (lessThan2000) {
    }
  }

  let perferanceName = [
    [lessThan2000, from2000_2500, from2500_3000, from3000_3500, from3500_4000],
    [bed1bath1, bed2bath1, bed2bath2, bed3bath1, bed3bath2],
    [apartment, condo, townhouse, studio],
    [wheelchair, pool, laundry, elevator, gym, parking],
  ];

  for (const category in perferanceName) {
    const newLst = [];
    for (const property in category) {
      let checked = property.checked;
      if (checked == true) {
        newLst.push(property);
      }
    }
    checkedPreferance.push(newLst);
  }

  /**
   * go through the list of DOM elements from above, and for each DOM element within,
   * with the .item class, you should use the .checked property of each checkbox to see
   * if to the item was checked (preferred)
   */
});

/**
 * set up api call -- not necessarily in this file
 *
 * API documentation = "https://docs.repliers.io/reference/getting-started-with-your-api"
 *
 * PUT ALL THE BELOW IN AN ASYNC FUNCTION
 *
 * const res = await fetch("https://sandbox.repliers.io/listings", {
 *      method: "GET",
 *      headers: {
 *          "REPLIERS_API_KEY": "WCbab8W5bQrOA0ptUYWfXaYtst36bt",
 *          "Content-Type": "application/json"
 *      },
 *      body: JSON.stringify({
 *          maxPrice: 200000,
 *          minBeds: 2,
 *          maxBeds: 3
 *      })
 * })
 *
 * return res.json()
 *
 *
 *
 */
