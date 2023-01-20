function sendLineNotify(message,Token,image) {
  var token = Token              // Token ที่ได้จาก Line Notify https://notify-bot.line.me/th/
  var formData = {
    'imageThumbnail' : image,    // image คือ ลิงค์ของรูปภาพที่ได้จาก Appsheet
    'imageFullsize' : image,      // image คือ ลิงค์ของรูปภาพที่ได้จาก Appsheet
    'message' : '\n' + message,  // message คือ ข้อความที่ได้จาก Appsheet
  };
 
  var options = {
    "method": "post",
    "payload": formData,
    "headers": {
    "Authorization": "Bearer " + token
  }
  };
 
UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
