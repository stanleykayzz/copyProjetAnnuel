/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.restaurant = Core.controller.restaurant || {};

    /**
     * Init the restaurant view and events
     */
    Core.controller.restaurant.initView = function () {
        var typeElement, numberElement, btn_booking;

        typeElement = document.getElementById("select_time");
        numberElement = document.getElementById("select_number");
        btn_booking = document.getElementById("btn_search_table");
        
        utils.addListener(btn_booking, "click", function () {
            var json = {
                type: typeElement.options[typeElement.selectedIndex].value,
                number: numberElement.options[numberElement.selectedIndex].value
            };
            Core.class.book.restaurant.bookRestaurant(json);
        }, false);
    };

})();
