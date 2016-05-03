// WEATHER BACKGROUND CHANGES

var $weatherDesc = $("#weatherDesc");

if ($weatherDesc.html().match(/cloudy?/i)){
  $("#app").css("background", "url(img/cloudy.jpg)");
  console.log("ok")
}else if($weatherDesc.html().match(/sun?/i)){
  $("#app").css("background", "url(img/sunny.jpg)");
}else if($weatherDesc.html().match(/mist?/i)){
  $("#app").css("background", "url(img/mist.jpg)");
}else if($weatherDesc.html().match(/clear?/i)){
  $("#app").css("background", "url(img/clear.jpg)");
}else if($weatherDesc.html().match(/rain?/i)){
  $("#app").css("background", "url(img/rainy.jpg)");
}else if($weatherDesc.html().match(/thunder?/i)  ||  $weatherDesc.html().match(/lightning?/i)){
  $("#app").css("background", "url(img/thunder.jpg)");
}else{
  $("#app").css("background", "url(img//bg-df.bmp)");
}


