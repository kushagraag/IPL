const {score} = require("./score");
const axios = require("axios");
const request = require("request");
const cheerio = require("cheerio");
const livescore = async() => {
  //   request(
  //   "https://www.espncricinfo.com/live-cricket-score",
  //   (err, res, html) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       handleLive(html);
  //     }
  //   }
  // );
  const html = await axios.get("https://www.espncricinfo.com/live-cricket-score")
  const ans = handleLive(html.data);
  return ans;
  
};

const handleLive = async(html) =>{
    const $ = cheerio.load(html);
    // const LiveArr = $(".ds-px-4.ds-py-3");
    let link = "";
    const LiveArr = $(".ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line .ds-flex.ds-flex-wrap .ds-px-4.ds-py-3");
    for(let i = 0 ; i < LiveArr.length ; i++){
        // console.log($(LiveArr[i]).html());
        // const st = $(LiveArr[i]).find(".ds-text-tight-xs.ds-truncate.ds-text-typo-mid3 a").attr("href");
        const st = $(LiveArr[i]).find(".ds-no-tap-higlight").attr("href");
        //.ds-no-tap-higlight
        // const st = $(".ds-cursor-pointer.ds-inline-flex.ds-items-start.ds-leading-none");
        // console.log(st);
        let trimString = st.split("/");
        // console.log(typeof st);
        if(trimString[2] === "indian-premier-league-2023-1345038"){
            link += st;
            break;
        }
        // if(st[i] === "Indian Premier League"){
        //        link += "/series/indian-premier-league-2023-1345038/rajasthan-royals-vs-punjab-kings-8th-match-1359482/live-cricket-score";
        //        break;
        //    }
    }
    const fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);
    let data = await score(fullLink);
    return data;
    

     
    
}

module.exports = { livescore };