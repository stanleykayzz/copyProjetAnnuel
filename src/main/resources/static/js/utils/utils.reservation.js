/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.utils.reservation = Core.utils.reservation || {};

    /**
     * Init a datepicker
     * @param datepickerID
     * @param min
     * @param max
     */
    Core.utils.reservation.datePicker = function (datepickerID, min, max) {
        $(datepickerID).datepicker();

        if(min !== null)
            $(datepickerID).datepicker( "option", "minDate", min);

        if(max !== null)
            $(datepickerID).datepicker( "option", "maxDate", max);

        $(datepickerID).datepicker( "option", "autoSize", true);
    };
})();