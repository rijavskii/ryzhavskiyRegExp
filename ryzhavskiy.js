var addresses = require('./addresses');

var result = [];

var regular=/^(?: +)?(?:ул.?|пр-т.?|пл.?)? ?([0-9А-Яа-я. \-]+),? ?(?:дом)?(?: +)?([0-9]+[-]?[А-Яа-я]?)?(?: +)?\/?([0-9]+)?/;
var a;
for(var i=0; i<addresses.length; i++)
{
      a=addresses[i].match(regular);
     if(a) {
         var res = {
             street: a[1],
             house: a[2] || "",
             flat: a[3] || ""
         };
         result.push(res);
     }else{
         result.push({"null":"null"});
     }
 //    if(a) {
 //        // console.log(i + 1, RegExp.$3);
 //        console.log(i + 1, res.street, res.house, res.flat);
 //    }
 // else
 //     console.log(i+1 + " null");
}

console.log(result);
// ... some good code ...

/*
 приклад структури масиву result
 >>> result
 [
 ...
 {
 "street": 'Юности', //string
 "house": '25',      //string
 "flat": '6'         //string
 }
 ...
 ]
 */
module.exports = result;