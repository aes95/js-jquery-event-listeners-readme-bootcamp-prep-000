//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input:first
  ').on('keydown', function(){
    $(form)
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
