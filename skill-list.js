$(document).ready(function() {

$('.skill').popover({
  html: true,
  title: function() {
    return $(this).data('name');
  },
  placement: 'left',
  trigger: 'hover',
  content: function() {
    return $(this).data('description') + 
      "<h2>EXAMPLE</h2>"+ $(this).find('.skill-example-holder').html();
  }

});
  
/*
    $('.skill').hover(
    function() {
       var name = $(this).data('name');
       var description = $(this).data('description');
       var example = "<h2>EXAMPLE</h2>"+$(this).find('.skill-example-holder').html();
       // var template = 
       //      $('<div class="template">'+
       //          '<div class="arrow"></div>'+
       //              '<h1 class="template-title">'+name+'</h1>'+
       //          '<div class="template-description">'+description+'</div>'+
       //          '<h3 class="template-example"></h3>'+
       //          '<div class="template-content">'+example+'</div>'+
       //      '</div>');

       // $(this).after($(template));
       // //console.log(template);
       // //$(template).offset({top:0, right: 100});
       // var width = $(this).closest('.skills').find('.skill-container').width();
       // var height = $(this).closest('.skills').find('.skill-container').height();
       // $(this).closest('.skill-container').find('.template').offset({
       //      top: height,
       //      left: width        
       // });

        $(this).popover({
            html: true,
            title: name,
            placement: 'left',
            trigger: 'hover',
            content: function() {
              return description + example;
            }
        });

    },
    function() {
        // $(this).closest('.skill-container').find('.template').fadeOut(200, function() {
        //     $('.template').remove();
        // });
      return false;
    });

*/

});