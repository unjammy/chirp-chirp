function chirp(n){
  // FIX ME
  if(n>0){
  console.log(n, "is this");
  return `chirp ${chirp(n-1)}`;
  }
  return '';
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});