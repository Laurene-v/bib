/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
//const fs
const url_liste_restaurants='https://guide.michelin.com/fr/fr/restaurants/bib-gourmand';
const url_restaurant_lacroixblanche='https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche';
//const clickbutton="body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a"
const url_maitresrestaurateurs='https://www.maitresrestaurateurs.fr/annuaire/recherche';

async function sandbox (searchLink = url_liste_restaurants /* click_restaurant()*/) {
  try {
    
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);
    //const test_1= await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/ile-de-france/paris/restaurant/richer');
    //console.log(test_1)
    const test_restaus= await michelin.scrapeRestaurant_test('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand');
    //const test_restaus2= await michelin.boucle_restaurants('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand');
    console.log(test_restaus)
    
    //const test_restaus2= await michelin.scrapePageMR('https://www.maitresrestaurateurs.fr/annuaire/recherche');
    
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox(searchLink);



