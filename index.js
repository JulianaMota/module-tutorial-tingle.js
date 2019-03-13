//import the tingle to create new modals
import tingle from "tingle.js";

// Define how you modal will work
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

// this is where you set the content inside of the modal
modal.setContent("<h1>here's some content</h1>");

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
