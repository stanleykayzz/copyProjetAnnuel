/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.data = Core.data || {};

    Core.data = {
        pathHtml   : "html/",
        pathScript : "js/",
        viewList   : {
            accueil    : {
                name      : "accueil",
                viewPath  : "view.accueil.html",
                listImage : ["img/home-bg.jpg"]
            },
            connexion : {
                name       : "connexion",
                viewPath   : "view.signin.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            chambre : {
                name      : "chambre",
                viewPath  : "view.chambre.html",
                listImage : ["img/room1.jpg","img/room2.jpg","img/room3.jpg","img/room4.jpg","img/room5.jpg","img/room6.jpg","img/room7.jpg","img/room8.jpg","img/room9.jpg","img/room10.jpg"]
            },
            restaurant : {
                name      : "restaurant",
                viewPath  : "view.restaurant.html",
                listImage : ["img/restau1.jpg","img/restau2.jpg","img/restau3.jpg","img/restau4.jpg","img/restau5.jpg","img/restau6.jpg","img/restau7.jpg"]
            },
            contact : {
                name      : "contact",
                viewPath  : "view.contact.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            compte : {
                name      : "compte",
                viewPath  : "view.compte.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            about      : {
                name      : "about",
                viewPath  : "view.about.html",
                listImage : ["img/about-bg.jpg"]
            },
            logout     : {
                name      : "logout",
                viewPath  : "view.accueil.html",
                listImage : ["img/home-bg.jpg"]
            },
            confirmation : {
                name      : "confirmation",
                viewPath  : "view.confirmation.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            festiveRoom : {
                name      : "festiveRoom",
                viewPath  : "view.festiveRoom.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            clientListBook : {
                name      : "clientListBook",
                viewPath  : "view.clientListBook.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            admin : {
                name      : "admin",
                viewPath  : "view.admin.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            },
            listArticle : {
                name      : "listArticle",
                viewPath  : "view.article.html",
                listImage : ["img/contact1.jpg","img/contact2.jpg","img/contact3.jpg","img/contact4.jpg","img/contact5.jpg"]
            }
        },
        //basicUrl   : "https://residencedeshautsdemenaye.herokuapp.com/api",
        basicUrl   : "http://localhost:8080/api",
        getMenu : function () {
            return document.getElementById("ul_menu");
        },
        getIncludeContainer : function () {
            return document.getElementById("include_content");
        },
        roomPath : {
            "0" : ["Chambre simple/img/IMG_5533.jpg"],
            "1" : ["Chambre double/img/IMG_5523.jpg","img/IMG_5531.jpg"],
            "2" : ["Suite junior/img/IMG_5507.jpg", "img/IMG_5548.jpg", "img/IMG_5549.jpg"],
            "3" : ["img/suiteExecutive/IMG_5551.jpg", "img/suiteExecutive/IMG_5552.jpg", "img/suiteExecutive/IMG_5553.jpg", "img/suiteExecutive/IMG_5554.jpg", "img/suiteExecutive/IMG_5555.jpg"]
        },
        currentPath : null,
        captchaResult : null,
        mainImageID : "main_header"
    };
})();
