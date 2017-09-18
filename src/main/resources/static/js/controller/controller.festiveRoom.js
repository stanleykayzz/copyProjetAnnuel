/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.festiveRoom = Core.controller.festiveRoom || {};

    /**
     * Init the festive room view and events
     * @param items
     */
    Core.controller.festiveRoom.initView = function (items) {
        var include_container, search_container;
        var startDateID, endDateID;
        var startDatepicker, endDatepicker,
            startString, endString,
            formatDateStart, formatDateEnd,
            include_items, btn_book,
            list_booked_items, jsonItems,
            error_container, valide_container;
        var label_start_date, label_end_date,
            label_price, list_items, btn_return;

        var resizeContainer = function (type, value) {
            if (type === "+")
                search_container.style.height = search_container.getBoundingClientRect().height + value + "px";

            if (type === "-")
                search_container.style.height = search_container.getBoundingClientRect().height - value + "px";
        };
        var createItem = function (id, object) {
            var div_reservation = document.createElement("div");
            var div_list;
            div_reservation.classList.add("div_reservation");

            if (object !== null) {
                var content_left = document.createElement("div");
                content_left.classList.add("content_left");

                var title_span = document.createElement("span");
                title_span.classList.add("title_span_black");
                title_span.style.textAlign = "left";
                title_span.textContent = utils.capitalizeFirstLetter(object.name) + " " + object.price + " CFA";

                var input = document.createElement("input");
                input.classList.add("input_green");
                input.min = 0;
                input.max = object.quantity;
                input.style.width = "70%";
                utils.addListener(input, "keyup", function (e) {
                    if (e.target.value === "")
                        e.target.value = 0;

                    if (parseInt(e.target.value) > parseInt(e.target.max))
                        e.target.value = e.target.max;

                    if (parseInt(e.target.value) < parseInt(e.target.min))
                        e.target.value = e.target.min;

                    if (e.target.value > 0) {
                        jsonItems[id.split("_")[1]].quantity = e.target.value;
                        div_list = viewList("list_" + object.id, e.target, e.target.value, utils.capitalizeFirstLetter(object.name));
                    } else {
                        div_list = viewList("list_" + object.id, e.target, e.target.value, utils.capitalizeFirstLetter(object.name));
                        resizeContainer("-", 20);
                        div_list.parentElement.removeChild(div_list);
                    }
                }, false);

                content_left.appendChild(title_span);
                content_left.appendChild(input);
                div_reservation.appendChild(content_left);
            }

            include_items.appendChild(div_reservation);
        };
        var viewList = function (id, element, value, name) {
            var div;
            if (document.getElementById(id) === null || document.getElementById(id) === undefined) {
                div = document.createElement("div");
                div.id = id;
                div.style.display = "block";
                resizeContainer("+", 20);
            } else {
                div = document.getElementById(id);
                utils.empty(div);
            }

            div.style.marginTop = "5px";

            var span_container = document.createElement("span");
            span_container.classList.add("md_text_span");
            span_container.style.marginLeft = "5px";
            span_container.textContent = name + "  x" + value;

            var button_delete = document.createElement("span");
            button_delete.classList.add("glyphicon");
            button_delete.classList.add("glyphicon-remove");
            button_delete.style.cursor = "pointer";
            button_delete.setAttribute("key", id.split("_")[1]);

            utils.addListener(button_delete, "click", function (e) {
                jsonItems[e.target.getAttribute("key")].quantity = 0;
                e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                resizeContainer("-", 20);
                element.value = "0";
            }, false);

            div.appendChild(button_delete);
            div.appendChild(span_container);
            list_booked_items.appendChild(div);

            return div;
        };
        var getDays = function () {
            return utils.getDays(new Date(formatDateStart), new Date(formatDateEnd));
        };
        var initVariables = function () {
            search_container = document.getElementById("search_container");
            include_container = document.getElementById("include_book");
            error_container = document.getElementById("error_container");
            valide_container = document.getElementById("valide_container");

            startDatepicker = document.getElementById("reservation_start_date");
            endDatepicker = document.getElementById("reservation_end_date");

            startString = startDatepicker.value.split("/");
            endString = endDatepicker.value.split("/");

            formatDateStart = startString[2] + "-" + startString[1] + "-" + startString[0];
            formatDateEnd = endString[2] + "-" + endString[1] + "-" + endString[0];

            include_items = document.getElementById("include_items");
            btn_book = document.getElementById("btn_book");

            startDateID = "#reservation_start_date";
            endDateID = "#reservation_end_date";

            list_booked_items = document.getElementById("list_booked_items");
            jsonItems = {};

            utils.reservation.datePicker(startDateID, new Date(), null);
            utils.reservation.datePicker(endDateID, new Date(), null);

            label_start_date = document.getElementById("label_start_date");
            label_end_date = document.getElementById("label_end_date");
            label_price = document.getElementById("label_price");
            list_items = document.getElementById("list_items");
            btn_return = document.getElementById("btn_return");
        }();
        var initView = function () {
            var length = 0;
            for (var i in items) {
                length += 1;
                jsonItems[i] = items[i];
                createItem("item_" + i, items[i]);
                jsonItems[i].quantity = 0;
            }

            if (length % 2 == 1)
                createItem("item_null", null);

            var height = length * 5 + 50;
            resizeContainer("+", height);
        }();
        var initEvents = function () {
            $(startDateID).datepicker("option", "onSelect", function () {
                var minDate = $(startDateID).datepicker("getDate");
                $(endDateID).datepicker("option", "minDate", minDate);
                label_start_date.textContent = utils.formatDate();
            });
            
            utils.addListener(btn_book, "click", function (e) {
                utils.empty(list_items);

                var jsonValidator = {
                    datepicker_start: startDatepicker,
                    datepicker_end: endDatepicker
                };

                var formValid = utils.form.formValidator(jsonValidator, startDatepicker.style);

                var json = {
                    dateStart: startDatepicker.value,
                    dateEnd: endDatepicker.value
                };

                var startString = startDatepicker.value.split("/");
                var endString = endDatepicker.value.split("/");

                var formatDateStart = startString[2] + "-" + startString[1] + "-" + startString[0];
                var formatDateEnd = endString[2] + "-" + endString[1] + "-" + endString[0];

                var result = utils.getDays(new Date(formatDateStart), new Date(formatDateEnd));

                if (result.day >= 0 && formValid === true) {
                    error_container.textContent = "";
                    Core.class.book.festiveRoom.bookFestiveRoom(json, jsonItems);

                    label_start_date.textContent = startDatepicker.value;
                    label_end_date.textContent = endDatepicker.value;

                    for (var i = 0; i < list_booked_items.children.length; i++) {
                        var item = list_booked_items.children[i].cloneNode(true);
                        item.removeChild(item.firstChild);
                        list_items.appendChild(item);
                    }

                    search_container.style.display = "none";
                    include_container.style.display = "inline-block";

                } else {
                    error_container.textContent = "Veuillez choisir les dates de début et de fin de l'évènement.";
                }
            }, false);
            
            utils.addListener(btn_return, "click", function (e) {
                include_container.style.display = "none";
                search_container.style.display = "inline-block";
            }, false);
        }();
    };
})();