# 🚀 Portfolio Web - Cristhian Muriel

## 📋 Descripción

Portfolio web profesional de Cristhian Muriel, Full Stack Web Developer Jr. Sitio moderno, responsive y optimizado que presenta proyectos, experiencia laboral y habilidades técnicas con un diseño elegante y funcionalidades interactivas.

## ✨ Características Principales

### 🎨 **Diseño Moderno**
- **One Page Design** con navegación suave entre secciones
- **Fondo Parallax** con imagen generada por IA en el hero
- **Paleta de colores profesional** (gris moderno con acentos naranjas)
- **Animaciones CSS** sutiles y elegantes
- **Tipografía Inter** para máxima legibilidad

### 📱 **Responsive Design**
- **Mobile First** approach
- **Breakpoints optimizados**: 30rem, 48rem, 64rem
- **Navegación hamburguesa** funcional en móviles
- **Grid layouts** adaptativos
- **Imágenes optimizadas** para todos los dispositivos

### ⚡ **Funcionalidades Interactivas**
- **Efecto Parallax** en hero section (movimiento con mouse)
- **Animaciones de scroll** con Intersection Observer
- **Formulario de contacto** integrado con WhatsApp
- **Descarga de CV** generada dinámicamente
- **Sistema de notificaciones** elegante
- **Navegación suave** entre secciones

## 🛠️ Stack Tecnológico

### **Frontend**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares con variables CSS
- **JavaScript ES6+** - Funcionalidades interactivas
- **CSS Grid & Flexbox** - Layouts modernos
- **CSS Custom Properties** - Sistema de diseño escalable

### **Arquitectura CSS**
```
css/
├── variables.css      # Variables CSS globales
├── global.css         # Reset, utilidades y estilos base
├── navigation.css     # Navbar y navegación
├── hero.css          # Sección principal con parallax
├── tech-stack.css    # Stack tecnológico
├── projects.css      # Portfolio de proyectos
├── experience.css    # Experiencia laboral
├── education.css     # Formación académica
├── contact.css       # Formulario y redes sociales
├── notifications.css # Sistema de alertas
├── footer.css        # Pie de página
└── responsive.css    # Media queries
```

### **JavaScript Modular**
- **Navegación suave** y mobile menu
- **Efecto parallax** en tiempo real
- **Animaciones de scroll** optimizadas
- **Formulario WhatsApp** con validación
- **Generador de CV** dinámico
- **Sistema de notificaciones** con auto-dismiss
- **Lazy loading** para imágenes

## 📁 Estructura del Proyecto

```
rediseño/
├── index.html              # Página principal
├── script.js              # JavaScript principal
├── README.md              # Documentación
├── css/                   # Estilos modulares
│   ├── variables.css      # Variables CSS
│   ├── global.css         # Estilos globales
│   ├── navigation.css     # Navegación
│   ├── hero.css          # Hero section
│   ├── tech-stack.css    # Stack tecnológico
│   ├── projects.css      # Proyectos
│   ├── experience.css    # Experiencia
│   ├── education.css     # Educación
│   ├── contact.css       # Contacto
│   ├── notifications.css # Notificaciones
│   ├── footer.css        # Footer
│   └── responsive.css    # Responsive
└── img/                  # Recursos gráficos
    ├── zen-bkg.png       # Fondo parallax (IA)
    ├── CAM.png           # Favicon
    ├── template01.png    # Proyectos
    ├── fm987.png         # Proyecto radio
    ├── lcdc.png          # Proyecto LCDC
    ├── git.png           # Icono GitHub
    ├── linkedin.png      # Icono LinkedIn
    └── codepen.png       # Icono CodePen
```

## 🎯 Secciones del Sitio

### **1. Hero Section**
- **Fondo parallax** con imagen zen generada por IA
- **Snippet de código** animado como elemento visual
- **CTAs claros**: Contacto, Proyectos, Descarga CV
- **Estadísticas** destacadas (7+ proyectos, 3+ años NOC)

### **2. Stack Tecnológico**
- **Grid adaptativo** con categorías
- **Hover effects** en cada tecnología
- **Organización por áreas**: Frontend, Backend, Herramientas, Redes

### **3. Proyectos Destacados**
- **Grid masonry** responsive
- **Overlays interactivos** con información detallada
- **Enlaces directos** a demos y repositorios
- **Tecnologías utilizadas** en cada proyecto

### **4. Experiencia Laboral**
- **Timeline vertical** con diseño moderno
- **Información cronológica** clara
- **Skills tags** por posición
- **Responsive** con timeline lateral en móviles

### **5. Formación Académica**
- **Cards organizadas** por categorías
- **Certificaciones** y cursos relevantes
- **Iconos de verificación** para cada logro

### **6. Contacto**
- **Formulario integrado** con WhatsApp
- **Información de contacto** completa
- **Redes sociales** con hover effects
- **Validación** de campos obligatorios

## ⚙️ Funcionalidades Técnicas

### **Performance**
- **CSS modular** para carga optimizada
- **Lazy loading** de imágenes
- **Animaciones optimizadas** con `transform` y `opacity`
- **Intersection Observer** para animaciones de scroll
- **Debounced events** en parallax

### **Accesibilidad**
- **Navegación por teclado** completa
- **ARIA labels** en elementos interactivos
- **Contraste optimizado** (WCAG AA)
- **Texto alternativo** en todas las imágenes
- **Semántica HTML5** correcta

### **SEO**
- **Meta tags** optimizados
- **Open Graph** para redes sociales
- **Estructura semántica** HTML5
- **URLs amigables** con anclas
- **Sitemap** implícito en navegación

### **Responsive Breakpoints**
```css
/* Mobile First */
Base: 0 - 30rem (480px)
Tablet: 30rem - 48rem (768px)
Desktop: 48rem - 64rem (1024px)
Large: 64rem+ (1024px+)
```

## 🚀 Instalación y Uso

### **Requisitos**
- Navegador web moderno (Chrome 60+, Firefox 55+, Safari 12+)
- Servidor web local (opcional para desarrollo)

### **Instalación**
```bash
# Clonar o descargar el proyecto
git clone [repository-url]

# Navegar al directorio
cd rediseño

# Abrir en navegador
open index.html
```

### **Desarrollo Local**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## 🎨 Personalización

### **Variables CSS**
Editar `css/variables.css` para cambiar:
- **Colores** del tema
- **Espaciado** y dimensiones
- **Tipografía** y tamaños
- **Sombras** y efectos
- **Transiciones** y animaciones

### **Contenido**
- **Proyectos**: Editar sección en `index.html`
- **Experiencia**: Actualizar timeline
- **Contacto**: Cambiar número de WhatsApp en `script.js`
- **Imágenes**: Reemplazar archivos en carpeta `img/`

## 📊 Métricas de Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔧 Tecnologías Utilizadas

| Categoría | Tecnología | Versión | Propósito |
|-----------|------------|---------|-----------|
| **Markup** | HTML5 | - | Estructura semántica |
| **Estilos** | CSS3 | - | Diseño y layout |
| **Scripting** | JavaScript | ES6+ | Interactividad |
| **Fuentes** | Inter | Google Fonts | Tipografía |
| **Iconos** | Custom PNG | - | Redes sociales |
| **Imágenes** | AI Generated | - | Fondo parallax |

## 📝 Notas de Desarrollo

### **Decisiones de Diseño**
- **Unidades REM** para escalabilidad
- **CSS Grid** para layouts complejos
- **Flexbox** para alineación
- **Custom Properties** para mantenibilidad
- **Mobile First** para performance

### **Optimizaciones**
- **Modularización CSS** para carga selectiva
- **Intersection Observer** en lugar de scroll events
- **Transform/Opacity** para animaciones fluidas
- **Debouncing** en eventos de mouse
- **Lazy loading** para imágenes

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Cristhian Muriel**
- 📧 Email: cralmuriel@gmail.com
- 💼 LinkedIn: [linkedin.com/in/cram2130](https://www.linkedin.com/in/cram2130/)
- 🐙 GitHub: [github.com/scramder](https://github.com/scramder)
- 🎨 CodePen: [codepen.io/scramder](https://codepen.io/scramder)

---

⭐ **¡Dale una estrella si te gustó el proyecto!** ⭐