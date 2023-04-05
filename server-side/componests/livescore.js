const {score} = require("./score")
const request = require("request");
const cheerio = require("cheerio");
let data = "";
const livescore = () => {
    request(
    "https://www.espncricinfo.com/live-cricket-score",
    (err, res, html) => {
      if (err) {
        console.error(err);
      } else {
        handleLive(html);
      }
    }
  );
  return data;
  
};

const handleLive = (html) =>{
    const $ = cheerio.load(html);
    // const LiveArr = $(".ds-px-4.ds-py-3");
    let link = "";
    const LiveArr = $(".ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line .ds-flex.ds-flex-wrap .ds-px-4.ds-py-3");
    for(let i = 0 ; i < LiveArr.length ; i++){
        // console.log($(LiveArr[i]).html());
        const st = $(LiveArr[i]).find(".ds-text-tight-xs.ds-truncate.ds-text-typo-mid3 a").attr("href");
        let trimString = st.split("/");
        // console.log(typeof st);
        if(trimString[2] === "indian-premier-league-2023-1345038"){
            link += st;
            break;
        }
    }
    const fullLink = "https://www.espncricinfo.com" + link;
    data = score(fullLink);
    // console.log(data);
    // return data;

     
    
}

module.exports = { livescore };