// password_len = $('#password__length');
// $('#password__range').on('change', function() {
//     console.log($(this).val());
// });

$('#generate').on('click', function() {
    console.log('clicked');
});



$(document).ready(function(){
    password_len = $('#password__len');
    $('#password__range').slider({
        min: 16,
        max: 64,
        value: 17,
        slide: function(event, ui){
            password_len.val(18);
            console.log(ui.value);
        }
    });
});
