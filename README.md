# ● nodo — landing page

Landing page de **nodo**, agencia de automatización y tecnología para PyMEs.

## Stack

- **React 19** + **TypeScript**
- **TailwindCSS v4**
- **Framer Motion** — animaciones de scroll reveal
- **Canvas API** — efecto de cuadrícula azul interactiva que sigue al cursor
- **Vite** — bundler

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar/          → Navegación fija con blur
│   ├── Hero/            → Sección principal con CTAs
│   ├── VideoSection/    → Video con efecto hover play
│   ├── TechBar/         → Barra de tecnologías
│   ├── Services/        → Servicios con beneficios
│   ├── Process/         → Pasos del proceso (01-04)
│   ├── About/           → Sobre nosotros + stats
│   ├── Team/            → Equipo con cards
│   ├── CTA/             → Call to action final
│   ├── Footer/          → Pie de página
│   └── GridBackground/  → Efecto de cuadrícula azul (Canvas)
├── App.tsx
├── main.tsx
└── index.css            → Theme de Tailwind v4
```

## Setup local

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Listo para **Vercel**: `npm i -g vercel && vercel`

## Paleta

| Color | Hex |
|---|---|
| Background | `#eeeee7` |
| Text | `#252524` |
| Green | `#2a9d6a` |
| Grid Blue | `#3b82f6` |

## Fuente

`ABCDiatypeMono, monospace`
