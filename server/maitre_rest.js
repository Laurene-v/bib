
const axios = require('axios');
const cheerio = require('cheerio');
const fs= require ("fs");
var querystring = require('querystring');

var tableau_MR=[]

const parsePageMR = data => {
  console.log("parsePage MR: ")
  const $ = cheerio.load(data);
  console.log("---1---")
  const name=$('.single_libel').each((i, element)=>{name_MR=$(element).text()});
  console.log(name_MR);
  //#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-742 > div.single_desc > div.single_libel > a
  console.log("---2---")
  const address=$('.single_details>div>div:nth-child(2)>div').each((i, element)=>{address_MR=$(element).text()});
  console.log(address_MR);
  console.log("---3---")

  const phone=$('.single_details > div > div:nth-child(3) > div').each((i, element)=>{phone_MR=$(element).text()});
  console.log(phone_MR);
  
  // to remove all line breaks and beginning / end spaces: 
  name_MR = name_MR.replace(/(\r\n|\n|\r)/gm, "");
  name_MR.trim()
  adress_MR = address_MR.replace(/(\r\n|\n|\r)/gm, "");
  address_MR.trim()
  phone_MR = phone_MR.replace(/(\r\n|\n|\r)/gm, "");
  phone_MR.trim()
  phone_MR = phone_MR.replace(/\s+/g, ''); //easier to compare with the phone numbers from bib goumand 


  tableau_MR.push({name_MR,address_MR, phone_MR});
  console.log("tableau",tableau_MR)
  //console.log("phone : ",phone, name)
  return {name_MR,address_MR, phone_MR};
};

module.exports.scrapePageMR = async page => {
  console.log("entering scrapePage function")
  const payload={
    'page': page,
    'request_id': 'dfe87d20cf5857fd64ccd03cd607c471'
  };
  const options ={
    'url': 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult',
    'method': 'POST',
    'headers': {'content-type': 'application/x-www-form-urlencoded'},
    'data': querystring.stringify(payload)

  };
  
  console.log("before response")
  const response = await axios(options);
  console.log("before data1 , status")
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    console.log("if status")
    //console.log(data)
    return parsePageMR(data);
  }
  console.error(status); 
  return null;
};


/*

module.exports.get = () => {
  return [];
};
*/ 

//--------------------------------------------------------------------------------------------------

