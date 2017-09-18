/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.newsLetter = Core.service.newsLetter || {};

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.newsLetter.send = function () {
        return {
            name   : "send",
            method : "POST",
            url    : "/newsLetter",
            func : function (clt) {

            },
            error : function(statusCode){

            }
        };
    }
})();