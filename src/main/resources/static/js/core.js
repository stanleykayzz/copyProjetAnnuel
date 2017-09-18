/**
 * Created by maxime.
 *
 * version 1.0.0
 */

;(function() {
    "use strict";

    var mInstances = {};

    var Core = Core || {};

    /**
     * The current version of Core
     */
    Core.version = "1.0.0";

    /**
     * EXPORT:
     * *******
     */
    if(typeof this.Core !== "undefined")
        throw "An object called Core is already in the global scope.";

    this.Core = Core;

    this.onload = function(){
        //Declaration variables in Global Scope
        window.utils      = Core.utils      || {};
        window.data       = Core.data       || {};
        window.class      = Core.class      || {};
        window.service    = Core.service    || {};
        window.controller = Core.controller || {};
        window.payment    = Core.payment    || {};

        data.currentPath = data.viewList.accueil.viewPath;

        if(window.sessionStorage.getItem("token")     != null
            && window.sessionStorage.getItem("token") != undefined)
            Core.class.client.reloadClient();

        controller.menu.reloadPage();
        controller.menu.addContextualMenuButtons();
        controller.menu.manageMenuButtons();

        //utils.manageImages(data.viewList.accueil.listImage, data.mainImageID);
        utils.setDatepickerLanguage();
        utils.include(data.viewList.accueil.viewPath, data.viewList.accueil.name);
        
        Core.class.category.getListCategories();
    };

}).call(this); //Get current Context (window) into script
