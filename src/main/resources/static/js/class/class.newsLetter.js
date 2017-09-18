/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.newsLetter = Core.class.newsLetter || {};

    /**
     * Init the news letter view in the admin panel
     */
    Core.class.iniAdminViewNewsLetter = function () {
        var btn = document.getElementById("btn_newsLetter");
        utils.addListener(btn, "click", function () {
            var title = document.getElementById("title_news");
            var content = document.getElementById("content_news");

            if(title.value !== "" && content.value !== ""){
                var paramRequest = "token=" + client.token;
                var body = {
                    title: title.value,
                    content: content.value
                };

                utils.ajaxRequest(Core.service.newsLetter.send(), paramRequest, body);
            }
        }, false);


    };

    /**
     * Send the news letter content
     * @param json
     */
    Core.class.newsLetter.send = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajax(Core.service.newsLetter.send(), paramRequest, json)
    };
})();
