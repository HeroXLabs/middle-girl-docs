<h3 id='top_navs'>Top Navigation (top_navs)</h3>
![]({{site.section_image_root}}top_navs.jpeg)

This section is the navigation bar on the top of the page. It contains:

* One logo
* One title (Brand Title)
* Boolean for sticky to the top or not (for example, in `foodster_intro`, this is set to not sticky)
* Multiple navigation links

Navigation links can be added or removed. **Important**: to link external page, put **./** and the page name in navigation link. For example, if we have another page named 'service', then we just put **./service** to link the page.  If it's linked to internal sections, just use **#(pound sign)** before the section name.

```json
{
  "logo": "logo.png",
  "brand_title": "Brand",
  "sticky": true,
  "navs": [
    { "href": "./", "name": "1979 Collection" },
    { "href": "#products", "name": "Products" },
    { "href": "#about", "name": "About" },
    { "href": "#history", "name": "History" },
    { "href": "#map", "name": "Contact" }
  ]
}
```
