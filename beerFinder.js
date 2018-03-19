// API Key: 6025a5af2ba200e2b816482dc3fe16e1
/*


Loccity and Locstate Service

(May Return Multiple Locations.)
http://beermapping.com/webservice/loccity/API_KEY/lyons,co
http://beermapping.com/webservice/locstate/API_KEY/co
This service should be used to search for Locations when given a city or a city,state. Partials will work.
This function will return multiple locations depending on the search query given.

<bmp_locations>
<location>
<id>972</id>
<name>Oskar Blues Grill and Brewery</name>
<status>Brewpub</status>
<reviewlink>https://beermapping.com/location/972</reviewlink>
<proxylink>http://beermapping.com/maps/proxymaps.php?locid=972&amp;d=5</proxylink>
<blogmap>http://beermapping.com/maps/blogproxy.php?locid=972&amp;d=1&amp;type=norm</blogmap>
<street>303 Main Street</street>
<city>Lyons</city>
<state>CO</state>
<zip>80540</zip>
<country>United States</country>
<phone>(303) 823-6685</phone>
<overall>90.5555</overall>
<imagecount>13</imagecount>
</location>
</bmp_locations>



**NOTE: the default return type for API queries is xml. If you want json returned instead, simply add &s=json to the end of any of these queries. **
*/


console.log('testFinder');


var BeerMapping = require('beermapping');
  
var beer = new BeerMapping('6025a5af2ba200e2b816482dc3fe16e1');
 
var intracoastalBrewingCompany = null;
beer.locationsByName('intracoastal', function (err, results) {
  if (!err) {
    intracoastalBrewingCompany = results.bmp_locations.location[0];
  }
});


