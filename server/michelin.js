const axios = require('axios');
const cheerio = require('cheerio');
var querystring = require('querystring');
/*
var click1 =data =>{
  //document.querySelector(data).click();
  const $ = cheerio.load(data);
  const next_url=$("body > main > section.section-main.search-results.search-listing-result > div > div > div.search-results__count > div.d-flex.align-items-end.search-results__status > div.btn-carousel.hide-not-dekstop > a").attr('href');
  //document.querySelector(data).click();
  return {next_url}
};
*/

/*
const click_restaurant=data =>{
  const $ = cheerio.load(data);
  const url_restaurant=$('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a').attr('href');
  return{url_restaurant}
}
*/

/*
const get_restaurants_page=data =>{
  const $ = cheerio.load(data);
  const main_page=$('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation')
  // starting with this we could access all the restaurants stored in it, in "body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(4) > div" with the index going from 1 to 20

  var i;
  const urllist_restaurants=[];
  for (i = 0; i < 20; i++) {
    $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation')
    'body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div'
    var url_restaurant_index= a;
    var index_str= i.toString(10)
    console.log(index_str)
    var new_data=SelectWhereDataId( "card__menu js-match-height js-map", index_str)
    where ('data-index'==index_str)

    //get the restaurant corresponding to the right index;
    } 
};
*/

/*
function selectWhere(data, propertyName) {
  for (var i = 0; i < data.length; i++) {
      if (data[i][propertyName] !== null) return data[i][propertyName];
  }
  return null;
}
// from https://stackoverflow.com/questions/6959530/best-way-of-basically-doing-a-where-clause-in-javascript
*/

/*
function SelectWhereDataId(data, IDwewant) {
  for (var i = 0; i < data.length; i++) {
      if (data[i].id == IDwewant) return data[i];
  }
  console.log("null returned")
  return null;
}
*/

/*
var max_page=5
var page=1
var url_page="/fr/fr/restaurants/bib-gourmand/"
function url_per_page(max_page){

  var page=1
  total_list=[]
  while (page<max_page){
    console.log("--- new page ---")
    var url_page=`https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/${page}`

    parseTest(url_page) //printing all url of restaurants for one page
    page=page+1
  }
  return total_list;
}
*/

/*
const Url_per_page = async data => {
  var page=1
  total_list=[]
  while (page<data){
    console.log("--- new page ---")
    var url_page=`https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/${page}`

    parseTest(url_page) //printing all url of restaurants for one page
    page=page+1
  }
  return total_list;
}


*/  

var list_url_tot=[]
const parseTest = async data => {
  var $ = cheerio.load(data);
  //console.log("data : ", data)

  //var page=1
  //while (page<5){
    //console.log("--- new page ---_______________________________________________________________________________________________")

    //var list_url=[]
    for (i = 1; i < 22; i++) {
      if (i != 9)
      { // because 9 is the "subscribe" link
        //console.log("----------------------------------------------------------------")
        var index_str= i.toString(10)
        //console.log(index_str)
        var url_restaurant = $(`body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(${index_str}) > div > a`).attr('href');
        //console.log("url : ", url_restaurant)
        url_restaurant=`https://guide.michelin.com${url_restaurant}`
        
        //list_url.push(url_restaurant)
        list_url_tot.push(url_restaurant)
        //console.log(url_restaurant)
        this.scrapeRestaurant(url_restaurant)
        //console.log("test scrape restaurant : ", this.scrapeRestaurant(url_restaurant))
        //console.log("parse url restau : ", parse(url_restaurant))

        //const restaurant = await this.scrapeRestaurant(url_restaurant);
        //console.log(url_restaurant)
        //console.log(restaurant);
      }

      /*
      if (i==21)
      {
        console.log ("PAGE : ", page+1)
        
        page=page+1
        page=page.toString(10)
        url=`https://guide.michelin.com/fr/fr/ile-de-france/restaurants/bib-gourmand/page/${page}`
        
        const response1 = await axios(url);
        //console.log(response1)
        const {data1, status} = response1;

        //console.log(data1)
        
        if (data1) {
          var $ = cheerio.load(data1);
          console.log("ok")
        } else {
          console.log("pas ok !")
        }

      }*/
    }
    //get the restaurant corresponding to the right index;
  //} 


  /*
  index_str="6"
  const url1 = $(`body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(${index_str}) > div > a`).attr('href');
  const url = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a').attr('href');
  const namerest = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a').attr('aria-label');
  const type = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--price').text();
  */
  return {list_url_tot/*url_restaurant, namerest, type, url1, phone, price_and_type, review*/};
};
/*

module.exports.boucle_restaurants= async url => {
  console.log("entering boucle_restaus")
  var page=1
  //var list_url=[];
  var string_json=""
  while (page<14){
    console.log("--- new page ---", page)
    var url_page=`https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/${page}`

    const response = await axios(url_page);
    const {data, status} = response;

    if (status >= 200 && status < 300) {
      page=page+1

      
      for (i = 1; i < 22; i++) {
        if (i != 9)
        { // because 9 is the "subscribe" link
          console.log("----------------------------------------------------------------")
          var index_str= i.toString(10)
          console.log(index_str)
          var url_restaurant = $(`body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(${index_str}) > div > a`).attr('href');
          url_restaurant=`https://guide.michelin.com${url_restaurant}`
          //list_url.push(url_restaurant)


          console.log("test scrape restaurant boucle: ", this.scrapeRestaurant(url_restaurant))

          //const restaurant = await this.scrapeRestaurant(url_restaurant);
          //console.log(url_restaurant)
          //console.log(restaurant);
        }
      console.log(parseTest(data));

    }}

  else{
      return null;
  }
  
  console.log("lise url : ", list_url)
  const response1 = await axios(options);

}*/

module.exports.scrapeRestaurant_test = async url => {
  console.log("scraperestauranttest: ")
  
  //var max_page=$(`body > main > section.section-main.search-results.search-listing-result > div > div > div.search-results__count > div.d-flex.align-items-end.search-results__status.box-placeholder > div.flex-fill.js-restaurant__stats > h1 > span`).text();
  // voir [1].split parseFloat.split
  //console.log (max_page)
  
  var page=1
  total_list=[]
  while (page<14){
    console.log("--- new page ---", page)
    var url_page=`https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/${page}`

    const response = await axios(url_page);
    const {data, status} = response;

    if (status >= 200 && status < 300) {
      page=page+1
      console.log(parseTest(data));
      //return(parseTest(data));
      //console.log("parse: ", parse(data))
      //console.log("parsetest: ", parseTest(data))
      //console.log(scrapeRestaurant(data))
      //return parse(data)
      //parseTest(url_page) //printing all url of restaurants for one page
      //page=page+1
    }

    else{
      return null;
    }
  }
  const response = await axios(options);

/*
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parseTest(data);
  }*/
  console.error(status);
  return null;
};

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  //console.log("parse: ")
  //console.log("url: ", data.dlayer)
  //console.log("infos : ")
  //const clickbutton="body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a"
  //click1(clickbutton)
  const $ = cheerio.load(data);
  const name1 = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > h2').text();
  const name = $('.section-main h2.restaurant-details__heading--title').text();
  const experience = $('#experience-section > ul > li:nth-child(2)').text();
  const phone = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section:nth-child(3) > div.row > div:nth-child(1) > div > div:nth-child(1) > div > div > a').attr('href');
  const address = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li:nth-child(1)').text();
  const price_and_type =$('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__heading.d-none.d-lg-block > ul > li.restaurant-details__heading-price').text();
  const review =$('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__description > div.restaurant-details__description--text.js-show-description').text();
  //var result_price = price_and_type.filter(text => text="\n"); // removing the \n
  //console.log("parse fct : ", name, address)
  return { name,  address, phone, /*experience,phone, price_and_type, review*/};
};



/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  //console.log("scraperestaurant: ")
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    console.log(parse(data))
    return parse(data);
  }
  console.error(status);
  return null;
};

const scrapeRestaurant = async url => {
  console.log("scraperestaurant: ")
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    console.log(parse(data))
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

//--------------------------------------------------------------------------------------------------























