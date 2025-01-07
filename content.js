/**
 * Calculates the capitalization rate (CAP rate) for a property.
 * 
 * @param {number} listedPrice - The listed price of the property.
 * @param {number} rentalEstimate - The estimated monthly rental income.
 * @param {number} propertyTax - The annual property tax.
 * @param {number} hoa - The monthly HOA fees.
 * @param {number} insurance - The annual home insurance cost.
 * @param {number} utilities - The monthly utilities cost.
 * @param {number} taxRate - The tax rate.
 * @returns {string} The CAP rate as a percentage string.
 */
function calculateCapRate(listedPrice, rentalEstimate, propertyTax, hoa, insurance, utilities, taxRate) {
    let annualIncome = rentalEstimate * 12;
    let annualExpenses = propertyTax + (hoa * 12) + insurance + (utilities * 12);
    let netOperatingIncome = annualIncome - annualExpenses;
    let capRate = (netOperatingIncome / listedPrice) * 100;
    return capRate.toFixed(2) + '%';

  }
    /**
 * Extracts property data from a Redfin listing and calculates the CAP Rate.
 * Prompts the user for rental estimate, property tax, HOA fees, and insurance.
 * Assumes utilities as 20% of the annual rental estimate.
 * Logs and alerts the calculated CAP Rate.
 */
  function extractZillowData() {
    let listedPrice = parseFloat(document.querySelector('[data-testid="price"]').innerText.replace(/[$,]/g, ''));
    
    
    console.log('Listed Price is:', listedPrice);
    let propertyTaxElem = document.querySelector('[data-testid="taxAssessedValue"]');
    
    
    let rentalEstimate = parseFloat(prompt("Enter the rental estimate (monthly):"));
    let propertyTax = parseFloat(prompt("Enter the property tax (annual):"));
    let hoa = parseFloat(prompt("Enter the HOA fees (monthly):"));
    let insurance = parseFloat(prompt("Enter the home insurance (annual):"));
    let utilities = parseFloat(prompt("Enter the landlord responsible utilities amount(monthly):"));
    let taxRate = 0.34;
  
    let capRate = calculateCapRate(listedPrice, rentalEstimate, propertyTax, hoa, insurance, utilities, taxRate);
    console.log('CAP Rate:', capRate);
    alert(`CAP Rate: ${capRate}`);
  }
  /**
 * Extracts property data from a Redfin listing and calculates the CAP Rate.
 * Prompts the user for rental estimate, property tax, HOA fees, and insurance.
 * Assumes utilities as 20% of the annual rental estimate.
 * Logs and alerts the calculated CAP Rate.
 */
  // function extractRedfinData() {
  //   let listedPrice = parseFloat(document.querySelector('.homecardV2Price').innerText.replace(/[$,]/g, ''));
  //   let rentalEstimate = parseFloat(prompt("Enter the rental estimate (monthly):"));
  //   let propertyTax = parseFloat(prompt("Enter the property tax (annual):"));
  //   let hoa = parseFloat(prompt("Enter the HOA fees (monthly):"));
  //   let insurance = parseFloat(prompt("Enter the home insurance (annual):"));
  //   let utilities = parseFloat(prompt("Enter the landlord responsible utilities amount(monthly):"));
  //   let taxRate = 0.34;
  
  //   let capRate = calculateCapRate(listedPrice, rentalEstimate, propertyTax, hoa, insurance, utilities, taxRate);
  //   console.log('CAP Rate:', capRate);
  //   alert(`CAP Rate: ${capRate}`);
  // }
  
  if (window.location.hostname.includes("zillow.com")) {
    extractZillowData();
  } 
  // else if (window.location.hostname.includes("redfin.com")) {
  //   extractRedfinData();
  // }
  