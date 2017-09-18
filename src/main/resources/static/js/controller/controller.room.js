/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.room = Core.controller.room || {};

    /**
     * Init the room view and events
     */
    Core.controller.room.initView = function () {
        var startDatepicker, endDatepicker, type, btnSearch;
        var container;
        var startDateID = "#reservation_start_date";
        var endDateID = "#reservation_end_date";

        utils.reservation.datePicker(startDateID, new Date(), null);
        utils.reservation.datePicker(endDateID, new Date(), null);

        var initVariables = function () {
            startDatepicker = document.getElementById("reservation_start_date");
            endDatepicker = document.getElementById("reservation_end_date");
            type = document.getElementById("reservation_type");
            btnSearch = document.getElementById("btn_search");
            container = document.getElementById("include_room");
        }();
        var manageEvents = function () {
            $(startDateID).datepicker("option", "onSelect", function () {
                var minDate = $(startDateID).datepicker("getDate");
                $(endDateID).datepicker("option", "minDate", minDate);
                utils.empty(container);
            });

            $(endDateID).datepicker("option", "onSelect", function () {
                utils.empty(container);
            });

            utils.addListener(btnSearch, "click", function () {
                utils.empty(container);
                var jsonValidator = {
                    datepicker_start: startDatepicker,
                    datepicker_end: endDatepicker
                };

                var formValid = utils.form.formValidator(jsonValidator, startDatepicker.style);

                var jsonRoom = {
                    dateStart: startDatepicker.value,
                    dateEnd: endDatepicker.value,
                    datepicker_type: type.value
                };

                var startString = startDatepicker.value.split("/");
                var endString = endDatepicker.value.split("/");

                var formatDateStart = startString[2] + "-" + startString[1] + "-" + startString[0];
                var formatDateEnd = endString[2] + "-" + endString[1] + "-" + endString[0];

                var result = utils.getDays(new Date(formatDateStart), new Date(formatDateEnd));

                if (result.day > 0) {
                    Core.class.room.search(jsonRoom);
                }
            }, false);
        }();
    };

    /**
     * Search the room by date start and end
     * @param listRoom
     */
    Core.controller.room.roomSearch = function (listRoom) {
        var container, searchContainer, bookingContainer, listReservationContainer;
        var startDatepicker, endDatepicker, type_input, reason, list_reservation, btn_book;
        var startString, endString, formatDateStart, formatDateEnd;
        var list_simple, list_double, list_junior, list_executive;
        var error_container;
        var jsonQuantity;

        var getDays = function () {
            return utils.getDays(new Date(formatDateStart), new Date(formatDateEnd));
        };
        var viewList = function (id, content, quantity) {
            var div;
            if (document.getElementById(id) === null || document.getElementById(id) === undefined) {
                div = document.createElement("div");
                div.id = id;
                div.style.display = "block";
            } else {
                div = document.getElementById(id);
                utils.empty(div);
            }

            div.style.marginTop = "5px";

            var span_container = document.createElement("span");
            span_container.classList.add("md_text_span");
            span_container.style.marginLeft = "5px";
            span_container.textContent += content + " " + quantity;

            var button_delete = document.createElement("span");
            button_delete.classList.add("glyphicon");
            button_delete.classList.add("glyphicon-remove");
            button_delete.style.cursor = "pointer";
            button_delete.name = id.split("type_")[1];

            utils.addListener(button_delete, "click", function (e) {
                delete jsonQuantity[e.target.name];
                utils.empty(e.target.parentElement);
            }, false);


            div.appendChild(button_delete);
            div.appendChild(span_container);
            list_reservation.appendChild(div);

        };
        var viewRoom = function (id, number, json) {
            var divRoom, imageRoom, contentRoom, container_title,
                titleRoom, disponible_container, disponible,
                disponible_result, costbynight_container, costbynight,
                costbynight_result_franc,
                cost_container, cost, cost_result_franc,
                description_container, description_text_container, description_result,
                day_container, day, day_result, btn_add,
                quantity, quantity_container, quantity_result;

            var initVariables = function () {
                divRoom = document.createElement("div");
                divRoom.id = id;
                divRoom.classList.add("room_type_div");

                imageRoom = document.createElement("img");
                imageRoom.classList.add("room_type_image");
                imageRoom.src = json.imagePath;

                contentRoom = document.createElement("div");
                contentRoom.classList.add("room_content");

                container_title = document.createElement("div");
                container_title.classList.add("reserv_container");

                titleRoom = document.createElement("span");
                titleRoom.classList.add("room_title");
                titleRoom.textContent = json.name;

                disponible_container = document.createElement("div");
                disponible_container.classList.add("reserv_container");
                disponible_container.style.textAlign = "left";
                disponible_container.style.paddingLeft = "10px";

                disponible = document.createElement("span");
                disponible.classList.add("title_span");
                disponible.classList.add("available");
                disponible.textContent = "Disponible : ";

                disponible_result = document.createElement("span");
                disponible_result.classList.add("title_span");
                disponible_result.classList.add("available");
                disponible_result.textContent = number;

                costbynight_container = document.createElement("div");
                costbynight_container.classList.add("reserv_container");
                costbynight_container.style.textAlign = "left";
                costbynight_container.style.paddingLeft = "10px";

                costbynight = document.createElement("span");
                costbynight.classList.add("title_span");
                costbynight.textContent = "Coût par nuit : ";

                costbynight_result_franc = document.createElement("span");
                costbynight_result_franc.classList.add("text_span");
                costbynight_result_franc.textContent = json.costByNight + " francs CFA";

                cost_container = document.createElement("div");
                cost_container.classList.add("reserv_container");
                cost_container.style.textAlign = "left";
                cost_container.style.paddingLeft = "10px";

                cost = document.createElement("span");
                cost.classList.add("title_span");
                cost.textContent = "Coût du séjour : ";

                cost_result_franc = document.createElement("span");
                cost_result_franc.classList.add("text_span");
                cost_result_franc.textContent = json.costByNight * getDays().day + " francs CFA";

                description_container = document.createElement("div");
                description_container.classList.add("reserv_container");

                description_text_container = document.createElement("div");
                description_text_container.classList.add("description_text_container");

                description_result = document.createElement("span");
                description_result.classList.add("description_span");
                description_result.textContent = json.description;

                day_container = document.createElement("div");
                day_container.classList.add("reserv_container");
                day_container.style.textAlign = "left";
                day_container.style.paddingLeft = "10px";

                day = document.createElement("span");
                day.classList.add("title_span");
                day.textContent = "Durée du séjour : ";

                day_result = document.createElement("span");
                day_result.classList.add("text_span");
                day_result.textContent = getDays().day + " jours";

                quantity_container = document.createElement("div");
                quantity_container.classList.add("reserv_container");
                quantity_container.style.textAlign = "left";
                quantity_container.style.paddingLeft = "10px";

                quantity = document.createElement("span");
                quantity.classList.add("title_span");
                quantity.textContent = "Quantité : ";

                quantity_result = document.createElement("input");
                quantity_result.classList.add("quantity_input");
                quantity_result.classList.add("text_span");
                quantity_result.type = "number";
                quantity_result.value = "1";
                quantity_result.min = "1";
                quantity_result.max = number;
                utils.addListener(quantity_result, "change", function (e) {
                    cost_result_franc.textContent = (json.costByNight * getDays().day) * e.target.value + " francs CFA";
                }, false);

                utils.addListener(quantity_result, "keydown", function (e) {
                    utils.pauseEvent(e);
                }, false);

                btn_add = document.createElement("a");
                btn_add.id = "btn_type_" + json.id;
                btn_add.classList.add("btn_reservation");
                btn_add.name = json.id;
                btn_add.textContent = "AJOUTER";
            }();
            var appendElements = function () {
                divRoom.appendChild(imageRoom);
                divRoom.appendChild(contentRoom);

                container_title.appendChild(titleRoom);

                contentRoom.appendChild(container_title);
                contentRoom.appendChild(description_text_container);
                contentRoom.appendChild(costbynight_container);
                contentRoom.appendChild(cost_container);
                contentRoom.appendChild(day_container);
                contentRoom.appendChild(quantity_container);
                contentRoom.appendChild(disponible_container);
                contentRoom.appendChild(btn_add);

                disponible_container.appendChild(disponible);
                disponible_container.appendChild(disponible_result);

                cost_container.appendChild(cost);
                cost_container.appendChild(cost_result_franc);

                costbynight_container.appendChild(costbynight);
                costbynight_container.appendChild(costbynight_result_franc);

                day_container.appendChild(day);
                day_container.appendChild(day_result);

                quantity_container.appendChild(quantity);
                quantity_container.appendChild(quantity_result);

                description_text_container.appendChild(description_result);

                container.appendChild(divRoom);
            }();

            return btn_add;
        };
        var initVariables = function () {
            container = document.getElementById("include_room");
            searchContainer = document.getElementById("search_container");
            bookingContainer = document.getElementById("include_reservation");
            type_input = document.getElementById("reservation_type");
            reason = document.getElementById("reservation_reason");
            list_reservation = document.getElementById("list_reservation");
            listReservationContainer = document.getElementById("include_reservation_list");
            listReservationContainer.style.display = "block";

            startDatepicker = document.getElementById("reservation_start_date");
            endDatepicker = document.getElementById("reservation_end_date");

            startString = startDatepicker.value.split("/");
            endString = endDatepicker.value.split("/");

            formatDateStart = startString[2] + "-" + startString[1] + "-" + startString[0];
            formatDateEnd = endString[2] + "-" + endString[1] + "-" + endString[0];

            list_simple = document.getElementById("simpleRoom_content");
            list_double = document.getElementById("doubleRoom_content");
            list_junior = document.getElementById("junior_content");
            list_executive = document.getElementById("executive_content");

            btn_book = document.getElementById("btn_book");
            error_container = document.getElementById("error_container");

            jsonQuantity = {};
        }();
        var initView = function () {
            var listType = new Object(null);
            
            for (var r in listRoom) {
                listType[listRoom[r].type] = listType[listRoom[r].type] || {};

                if (listType[listRoom[r].type].number === undefined)
                    listType[listRoom[r].type].number = 1;
                else
                    listType[listRoom[r].type].number += 1;
            }

            for (var type in listType) {
                if (type_input.value === "all" || type_input.value === type) {
                    for (var c in data.listCategories) {
                        if (data.listCategories[c].id == type) {
                            var viewRoomBtn = viewRoom("room_" + type, listType[type].number, data.listCategories[c]);
                        }
                    }
                }
            }

            for (type in listType) {
                if (type_input.value === "all" || type_input.value === type) {
                    var btn = document.getElementById("btn_type_" + type);
                    utils.addListener(btn, "click", function (e) {
                        var quantity = e.target.parentElement.getElementsByClassName("quantity_input")[0];
                        var name = e.target.getAttribute("name");

                        jsonQuantity[e.target.name] = {
                            quantity: quantity.value
                        };
                        viewList("list_" + e.target.id, data.listCategories[name].name, "X" + quantity.value);
                    }, false);
                }
            }

            utils.addListener(btn_book, "click", function (e) {
                error_container.textContent = "";

                if(Object.keys(jsonQuantity).length === 0 && jsonQuantity.constructor === Object){
                    error_container.textContent = "Vous devez choisir au moins une chambre pour accéder au paiement";
                    return;
                }

                if (!window.client) {
                    controller.includeContainer.switchView("connexion");
                    return;
                }

                var body = {};
                searchContainer.style.display = "none";
                bookingContainer.style.display = "block";
                for (var r in jsonQuantity) {
                    body["reservation_" + r] = {
                        "date_start": formatDateStart,
                        "date_end": formatDateEnd,
                        "type": r,
                        "quantity": jsonQuantity[r].quantity,
                        "reason": reason.value
                    };
                }

                Core.class.book.room.bookRoom(body);
                controller.room.roomBooking(startDatepicker.value, endDatepicker.value, body);

            }, false);
        }();
    };

    /**
     * Init the view book room
     * @param dateStart
     * @param dateEnd
     * @param list
     */
    Core.controller.room.roomBooking = function (dateStart, dateEnd, list) {
        var labelDateStart, labelDateEnd, labelBook, image,
            container, button_container, btn_return;

        var initVariables = function () {
            container = document.getElementById("include_reservation");
            labelDateStart = document.getElementById("label_start_date");
            labelDateEnd = document.getElementById("label_end_date");
            labelBook = document.getElementById("labelBook");
            image = document.getElementById("image_reservation");
            btn_return = document.getElementById("btn_return");
        }();
        var initView = function () {
            labelDateStart.textContent = dateStart;
            labelDateEnd.textContent = dateEnd;
            for (var l in list) {
                var span = document.createElement("span");
                span.classList.add("text_span");
                span.textContent = "X" + list[l].quantity + " " + utils.capitalizeFirstLetter(data.listCategories[list[l].type].name);

                labelBook.appendChild(span);
            }


            utils.addListener(btn_return, "click", function (e) {
                Core.class.book.room.cancelBookRoom();
            }, false);
        }();

    };
})();
