/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.includeContainer = Core.controller.includeContainer || {};

    /**
     * Switch the different controller
     * @param key
     */
    Core.controller.includeContainer.switchView = function (key) {
        var pageObject = data.viewList[key.toString()];

        if (pageObject !== null) {
            Core.class.client.reloadClient();
            utils.empty(data.getIncludeContainer());
            utils.include(pageObject.viewPath, pageObject.name);
            //utils.manageImages(pageObject.listImage, data.mainImageID);
            data.currentPath = pageObject.viewPath;
        }
    };

    /**
     * initViewEvents
     * @param viewName
     */
    Core.controller.includeContainer.initViewEvents = function (viewName) {
        switch (viewName) {
            case "connexion" :
                controller.clientSignInAndUp.initView();
                break;
            case "logout" :
                client.logout();
                break;
            case "compte" :
                controller.clientAccount.initView();
                break;
            case "confirmation" :
                controller.code.confirmationCode();
                break;
            case "chambre":
                controller.room.initView();
                break;
            case "restaurant":
                controller.restaurant.initView();
                break;
            case "festiveRoom":
                Core.class.festiveRoom.initView();
                break;
            case "clientListBook":
                controller.clientListBook.initView();
                break;
            case "admin":
                controller.admin.initView();
                break;
            case "listArticle":
                controller.article.initView();
                break;
            case "contact":
                controller.contact.initView();
                break;
        }
    };
    
})();