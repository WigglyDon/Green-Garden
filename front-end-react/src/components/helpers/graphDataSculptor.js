export const graphaDataSculptor = (arr) => {
	const obj = {}
  for (const value in arr ){
  const index = (arr[value]); 
  	if (!obj[index]){
    	obj[index] = 1;
    }
    else {
      obj[index] += 1;
    }
  }
  // console.log(Object.keys(obj))
  // console.log(Object.values(obj))
  return obj;
}