/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.article = Core.service.article || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.create = function () {
        return {
            name   : "create",
            method : "POST",
            url    : "/article",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.udapte = function () {
        return {
            name   : "udapte",
            method : "PUT",
            url    : "/article",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.delete = function () {
        return {
            name   : "delete",
            method : "DELETE",
            url    : "/article",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     * The callback func create the article list into the view article
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.getList = function () {
        return {
            name   : "getList",
            method : "GET",
            url    : "/article",
            func : function (json) {
                for(var j in json){
                    utils.template.createArticleTemplate(document.getElementById("article_container"), json[j]);
                }
            },
            error : function(){

            }
        };
    };

    /**
     * The callback func create the template article into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.initAdminViewListArticles = function () {
        return {
            name   : "initAdminViewListArticles",
            method : "GET",
            url    : "/article",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    title: {
                        content: "Titre"
                    },
                    content: {
                        content : "Contenu"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "room_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventArticleButtonUpdate(e, Core.service.article.udapte(), "article");
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "room_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.article.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createArticleLiTemplate(headers, json, document.getElementById("list_article_content"), "update");
            },
            error : function(){

            }
        };
    };
})();