import {Serie} from './serie.js';
import { series } from "./data.js";

let serieTable: HTMLElement= document.getElementById("series")!;


function mostradDatosSerie(serie:Serie):void{
    let tbodySerie=document.createElement("tbody");

    tbodySerie.innerHTML=`<tr><td>${serie.id}</td>
    <td><a href=# id="${serie.titulo}">${serie.titulo}</a></td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>`;
    serieTable.appendChild(tbodySerie);

    const serieLink= document.getElementById(serie.titulo) as HTMLAnchorElement;

    serieLink.addEventListener('click', (event)=>{
        event.preventDefault();
        mostrarTarjeta(serie);
    })
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

function mostrarTarjeta(serie:Serie):void{
    const fichaSerie = document.getElementById('fichaSerie')!;

    fichaSerie.innerHTML= `<div class="card">
                                <img src="${serie.urlImagen}" alt="imagen representativa de la serie">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.titulo}</h5>
                                    <p class="card-text">${serie.descripcion}</p>
                                    <a href="${serie.urlSerie}">Click aquí para visitar la serie</a>
                                </div>
                            </div>`
    fichaSerie.style.display = 'block';
}
mostrarDatosTodasSeries(series);

