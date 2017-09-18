/**
 * Created by maxime on 11/07/2017.
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.services = Core.class.services || {};

    /**
     * Init the services list into the admin panel
     */
    Core.class.services.initAdminViewListServices = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.services.initAdminViewListService(), paramRequest, null);
    };
})();