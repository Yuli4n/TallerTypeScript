import {Serie} from './serie.js';
import { series } from "./data.js";

let serieTable: HTMLElement= document.getElementById("series")!;


function mostradDatosSerie(serie:Serie):void{
    let tbodySerie=document.createElement("tbody");

    tbodySerie.innerHTML=`<tr><td>${serie.id}</td>
    <td><a href=${serie.urlSerie}>${serie.titulo}</a></td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>`
    serieTable.appendChild(tbodySerie);
}

function mostrarDatosTodasSeries(series: Serie[]):void{
    let count:number=0;
    let seasons:number=0;

    series.forEach(serie =>{
        mostradDatosSerie(serie);
        count++;
        seasons+=serie.temporadas;
    });
    const average: number=seasons/count;

    let averageSerie=document.createElement("tr");
    averageSerie.innerHTML=`Seasons average: ${average}`
    serieTable.appendChild(averageSerie);
    //Aproveché este recorrido y esta función para añadir el promedio de temporadas
}

mostrarDatosTodasSeries(series);