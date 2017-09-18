/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.contact = Core.service.contact || {};

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.contact.send = function () {
        return {
            name: "send",
            method: "POST",
            url: "/contact",
            func: function () {

            },
            error: function (statusCode) {
            }
        }
    };
})();