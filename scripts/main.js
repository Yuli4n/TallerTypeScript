import { series } from "./data.js";
var serieTable = document.getElementById("series");
function mostradDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td>".concat(serie.id, "</td>\n    <td><a href=# id=\"").concat(serie.titulo, "\">").concat(serie.titulo, "</a></td>\n    <td>").concat(serie.canal, "</td>\n    <td>").concat(serie.temporadas, "</td>");
    serieTable.appendChild(tbodySerie);
    var serieLink = document.getElementById(serie.titulo);
    serieLink.addEventListener('click', function (event) {
        event.preventDefault();
        mostrarTarjeta(serie);
    });
}
function mostrarDatosTodasSeries(series) {
    var count = 0;
    var seasons = 0;
    series.forEach(function (serie) {
        mostradDatosSerie(serie);
        count++;
        seasons += serie.temporadas;
    });
    var average = seasons / count;
    var averageSerie = document.createElement("tr");
    averageSerie.innerHTML = "Seasons average: ".concat(average);
    serieTable.appendChild(averageSerie);
    //Aproveché este recorrido y esta función para añadir el promedio de temporadas
}
function mostrarTarjeta(serie) {
    var fichaSerie = document.getElementById('fichaSerie');
    fichaSerie.innerHTML = "<div class=\"card\">\n                                <img src=\"".concat(serie.urlImagen, "\" alt=\"imagen representativa de la serie\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(serie.titulo, "</h5>\n                                    <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                                    <a href=\"").concat(serie.urlSerie, "\">Click aqu\u00ED para visitar la serie</a>\n                                </div>\n                            </div>");
    fichaSerie.style.display = 'block';
}
mostrarDatosTodasSeries(series);
