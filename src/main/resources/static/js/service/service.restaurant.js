/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.restaurant = Core.service.restaurant || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.create = function () {
        return {
            name   : "create",
            method : "POST",
            url    : "/restaurant",
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
    Core.service.restaurant.udapte = function () {
        return {
            name   : "create",
            method : "PUT",
            url    : "/restaurant",
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
    Core.service.restaurant.delete = function () {
        return {
            name   : "delete",
            method : "DELETE",
            url    : "/restaurant",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     * Init the restaurant book into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.initAdminViewListRestaurant = function () {
        return {
            name   : "initViewListRestaurant",
            method : "GET",
            url    : "/restaurant",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    nbClients: {
                        content: "Nombre de places"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "restaurant_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonUpdate(e, Core.service.restaurant.update());
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "restaurant_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.restaurant.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_restaurant_content"), "create", Core.service.restaurant.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_restaurant_content"), "update");
            },
            error : function(){

            }
        };
    };
})();