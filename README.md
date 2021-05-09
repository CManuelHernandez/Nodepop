# Nodepop

Maqueta de api para la gestión de un sitio de anucios de compra y venta.
Se ejecuta con express sobre una base de datos de MongoDB.
Por lo tanto para su funcionamiento se necesitaran realizar los siguiente pasos en una Terminal ya con NodeJs.

## Install
Dedes la carpeta raíz *(Nodepop)* instalaremos las dependencias mediante la terminal y el siguiente comando.
```shell
npm install
```
**Debe copiar .env.example a .env y revisar su configuración**
Para que funcione la aplicación se deberá sustituir el archivo .env_example por .env.

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

### Llamada POST AUTH

Se llama con post a /auth para obtener el token de autenticación.

Este post espera en el body dos parametros. Un user, el cual debe ser un correo electrónico y una password.

Si el username o la password son incorrecta la respuesta del servidor será un JSON tal que:

```
{
    "errors": "Username or password wrong"
}
```

Si tenemos éxito en la autenticación se nos devolverá un JSON como el siguiente:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk3ZTkzYzgyMTkyYzNmZTgyMmQ5NmMiLCJpYXQiOjE2MjA1Njg4NDQsImV4cCI6MTYyMDU3NjA0NH0.XC0vvO97J9i6yy1bAbkvzxZbnMybpVTn3RNzZrdzpLQ"
}
```

## Internacionalización
Consiste en la funcionalidad de cambiar el idioma en la vista desde el front.
Se dispone de un selector de idioma en Español y en Inglés.

## Microservicios

El API cuenta con un microservicio que crea las imagenes mas pequeñas de las que las sube el usuario en forma de Thumbnail.
Este microservicio se encuentra integrado mediante la librería Cote.
El requester se activa automaticamente al iniciar la aplicación, 
El consumer hay que activarlo manualmente, tenemos que ir a la ruta /lib/microservices y ejecutar el archivo mediante el comando "nodemon thumbService.js"

Al subir una imgen se generará un Thumbnail, con el mismo nombre de archivo asignado por el servidor pero como prefijo se añadirá "tn-".

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

