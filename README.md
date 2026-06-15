# JaviTrader · Página de enlaces

Página "link in bio" propia para el perfil de JaviTrader.
Es **un solo archivo** (`index.html`), sin dependencias. Branding negro + dorado.

URL pública (GitHub Pages): `https://comerciante220600-ui.github.io/javitrader-bio/`

---

## Cómo hacer cambios

1. Edita `index.html`.
2. Guarda.
3. En GitHub Desktop: escribe un resumen del cambio → **Commit to main** → **Push origin**.
4. En ~1 minuto los cambios estarán online.

### Dónde tocar cada cosa (todo está comentado en `index.html`)

- **Colores de marca** → bloque `:root` del `<style>` (variables `--bg`, `--accent`, etc.).
- **Enlaces** → cada `<a class="link" href="...">` dentro de `<div class="links">`.
  Para añadir un botón, copia un bloque `<a class="link">…</a>` y cambia `href` y el texto.
  Para destacar uno (badge dorado), añade `featured` a la clase: `class="link featured"`.
- **Logo** → archivo `logo.png` (cuadrado). Si falta, se muestra "JT" en dorado.
- **Bio / nombre** → `<h1>` y `<p class="bio">`.
- **Vista previa al compartir** → etiquetas `og:` del `<head>` (título, descripción, imagen).

---

## Enlaces actuales

- YouTube: https://youtube.com/@javitraderr
- Telegram (gratis): https://t.me/CANALJAVITRADER
- Telegram señales (premium): https://t.me/javitrader_senales_bot
- Bitunix (afiliado): https://www.bitunix.com/register?vipCode=JaviTrader
- BingX (afiliado): https://bingxdao.com/partner/JaviTrade
