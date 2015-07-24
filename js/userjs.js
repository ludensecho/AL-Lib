var locations = ["_content/", "index.php", "about.php"];
var container = ".ajax-content";

for(i = 1; i < locations.length; i++){
  locations[i] = locations[0] + locations[i];
  addLocationToLoad(locations[i], container);
}

loadArrayByNumber(0);
