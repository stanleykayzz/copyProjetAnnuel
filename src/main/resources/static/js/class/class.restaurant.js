/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.restaurant = Core.class.restaurant || {};

    /**
     * Create a new table
     * @param json
     */
    Core.class.restaurant.create = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.restaurant.create(), paramRequest, json);
    };

    /**
     * Update a table
     * @param json
     */
    Core.class.restaurant.udapte = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.restaurant.udapte(), paramRequest, json);
    };

    /**
     * Delete a table by id
     * @param id
     */
    Core.class.restaurant.delete = function (id) {
        var paramRequest = "token=" + client.token + "&id=" + id;
        utils.ajaxRequest(Core.service.restaurant.delete(), paramRequest, json);
    };

    /**
     * Init the table list into the admin panel
     */
    Core.class.restaurant.initAdminViewListRestaurant = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.restaurant.initViewListRestaurant(), paramRequest, json);
    };

})();