var $          = require('jquery'),
    handlebars = require('handlebars');

$(function(){

    /**
     * Cache elements for further use
     */
    var $body      = $('body'),
        $widget    = $('#widget-template');

    /**
     * Update quantity input
     *
     * @param  JQuery input
     * @param  String action
     * @return void
     */
    function update_qty(input, action){

        var current_val = parseInt(input.val());

        switch (action) {
            case 'add':
                if (current_val >= 1) input.val(current_val + 1);
                break;
            case 'substract':
                if(current_val > 1) input.val(current_val - 1);
                break;
        }
    }

    /**
     * Render the Handlebar template fo the widget
     *
     * @param  Json context
     * @return void
     */
    function render_widget(context){
        var source   = $widget.html(),
            template = handlebars.compile(source),
            html     = template(context);

        $body.append(html);
    }

    /**
     * Ajax call for jsonp callback
     *
     * @return void
     */
    $.ajax({
        url: 'https://selz.com/embed/itemdata?itemurl=http://selz.co/1rvbgi3&callback=callback',
        jsonpCallback: 'callback',
        dataType: 'jsonp',
        success: function(response){
            render_widget(response);
        }
    });

    /**
     * Substract 1 when click in minus button
     */
    $body.on('click', '.minus', function(){
        var $input_qty = $(this).next('.input-qty');
        update_qty($input_qty, 'substract');
    });

    /**
     * Add 1 when click in plus button
     */
    $body.on('click', '.add', function(){
        var $input_qty = $(this).prev('.input-qty');
        update_qty($input_qty, 'add');
    });

});
