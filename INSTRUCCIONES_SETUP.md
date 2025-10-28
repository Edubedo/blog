# Instrucciones de Configuración - Sistema de Comentarios

## ✅ Cambios Realizados

He actualizado la conexión de base de datos para usar el patrón **singleton** compatible con Next.js serverless. Esto significa:

1. Una sola instancia de Sequelize reutilizada en todas las solicitudes
2. Compatible con funciones serverless de Next.js
3. Gestión automática del pool de conexiones

## 🔧 Configuración de Variables de Entorno

Crea o edita el archivo `.env` en la raíz del proyecto con tus credenciales de Railway:

```env
# Opción 1: DATABASE_URL completa (RECOMENDADO)
DATABASE_URL=postgresql://postgres:tu_password@yamabiko.proxy.rlwy.net:55057/railway

# Opción 2: Variables individuales
DB_HOST=yamabiko.proxy.rlwy.net
DB_PORT=55057
DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=tu_password
```

## 📝 Cómo Obtener tus Credenciales de Railway

1. Ve a tu proyecto en Railway
2. Click en tu servicio PostgreSQL
3. Ve a la pestaña **"Variables"**
4. Busca `DATABASE_URL` o `POSTGRES_URL`
5. Copia el valor completo
6. Pégalo en tu archivo `.env`

El formato debería verse así:
```
postgresql://postgres:password@host:port/database
```

## 🚀 Próximos Pasos

1. **Agrega tu DATABASE_URL al archivo .env**
2. **Reinicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
3. **Verifica la conexión**: Deberías ver en la consola:
   ```
   Connecting to database...
   Connection string: postgresql://postgres:****@host:port/database
   ```

## 💡 Notas Importantes

- **No** incluyas espacios en la URL de conexión
- **No** uses comillas en las variables de `.env`
- El archivo `.env` debe estar en la raíz del proyecto
- Asegúrate de que `.env` esté en `.gitignore` (no subas tus credenciales)

## 🐛 Solución de Problemas

Si ves el error "password authentication failed":
- Verifica que el usuario sea `postgres` (no `postgresql`)
- Verifica que la contraseña no tenga caracteres especiales mal escapados
- Usa la URL completa de Railway directamente

Si el error persiste, copia el DATABASE_URL exacto de Railway sin modificarlo.

