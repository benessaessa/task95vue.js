
$(document).ready(function(){
    $('#btnNext').click(function(){
        $('.firstDiv').hide();
        $('.nextDiv').show();
    });
    $('#btnBack').click(function(){
        $('.nextDiv').hide();
        $('.firstDiv').show();
    });
});