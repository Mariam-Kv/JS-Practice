let arr = ["Mari", "Koka", "Tedo"];
Array.prototype.ourFeature = "Feature";
for (let prop in arr) {
  console.log(prop, " : ", arr[prop]);
}//ourFeature  :  Feature 
for (let i = 0; i < arr.length; i++) {
  console.log(i, " : ", arr[i]);
}
