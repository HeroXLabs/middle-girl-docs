<h3 id='multi_galleries'>Multiple Galleries (multi_galleries)</h3>
![]({{site.section_image_root}}multi_galleries.jpeg)

This section is a exhibition page for products or works with multiple categories, and each product/item doesn't not have a lot of information on it.  It contains:

* One title
* Multiple item groups, and each of the item groups contains
  * One title
  * Multiple items that has a *url* attribute to display.

Both item groups and items inside item group can be added or removed. When the item group has multiple items, this individual gallery has a scroll effect for the items. 

```json
{
  "title": "Previous Jobs",
  "item_groups": [
    {
      "title": "Kitchen I",
      "items": [
        { "url": "Kitchen/DSCN9327.JPG" },
        { "url": "Kitchen/DSCN7099.JPG" }
      ]
    },
    {
      "title": "Kitchen II",
      "items": [
        { "url": "Kitchen/100_1525.JPG" },
        { "url": "Kitchen/100_1545.JPG" },
        { "url": "Kitchen/100_1548.JPG" }

      ]
    },
    {
      "title": "Kitchen III",
      "items": [
        { "url": "Kitchen/IMG_0005.JPG" },
        { "url": "Kitchen/IMG_0006.JPG" },
        { "url": "Kitchen/IMG_0009.JPG" },
        { "url": "Kitchen/IMG_0010.JPG" },
        { "url": "Kitchen/IMG_0013.JPG" }
      ]
    },
    {
      "title": "Kitchen IV",
      "items": [
        { "url": "Kitchen/IMG_0754.JPG" }
      ]
    }
  ]
}
```
