$(document).ready(function() {
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (data) {
                var dischi = data.response;
                console.log(dischi);
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
        });






});

// FUNZIONI
function inserimento(disco) {
    (disco);
    $()
};
