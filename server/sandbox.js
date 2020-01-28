/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const url_liste_restaurants='https://guide.michelin.com/fr/fr/ile-de-france/restaurants/bib-gourmand';
const url_restaurant_lacroixblanche='https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche';
//const clickbutton="body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a"


async function sandbox (searchLink = url_restaurant_lacroixblanche /* click_restaurant()*/) {
  try {
    
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);
    const test_restaus= await michelin.scrapeRestaurant_test('https://guide.michelin.com/fr/fr/ile-de-france/restaurants/bib-gourmand');
    console.log(test_restaus)


    //const restaurant = await michelin.scrapeRestaurant(searchLink);

    //console.log(restaurant);
    //console.log(restaurant.name);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox(searchLink);



