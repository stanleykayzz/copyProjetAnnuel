/**
 * Created by maxime on 11/07/2017.
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.services = Core.service.services || {};

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.services.create = function () {
        return {
            name   : "create",
            method : "GET",
            url    : "/services",
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
    Core.service.services.update = function () {
        return {
            name   : "update",
            method : "PUT",
            url    : "/services",
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
    Core.service.services.delete = function () {
        return {
            name   : "delete",
            method : "DELETE",
            url    : "/services",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     * Generate the template list service into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.services.initAdminViewListService = function () {
        return {
            name   : "initViewListServices",
            method : "GET",
            url    : "/services",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    name: {
                        content: "Nom"
                    },
                    price: {
                        content: "Prix"
                    },
                    quantity: {
                        content: "Quantité"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "restaurant_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonUpdate(e, Core.service.services.update());
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "restaurant_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.services.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_services_content"), "create", Core.service.services.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_services_content"), "update");
            },
            error : function(){

            }
        };
    };
})();