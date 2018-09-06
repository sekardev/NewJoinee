

var fs = require('fs')
module.exports.convertImagebase64 = (file)=>{
    try
    {
        file = __dirname+"\\Images\\" + file
        var bitmap = fs.readFileSync(file);    
        return new Buffer(bitmap).toString('base64');
    }
    catch(e)
    {
        file = __dirname+"\\Images\\" + "NoImage.png"
        var bitmap = fs.readFileSync(file);    
        return new Buffer(bitmap).toString('base64');
    }       
}

module.exports.getCurrentDateToString = (delimiter="")=>
{
   var dt = new Date()
   var day = dt.getDate()
   var month = ""

   if(dt.getMonth()<12)
       month = dt.getMonth()  +1
   
   return   month+delimiter+day+delimiter+dt.getFullYear()
}