const request = require("request");
const cheerio = require("cheerio");

const scorecard = (url) => {
    request(
    url,
    (err, res, html) => {
      if (err) {
        console.error(err);
      } else {
        handleScoreCard(html);
      }
    }
  );
    // return "hello";
};

function handleScoreCard(html){
    const $ =  cheerio.load(html);
    let scoreArr = $(".ds-mt-3 .ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4");
    for(let i = 0 ; i<2 ; i++){
        let name = $(scoreArr[i]).html();
        console.log(name);  
    }
    
    
}

module.exports = { scorecard };