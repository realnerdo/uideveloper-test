var $          = require('jquery'),
    handlebars = require('handlebars');

$(function(){

    var $body   = $('body'),
        $widget = $('#widget-template');

    function render_widget(context){
        var source   = $widget.html(),
            template = handlebars.compile(source),
            html     = template(context);

        $body.append(html);
    }

    $.ajax({
        url: 'https://selz.com/embed/itemdata?itemurl=http://selz.co/1rvbgi3&callback=callback',
        jsonpCallback: 'callback',
        dataType: 'jsonp',
        success: function(response){
            render_widget(response);
        }
    });

});
