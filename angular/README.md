
# Laboratorio DevSecOps – Angular

## 🎯 Objetivo
Detectar y corregir vulnerabilidades en código Angular aplicando buenas prácticas DevSecOps.

## 📚 Ejercicios

| # | Archivo | Nivel | Tema | Qué detectar / corregir |
|---|----------|--------|------|--------------------------|
| 1 | xss_INSEGURO.component.ts | 🟢 Fácil | XSS (Cross Site Scripting) | No manipular el DOM directamente. Usar DomSanitizer / Renderer2. |
| 2 | tokens_INSEGURO.ts | 🟢 Fácil | Gestión insegura de tokens | No usar localStorage sin expiración ni cifrado. |
| 3 | auth_interceptor_INSEGURO.ts | 🟡 Medio | Interceptor inseguro | No aplicar token a todo ni ignorar expiración o errores. |
| 4 | config_INSEGURO.service.ts | 🟡 Medio | Configuración remota insegura | Validar esquema, no loguear secretos. |
| 5 | file-upload_INSEGURO.component.ts | 🔴 Difícil | Carga de archivos sin validación | Validar tipo, tamaño y canal seguro. |
| 6 | audit-log_INSEGURO.service.ts | 🔴 Difícil | Logging excesivo / fuga de datos | No loguear datos sensibles. Enmascarar y clasificar datos. |

## ⚙️ Instrucciones
1. Corrige los archivos inseguros en la carpeta `angular/`.
2. Crea tu versión corregida como `*_CORREGIDO.ts`.
3. Haz commit y push, luego abre un Pull Request.
4. Revisa los resultados de seguridad en GitHub Actions.
