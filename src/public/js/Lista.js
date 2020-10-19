/**
* @fileoverview Archivo principal donde se encuentra la funcion principal [Tarea 1]
*
* @version 1.0
*
* @author Sergio Osvaldo Magaña Gonzalez <sergio_lcc9@hotmail.com>
* History
* v1.0 – Se desarrolla la primera version de la aplicación
*/

/**
* @function list La funcion list contiente todas las funciones para la construccion de la lista enlazada.
*/
function list() {
    this.head = null;
    this.tail = null;
    this.long = null;

/**
* @function list La funcion list contiente todas las funciones para la construccion de la lista enlazada.
*/
    this.createNode = function (data) { //Constructor
        return {
            data: data,
            next: null
        }
    };

    /**
     * @function addNode Agrega el nodo
     * @param {string} data la variable es de tipo string y el dato del nodo
     */
    this.addNode = function (data) { //Agregar nodo
        if (this.head == null) {
            this.tail = this.createNode(data);
            this.head = this.tail;
            this.long++;
        } else {
            this.tail.next = this.createNode(data);
            this.tail = this.tail.next;
            this.long++;
        }
        this.MostrarLista();
    };

    /**
     * @function printNode imprime el nodo
     */
    this.printNode = function () { //Imprimir cada nodo
        var x = this.head;
        var dato = "";
        while (x != null) {
            dato += x.data + "-";
            x = x.next;
        }
        return dato;
    };

    /**
     * @function getMedia Calcular la media con todos los nodos 
     */
    this.getMedia = function () {  
        var x = this.head;
        let resultado = 0;

        while (x != null) {
            resultado = resultado + parseInt(x.data);
            x = x.next;
        }
        resultado = resultado / this.long;
        return resultado;
    }

    /**
     * @function getDesviacionST Calcula la desviacion estandar
     */
    this.getDesviacionST = function () {  
        var Media = this.getMedia();
        var x = this.head;
        let Sumatoria = 0;
        let Desviacion = 0;
        while (x != null) {
            Sumatoria = Sumatoria + Math.pow((x.data - Media), 2);
            x = x.next;
        }
        Desviacion = Math.sqrt((Sumatoria / (this.long - 1)));
        return Desviacion;
    }

    /**
     * @function MostrarLista Imprime la lista en el div
     */
    this.MostrarLista = function () { 
        var x = this.printNode(); 
        document.getElementById("Lista").value = x;
    }

    /**
     * @function MostrarMedia Imprime Media
     */
    this.MostrarMedia = function () {
        var x = this.getMedia();
        var N_Nodo = document.getElementById("Media");
        var newText = document.createTextNode(x);
        N_Nodo.textContent = "";
        N_Nodo.appendChild(newText);
    }

    /**
     * @function MostrarDesviacion Muestra resultado de Desviacion
     */
    this.MostrarDesviacion = function () {
        var x = this.getDesviacionST(); 
        var N_Nodo = document.getElementById("Desviacion");
        var newText = document.createTextNode(x);
        N_Nodo.textContent = "";
        N_Nodo.appendChild(newText);
    }

    this.MostrarLaLista = function (){
        var x = this.head;
        let resultado = 0;

        while (x != null) {
            resultado = resultado + parseInt(x.data);
            x = x.next;
        }
        console.log(resultado);
    }
}

/**
 * @object Se crea una instancia de la funcion Principal
 */
const linkedList = new list();

/**
* @function Agregar Obtien el dato del html y llama el nodo
*/
function Agregar() {
    var dato = document.getElementById("Dato").value;
    linkedList.addNode(dato);
    document.getElementById("Dato").value = "";
}

/**
* @function Calcular Realiza los calculos y los muestra
*/
function Calcular() {
    linkedList.MostrarLaLista();
    linkedList.MostrarMedia();
    linkedList.MostrarDesviacion();

    $("#myModalVacio").modal();
}
