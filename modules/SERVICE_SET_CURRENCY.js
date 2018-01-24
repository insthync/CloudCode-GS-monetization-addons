// ====================================================================================================
//
// Cloud Code for SERVICE_SET_CURRENCY, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var gsData = Spark.getData();
var data = gsData.DATA;

var player = Spark.getPlayer();
var currencyId = data.currencyId;
var currencyAmount = Number(data.currencyAmount);
var currentBalance = player.getBalance(currencyId);
var diff = currencyAmount - currentBalance;
if (diff > 0)
{
    player.credit(currencyId, diff, "SET_CURRENCY");
}
else if (diff < 0)
{
    diff = Math.abs(diff);
    player.debit(currencyId, diff);
}
Spark.setScriptData("result", {"balances": player.getAllBalances()});