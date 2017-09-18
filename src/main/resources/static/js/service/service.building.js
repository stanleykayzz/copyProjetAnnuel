/**
 * Created by maxime on 11/07/2017.
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.building = Core.service.building || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.building.create = function () {
        return {
            name   : "create",
            method : "POST",
            url    : "/building",
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
    Core.service.building.update = function () {
        return {
            name   : "update",
            method : "PUT",
            url    : "/building",
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
    Core.service.building.delete = function () {
        return {
            name   : "delete",
            method : "DELETE",
            url    : "/building",
            func : function () {

            },
            error : function(){

            }
        };
    };

    /**
     * Generate the building list into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.building.initAdminViewListBuilding = function () {
        return {
            name   : "initViewListBuilding",
            method : "GET",
            url    : "/building",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    name: {
                        content: "Nom"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "restaurant_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonUpdate(e, Core.service.building.update());
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "restaurant_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.building.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_building_content"), "create", Core.service.building.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_building_content"), "update");
            },
            error : function(){

            }
        };
    };
})();