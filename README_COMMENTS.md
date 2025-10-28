# Sistema de Comentarios Anónimos

Este proyecto ahora incluye un sistema de comentarios anónimos con likes, conectado a una base de datos PostgreSQL usando Sequelize.

## Características

- ✅ Comentarios anónimos sin necesidad de registro
- ✅ Campo opcional para nombre de usuario
- ✅ Sistema de likes en los comentarios
- ✅ Cada IP puede dar un like por comentario
- ✅ Base de datos PostgreSQL con Sequelize
- ✅ API RESTful para comentarios y likes

## Configuración de Base de Datos

1. **Crea un archivo `.env` en la raíz del proyecto:**

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tu_nombre_de_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
```

2. **Reemplaza las credenciales con tus datos reales**

## Estructura de Archivos Creados

```
config/
├── connectDatabase.js    # Configuración de Sequelize
├── initDatabase.js       # Inicialización de la base de datos
└── models/
    ├── Comment.js        # Modelo de comentarios
    └── Like.js           # Modelo de likes

app/
├── api/
│   ├── comments/
│   │   └── route.ts      # API para comentarios (GET, POST)
│   └── likes/
│       └── route.ts      # API para likes (GET, POST, DELETE)
└── components/
    └── comments-section.tsx  # Componente de UI para comentarios
```

## Modelos de Base de Datos

### Comment (Comentarios)
- `id`: ID único
- `postSlug`: Slug del post al que pertenece
- `authorName`: Nombre del autor (opcional, default: "Anonymous")
- `content`: Contenido del comentario
- `createdAt`: Fecha de creación

### Like (Likes)
- `id`: ID único
- `commentId`: ID del comentario
- `ipAddress`: Dirección IP del usuario que dio like

## Uso

Los comentarios aparecen automáticamente al final de cada entrada del blog. Los usuarios pueden:

1. **Comentar**: Escribir un comentario (nombre opcional)
2. **Dar like**: Hacer clic en el corazón para dar/quitar like
3. **Ver comentarios**: Todos los comentarios aparecen ordenados por fecha descendente

## API Endpoints

### GET /api/comments?postSlug={slug}
Obtiene todos los comentarios de un post

### POST /api/comments
Crea un nuevo comentario
```json
{
  "postSlug": "nombre-post",
  "authorName": "Nombre opcional",
  "content": "Contenido del comentario"
}
```

### GET /api/likes?commentId={id}
Verifica si el usuario actual ha dado like

### POST /api/likes
Crea un like
```json
{
  "commentId": 123
}
```

### DELETE /api/likes?commentId={id}
Elimina un like

## Consideraciones de Seguridad

- Los likes están limitados por IP para evitar spam
- Los comentarios no requieren autenticación (totalmente anónimos)
- Se recomienda agregar validación de contenido y rate limiting en producción

## Próximos Pasos

1. Configura tus credenciales en `.env`
2. Asegúrate de que PostgreSQL está corriendo
3. Ejecuta el proyecto y prueba los comentarios

