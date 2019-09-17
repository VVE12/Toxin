window.console = window.console || function(t) {};

$(function() {
    const $datepicker = $('.js-datepicker');
    var disabledDates = [0, 6];

    let datepicker = $datepicker.datepicker({
        autoClose: false,
        classes: 'datepicker__calendar',
        position: 'bottom left',
        offset: 22,
        clearButton: true,
        /*onRenderCell: function(date, cellType) {
            if (cellType == 'day') {
                let day = date.getDay();
                let isDisabled = disabledDates.indexOf(day) != -1;
                return {
                    disabled: isDisabled
                };

            }
        },*/
        olnSelect: function(formattedDate, date, inst) {
            if (date) {
                alert(date);
            }
        }
    }).
    data('datepicker');

    var VERSION = '2.2.3',
        pluginName = 'datepicker',
        autoInitSelector = '.datepicker-here',
        $body, $datepickersContainer,
        containerBuilt = false,
        baseTemplate = '' +
        '<div class="datepicker">' +
        '<i class="datepicker--pointer"></i>' +
        '<nav class="datepicker--nav"></nav>' +
        '<div class="datepicker--content"></div>' +
        '<div class="datepicker--buttons">' +
        '<span class="datepicker--button" data-action="clear">очистить</span>' +
        '<span class="datepicker--button -apply-">применить</span>' +
        '</div>',
        defaults = {
            classes: '',
            inline: false,
            language: 'ru',
            startDate: new Date(),
            firstDay: '',
            weekends: [6, 0],
            dateFormat: '',
            altField: '',
            altFieldDateFormat: '@',
            toggleSelected: true,
            keyboardNav: true,

            position: 'bottom left',
            offset: 12,

            view: 'days',
            minView: 'days',

            showOtherMonths: true,
            selectOtherMonths: true,
            moveToOtherMonthsOnSelect: true,

            showOtherYears: true,
            selectOtherYears: true,
            moveToOtherYearsOnSelect: true,

            minDate: '',
            maxDate: '',
            disableNavWhenOutOfRange: true,

            multipleDates: false, // Boolean or Number
            multipleDatesSeparator: ',',
            range: false,

            todayButton: false,
            clearButton: true,

            showEvent: 'focus',
            autoClose: false,

            // navigation
            monthsField: 'monthsShort',
            prevHtml: '<svg><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z"/></svg>',
            nextHtml: '<svg><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z"/></svg>',
            navTitles: {
                days: 'MM <i>yyyy</i>',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            },
        }

});