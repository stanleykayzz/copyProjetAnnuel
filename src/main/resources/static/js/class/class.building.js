/**
 * Created by maxime on 11/07/2017.
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.building = Core.class.building || {};

    /**
     * init Admin View List Building
     */
    Core.class.building.initAdminViewListBuilding = function () {
        utils.ajaxRequest(Core.service.building.initAdminViewListBuilding(), null, null);
    };
})();