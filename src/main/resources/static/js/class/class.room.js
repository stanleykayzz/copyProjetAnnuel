/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.room = Core.class.room || {};

    Core.class.room.search = function (json) {
        var paramRequest = "" +
            "date_start=" + json.dateStart +
            "&date_end=" + json.dateEnd +
            "&type=" + json.type;

        // utils.ajaxRequest(Core.service.room.search(), paramRequest, null);
        Core.service.room.search().func({
            room_1: {
                type: "0",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_2: {
                type: "0",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_3: {
                type: "0",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_4: {
                type: "1",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_5: {
                type: "1",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_6: {
                type: "1",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_7: {
                type: "0",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            },
            room_8: {
                type: "3",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            }
            ,
            room_9: {
                type: "2",
                description: "Prevent bad actors from posting malicious or low-quality content that can permanently damage your business’ reputation and drive good users off your site."
            }
        });
    };

    /**
     * Create a new room
     * @param json
     */
    Core.class.room.create = function (json) {
        var paramRequest = "token=" + client.tokenDate;
        utils.ajaxRequest(Core.service.room.create(), paramRequest, json);
    };

    /**
     * Update a room
     * @param json
     */
    Core.class.room.update = function (json) {
        var paramRequest = "token=" + client.tokenDate;
        utils.ajaxRequest(Core.service.room.update(), paramRequest, json);
    };

    /**
     * Delete a room by id
     * @param id
     */
    Core.class.room.delete = function (id) {
        var paramRequest = "token=" + client.tokenDate + "&id=" + id;
        utils.ajaxRequest(Core.service.room.delete(), paramRequest, null);
    };

    /**
     * Init the list room in the admin panel
     */
    Core.class.room.initAdminListRoom = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.room.initAdminListRoom(), paramRequest, null);
    };
})();
