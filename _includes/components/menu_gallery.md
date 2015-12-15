<h3 id='menu_gallery'>Menu Gallery (menu_gallery)</h3>
![]({{site.section_image_root}}menu_gallery.jpeg)

This section is a exhibition page for products or works with menus and submenus(or categories and subcategories).  Each item in this section can be clicked to *popup* a detailed sub menu page.  **NOTE**: *each menu doesn't have to have an image*. This section contains:

* One title
* Multiple menus (or categories), each menu has an animation for `fade` motion, and contains multiple sub menus that has the following attributes:
  * A sub menu name
  * An image to display in front
  * A text to display in popup screen
  * Multiple images to display in popup screen

Both menus and submenus can be added or removed. Moreover, the images inside each submenu can also be added or removed.

```json
{
  "title": "Collection Title",
  "menus": [
    {
      "fade": "fadeInLeft",
      "sub_menus": [
        {
          "name": "Molding Clay" ,
          "image": "moldingclay1.JPG",
          "text": "1979 Collection Molding Clay is a long-lasting lightweight molding clay.",
          "images": [
            {"url": "moldingclay1.JPG"},
            {"url": "moldingclay2.JPG"}
          ]
        }
      ]
    },
    {
      "fade": "fadeInUp",
      "sub_menus": [
        {
          "name": "Cool Shampoo",
          "image": "coolshampoo1.JPG",
          "text": "1979 Collection Cool Shampoo is a shampoo infused with tea tree oil and peppermint oil, specially formulated to help thoroughly cleanse and penetrate each hair shaft. ",
          "images": [
            {"url": "coolshampoo1.JPG"},
            {"url": "coolshampoo2.JPG"},
            {"url": "coolshampoo3.JPG"},
            {"url": "coolshampoo4.JPG"}
          ]
        }
      ]
    }
  ]
}
```
