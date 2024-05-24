export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #id = 0;

    constructor(ertek, szuloElem, id){
        this.#id = id;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        
        
        this.#megjelenit();

        this.#divElem=this.#szuloElem.children("div:last-child");
        //console.log(this.#divElem);
        /* a 'this' function névtelen függvényen belül használva arra az elemre mutat amelyik az eseményt kiváltotta (html elem)
           nyílfüggvény esetén pedig az objektum példányra fog mutatni */
        this.#divElem.on("click",()=>{
            console.log(this.#id);
            if (this.#ertek === " "){
                this.#trigger("lepes");
            }
        });
    }

    #megjelenit(){
        let txt = `<div><p>${this.#ertek}</p></div>`;
        this.#szuloElem.append(txt);
    }

    /* az osztály úgy tud információt adni magáról egy adott esemény bekövetkeztek
    hogy létrehozunk egy saját eseményt, amire a másik osztály fel tud iratkozni */

    #trigger(esemenynev){
        /* létrehozunk egy új eseményt és átadunk információkat az objektumról */
        const e = new CustomEvent(esemenynev, {detail:this.#id});
        window.dispatchEvent(e);
    }
}