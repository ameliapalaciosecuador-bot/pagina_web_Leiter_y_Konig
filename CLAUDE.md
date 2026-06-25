# Leiter & König — Estudio de Páginas Web

> Proyecto base para construir **páginas web de distintas industrias** (landings y sitios informativos de alta conversión).
> Adaptado del sistema **SaaS Factory** pero enfocado en sitios de marketing, no en SaaS con backend.

---

## 🎯 Para qué es esto

Construimos páginas web para clientes de diferentes industrias. Cada sitio se arma rápido reutilizando:
- El comando **`/landing`** para crear landings de alta conversión (copy + diseño + código).
- Los **design systems** (`.claude/design-systems/`) para variar el estilo según la industria.
- Los **agentes** especializados (frontend, validación, deploy).

---

## 🏗️ Stack (Golden Path)

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Estilos | Tailwind CSS 4 |
| Componentes | shadcn/ui (instalar bajo demanda) |
| Animaciones | Framer Motion (opcional) |
| Deploy | Vercel |

> **Nota:** Este proyecto NO incluye Supabase/auth por defecto. Si un sitio necesita login o base de datos, se agrega con `/add-login` o el agente `supabase-admin`.

---

## 🛠️ Comandos disponibles (`.claude/commands/`)

| Comando | Qué hace |
|---------|----------|
| `/landing` | **El principal.** Entrevista (objetivo, vibe, copy) y crea una landing completa validada visualmente. |
| `/new-app` | Entrevista de negocio para definir un proyecto más complejo. |
| `/add-login` | Agrega autenticación si un sitio lo necesita. |
| `/primer` | Carga contexto del proyecto. |

## 🎨 Design Systems (`.claude/design-systems/`)

`liquid-glass` · `neumorphism` · `neobrutalism` · `bento-grid` · `gradient-mesh`

Uso: `/landing con estilo gradient-mesh` o "crea el hero usando el design system neobrutalism".

---

## 📁 Organización de múltiples sitios

Cada página/cliente vive como una ruta en `src/app/`:

```
src/app/
├── page.tsx                # Home del estudio (o sitio principal)
└── [industria-cliente]/    # Ej: /restaurante-x, /clinica-y
    └── page.tsx
```

Alternativa: duplicar este proyecto como plantilla por cada cliente grande.

---

## ✅ Reglas de trabajo

1. **Mobile-first** y enfocado en conversión (un solo CTA claro por landing).
2. **Ejecuta, no preguntes de más** al crear UI: propón y muestra.
3. Antes de entregar: `npm run build` debe pasar sin errores de tipos.
4. Copy enfocado en **beneficios**, no features (frameworks AIDA / PAS).

@AGENTS.md
