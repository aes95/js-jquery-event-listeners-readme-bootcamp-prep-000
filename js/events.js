//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('document').on('load',function(){
    $('img').addClass('tasty');
  });
}
/*
function pressIt(){
  $('form:in').on('keydown', function(){
    $(form)
  })
}
*/
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
