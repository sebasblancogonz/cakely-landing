# Guía Rápida: Blog de Cakely

Esta guía te ayudará a poner en marcha el blog en pocos minutos.

## 1. Configuración Inicial (5 minutos)

### Paso 1: Configura PostgreSQL

**Opción A: PostgreSQL local**
```bash
# Ubuntu/Debian
sudo apt install postgresql
sudo -u postgres psql
CREATE DATABASE cakely_blog;
CREATE USER cakely WITH PASSWORD 'cakely_pwd';
GRANT ALL PRIVILEGES ON DATABASE cakely_blog TO cakely;
\q
```

**Opción B: Usa un servicio cloud (recomendado)**
- [Supabase](https://supabase.com) - Gratis
- [Neon](https://neon.tech) - Gratis
- [Railway](https://railway.app) - Gratis con créditos

### Paso 2: Configura las variables de entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local

# Edita .env.local y actualiza:
# 1. DATABASE_URL con tu conexión a PostgreSQL
# 2. BLOG_API_KEY con una clave segura (genera una más abajo)
```

**Generar API Key segura:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Paso 3: Configura la base de datos

```bash
# Genera el cliente de Prisma
npx prisma generate

# Crea las tablas en la base de datos
npx prisma db push
```

### Paso 4: Inicia la aplicación

```bash
pnpm dev
```

Abre [http://localhost:3001](http://localhost:3001)

## 2. Publica tu primer post (2 minutos)

### Opción A: Usando curl

```bash
curl -X POST http://localhost:3001/api/blog/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_API_KEY_AQUI" \
  -d '{
    "title": "Mi primer post en Cakely",
    "content": "<h2>¡Hola mundo!</h2><p>Este es mi primer post en el blog de Cakely.</p>",
    "excerpt": "Un post de ejemplo para probar el blog",
    "published": true
  }'
```

### Opción B: Usando el script de Python

```bash
# Configura las variables de entorno
export CAKELY_BLOG_API_URL="http://localhost:3001/api/blog/posts"
export CAKELY_BLOG_API_KEY="TU_API_KEY_AQUI"

# Ejecuta el script
python scripts/publish-blog-post.py
```

### Opción C: Usando el script de Node.js

```bash
# Configura las variables de entorno
export CAKELY_BLOG_API_URL="http://localhost:3001/api/blog/posts"
export CAKELY_BLOG_API_KEY="TU_API_KEY_AQUI"

# Ejecuta el script
node scripts/publish-blog-post.js
```

## 3. Verifica que funciona

1. Visita [http://localhost:3001/blog](http://localhost:3001/blog)
2. Deberías ver tu post publicado
3. Haz clic en el post para ver la página individual

## 4. Configura tu agente de IA en la VPS

### En tu VPS:

```bash
# 1. Sube el script a tu VPS
scp scripts/publish-blog-post.py user@tu-vps:/opt/cakely-agent/

# 2. SSH a tu VPS
ssh user@tu-vps

# 3. Configura el entorno
cd /opt/cakely-agent
python3 -m venv venv
source venv/bin/activate
pip install requests

# 4. Configura las variables de entorno
echo 'export CAKELY_BLOG_API_URL="https://cakely.es/api/blog/posts"' >> ~/.bashrc
echo 'export CAKELY_BLOG_API_KEY="TU_API_KEY_REAL"' >> ~/.bashrc
source ~/.bashrc

# 5. Prueba que funciona
python publish-blog-post.py
```

## 5. Integración con tu Agente de IA

### Ejemplo básico en Python:

```python
import requests
import os

def publish_from_ai(content_generated_by_ai):
    """
    Publica contenido generado por tu agente de IA
    """
    api_url = os.getenv("CAKELY_BLOG_API_URL")
    api_key = os.getenv("CAKELY_BLOG_API_KEY")

    headers = {
        "Content-Type": "application/json",
        "x-api-key": api_key
    }

    data = {
        "title": content_generated_by_ai["title"],
        "content": content_generated_by_ai["html_content"],
        "excerpt": content_generated_by_ai["summary"],
        "published": True
    }

    response = requests.post(api_url, json=data, headers=headers)

    if response.status_code == 201:
        return response.json()["post"]["url"]
    else:
        raise Exception(f"Error: {response.text}")

# Uso:
ai_content = {
    "title": "Cómo mejorar tus pasteles",
    "html_content": "<h2>Consejos...</h2><p>...</p>",
    "summary": "Los mejores consejos para pasteles perfectos"
}

url = publish_from_ai(ai_content)
print(f"Publicado en: {url}")
```

## Troubleshooting

### Error: "Unable to connect to database"
- Verifica que PostgreSQL está ejecutándose
- Verifica que DATABASE_URL es correcta en `.env.local`
- Prueba la conexión: `psql "postgresql://user:pass@host:5432/db"`

### Error: "Unauthorized"
- Verifica que el header `x-api-key` está configurado
- Verifica que BLOG_API_KEY en `.env.local` coincide con la que usas

### Los posts no aparecen
- Verifica que `published: true` en el POST
- Revisa los logs del servidor Next.js
- Verifica la base de datos: `npx prisma studio`

## Comandos útiles

```bash
# Ver la base de datos visualmente
npx prisma studio

# Ver logs en desarrollo
pnpm dev

# Resetear la base de datos (¡cuidado en producción!)
npx prisma db push --force-reset

# Ver los posts en la terminal
curl http://localhost:3001/api/blog/posts
```

## 6. Automatización con n8n (Opcional)

Si quieres automatizar la generación de contenido con IA:

### Workflows disponibles:

1. **`n8n-workflow-cakely-blog-simple.json`** - Básico (trigger manual)
2. **`n8n-workflow-cakely-blog.json`** - Con Slack notifications
3. **`n8n-workflow-cakely-blog-with-seo-context.json`** - ⭐ Recomendado para empezar
   - Temas predefinidos (6 temas × 5 tipos)
   - Contexto SEO completo
   - ~$0.015 por post

4. **`n8n-workflow-cakely-blog-ai-topics.json`** - Para largo plazo
   - Temas dinámicos con IA (adaptados a temporada)
   - Variedad infinita
   - ~$0.020 por post

5. **`n8n-workflow-cakely-blog-ai-topics-smart-images.json`** - 🌟 Recomendado para producción
   - Temas dinámicos con IA
   - **Imágenes únicas** (nunca repite la misma)
   - **Imágenes relevantes** (keywords generados por IA según el tema)
   - Trackea imágenes ya usadas
   - ~$0.019 por post

### Guías:
- [N8N_WORKFLOW_GUIDE.md](./N8N_WORKFLOW_GUIDE.md) - Configuración paso a paso
- [N8N_AI_TOPICS_VS_MANUAL.md](./N8N_AI_TOPICS_VS_MANUAL.md) - Comparación de workflows
- [N8N_SMART_IMAGES_GUIDE.md](./N8N_SMART_IMAGES_GUIDE.md) - ⭐ Sistema de imágenes inteligentes

## Próximos pasos

1. Revisa [BLOG_SETUP.md](./BLOG_SETUP.md) para configuración avanzada
2. Revisa [BLOG_DEPLOYMENT.md](./BLOG_DEPLOYMENT.md) para desplegar en producción
3. Revisa [N8N_AI_TOPICS_VS_MANUAL.md](./N8N_AI_TOPICS_VS_MANUAL.md) para automatización
4. Personaliza el diseño del blog en `src/app/blog/`
5. Añade categorías o tags si lo necesitas

## ¿Necesitas ayuda?

- Revisa los logs del servidor
- Usa `npx prisma studio` para ver la base de datos
- Verifica que todas las variables de entorno están configuradas
- Consulta la documentación de [Prisma](https://www.prisma.io/docs)

¡Listo! Tu blog está funcionando 🎉
