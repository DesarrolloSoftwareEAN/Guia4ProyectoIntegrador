# Proyecto Integrador - Guía 4 Desarrollo de Software

Este proyecto es una aplicación web completa que incluye un **frontend** desarrollado con React y Vite, y un **backend** construido con Node.js, Express y MySQL. La aplicación permite gestionar clientes, pedidos, productos, rutas, transportistas y el seguimiento de envíos.

---

## **Tecnologías Utilizadas**

### **Frontend**
- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos modernos.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Axios**: Cliente HTTP para consumir APIs.
- **React Router**: Manejo de rutas en la aplicación.
- **SCSS**: Preprocesador CSS para estilos avanzados.
- **FontAwesome**: Íconos para mejorar la interfaz.

### **Backend**
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir APIs REST.
- **TypeScript**: Tipado estático para un desarrollo más robusto.
- **MySQL**: Base de datos relacional para almacenar datos.
- **dotenv**: Manejo de variables de entorno.
- **mysql2**: Cliente MySQL con soporte para promesas.
- **Nodemon**: Reinicio automático del servidor en desarrollo.

---

---

## **Instalación y Configuración**

### **Requisitos Previos**
- Node.js (v16 o superior)
- MySQL
- npm o yarn

### **Configuración del Backend**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Guia4DesarrolloSoftwareFinal.git
   cd Guia4DesarrolloSoftwareFinal/BackGuia4

   Endpoints del Backend
Clientes
GET /api/clientes: Obtiene todos los clientes.
POST /api/clientes: Crea un nuevo cliente.
Pedidos
GET /api/pedidos: Obtiene todos los pedidos.
POST /api/pedidos: Crea un nuevo pedido.
Productos
GET /api/productos: Obtiene todos los productos.
POST /api/productos: Crea un nuevo producto.
Rutas
GET /api/rutas: Obtiene todas las rutas.
POST /api/rutas: Crea una nueva ruta.
Transportistas
GET /api/transportistas: Obtiene todos los transportistas.
POST /api/transportistas: Crea un nuevo transportista.
Seguimientos
GET /api/seguimientos: Obtiene todos los seguimientos.
POST /api/seguimientos: Crea un nuevo seguimiento.
Características Principales
Frontend
Navegación fluida entre páginas con react-router-dom.
Consumo de la API REST con axios.
Diseño modular con componentes reutilizables (Navbar, Footer).
Estilos personalizados con SCSS.
Backend
API RESTful con rutas organizadas por recursos.
Conexión a MySQL utilizando mysql2 con un pool de conexiones.
Tipado estricto con TypeScript para mayor robustez.
Manejo de errores y respuestas consistentes.
Contribuciones
Si deseas contribuir al proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

Licencia
Este proyecto está bajo la licencia ISC.

CRISTHIAN FELIPE MARTINEZ VENEGAS 
