function auto_csv(){
  var date = new Date();
  var ss = SpreadsheetApp.openByUrl("");
  var sh = ss.getSheetByName('');
  var charset = "Shift_JIS";
  var exp = "";
  var url = "";
  var expr = UrlFetchApp.fetch(exp);
  var responce = UrlFetchApp.fetch(url);
  var csv_data = responce.getContentText(charset);
  var ary = Utilities.parseCsv(csv_data);
  // シートに反映
  sh.getRange(1,2).setValue(date);
  sh.getRange(2,1,ary.length,ary[0].length).setValues(ary);
}
