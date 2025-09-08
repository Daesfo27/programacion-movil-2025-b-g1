📑 Software Requirements Specification (SRS)

Proyecto: Flashcards con IA
Versión: 1.0
Fecha: 08/09/2025
Responsable: Equipo Flashcards IA

1. Introducción
1.1 Propósito

Este documento SRS tiene como objetivo describir de manera clara, verificable y trazable los requerimientos del sistema Flashcards con IA, una aplicación móvil que ayuda a los estudiantes a repasar de manera más eficiente para parciales y quices, mediante la generación automática de tarjetas de estudio a partir de apuntes y documentos.
El SRS servirá de referencia para el equipo de desarrollo, QA y stakeholders en la definición del alcance y validación del producto.

1.2 Alcance

La aplicación permitirá:

Registro/login (email y Google).

Carga de documentos (texto, PDF).

Generación automática de flashcards con IA.

Clasificación por tema y modo de estudio.

Seguimiento de progreso y gamificación.

Notificaciones y recordatorios.

No se incluye en esta fase:

Integración con terceros (OCR avanzado, LMS externos).

Funcionalidades premium de monetización.

1.3 Definiciones, acrónimos y abreviaturas

RF: Requisito Funcional.

RNF: Requisito No Funcional.

IA: Inteligencia Artificial.

Flashcard: Tarjeta de estudio con formato “pregunta–respuesta”.

1.4 Referencias

IEEE Std 830-1998: Recommended Practice for Software Requirements Specification.

Documentación interna del proyecto (pitch y backlog).

1.5 Visión general del documento

El documento sigue la norma IEEE 830 con: introducción, descripción general, requerimientos específicos, atributos del sistema y apéndices.

2. Descripción general
2.1 Perspectiva del producto

Aplicación móvil (Android/iOS) con backend en la nube que:

Consume APIs de procesamiento de texto/IA.

Almacena datos en base de datos relacional (usuarios, flashcards, progreso).

Integra autenticación con Google y correo electrónico.

2.2 Funciones del producto (alto nivel)

Registro/login de usuarios.

Carga de documentos (texto o PDF).

Generación automática de flashcards con IA.

Clasificación por temas.

Modos de estudio (aleatorio, autoevaluación).

Seguimiento de progreso y logros.

Notificaciones personalizadas.

2.3 Características de los usuarios

Estudiantes universitarios y de secundaria: alfabetización digital básica, necesidad de repaso eficiente.

Profesores/administradores: usuarios secundarios, con interés en revisar o generar sets de estudio.

2.4 Restricciones

Compatibilidad mínima: Android 10 / iOS 14.

Privacidad: datos de usuarios deben almacenarse cifrados.

Tiempo de desarrollo inicial (MVP): 3 meses.

2.5 Supuestos y dependencias

Dependencia de servicios de IA (API NLP).

Requiere conexión a internet para generación de flashcards (excepto revisión offline).

3. Requerimientos específicos
3.1 Interfaces externas

UI móvil: interfaz nativa intuitiva, soporte accesibilidad (lector de pantalla, contraste AA).

API IA: POST /api/generate_flashcards {document} → responde {flashcards: [...]}.

Notificaciones push: integradas con Firebase Cloud Messaging.

3.2 Funciones del sistema (Requisitos funcionales – RF)
| ID    | Descripción                                                                      | Prioridad | Criterio de aceptación                                                                         |
| ----- | -------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
| RF-01 | El sistema permitirá registrar y autenticar usuarios con correo o Google.        | Alta      | Dado un email válido y contraseña ≥8 caracteres, el sistema crea cuenta y permite login.       |
| RF-02 | El usuario podrá cargar documentos en PDF o texto.                               | Alta      | Al subir un archivo válido, este queda almacenado y procesado.                                 |
| RF-03 | El sistema generará flashcards automáticamente a partir de un documento cargado. | Alta      | Tras cargar un documento, se generan ≥10 flashcards en menos de 20s.                           |
| RF-04 | El usuario podrá clasificar flashcards por tema.                                 | Media     | El sistema permite asignar un tema y agrupar flashcards.                                       |
| RF-05 | El usuario podrá practicar en modo aleatorio o autoevaluación.                   | Alta      | Al seleccionar modo estudio, el sistema muestra tarjetas en orden aleatorio o en formato Q\&A. |
| RF-06 | El sistema mostrará el progreso y logros del usuario.                            | Media     | El usuario visualiza porcentaje de aciertos y medallas obtenidas.                              |


3.3 Requisitos no funcionales (RNF)
| ID     | Tipo           | Descripción                                                               | Métrica                           |
| ------ | -------------- | ------------------------------------------------------------------------- | --------------------------------- |
| RNF-01 | Rendimiento    | Tiempo de generación de flashcards ≤ 20s.                                 | 95% de las solicitudes            |
| RNF-02 | Seguridad      | Contraseñas cifradas y comunicación TLS 1.2+.                             | 100% de conexiones                |
| RNF-03 | Disponibilidad | Uptime de la app ≥ 99% mensual.                                           | Reportes de monitoreo             |
| RNF-04 | Usabilidad     | La app debe ser usable por estudiantes con alfabetización digital básica. | Pruebas de usabilidad ≥ 80% éxito |
| RNF-05 | Accesibilidad  | Cumplir con WCAG nivel AA.                                                | Revisión manual/automática        |
| RNF-06 | Portabilidad   | La app debe funcionar en Android ≥10 y iOS ≥14.                           | Tests en dispositivos             |


3.4 Lógica de datos / base de datos

- Tabla USUARIO: id, nombre, email, contraseña_hash, fecha_registro.

- Tabla DOCUMENTO: id, usuario_id, nombre, tipo, fecha_carga.

- Tabla FLASHCARD: id, documento_id, pregunta, respuesta, tema, fecha_creacion.

- Tabla PROGRESO: id, usuario_id, flashcard_id, intentos, aciertos.

3.5 Restricciones de diseño

- Backend en Node.js con base de datos PostgreSQL.

- Uso de librerías estándar de NLP/IA (ej. OpenAI, HuggingFace).

- UI híbrida con Flutter.

3.6 Atributos del sistema

- Seguridad: bloqueo de cuenta tras 5 intentos fallidos.

- Escalabilidad: soportar hasta 50k usuarios activos.

- Mantenibilidad: arquitectura modular con microservicios.

4. Apéndices

- Mockups iniciales de pantallas de login, carga de documento y flashcards.

- DER simplificado de entidades principales.