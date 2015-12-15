<h3 id='home_intro'>Home Introduction (home_intro)</h3>
![]({{site.section_image_root}}home_intro.jpeg)

This section is a background image slider that contains multiple slider information.

Each slider contains:

* One title
* One subtitle
* One background image
* One background overlay theme (light or dark)

Sliders can be added or removed. This section is used for more top home section that slides multiple background images.

To use the overlay theme(`bg_overlay`), specify `light` or `dark` in the input. When it's set to dark, the background color will be dark and text will be light-colored. When it's set to light, the background color will be light and text will be dark-colored.

```json
{
  "slider": [
    {
      "title": "Home intro 1",
      "subtitle": "home intro 1 description",
      "bg": "home-intro-1.jpg",
      "bg_overlay": "light"
    },
    {
      "title": "Home intro 2",
      "subtitle": "home intro 2 description",
      "bg": "home-intro-2.jpg",
      "bg_overlay": "dark"
    },
    {
      "title": "Home intro 3",
      "subtitle": "home intro 3 description",
      "bg": "home-intro-3.jpg",
      "bg_overlay": "dark"
    },
    {
      "title": "Home intro 4",
      "subtitle": "home intro 4 description",
      "bg": "home-intro-4.jpg",
      "bg_overlay": "dark"
    }
  ]
}
```
