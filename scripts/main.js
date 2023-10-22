import { series } from "./data.js";
var serieTable = document.getElementById("series");
function mostradDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td>".concat(serie.id, "</td>\n    <td><a href=").concat(serie.urlSerie, ">").concat(serie.titulo, "</a></td>\n    <td>").concat(serie.canal, "</td>\n    <td>").concat(serie.temporadas, "</td>");
    serieTable.appendChild(tbodySerie);
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
}
mostrarDatosTodasSeries(series);
