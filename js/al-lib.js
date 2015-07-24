//Set wether to output to console or not. (Good use for testing)
var consoleLog = false;

/**
 * You may replace _content with your own folder, please make sure you keep
 * The forward slash (/) because this is what allows the page to load.
 */
var pageArray = ["_content/"];

//WARNING: please do not type (href="index.php") only (href="index")
//Any anchor tags inside of your nav will be taken as pages to load
var locationOfNav = "";
//if you are using (href=index) in your anchor tags enable this
var useHrefNames = false;

//AJAX array handler variables
var locationLoader = [];
//AJAX array handler variables end

//Runs AJAX and loads pages.
$(document).ready(function(){
  loadAJAX();
});

//Load AJAX function called above ^
/*
function loadAJAX(location){
  $(location).load(pageArray[1]);
  $(locationOfNav).click(function() {
    var page = $(this).attr('href');
    if(useHrefNames){
      $(location).load(pageArray[0] + page + ".php");
    }else {
      $(location).load(pageArray[page]);
    }
    return false;
  });
}
*/

//Load AJAX without params
function loadAJAX(){
  $('.ajax-content').load(pageArray[1]);
  $(locationOfNav).click(function() {
    var page = $(this).attr('href');
    if(useHrefNames){
      $('.ajax-content').load(pageArray[0] + page + ".php");
    }else {
      $('.ajax-content').load(pageArray[page]);
    }
    return false;
  });
}

//AJAX array handler
//Location to load to
function addLocationLoader(location){

}
//AJAX array handler end

//Adds a page to the pageArray
function addPageToArray(page){
  pageArray.push(pageArray[0] + page);
  sendToLog(page + " has been added");
}

//Sends info through the console (can be disabled)
function sendToLog(string){
  if(consoleLog){
    console.log(string);
  }
}

//Prints all pages in console
function printPageArray(){
  sendToLog("Printing page array...");
  for(i = 0; i < pageArray.length; i++){
    sendToLog(pageArray[i]);
  }
}

//Sets the locationOfNav
function setLocationOfNav(loc){
  locationOfNav = loc + " a";
}

//Sets the boolean useHrefNames
function setUseHrefNames(bool){
  useHrefNames = bool;
}
