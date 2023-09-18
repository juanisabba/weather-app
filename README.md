# Weather App React + Typescript + Vite

Aplicación de clima utilizando la API de https://www.weatherapi.com/ con las opciones de buscar ciudades, ver el pronóstico detallado de las próximas 24hs, ver el pronóstico de la semana, cambiar el tema de la aplicación (claro u oscuro) y agregar ciudades a una lista de favoritos. Se pueden realizar 5 peticiones de forma gratuita, después de eso se abrirá un modal para continuar con una suscripción. 
También puedes ver la aplicación desplegada en https://juani-weather-app.netlify.app/.

## Características principales

- Aplicación del clima desarrollada en React + Typescript + Vite.
- Fondo cambiante dependiendo el clima en el horario seleccionado.
- Utilización de Less para el diseño.
- Gestión del estado de la aplicación con Redux Toolkit.
- Uso de otras librerías como axios, moment y react-toastify.

## Instalación y Uso

1. Clona este repositorio ejecutando `git clone https://github.com/juanisabba/weather-app.git`.
2. Instala las dependencias ejecutando `npm install`.
4. Para generar un empaquetado ejecuta `npm run build`. Se creará una carpeta "dist".
5. Para iniciar la aplicación, ejecuta `npm run preview`. Se levantará en el puerto 4173.

Modo oscuro
![image](https://github.com/juanisabba/weather-app/blob/main/src/assets/examples/example1.jpg)

Modo claro
![image](https://github.com/juanisabba/weather-app/blob/main/src/assets/examples/example2.jpg)

Lista de favoritos
![image](https://github.com/juanisabba/weather-app/blob/main/src/assets/examples/example3.jpg)
