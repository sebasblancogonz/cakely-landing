# Despliegue del Blog en Producción

Guía para desplegar el blog de Cakely en producción con PostgreSQL.

## 1. Configuración de PostgreSQL en tu VPS

### Opción A: PostgreSQL local en tu VPS

```bash
# Instalar PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Acceder a PostgreSQL
sudo -u postgres psql

# Crear base de datos y usuario
CREATE DATABASE cakely_blog;
CREATE USER cakely_user WITH PASSWORD 'tu_password_segura';
GRANT ALL PRIVILEGES ON DATABASE cakely_blog TO cakely_user;
\q
```

### Opción B: PostgreSQL como servicio (Recomendado)

Servicios recomendados:
- **Supabase** (Free tier generoso): https://supabase.com
- **Neon** (Serverless PostgreSQL): https://neon.tech
- **Railway** (Fácil de usar): https://railway.app
- **Vercel Postgres**: https://vercel.com/storage/postgres

## 2. Variables de Entorno en Producción

Crea un archivo `.env.production` o configura las variables en tu plataforma de hosting:

```env
# Database
DATABASE_URL="postgresql://usuario:password@host:5432/cakely_blog?schema=public"

# API Security
BLOG_API_KEY="genera-una-api-key-segura-aqui"

# URLs
NEXT_PUBLIC_LANDING_DOMAIN="https://cakely.es"
NEXT_PUBLIC_APP_DOMAIN="https://app.cakely.es"
```

### Generar API Key segura

```bash
# Usando Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Usando OpenSSL
openssl rand -hex 32

# Usando Python
python3 -c "import secrets; print(secrets.token_hex(32))"
```

## 3. Ejecutar Migraciones en Producción

```bash
# En tu servidor de producción
cd /ruta/a/cakely-landing

# Instalar dependencias
pnpm install

# Generar cliente de Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma db push

# O si usas migraciones versionadas
npx prisma migrate deploy
```

## 4. Despliegue en Vercel (Recomendado para Next.js)

### 4.1 Configurar variables de entorno en Vercel

```bash
# Instalar CLI de Vercel
npm i -g vercel

# Login
vercel login

# Configurar variables de entorno
vercel env add DATABASE_URL production
vercel env add BLOG_API_KEY production
```

O desde el dashboard de Vercel:
1. Ve a tu proyecto
2. Settings → Environment Variables
3. Añade las variables necesarias

### 4.2 Desplegar

```bash
# Desplegar a producción
vercel --prod
```

### 4.3 Ejecutar Prisma en Vercel

Añade estos scripts a tu `package.json`:

```json
{
  "scripts": {
    "vercel-build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

## 5. Script del Agente de IA en VPS

### 5.1 Configurar el script en tu VPS

```bash
# En tu VPS
mkdir -p /opt/cakely-blog-agent
cd /opt/cakely-blog-agent

# Copiar el script
# Puedes usar scp o git clone
scp scripts/publish-blog-post.py user@your-vps:/opt/cakely-blog-agent/

# Hacer ejecutable
chmod +x publish-blog-post.py
```

### 5.2 Configurar variables de entorno

```bash
# Añadir a ~/.bashrc o ~/.zshrc
export CAKELY_BLOG_API_URL="https://cakely.es/api/blog/posts"
export CAKELY_BLOG_API_KEY="tu-api-key-segura"

# Recargar
source ~/.bashrc
```

### 5.3 Instalar dependencias Python

```bash
# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar requests
pip install requests
```

### 5.4 Probar el script

```bash
python publish-blog-post.py
```

## 6. Automatización con Cron

Para publicar automáticamente desde tu agente de IA:

```bash
# Editar crontab
crontab -e

# Ejemplo: Ejecutar cada día a las 9 AM
0 9 * * * cd /opt/cakely-blog-agent && /opt/cakely-blog-agent/venv/bin/python publish-blog-post.py >> /var/log/cakely-blog.log 2>&1
```

## 7. Seguridad

### 7.1 Proteger tu API Key

**IMPORTANTE:** Nunca expongas tu API key en:
- Repositorios públicos de GitHub
- Cliente (JavaScript del navegador)
- Logs públicos

### 7.2 Configurar CORS (si es necesario)

Si tu agente de IA llama desde otro dominio, configura CORS en `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/blog/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://tu-dominio-autorizado.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, x-api-key",
          },
        ],
      },
    ];
  },
};
```

### 7.3 Rate Limiting (Opcional pero recomendado)

Para evitar abuso, considera implementar rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

## 8. Monitoreo

### 8.1 Logs de la API

Verifica logs regularmente:

```bash
# En Vercel
vercel logs

# O desde el dashboard
```

### 8.2 Verificar posts publicados

```bash
curl https://cakely.es/api/blog/posts?limit=5
```

## 9. Backup

### Base de datos

```bash
# Backup manual
pg_dump -U cakely_user -d cakely_blog > backup_$(date +%Y%m%d).sql

# Automatizar con cron (cada día a las 2 AM)
0 2 * * * pg_dump -U cakely_user -d cakely_blog > /backups/cakely_blog_$(date +\%Y\%m\%d).sql
```

## 10. Troubleshooting

### Error: "Unable to connect to database"

1. Verifica que `DATABASE_URL` sea correcta
2. Comprueba que PostgreSQL esté ejecutándose
3. Verifica firewall y permisos de red

### Error: "Prisma Client not initialized"

```bash
npx prisma generate
```

### Los posts no aparecen en el blog

1. Verifica que `published: true` en el POST
2. Comprueba que `publishedAt` no sea null
3. Revisa los logs de la API

## Checklist de Despliegue

- [ ] PostgreSQL configurado y accesible
- [ ] Variables de entorno configuradas
- [ ] Migraciones ejecutadas (`prisma db push`)
- [ ] API Key segura generada
- [ ] Script del agente configurado en VPS
- [ ] Primera prueba de publicación exitosa
- [ ] Verificado que el blog muestra los posts
- [ ] Backups automáticos configurados
- [ ] Monitoring configurado

## Soporte

Si encuentras problemas, verifica:
1. Logs de Vercel/tu plataforma
2. Logs de PostgreSQL
3. Variables de entorno correctas
4. Conexión a base de datos

Para más información, consulta:
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel](https://vercel.com/docs)
