$(document).ready(function() {
    // creo il layout tramite la richiesta ajax
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (data) {
                var dischi = data.response;
                var source = document.getElementById("entry-template").innerHTML;
                var template = Handlebars.compile(source);
                for (i = 0; i < dischi.length; i++) {
                    var html = template(dischi[i]);
                    $('.cds-container').append(html);
                }
            },
            error: function (richiesta, stato, errori) {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );

    // vado a gestire il click sulla select
    //uso il change perchè il click non funziona su chrome
    $('#generi').change(function() {
        var confronto = $(this).val()
        console.log(confronto);
        $('.cd').each(function() {
            if ($(this).hasClass(confronto)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });







});

// FUNZIONI
// function inserimento(disco) {
//     (disco);
//     $()
// };
