<h3 id='about_cols'>About Columns (about_cols)</h3>
![]({{site.section_image_root}}about_cols.jpeg)

This section contains:

* One title
* One subtitle
* Multiple features

Each feature contains:

* One title
* One icon
* One image
* Boolean (show image or not, if this is turned on, image will be visible, otherwise, icon will be visible)
* One subtitle

Features can be added or removed. This section is used for more about page that contains multiple features or provides multiple services.

```json
{
  "title": "<small>City of Chino Hills</small>",
  "subtitle": "City of Chino Hills",
  "features": [
    {
      "title": "f1",
      "icon": "icon-lightbulb",
      "image": "logo.png",
      "show_image": true,
      "subtitle": "fs1"
    },
    {
      "title": "f2",
      "icon": "icon-bike",
      "image": "logo.png",
      "show_image": true,
      "subtitle": "fs2"
    },
    {
      "title": "f3",
      "icon": "icon-hotairballoon",
      "image": "logo.png",
      "show_image": true,
      "subtitle": "fs3"
    }
  ]
}
```
