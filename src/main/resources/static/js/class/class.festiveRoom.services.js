/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.festiveRoom.services = Core.class.festiveRoom.services || {};

    /**
     * Create a new service
     * @param json
     */
    Core.class.festiveRoom.services.create = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.festiveRoom.services.create(), paramRequest, json);
    };

    /**
     * Update a new service
     * @param json
     */
    Core.class.festiveRoom.services.update = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.festiveRoom.services.update(), paramRequest, json);
    };

    /**
     * Delete a service by id
     * @param id
     */
    Core.class.festiveRoom.services.delete = function (id) {
        var paramRequest = "token=" + client.token + "&id=" + id;
        utils.ajaxRequest(Core.service.festiveRoom.services.delete(), paramRequest, null);
    };

    /**
     * Return the services list
     */
    Core.class.festiveRoom.services.getList = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.festiveRoom.services.getList(), paramRequest, null);
    };
})();
