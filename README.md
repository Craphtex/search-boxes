# Search Boxes

**Easyily add search boxes to your meteor project**

This is mostly syntactic sugar for search boxes in Meteor, providing an easy to use base plate for search functionality.

**Use this syntax:**

```html
{{#search_boxes eventName="enteredSearchQuery"}}
  {{> search_box field="id" type="Number"}}
  {{> search_box field="email" type="String"}}
  {{> search_box field="value" type="Number"}}
{{/search_boxes}}
```

**And you can then simply catch the event enteredSearchQuery like this:**

```javascript
Template.body.events({
  'enteredSearchQuery'(event, template, data) {
    // If the user entered "abc" in the email box and pressed enter
    // the following content will be available in the data object
    // {
    //   filter: {
    //     email: {
    //       filter: 'abc',
    //       type: 'String'
    //     }
    //   }
    // }
  }
}
```

## Installation
`meteor add craphtex:search-boxes`

*Compatible with `Meteor 1.3.2.4 and later`*

## Usage

### UI

This package offers a flexible UI configuration. The `search_box`es will work as long as they are encapsulated by a `serch_boxes`, and you can add multiple `search_boxes` on the same page.

#### `search_boxes`

This is the search box container it will listen to any `search_box` nested under itself.
Even if it's an UI component it won't actually show up in the UI.

It can be placed anywhere, but it's discuraged to place it outside the `body` tag.

**Arguments**

*eventName*: The name of the event to be thrown when a search box has been edited.
Its data field will contain data according to the following structure
```javascript
{
  filter: {
    <fieldName> : {
      filter: <filterValue>,
      type: <filterType>
    }
  }
}
```
making several searches simple to merge as well as overriding previous ones.

### `search_box`

This is the individual search box. Place it inside a `search_boxes` and it will capture made edits.
As long as they are surrounded by a `search_box` they can be placed anywhere, a table header, a list, a side bar etc.

**Arguments**

*field:* The field name. Several boxes can have the same field name and work as normal, however the data in those boxes will not propagate to eachother.

*type:* The field type. This is a type determied by the user which can be user later for post processing.

### UX

#### `search_boxes`

Catching the event name given in the HTML component is the core functionality of this plugin.
```javascript
Template.body.events({
  'enteredSearchQuery'(event, template, data) {
    // Code goes here
  }
}
```

