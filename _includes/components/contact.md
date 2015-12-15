<h3 id='contact'>Contact</h3>
![]({{site.section_image_root}}contact.jpeg)

This section has two sides, left side is the contact information, and the right side is the contact form.  This section contains:

* One title
* One style setting(background & color)
* Contact button background color
* Contact button text color
* Contact button border color
* Four rows of Appointment information
* Call-to-action text
* Send form button text
* Boolean (show form or not)
* Boolean (show information or not)
* The contact form

The contact form contains

* A URL that sends contact form data to back-end
* A After-send message text
* Multiple fields

Each field contains `input_type`(should not change), label, name, placeholder, `input_icon_class`(usually it's font-awesome icon), and a boolean hide to hide or show the input field.

```json
{
  "title": "Reservation",
  "appointment_info_1": "9040 Tel Star",
  "appointment_info_2": "Los Angeles, California",
  "appointment_info_3": "Phone: 626. 336. 6368  Fax: 626. 336. 2152",
  "appointment_info_4": "Email: google@yahoo.com",
  "call_to_action": "Call me!",
  "form": {
    "sent_message": "Message has been sent! Thank you!",
    "url": "http://actmob.ngrok.com/api/send/def",
    "fields": [
      {
        "input_type": "text_input",
        "hide": false,
        "label": "Name",
        "name": "name",
        "placeholder": "Name",
        "input_icon_class": "fa fa-user"
      },
      {
        "input_type": "text_input",
        "hide": false,
        "hide": false,
        "label": "Email",
        "name": "email",
        "placeholder": "Email",
        "input_icon_class": "fa fa-envelope"
      },
      {
        "label": "Services",
        "input_type": "selections_input",
        "hide": false,
        "name": "services",
        "input_icon_class": "fa fa-phone",
        "selections": [
          { "name": "service a" },
          { "name": "service b" },
          { "name": "service c" }
        ]
      },
      {
        "label": "Date/Time",
        "input_type": "text_inputs_2",
        "hide": false,
        "inputs": [
          {
            "label": "From",
            "name": "from",
            "placeholder": "",
            "input_icon_class": "fa fa-calendar",
            "input_class": "x-datepicker datepicker"
          },
          {
            "label": "To",
            "name": "to",
            "placeholder": "",
            "input_icon_class": "fa fa-calendar",
            "input_class": "x-datepicker datepicker"
          }
        ]
      },
      {
        "input_type": "textarea",
        "hide": false,
        "label": "Detail",
        "name": "detail",
        "placeholder": "..."
      }
    ]
  }
}
```
