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
//Location to load from
var locationLoader = [];
//Location to load to
var toLoad = [];
//AJAX array handler variables end

//This function can be overridden by using loadArrayByNumber or loadArraysToPage
$(document).ready(function(){
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
})

//AJAX array handler
//Location to load to
function addLocationToLoad(location, toLoadTo){
  if(checkIfSynced()){
    locationLoader.push(location);
    toLoad.push(toLoadTo);
    sendToLog("Added item " + location + " to list.");
  }else {
    sendToLog("Did not add item " + location + " to list.");
  }
}

function checkIfSynced(){
  //TODO: Find a way to figure out if arrays are truly synced
  //Check if arrays are synced
  if(locationLoader.length == toLoad.length){
    sendToLog("Sync: OK");
    return true;
  }else {
    sendToLog("Sync: ERR");
    return false;
  }
}

function loadArraysToPage(){
  if(checkIfSynced()){
    for(i = 0; i < locationLoader.length; i++){
      $(toLoad[i]).load(locationLoader[i]);
      sendToLog("Loaded " + locationLoader[i] + " to " + toLoad[i]);
    }
  }
}

function loadArrayByNumber(id){
  $(toLoad[id]).load(locationLoader[id]);
  sendToLog("Loaded array item from id of " + id);
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
