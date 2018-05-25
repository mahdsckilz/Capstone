/**
 * Track the trade of a commodity from one trader to another
 * @param {dingo.attachComponentToME} trade - the trade to be processed
 * @transaction
 */
async function attachComponentToME(addComponent){
	addComponent.equipment.components.push(addComponent.component);
  let assetRegistry = await getAssetRegistry('dingo.MainEquipment');
    await assetRegistry.update(addComponent.equipment);
}

async function concatToSearchName(queriedText) {
  var reftext = "resource:dingo.Company#";
  var txt = reftext + queriedText;
  return txt;
}

async function returnIdOfTransaction() {
  var query = "selectTransactionsForInput";
  // Code to return id from query
}
