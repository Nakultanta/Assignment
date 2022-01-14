$(document).ready(function ($) {

    /*form label*/
    $('.form-group input').keyup(function () {

        if ($(this).val()) {
            $(this).parent().find('label').addClass("active");
        } else {
            $(this).parent().find('label').removeClass("active");
        }
    });

    $('.formInputs input').focus(function () {
        $(this).closest('.formInputs').addClass('active');
        $(this).parent().find('label').addClass("active");
    });

    $('.formInputs input').blur(function () {
        $(this).closest('.formInputs').removeClass('active');
        if ($(this).val()) {
            $(this).parent().find('label').addClass("active");
        } else {
            $(this).parent().find('label').removeClass("active");
        }
    });


    //    Form Validation
    $("#register-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: "Enter a valid email address.",
            password: {
                required: "Enter a valid password"
            }
        },
        errorPlacement: function (error, element) {
            { // This is the default behavior 
                error.insertAfter(element.parent().parent());
            }
        },
        highlight: function (element) {
            $(element).closest('.formInputs').addClass("field-error");
        },
        unhighlight: function (element) {
            $(element).closest('.formInputs').removeClass("field-error");
        },
        submitHandler: function (form) {
            form.submit();
        }

    });
});
