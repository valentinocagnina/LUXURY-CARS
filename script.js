script.js
$(document).ready(function() {

var vehiculos = [
    { title: "A250", price: "$85,000", image: "vehiculo1.jpg" },
    { title: "M3", price: "$100,000", image: "vehiculo2.jpg" },
    { title: "rs5", price: "$118,000", image: "vehiculo3.jpg" }
];

var lista_autos= $('.lista_autos');

vehiculos.forEach(function(vehiculos) {
    var html = '<div class="vehiculos">' +
                    '<img src="' + vehiculos.image + '" alt="' + vehiculos.title + '">' +
                    '<h3>' + vehiculos.title + '</h3>' +
                    '<p>' + vehiculos.price + '</p>' +
                '</div>';
    lista_autos.append(html);
});


$('#contact-form').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    
    alert('Formulario enviado:\n\n' + formData);
    $(this)[0].reset();
});
});
