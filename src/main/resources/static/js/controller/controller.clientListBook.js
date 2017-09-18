/**
 * Created by maxime.
 *
 * version 1.0.0
 */

;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.clientListBook = Core.controller.clientListBook || {};

    /**
     * Display all list book for a client
     */
    Core.controller.clientListBook.initView = function () {
        Core.class.book.room.initListBookRoomCurrent();
        Core.class.book.room.initListBookRoomHold();
        Core.class.book.restaurant.initListBookRestaurant();
        Core.class.book.festiveRoom.initListBookFestiveRoom();

        var list_menu = document.getElementsByClassName("li_menu");

        for (var i = 0; i < list_menu.length; i++) {
            utils.template.manageListDisplay(list_menu[i].id);
        }
    };
})();