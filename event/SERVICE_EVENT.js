// ====================================================================================================
//
// Cloud Code for SERVICE_EVENT, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var logger = Spark.getLog();
var gsData = Spark.getData();
var target = gsData.TARGET;
var data = gsData.DATA;

if (target === "setCurrency")
    require("SERVICE_SET_CURRENCY");
else if (target === "setPurchasedItems")
    require("SERVICE_SET_PURCHASED_ITEMS");
