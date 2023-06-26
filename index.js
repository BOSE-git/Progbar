$(document).ready(function(){
    $('.child-prog-bar').css('width', '0');
    $('input').on('input',function(){
        percentage_value = parseInt($(this).val());
        percentage_value_in_range = Math.min(Math.max(percentage_value, 0), 100);
        progressBarWidth = $('.parent-prog-bar').width();
        targetWidth = (percentage_value_in_range / 100) * progressBarWidth;
        $('.child-prog-bar').stop().animate({ width: targetWidth }, 2000);
    })
})