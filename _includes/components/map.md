<h3 id='map'>Map</h3>
![]({{site.section_image_root}}map.jpeg)

*Currently supporting Google Map only*

This section is for displaying map on webpage. It contains:

* One latitude (x coordinate of the address)
* One longitude (y coordinate of the address)
* One Information text (usually needs html to help style it)
* Address
* The content/text of the link that links out to Google Map

**How to get coordinate information?**
Go to [http://www.latlong.net/convert-address-to-lat-long.html](http://www.latlong.net/convert-address-to-lat-long.html), input the address information and it will give the coordinate of the address.

```json
{
  "lat": 33.9904914,
  "lng": -117.9270034,
  "info_text": "<p>17474 Colima Rd,<br>Rowland Heights<br>CA 91748</p>",
  "address": "17474 Colima Rd, Rowland Heights",
  "link_text": "View on Google Map"
}
```
