// ====================================================================================================
//
// Cloud Code for SERVICE_SET_PURCHASED_ITEMS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var gsData = Spark.getData();
var data = gsData.DATA;

var player = Spark.getPlayer();
var items = data.items;
player.setScriptData("purchasedItems", items);
Spark.setScriptData("result", {"virtualGoods": player.getVirtualGoods()});