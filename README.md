# DEUSDETH TAROT

Landing page de consultas de tarot com agendamento via WhatsApp.

## Estrutura

- `index.html` — página única do site
- `src/input.css` — fonte do Tailwind (diretivas + classes customizadas)
- `assets/css/main.css` — CSS compilado (gerado pelo build, não editar à mão)
- `assets/img/` — imagens do site
- `tailwind.config.js` — tema (cores, fontes, plugins)

## Desenvolvimento

Requer Node.js instalado.

```bash
npm install
```

Gerar o CSS compilado uma vez:

```bash
npm run build
```

Ou manter o CSS recompilando automaticamente enquanto edita o HTML:

```bash
npm run watch
```

Servir o site localmente em `http://localhost:8080`:

```bash
npm run serve
```

## Deploy

Depois de rodar `npm run build`, o site é 100% estático — basta publicar a pasta
inteira (menos `node_modules/` e `src/`) em qualquer hospedagem estática:
GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

Importante: sempre rode `npm run build` antes de publicar, para que
`assets/css/main.css` reflita as últimas mudanças feitas em `src/input.css`
ou nas classes do `index.html`.

## Contato configurado no site

- WhatsApp: `+55 89 98150-9164` (link `wa.me` usado em vários pontos do HTML)
- Instagram: [@detwit](https://www.instagram.com/detwit/)
