const axios = require('axios');
const cheerio = require('cheerio');


var click1 =data =>{
  //document.querySelector(data).click();
  const $ = cheerio.load(data);
  const next_url=$("body > main > section.section-main.search-results.search-listing-result > div > div > div.search-results__count > div.d-flex.align-items-end.search-results__status > div.btn-carousel.hide-not-dekstop > a").attr('href');
  //document.querySelector(data).click();
  return {next_url}
};

const click_restaurant=data =>{
  const $ = cheerio.load(data);
  const url_restaurant=$('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a').attr('href');
  return{url_restaurant}
};

const get_restaurants_page=data =>{
  const $ = cheerio.load(data);
  const main_page=$('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation')
  // starting with this we could acces all the restaurants stored in it, in "body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(4) > div" with the index going from 1 to 20

  var i;
  for (i = 1; i < 21; i++) {
    //get the restaurant corresponding to the right index;
} 

};


/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const clickbutton="body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a"

  //click1(clickbutton)
  const $ = cheerio.load(data);
  const name = $('.section-main h2.restaurant-details__heading--title').text();
  const experience = $('#experience-section > ul > li:nth-child(2)').text();
  const phone = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section:nth-child(3) > div.row > div:nth-child(1) > div > div:nth-child(1) > div > div > a').attr('href');
  const address = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li:nth-child(1)').text();
  const price_and_type =$('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__heading.d-none.d-lg-block > ul > li.restaurant-details__heading-price').text();
  const review =$('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__description > div.restaurant-details__description--text.js-show-description').text();
  //var result_price = price_and_type.filter(text => text="\n"); // removing the \n
  
  return {name, experience, address, phone, price_and_type, review};
};



/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};
