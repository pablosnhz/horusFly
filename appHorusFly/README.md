# AppHorusFly

Terminado el diseño UI aplicando buenas practicas para el mismo.
Se da paso a la estructura de la base de datos donde entendi que hay que entender bastante bien el producto, como tambien la empresa para dar paso a crear las tablas y sus relaciones en el caso de que la escalabilidad sea mucho mayor, lo contrario a mi proyecto donde solo utilizo simples ejemplos y no complejizo bastante el proyecto.

# BASE DE DATOS

# SQL Server

La base de datos consta con 3 tablas, VUELOS para que por medio de un filtro se va a hacer busqueda de vuelos disponibles, este filtro se dara por medio de la disponibilidad de vuelos desde donde va a partir el usuario como tambien hasta donde quiere ir, tambien podre seleccionar la cantidad de dias que desea tambien tendra la opcion de elegir solo viaje de ida.
Al hacer la busqueda llegaran los resultados los cuales trae los vuelos disponibles en la card se veran reflejados los datos como el origen, destino, fechaIda, fechaVuelta, dias, equipaje.
La segunda tabla consta del Hotel, donde tambien funciona igual que Vuelo, por medio de un filtro de busqueda donde se podra hacer uso de variantes las cuales el usuario va a poder usar el pais, ciudad, fechaEntrada, fechaSalida, personas, habitaciones al hacer este filtro va a devolver la card con los hoteles disponibles segun las variantes elegidas, al hacer la busqueda nos va a devolver img, nombre del hotel, ciudad, puntuacion, rating, dato, precio y si incluye algo mas. Por medio de la logica haria pensar para que quiero un Hotel en España si yo me encuentro en Argentina, tendria que reservar el vuelo tambieno no? Para este caso cree la proxima tabla.
Combo tengo fijos 3 tipos de filtros los cuales con cards con Destinos Combinados(combinacion de dos destinos donde se incluye el vuelo), Paquetes(donde se incluye viaje a cierto lugar en especifico junto con el vuelo) y Descuentos(ya sea vuelo, hotel o combinacion pero con cierto descuento de por medio).

# BACKEND

Usando la ultima version 7.0.0 ya que el proyecto de .NET esta creado con la version 7.0.
Vamos a utilizar .NET de tipo Web Api, aplicando paquetes nugets para trabajar con Entity Framework y
los respectivos paquetes para utilizar JWT, incluyendo la integracion de nuestra base de datos con
nuestro backend por medio del comando Scaffold-DbContext el cual genera la conexion con la base de datos,
se generan los modelos de entidad y crea el DbContext.
Dentro del appSettings le dimos una mejor organizacion a lo que es nuestra cadena de conexion como
tambien generar la cadena de mas de 30 caracteres para nuestro JWT.

# FRONTEND
