# module-tutorial-tingle.js

This is a Tutorial to use tingle.js to facilitate the use of modal and make it automatic responsive and styled using 
tingle.css and tingle.js.
link.js website - <i>https://robinparisi.github.io/tingle/</i> 

<b>1st</b> - Create a folder with your files HTML, CSS and js.

<b>2nd</b> - Then in the terminal, you can add "npm init" to start using modules.

```ruby
$ npm init
```


<b>3rd</b> - After this, you will have a folder with the name node_modules (you should put inside of .gitignore so it will not go for git)
And you can paste for your HTML the links or sources to tingle.css and tingle.js. But always check if the path is correct.

```ruby
<link rel="stylesheet" href="node_modules/tingle.js/dist/tingle.min.css"/>
```

```ruby
<script src="node_modules/tingle.js/dist/tingle.min.js"></script>
```

<b>4th</b> - Then you can start working with your own JavaScript file and start by importing the tingle.js.

```ruby
import tingle from "tingle.js";
```

<b>5th</b> - Now that you have import tingle you can define your new modal with the flowing code.

 ```ruby
 const modal = new tingle.modal({ 
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen: function() {
    console.log("modal open");
  },
  onClose: function() {
    console.log("modal closed");
  },
  beforeClose: function() {
    // here you can add some funtion before closes
    console.log("before close");
    return true; // close the modal
    return false; // nothing happens
  }
}); 
```

<b>6th</b> - With the variable modal, you can create the content, also buttons inside the modal, and any other things you want.

```ruby 
modal.setContent("<h1>This is a Modal</h1>"); 


// add a button that will close modal or maybe could have other funtion
 modal.addFooterBtn("Button 1", "tingle-btn tingle-btn--primary", function() {
  // here you can add othe funtion for the button
modal.close(); 
});

// add another button that will close modal or maybe could have other funtion
modal.addFooterBtn("Button 2", "tingle-btn tingle-btn--danger", function() {
  // here you can add othe funtion for the button
  modal.close();
});

// open modal
modal.open();

// close modal
modal.close();
```

<b>7th</b> - Now that we have a modal working we need to connect this modal to open with an HTML button and also make some content to add to the modal.
So first we can add on HTML the button and a template.

```ruby
<!-- create a button to open the modal form the html -->
<button class="btn">Open Modal</button>
<!-- create a template to add more content inside of the modal -->
<template>
  <h1>This is a Modal</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus error
    maiores, non harum expedita velit saepe exercitationem, quae magni
    assumenda suscipit. Sed, facere! Similique ex reprehenderit et aliquam!
    Aut, eos.
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus error
    maiores, non harum expedita velit saepe exercitationem, quae magni
    assumenda suscipit. Sed, facere! Similique ex reprehenderit et aliquam!
    Aut, eos.
  </p>
</template>
```

<b>8th</b> -And at last, we can change the modal to open only when clicking on the button and change the modal set content to the template content.

```ruby
// add more content than just an h1 using template
modal.setContent(document.querySelector("template").innerHTML);

//open modal with html button
document.querySelector(".btn").addEventListener("click", () => {
  console.log("working");
  modal.open();
});
```

To understand better each component of the tingle.js you can go to their website <i>https://robinparisi.github.io/tingle/</i> <br>
You have also my GitHub files with my test modal and explanation of each step of code inside. 


