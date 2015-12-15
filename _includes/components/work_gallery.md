<h3 id='work_gallery'>Work/Projects Gallery (work_gallery)</h3>
![]({{site.section_image_root}}work_gallery.jpeg)

This section is a exhibition page for products or works.  It contains:

* One title
* Multiple categories, each category contains
  * A category name
  * Multiple items/products, each item contains a title and an image

Categories can be added or removed. Items inside each category can be added or removed.  This section is typically for displaying lots of products that belong to multiple categories.

```json
{
  "title": "Service",
  "categories": [
    {
      "name": "Good",
      "items": [
        { "title": "Image Title", "image": "./assets/images/show/3.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/4.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/5.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/6.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/7.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/8.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/9.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/10.jpg" }
      ]
    },
    {
      "name": "Better",
      "items": [
        { "title": "Image Title", "image": "./assets/images/show/11.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/12.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/13.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/14.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/15.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/16.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/17.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/18.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/19.jpg" },
        { "title": "Image Title", "image": "./assets/images/show/20.jpg" }
      ]
    }
  ]
}
```
