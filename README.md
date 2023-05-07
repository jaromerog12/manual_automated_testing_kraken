# Bienvenidos al repositorio de la materia pruebas automatizadas del grupo numero 24 el cual esta compuesto por

* Jorge A. Romero Gutierrez
* Camilo Zuleta
* Leonardo Bustamante
* Kevin Alexander

### Entrega semana 5

#### Requerimientos

- Se debe contar con la ultima version disponible de node.js para este caso se utilizo la version `18.16.0.`
- Tener instalado de manera local el CMS ghost, en caso de no contar con una instalacion existente utilice el siguiente [enlace](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#2 "Link")  .

#### Instalacion de pupeter

1. Clonar el repositorio o hacer un fork al repositorio.
2. En la terminal de comandos de su preferencia y dirijase donde se encuentra el repositositorio, luego ubiquese en la carpeta **puppeteer**.
3. Realice la instalacion de los paquetes del proyecto utilizando el comando 
`npm install ` en la terminal, se recomienda correr este comando con permisos de Administrador.
4. Durante la instalacion de ghost, se le solicito crear un usuario y contraseña, para la administracion del contenido. Estos datos deben agregarse en el archivo `config.json` que se encuentra en la raiz de la carpeta **puppete**.
5. Para ejecutar los test de puppeteer se necesita esta en la carpeta **puppeteer** y ejecutar por consola node index.js con eso correran los test.

#### Instalacion de Kraken

1. Clonar el repositorio o hacer un fork al repositorio.
2. En la terminal de comandos de su preferencia y dirijase donde se encuentra el repositositorio, luego ubiquese en la carpeta **kraken**.
3. Realice la instalacion de los paquetes del proyecto utilizando el comando 
`npm install ` en la terminal, se recomienda correr este comando con permisos de Administrador.
4. Para ejecutar las pruebas utilice el siguiente comando:
`npx kraken-node run`

#### Funcionalidades y Escenarios de pruebás

|  Funcionalidad | Nombre escenarios de pruebas    | Descripcion escenarios de pruebas                                                                                                      |
| ------------ |---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
|  General | Actualizar titulo y descripción | Se debe autenticar en la aplicacion e  ingresar en la pagina de configuracion, despues  se debe actualizar el titulo y la descripción. |
|  General | Actualizar metadatos            | Se debe autenticar en la aplicacion e  ingresar en la pagina de configuracion, despues  se debe actualizar algun metadato disponible.  |
|  General | Actualizar Facebook             | Se debe autenticar en la aplicacion e  ingresar en la pagina de configuracion, despues  se debe actualizar facebook.                   |
|  General | Actualizar twitter              | Se debe autenticar en la aplicacion e  ingresar en la pagina de configuracion, despues  se debe actualizar twitter.                    |

|  Funcionalidad | Nombre escenarios de pruebas    | Descripcion escenarios de pruebas                                                                                           |
| ------------ | ------------                    | ------------                                                                                                                |
|  Diseño | Crear nuevo elemento de menu    | Se debe autenticar en la aplicacion e  ingresar en la pagina de diseño, despues  se debe agregar un nuevo elemento en el menu. |
|  Diseño | Crear nuevo elemento de submenu | Se debe autenticar en la aplicacion e  ingresar en la pagina de diseño, despues  se debe agregar un nuevo elemento en el submenu |
|  Diseño | Eliminar elemento de menu       | Se debe autenticar en la aplicacion e  ingresar en la pagina de diseño, despues  se debe eliminar un elemento en el menu.   |
|  Diseño | Eliminar elemento de submenu    | Se debe autenticar en la aplicacion e  ingresar en la pagina de diseño, despues  se debe eliminar un elemento en el submenu |

|  Funcionalidad | Nombre escenarios de pruebas  |  Descripcion escenarios de pruebas  |
| ------------ | ------------ |------------ |
|  Paginas |  Crear nueva página| Se debe autenticar en la aplicacion, seleccionar pages en el sidebar, despues  se debe agregar una nueva página, se debe agregar titulo y contenido. Por ultimo se debe dar en el boton publicar.|
|  Paginas |  Actualizar página |  Se debe autenticar en la aplicacion, seleccionar pages en el sidebar, seleccionar la pagina a editar, modificar el titulo o contenido. Por ultimo se debe dar en el boton publicar.|
|  Paginas |  Eliminar página | Se debe autenticar en la aplicacion, seleccionar pages en el sidebar, seleccionar la pagina a eliminar, por ultimo dar clic en eliminar y confirmar la operación.|
|  Paginas |  Mostrar pagina por estado | Se debe autenticar en la aplicacion, seleccionar pages en el sidebar, se debe seleccionar el filtro por estado y luego realizar el filtrado.|
|  Paginas |  Mostrar pagina por autor | Se debe autenticar en la aplicacion, seleccionar pages en el sidebar, se debe seleccionar el filtro por autor y luego realizar el filtrado.|

|  Funcionalidad | Nombre escenarios de pruebas  |  Descripcion escenarios de pruebas  |
| ------------ | ------------ |------------ |
|  Post |  Crear nuevo post con estado publicado | Se debe autenticar en la aplicacion, seleccionar post en el sidebar, despues  se debe agregar una nuevo post, se debe agregar titulo y contenido. Por ultimo se debe dar en el boton publicar. |
|  Post | Crear nuevo post con estado borrador |  Se debe autenticar en la aplicacion, seleccionar post en el sidebar, despues  se debe agregar una nuevo post, se debe agregar titulo y contenido. NO se debe dar en el boton publicar.|
|  Post |  Actulizar post | Se debe autenticar en la aplicacion, seleccionar post en el sidebar, despues  se debe seleccionar el post a modificar, se edita el titulo o contenido. Por ultimo se debe dar en el boton publicar, en caso de querer publicar los cambios en caso contrario omitase. |
|  Post |  Eliminar post | Se debe autenticar en la aplicacion, seleccionar post en el sidebar, despues  se debe seleccionar el post a eliminar, por ultimo se debe confirmar la eliminacion.|
|  Post |  Filtrar post por estado y autor | Se debe autenticar en la aplicacion, seleccionar post en el sidebar, se debe seleccionar el filtro por estado o autor y luego realizar el filtrado.|


|  Funcionalidad | Nombre escenarios de pruebas  |  Descripcion escenarios de pruebas  |
| ------------ | ------------ | ------------ |
|  Tags |  Crear tag | Se debe autenticar en la aplicacion, seleccionar tags en el sidebar, despues  se debe agregar una nuevo tag, se debe diligenciar los campos. Por ultimo se debe dar en el boton guardar.|
|  Tags |  Eliminar Tag | Se debe autenticar en la aplicacion, seleccionar tag en el sidebar, despues  se debe seleccionar el tag a eliminar, por ultimo se debe confirmar la eliminacion. |

### Entrega semana 4

Para la entrega del reporte del uso de las herramientas Monkey Cypress y Rippuppet, los invito a navegar a la wiki de nuestro proyecto:

URL: https://github.com/kevin96uniandes/pruebas_automatizadas_equipo24/wiki
![image](https://user-images.githubusercontent.com/123959005/235336057-3773f2ee-75ce-4cec-aab0-bd683ae5d60a.png)

En la sección derecha de la wiki podras encontrar las paginas correspondientes al reporte seccionado por herramienta usada, te invitamos a que revises cada una

![image](https://user-images.githubusercontent.com/123959005/235336073-b8e1f340-de37-4afd-925a-1e9a0cf4ebb2.png)
