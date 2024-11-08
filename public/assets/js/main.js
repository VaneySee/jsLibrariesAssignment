// FOR LOGO ANIMATION
gsap.to(".logo", { duration: 5, x: 165, backgroundColor: "rgba(199, 203, 206, 0.5)", borderRadius: "20 %", ease: "back" });

// FOR FEATURED ITEM CLICKED
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("featuredmodal");
  const modalImg = modal.querySelector("img");

  document.querySelectorAll(".item .fa-plus").forEach(icon => {
    icon.addEventListener("click", function (event) {
      event.preventDefault();

      // Find the image within the same parent container `.item`
      const imgSrc = this.closest(".item").querySelector("img").src;

      // Set the modal image source to the clicked image source
      modalImg.src = imgSrc;

      var bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    });
  });
});

// FOR FILTERING FEATURED ITEMS

$(document).ready(function () {
  $(".button").click(function () {
    var value = $(this).attr("data-filter");

    if (value === "all") {
      $(".filter-item").removeClass("d-none").addClass("d-block");
    } else {
      $(".filter-item").removeClass("d-block").addClass("d-none"); // Hide all items
      $(".filter-item." + value).removeClass("d-none").addClass("d-block"); // Show matching items
    }
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// CONTACT SECTION
(function ($) {
  'use strict';

  var floatingLabel;

  floatingLabel = function (onload) {
    var $input;
    $input = $(this);
    if (onload) {
      $.each($('.bt-flabels__wrapper input'), function (index, value) {
        var $current_input;
        $current_input = $(value);
        if ($current_input.val()) {
          $current_input.closest('.bt-flabels__wrapper').addClass('bt-flabel__float');
        }
      });
    }

    setTimeout((function () {
      if ($input.val()) {
        $input.closest('.bt-flabels__wrapper').addClass('bt-flabel__float');
      } else {
        $input.closest('.bt-flabels__wrapper').removeClass('bt-flabel__float');
      }
    }), 1);
  };

  $('.bt-flabels__wrapper input').keydown(floatingLabel);
  $('.bt-flabels__wrapper input').change(floatingLabel);

  window.addEventListener('load', floatingLabel(true), false);
  $('.js-flabels').parsley().on('form:error', function () {
    $.each(this.fields, function (key, field) {
      if (field.validationResult !== true) {
        field.$element.closest('.bt-flabels__wrapper').addClass('bt-flabels__error');
      }
    });
  });

  $('.js-flabels').parsley().on('field:validated', function () {
    if (this.validationResult === true) {
      this.$element.closest('.bt-flabels__wrapper').removeClass('bt-flabels__error');
    } else {
      this.$element.closest('.bt-flabels__wrapper').addClass('bt-flabels__error');
    }
  });

})(jQuery);

