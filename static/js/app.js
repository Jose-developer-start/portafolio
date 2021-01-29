//Se ejecuta hasta que este listo el documento HTML
$(document).ready(main);

function main() {
    //Seleccionamos el evento click
    $('#menu a').on('click', content);
}

function content() {
    //Click selecciona el elemento href
    var lines = $(this).attr('href');
    //Selecionamos el body y html para animar, con animate
    $('body, html').animate({
        scrollTop: $(lines).offset().top - 50
    }, 1000);

    //return false;
}

//JQUERY ---MENU RESPONSIVE
$('.menu').click(function() {
    $('nav').animate({
        width: 'toggle'
    });
});