
$(function () {
    var form = document.getElementById('login-validation');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);

    $('.sign-up').click(function(){
        $('.register-form').show();
        $('.sign-up').addClass('active');
        $('.login-in').removeClass('active');
        $('.login-form').hide();
    })
    $('.login-in').click(function(){
        $('.login-form').show();
        $('.register-form').hide();
        $('.login-in').addClass('active');
        $('.sign-up').removeClass('active');
    })
});