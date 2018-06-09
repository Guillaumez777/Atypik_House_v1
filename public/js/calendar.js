$(function () {

    var disableddates = ["05-3-2018", "05-11-2018", "05-25-2018", "05-20-2018"];
    var dateFormat = "dd/mm/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                // beforeShowDay: DisableSpecificDates            
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }

    function DisableSpecificDates(date) {

        var m = date.getMonth();
        var d = date.getDate();
        var y = date.getFullYear();

        // First convert the date in to the mm-dd-yyyy format 
        // Take note that we will increment the month count by 1 
        var currentdate = (m + 1) + '-' + d + '-' + y;

        // We will now check if the date belongs to disableddates array 
        for (var i = 0; i < disableddates.length; i++) {

            // Now check if the current date is in disabled dates array. 
            if ($.inArray(currentdate, disableddates) != -1) {
                return [false];
            }
        }
    }

});
