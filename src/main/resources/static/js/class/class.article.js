/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.class.article = Core.class.article || {};

    /**
     *  Send request to create Article
     *
     * @param json
     */
    Core.class.article.create = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.restaurant.create(), paramRequest, json);
    };

    /**
     *  Send request to update Article
     *
     * @param json
     */
    Core.class.article.udapte = function (json) {
        var paramRequest = "token=" + client.token;
        utils.ajaxRequest(Core.service.article.udapte(), paramRequest, json);
    };

    /**
     *  Send request to delete Article By Id
     *
     * @param id article
     */
    Core.class.article.delete = function (id) {
        var paramRequest = "token=" + client.token + "&id=" + id;
        utils.ajaxRequest(Core.service.article.delete(), paramRequest, null);
    };

    /**
     *  Call ajax request to getList Article
     */
    Core.class.article.getList = function () {
        utils.ajaxRequest(Core.service.article.getList(), paramRequest, null);
    };

    /**
     *  Call ajax request to init Admin View List Articles
     */
    Core.class.article.initAdminViewListArticles = function () {
        utils.ajaxRequest(Core.service.article.initAdminViewListArticles(), null, null);
    };
})();
