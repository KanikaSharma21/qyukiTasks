const express = require("express");
const config = require("config");
const router = express.Router();
const axios = require("axios");
const currentStatesUrl = `${config.get("baseUrl")}states`;
const statesInfoUrl = `${config.get("baseUrl")}states/info`;

/*
   Created By:- Kanika Sharma
   Api:- return the list of states of USA sorted in descending order 
         (according to total positive cases)
   Query Parameters:- Not used
*/

router.get("/", async (req, res) => {
  let response = [],
    currentStatesData,
    statesData;

  try {
    [currentStatesData, statesData] = await Promise.all([
      getDataFromRemoteApi(currentStatesUrl),
      getDataFromRemoteApi(statesInfoUrl),
    ]);

    /*
       merge two arrays 
       assumption:- Data coming from the remote api would be in alphabetically sorted order ,
                    therefore not matching the data 
     */
    currentStatesData.forEach((element, index) => {
      response.push({
        state: element.state,
        positive: element.positive,
        totalTestResults: element.totalTestResults,
        notes: statesData[index].notes,
        covid19Site: statesData[index].covid19Site,
      });
    });

    /* sort by descending order according to
       total number of positive patients
    */
    response.sort(function (a, b) {
      return b.positive - a.positive;
    });

    return res.send({ statusCode: 200, status: "Success", data: { stateInfoList: response } });
  } catch (ex) {
    return res.send({ statusCode: ex.response.status, status: ex.response.statusText, data: { errorMessage: ex } });
  }
});

async function getDataFromRemoteApi(url) {
  const response = await axios.get(url);
  return response.data;
}

module.exports = router;
