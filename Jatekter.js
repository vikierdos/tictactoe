import Elem  from "./Elem.js";

export default class Jatekter{
    #aktElem="X";
    #lista=[" "," "," "," "," "," "," "," "," "];
    constructor(){
        this.#megjelenit();

        /* feliratkozunk a saját lépés eseményre */
        $(window).on("lepes",(event)=>{
            console.log(event.detail);
            let id = event.detail;
            this.#beallit(id);
        })
    }

    #megjelenit(){
        /* kirak 9 elemet a játéktérre */
        let szuloElem = $(".jatekter");
        szuloElem.empty();
        this.#lista.forEach((ertek, index)=>{
            new Elem(ertek,szuloElem, index);
        });
    }

    #beallit(id){
        this.#lista[id]=this.#aktElem;
        if (this.#aktElem === "X") {
            this.#aktElem = "O";
        }
        else{
            this.#aktElem = "X";
        }
        this.#megjelenit();
    }

    #ell(){
        /* szorgalmi */
    }
}