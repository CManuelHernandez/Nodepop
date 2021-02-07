# Nodepop

Maqueta de api para la gestión de un sitio de anucios de compra y venta.
Se ejecuta con express sobre una base de datos de MongoDB.
Por lo tanto para su funcionamiento se necesitaran realizar los siguiente pasos en una Terminal ya con NodeJs.

## Install
Dedes la carpeta raíz *(Nodepop)* instalaremos las dependencias mediante la terminal y el siguiente comando.
```shell
npm install
```
### _Carga de las bases de datos:_
Para cargar o reiniciar datos de la base de datos *MongoDB*, se necesita ejecutar el archivo *install_db* que se encuentra la carpeta *scripts*.
Esto se realiza mediante el siguiente comando.
```
npm run installDB
```
Deberemos recibir el siguiente feedback en la terminal.
```
###############################
Datos cargados correctamente
###############################
```
Tras esto cancelaremos el proceso de la terminal. ( Opcional )
```
ctrl + c
```
## Iniciar app
Iniciar la aplicación para uso en producción:

```shell
npm start
```
## Iniciar app en modo Desarrollo

Para ejecutar la aplicación en entorno de desarrollo:

```shell
npm run dev
```

## Metodos del API
GET /api/ads
Listado de Anuncios

POST /api/ads (body)
Crear un Anuncio. Debe de encontrarse en el body

PUT /api/ads:id (body)
Actualizar un Anuncio.

DELETE /api/ads:id
Elimina un Anuncio.

## Ejemplos de funcionamiento ⚙️
### Partiendo de la Url http://localhost:3000/

#### *Filtros*

- **Filtrar por anuncios cuyo producto sea "bicicleta"** 
```
http://localhost:3000/?name=bicicleta
```
- **Filtrar por anuncios cuyo producto empiece por "b"** 
```
http://localhost:3000/?name=b
```
- **Filtrar por anuncios que contenga el tag "lifestyle"** 
```
http://localhost:3000/?tag=lifestyle
```
- **Filtrar por anuncios cuyo precio sea superior a 200** 
```
http://localhost:3000/?price=200-
```
- **Filtrar por anuncios cuyo precio sea inferior a -200** 
```
http://localhost:3000/?price=-200
```
- **Filtrar por anuncios cuyo precio se encuentre entre 200 y 500** 
```
http://localhost:3000/?price=200-500
```
- **Filtrar por anuncios que se encuentran en venta** 
```
http://localhost:3000/?sale=false
```
- **Filtrar por anuncios que se encuentran en busqueda** 
```
http://localhost:3000/?sale=true
```
- **Mostrar los 3 primeros anuncios** 
```
http://localhost:3000/?limit=3
```
- **Se puede combinar los filtros** 
```
http://localhost:3000?name=b&sale=false&price300-350&tag=lifestyle
```

## Ejemplos de funcionamiento del api ⚙️
### Partiendo de la Url http://localhost:3000/api

Ejemplo de la estuctura de un anuncio para el api
```
{
"tags": [
"lifestyle",
"work"
],
"_id": "601eace51e5e66333053eea4",
"name": "mochila",
"sale": true,
"price": 20,
"image": "images/mochila.jpg",
"__v": 0
}
```

#### *Filtros*

- **Filtrar por anuncios cuyo producto sea "bicicleta"** 
```
http://localhost:3000/api/ads?name=bicicleta
```
- **Filtrar por anuncios cuyo producto empiece por "b"** 
```
http://localhost:3000/api/ads?name=b
```
- **Filtrar por anuncios que contenga el tag "lifestyle"** 
```
http://localhost:3000/api/ads?tag=lifestyle
```
- **Filtrar por anuncios cuyo precio sea superior a 200** 
```
http://localhost:3000/api/ads?price=200-
```
- **Filtrar por anuncios cuyo precio sea inferior a -200** 
```
http://localhost:3000/api/ads?price=-200
```
- **Filtrar por anuncios cuyo precio se encuentre entre 200 y 500** 
```
http://localhost:3000/api/ads?price=200-500
```
- **Filtrar por anuncios que se encuentran en venta** 
```
http://localhost:3000/api/ads?sale=false
```
- **Filtrar por anuncios que se encuentran en busqueda** 
```
http://localhost:3000/api/ads?sale=true
```
- **Mostrar los 3 primeros anuncios** 
```
http://localhost:3000/api/ads?limit=3
```
**Se puede combinar los filtros** 
```
http://localhost:3000/api/ads?name=b&sale=false&price300-350&tag=lifestyle
```


## Autor ✒️
* **CManuelHernandez** -  - [CManuelHernandez](https://github.com/CManuelHernandez)

