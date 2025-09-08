📎 Anexos – Flashcards con IA

1. Mockups iniciales (prototipos de pantallas)

Pantalla de Login/Registro

- Campos: correo, contraseña, botón “Ingresar con Google”.

- Acción: iniciar sesión o registrarse.

Pantalla de Carga de Documento

- Botón: “Subir archivo (PDF/TXT)”.

- Vista previa: nombre del archivo cargado.

- Acción: procesar para generar flashcards.

Pantalla de Flashcards Generadas

- Lista tipo tarjetas (pregunta → respuesta oculta).

- Botón: “Mostrar respuesta”.

- Opción: marcar como “Correcto” o “Incorrecto”.

Pantalla de Progreso

- Indicador de porcentaje de aciertos.

- Gráfica de sesiones completadas.

- Logros desbloqueados con iconos de gamificación.


2. DER simplificado (Modelo Entidad–Relación)

+-------------+         +---------------+         +----------------+
|   USUARIO   |1       N|   DOCUMENTO   |1       N|   FLASHCARD    |
+-------------+---------+---------------+---------+----------------+
| id (PK)     |         | id (PK)       |         | id (PK)        |
| nombre      |         | usuario_id FK |         | documento_id FK|
| email       |         | nombre        |         | pregunta       |
| contraseña  |         | tipo          |         | respuesta      |
+-------------+         | fecha_carga   |         | tema           |
                        +---------------+         +----------------+
                                 |
                                 |1
                                 |N
                        +-----------------+
                        |    PROGRESO     |
                        +-----------------+
                        | id (PK)         |
                        | usuario_id (FK) |
                        | flashcard_id FK |
                        | intentos        |
                        | aciertos        |
                        +-----------------+



3. Notas adicionales

- El diseño de UI debe priorizar accesibilidad (contraste AA, targets ≥44px, soporte screen reader).

- La generación de flashcards debe ser verificable: preguntas claras, respuestas concisas.

- Se recomienda incluir un modo offline limitado para repaso, guardando flashcards favoritas en caché local.

- Futuras versiones podrían integrar OCR (para fotos de apuntes) y exportación a PDF.