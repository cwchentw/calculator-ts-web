function isNumberLast(s) {
    var e = s.slice(-1);

    return (e === "0" || e === "1" || e === "2" || e === "3" || e === "4" ||
        e === "5" || e === "6" || e === "7" || e === "8" || e === "9" ||
        e === ".");
}

jQuery('#del').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    text = text.slice(0, -1);
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#ltparen').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    text += ' ';
    text += '(';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#rtparen').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += ')';
    text += ' ';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#pow').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '**';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#mod').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '%';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#div').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '/';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#mul').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '*';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#sub').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '-';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#add').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (isNumberLast(text)) {
        text += ' ';
    }
    text += '+';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#dot').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '.';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#nine').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '9';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#eight').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '8';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#seven').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '7';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#six').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '6';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#five').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '5';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#four').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '4';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#three').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '3';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#two').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '2';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#one').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '1';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#zero').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    let text = jQuery('#calc-text').val();
    if (!isNumberLast(text)) {
        text += ' ';
    }
    text += '0';
    jQuery('#calc-text').val(text);

    jQuery('#calc-text').prop('disabled', true);
});

jQuery('#clear').click(function() {
    jQuery('#calc-text').prop('disabled', false);

    jQuery('#calc-text').val("");

    jQuery('#calc-text').prop('disabled', true);
});

define("main", ["interpreter"], function(e) {
    jQuery('#calc').click(function() {
        jQuery('#calc-text').prop('disabled', false);
        let text = jQuery('#calc-text').val();

        try {
            var evaluator = new e.Evaluator(text);
            let result = evaluator.run();
            jQuery('#calc-text').val(result);
        }
        catch (err) {
            jQuery('#msg').empty();
            jQuery('#msg').append("<div class=\"alert alert-warning alert-dismissable center-block\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><strong>Error</strong> " + err + " </div>");
        }

        jQuery('#calc-text').prop('disabled', true);
    });

});
require(["main"], function(m) {}, function(err) {});
