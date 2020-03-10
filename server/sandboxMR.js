
/* eslint-disable no-console, no-process-exit */
const MR = require('./maitre_rest');
//const fs
const url_liste_restaurants='https://guide.michelin.com/fr/fr/restaurants/bib-gourmand';
const url_restaurant_lacroixblanche='https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche';
//const clickbutton="body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(1) > div > a"
const url_maitresrestaurateurs='https://www.maitresrestaurateurs.fr/annuaire/recherche';

async function sandbox (searchLink = url_maitresrestaurateurs) {
  try {
    
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);
    
    console.log("--------------------------------maîtres restaurateurs------------------------------------")
    const test_restaus= await MR.scrapePageMR(searchLink);
    console.log(test_restaus)
    
    //const urlPP=await michelin.Url_per_page(14);
    //const test_maitre=michelin.scrapePageMR("https://www.maitresrestaurateurs.fr/profil/laure.pasquier-henry.2020")



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

