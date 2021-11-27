export const sortObject = (obj) => {
    var sortable = [];

    for (var item in obj) {
        sortable.push([item, obj[item]]);
    }
    
   return  sortable.sort(function(a, b) {
        return a[1] - b[1];
    })
}




// console.log(sortable.map((keys) => keys[0]).reverse());
// console.log(sortable.map((values) => values[1]).reverse());

