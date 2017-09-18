/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.category = Core.class.category || {};

    /**
     * Create a new category
     */
    Core.class.category.create = function () {
        var paramRequest = "token" + client.token;
        utils.ajaxRequest(Core.service.category.create(), paramRequest, null);
    };

    /**
     *  Delete a category by id
     * @param id
     */
    Core.class.category.delete = function (id) {
        var paramRequest = "token" + client.token + "&id=" + id;
        utils.ajaxRequest(Core.service.category.delete(), paramRequest, null);
    };

    /**
     * Init the list of categories
     */
    Core.class.category.getListCategories = function () {
        utils.ajaxRequest(Core.service.category.getListCategories(), null, null);
    };

    /**
     * Init the list of categories in the panel admin
     */
    Core.class.category.initAdminListCategories = function () {
        utils.ajaxRequest(Core.service.category.initViewListCategories(), null, null);
    };

})();
