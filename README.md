### Informe realizado por Eva Martínez Bencomo

En este informe se redactan las pautas seguidas para la realización de la práctica 6 de la asignatura *Desarrollo de Sistemas Informáticos*.

# Actividades Previas

Como siempre, en primer lugar, se ha aceptado la asignación de esta tarea en *GitHub Classroom* y a continuación se instalaron las herramientas necesarias para el cumbrimiento del código fuente *Instanbul* y *Coveralls* las cuales se muestran a continuación:

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-Eva-Martinez/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-Eva-Martinez?branch=main)

# Ejercicios

En este apartado se encuentra la explicación del código desarrollado, para su visualización seleccione el desplegable en la esquina superior derecha en el que se encuentra dicho código, o en los directorios *ejercicio-x* ubicados en este repo. 

## Ejercicio 1 - DSIflix

En este ejercicio se solicita la realización del diseño de un modelo de datos de una plataforma de streaming que contiene documentales, peliculas y series. Para ello se crean unas clases para la definición de las diferentes películas, documentales y series sucesivamente: ```Peliculas```, ```Documentales``` y ```Series```. Estas se implementan como tipo de la clase abstracta genérica ```BasicStreamableCollection<T>``` en cada una de las clases colección de estas: ```PeliculasCollection```, ```DocumentalesCollection``` y ```SeriesCollection```. Y por último tenemos la interfaz genérica ```Streamable<T>``` implementada en la clase anteriormente mencionada ```BasicStreamableCollection<T>``` para así poder incluir un método de búsqueda en las clases de colección.

Con respecto a los problemas de este apartado no se mostraron muchos más que la comprencsión inicial de la estructura de las clases.

## Ejercicio 2 - Implementación de una lista y sus operaciones

En este ejercicio se solicita la realización de una clase genérica similar a *Array.prototype* la cual consiste en guardar listas sobre las cuales se pueden operar con los diferentes métodos definidos en la clase, que los mismos no pueden recurrir a sus métodos hermanos. En este las complejidades fue el análisis inicial de realizar el recorrido del vector sin el uso de *length*.

## Ejercicio 3 - Ampliación de la biblioteca musical

Por último en este ejercicio se realizó una modificación del ejercicio realizado en la práctica 5 de la asignatura al añadir nuevas clases ```Single``` y ```Discografia```, donde se instanció por una parte que single es igual a la clase ```Disco``` salvo porque las canciones de single son la misma, es decir, las diferentes versiones de la misma. Y la clase *discografia* puede ser una colección de discos, singles o discos y singles, el cual se encuentra como atributo privado de la clase artista.

Con respecto a las complejidades del mismo no se encontraron muchas más que la restructuración del código puesto a que los diferentes métodos tenian errores por la adición de las clases. 

# Conclusiones

Todos los ejercicios se han finalizado con éxito al igual que sus comentarios y sus diferentes tests para cada uno de ellos.