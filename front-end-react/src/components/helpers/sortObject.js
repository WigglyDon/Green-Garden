export const sortObject = (obj) => {
  var sortable = [];

  for (var item in obj) {
    sortable.push([item, obj[item]]);
  }

  return sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
};
