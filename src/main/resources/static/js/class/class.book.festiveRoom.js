/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.book.festiveRoom = Core.class.book.festiveRoom || {};

    /**
     * Book festive room
     * @param paramJson
     * @param bodyJson
     */
    Core.class.book.festiveRoom.bookFestiveRoom = function (paramJson, bodyJson) {
        var paramRequest = "token=" + client.token + "&dateStart=" + paramJson.dateStart + "&dateEnd" + paramJson.dateEnd;
        utils.ajaxRequest(Core.service.book.festiveRoom.book(), paramRequest, bodyJson);
    };

    /**
     * init List Book FestiveRoom
     */
    Core.class.book.festiveRoom.initListBookFestiveRoom = function () {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.book.festiveRoom.getListBookById(), paramRequest, bodyJson);
    };
})();