/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.book.restaurant = Core.class.book.restaurant || {};

    /**
     *  Book table in restaurant
     * @param json
     */
    Core.class.book.restaurant.bookRestaurant = function (json) {
        var paramRequest = "token=" + client.token + "&type=" + json.type + "&number=" + json.number;
        //utils.ajaxRequest(Core.service.book.restaurant.bookRestaurant(), paramRequest, null);
    };

    /**
     * Init the list of booking
     */
    Core.class.book.restaurant.initListBookRestaurant = function () {
        var paramRequest = "token=" + client.token;
        //utils.ajaxRequest(Core.service.book.restaurant.getListBookById(), paramRequest, null);
    };
})();