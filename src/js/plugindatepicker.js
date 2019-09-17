var $start = $('#start'),
    $end = $('#end');

$start.datepicker({
    onSelect: function(fd, date) {
        $end.data('datepicker')
            .update('minDate', date);

        $end.focus();
    }
})

$end.datepicker({
    onSelect: function(fd, date) {
        $start.data('datepicker')
            .update('maxDate', date)
    }
})

$(document).ready(function() {
    $('#start').datepicker({
        multipleDates: 2,
        prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>',
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        range: true,
        multipleDatesSeparator: ' - ',
        clearButton: true,
        // inline: true 
    });
})

$(document).ready(function() {
    $('#end').datepicker({
        multipleDates: 2,
        prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>',
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        range: true,
        multipleDatesSeparator: ' - ',
        clearButton: true,
        // inline: true 
    });
})

$('#start').datepicker({
    onSelect: function(fd, d, picker) {
        $("#start").val(fd.split("-")[0]);
        $("#end").val(fd.split("-")[1]);
    }
});

$('#end').datepicker({
    onSelect: function(fd, d, picker) {
        $("#start").val(fd.split("-")[0]);
        $("#end").val(fd.split("-")[1]);
    }
});

$('#end').click(function(e) {
    /*$('#start').datepicker().data('datepicker').show();*/
});