/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const url_liste_restaurants='https://guide.michelin.com/fr/fr/ile-de-france/restaurants/bib-gourmand';
const url_restaurant_lacroixblanche='https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche';



async function sandbox (searchLink = url_restaurant_lacroixblanche) {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeRestaurant(searchLink);

    console.log(restaurant);
    console.log(restaurant.name);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox(searchLink);



