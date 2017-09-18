/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.contact = Core.class.contact || {};

    /**
     * Send an email which contains the contact informaions
     * @param json
     */
    Core.class.contact.send = function (json) {
        utils.ajaxRequest(Core.service.contact.send(), null, json);
    };
})();
