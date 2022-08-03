(function ($) {
  "use strict";

  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);

var inputs = document.getElementsByClassName("form-control");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function () {
    var input_id = this.getAttribute("id");
    var input_items = document.getElementsByClassName(input_id);

    for (var i = 0; i < input_items.length; i++) {
      var parent_id = input_items[i].parentElement.getAttribute("id");
      console.log(input_items[i].parentElement.getAttribute("id"));

      // check if number is integer or decimal

      if (this.value / parent_id == Math.floor(this.value / parent_id)) {
        input_items[i].innerHTML = this.value / parent_id;
      } else {
        input_items[i].innerHTML = (this.value / parent_id).toFixed(1);
      }
    }
  });
}
