/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.festiveRoom = Core.class.festiveRoom || {};

    /**
     * Init the of the festive room (display services list)
     */
    Core.class.festiveRoom.initView = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.festiveRoom.services.getList(), paramRequest, null);
    };

})();