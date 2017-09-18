/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.book.festiveRoom = Core.service.book.festiveRoom || {};

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.festiveRoom.bookFestiveRoom = function () {
        return {
            name: "bookFestiveRoom",
            method: "POST",
            url: "",
            func: function (price) {
                document.getElementById("label_price").textContent = price + " CFA";
                Core.payment.paypal.generateButton(price);
            },
            error: function (statusCode) {
                document.getElementById("valide_container").textContent = "";
                document.getElementById("error_container").textContent = "La salle des fêtes n'est pas disponible durant cette période."
            }
        };
    };

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.festiveRoom.getListBookById = function () {
        return {
            name: "getListBookById",
            method: "GET",
            url: "",
            func: function (json) {
                var headers = {
                    id: {
                        content: "Numéro"
                    },
                    date_start : {
                        content: "Arrivée"
                    },
                    date_end: {
                        content: "Départ"
                    },
                    price: {
                        content: "Prix"
                    }
                };

                utils.template.createLiTemplate(headers, json, document.getElementById("book_festiveRoom_content"), "read");
            },
            error: function (statusCode) {

            }
        };
    };
   
})();