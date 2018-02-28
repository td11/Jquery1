$(function () {

    /* Selecciones

    Para los siguientes apartados, escribir la o las líneas de comando que los resuelvan dentro de una única función (cada uno de los apartados hacen cosas independientes entre sí)
    */

    /*  Ejercicio 1
        Seleccionar todos los elementos div que poseen la clase “module”.
    */
    $('div .module');

    /*  Ejercicio 2
        Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
    */

    /* Me quedaría con la tercera opcion porque es mas
    corta y simple */

    $('ul #myList:nth-child(3)');
    $('ul#myList').children().eq(3);
    $('ul#myList:eq(3)');

    /*  Ejercicio 3
        Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    */
    $('label[for=q]');

    /*  Ejercicio 4
        Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
    */

    $("body").find(":hidden").length

    /*  Ejercicio 5
        Averiguar cuantas imágenes en la página poseen el atributo alt.
    */
    $("img[alt]").length

    /*  Ejercicio 6
        Seleccionar todas las filas impares del cuerpo de la tabla.
    */

    $("tr:nth-child(odd)").css('background-color', "red");

    /*
        Recorrer el DOM

        Ejercicio 1
        Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
        
    */

    var imagenes = $('img');

    for (var i = 0; i < imagenes.length; i++) {
        console.log(imagenes[i].alt);
    }

    /*

        Ejercicio 2
        Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    */

    $("input").closest("form").addClass("padre");

    /*
        Ejercicio 3
        Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
    */

    $('#myList .current').removeClass("current").next().addClass("current");

    /*
        Ejercicio 4
        Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    */

    var selects = $('#specials select').parent().next().find("input");
    console.log(selects[0]);

    /*
        Ejercicio 5
        Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.

    */

    $("#slideshow").children().first().addClass("current").siblings().addClass("disable");

    /*
    Manipulación
        
        Ejercicio1
        Añadir 5 nuevos ítems al final de la lista desordenada #myList. 
        
    */

    var lista = $("#myList");

    for (var i = 0; i < 5; i++) {
        lista.append("<li>" + i + "</li>");
    }


    /*

        Ejercicio 2
        Remover los ítems impares de la lista.
    */

    $("#myList li:nth-child(odd)").remove();

    /*
        Ejercicio 3
        Añadir otro elemento h2 y otro párrafo al último div.module.
    */

    var elementoH2 = $("div .module").last();
    elementoH2.append("<h2>titulo</h2>");
    elementoH2.append("<p>titulo</p>");

    /*
        Ejercicio 4
        Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
    */

    var seleccionElemento = $("select");
    seleccionElemento.append("<option value='Wednesday'>Wednesday</option>");


    /*
        Ejercicio 5
        Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.   
    */

    var img = $("img")[0];
    $("div .module").last().parent().append("<div class='module'><img src='" + img.src + "' ></img></div>");

    /*

    Sugerencias

    Crear una sugerencia: Utilizar el texto del elemento label y aplicar una “sugerencia” en la caja de ingreso de texto

        Ejercicio 1
        Establecer el valor del elemento input igual al valor del elemento label.
    */

    var buscador_texto = $('.input_text')[0];
    buscador_texto.placeholder = $("label").text();

    var elementoLabel = $('label').val();
    $(".input_text").val(elementoLabel);

    /*
        Ejercicio 2
        Añadir la clase “hint” al elemento input.
    */


    $(".input_text").addClass("hint");

    /*
        Ejercicio 3
        Remover el elemento label.
    */

    $("label").remove();

    /*
        Ejercicio 4
        Vincular un evento focus en el input para remover el texto de sugerencia y la clase “hint”.
    */

    $(document).on('focus', '.input_text', function () {
        $('.input_text')[0].placeholder = "";
        $(".hint").removeClass("hint");
    });

    /*
        Ejercicio 5
        Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase “hint” en caso que no se haya ingresado algún texto.
        
    */

    $('.input_text').click(function () {
        //No se seguir
        //$("#target").blur();
    });


    /*
    Navegación por pestañas: Crear una navegación por pestañas para los dos elementos div.module

        Ejercicio 1
        Ocultar todos los elementos div.module.
    */

    $("div .module").hide();

    /*
        Ejercicio 2
        Crear una lista desordenada antes del primer div.module para utilizar como pestañas.
    */

    $("#myList").before('<div class="menu"><ul><li id="liblog">Blog</li><li id="lispecials">Specials</li></ul></div><br>')[0];

    /*
        Ejercicio 3
        Interactuar con cada div utilizando $.fn.each. Por cada uno, utilizar el texto del elemento h2 como el texto para el ítem de la lista desordenada.
    */

    $('div').each(function () {
        var textoH2 = $('h2').value;
        $('#myListItem').value = textoH2;
    });

    /*
        Ejercicio 4
        Vincular un evento click a cada ítem de la lista de forma que:

            muestre el div correspondiente y oculte el otro;

            añada la clase “current” al ítem seleccionado;

            remueva la clase “current” del otro ítem de la lista.

        Finalmente, mostrar la primera pestaña.
      */

    $("#liblog").on("click", function () {
        $("#blog").addClass("current");
        $("#specials").removeClass("current");

        $("#blog").show();
        $("#specials").hide();
    });

    $("#lispecials").on("click", function () {
        $("#specials").addClass("current");
        $("#blog").removeClass("current");

        $("#specials").show();
        $("#blog").hide();
    });
    $("#blog").show();


    /*

    Mostrar texto oculto: Añadir alguna interactividad a la sección blog de la página.
        Ejercicio 1
        al hacer click en alguno de los titulares del div #blog, se debe mostrar el párrafo correspondiente con un efecto de deslizamiento;

        al hacer click en otro titular, se debe ocultar el párrafo mostrado con un efecto de deslizamiento y mostrar nuevamente el párrafo correspondiente también con un efecto de deslizamiento. Ayuda: No se olvide de utilizar el selector :visible.

        */

    $("#blog ul li h3").on("click", function () {
        $(this).parent().parent().find("p").slideUp();
        $(this).parent().find("p").slideDown();
    });

    /*
    Menú desplegable: Desplegar los ítems del menú superior de la página.
        Ejercicio 2
        Al pasar el puntero del ratón por encima de un ítem del menú, se debe mostrar su submenú en caso que exista;
        Al no estar más encima de un ítem, el submenú se debe ocultar.

    Para poder realizarlo, utilice el método $.fn.hover para añadir o remover una clase en el submenú para poder controlar si debe estar oculto o visible (El archivo /ejercicios/css/styles.css incluye una clase “hover” para este propósito)

    */

    $("#nav li").mouseover(function () {
        $(this).find("ul").slideDown();
    });

    $("#nav li").mouseout(function () {
        $(this).find("ul").slideUp();
    });


    /*
    Crear un slideshow:

        Mover el elemento #slideshow a la parte superior de la página;
        Escribir un código que permita mostrar los ítems de forma cíclica, mostrando un ítem por unos segundos, luego ocultándolo con un efecto fade out y mostrando el siguiente con un efecto fade in;
        Una vez llegado al último ítem de la lista, comenzar de nuevo con el primero;
        Incluir un área de navegación por debajo del slideshow que muestre cuantas imágenes existen y en cual se encuentra (ayuda: $.fn.prevAllpuede resultar útil).
    */

    $("#header").after($("#slideshow"));
    $("#slideshow li h2").hide();
    $("#slideshow li p").hide();
    $(document).ready(function () {
        setInterval(rotateImages, 2000);
    });

    function rotateImages() {
        $("#slideshow li h2").hide();
        $("#slideshow li p").hide();
        var curPhoto = $("#slideshow li.current");
        var nxtPhoto = curPhoto.next();

        if (nxtPhoto.length == 0) {
            nxtPhoto = $("#slideshow li:first");
        }

        curPhoto.removeClass("current").addClass("previous");
        nxtPhoto.css({
            opacity: 0.0
        }).addClass("current").animate({
                opacity: 1.0
            }, 1000,
            function () {
                curPhoto.removeClass("previous");
            });
    }





});
