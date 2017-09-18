/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.book.room = Core.class.book.room || {};

    /**
     * Save a book room
     * @param json
     */
    Core.class.book.room.bookRoom = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.book.room.bookRoom(), paramRequest, json);
    };

    /**
     * Cancel the book room
     */
    Core.class.book.room.cancelBookRoom = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.book.room.cancelBookRoom(), paramRequest, null);

    };

    /**
     * init List Book Room Current for client and admin, the response according to the status
     */
    Core.class.book.room.initListBookRoomCurrent = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.book.room.getCurrentList(), paramRequest, null);
    };

    /**
     * init List Book Room Hold for client and admin, the response according to the status
     */
    Core.class.book.room.initListBookRoomHold = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.book.room.getHoldList(), paramRequest, null);
    };
})();