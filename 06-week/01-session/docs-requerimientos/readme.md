PRESENTACION DE PROYECTO

TEMA: Flashcards con IA (inteligencia artificial)

INTEGRANTES: Daniel Fontalvo - Leonardo Perez



📘 Documentación de Requerimientos – Flashcards con IA

Versión: 1.0
Fecha: 08/09/2025
Equipo: Flashcards IA

📑 Índice

1. SRS (IEEE 830)

- Introducción

- Descripción General

- Requerimientos Específicos

- Lógica de Datos

- Restricciones y Atributos

2. Historias de Usuario

3. Casos de Uso

- Especificaciones

- Diagrama de Casos de Uso

4. Matriz de Trazabilidad

5. Checklist de Validación


📑 SRS (IEEE 830)

1. Introducción

Propósito: Documentar los requerimientos de la app Flashcards con IA, que genera tarjetas de estudio automáticamente a partir de apuntes y documentos.

Alcance:

- Registro/Login

- Carga de documentos (texto, PDF)

- Generación automática de flashcards con IA

- Clasificación por tema

- Modos de estudio (aleatorio, autoevaluación)

- Progreso y logros

- Notificaciones

Glosario:

- RF = Requisito Funcional

- RNF = Requisito No Funcional

- IA = Inteligencia Artificial

- Flashcard = tarjeta de estudio (pregunta–respuesta)

Referencias: IEEE 830-1998, Pitch del proyecto.

2. Descripción General

- Usuarios principales: Estudiantes de secundaria y universidad.

- Perspectiva: App móvil Android/iOS con backend en la nube + API de IA.

- Restricciones: Android ≥10, iOS ≥14, TLS 1.2+, almacenamiento cifrado.

- Supuestos: Requiere internet para generar flashcards (modo offline solo repaso).

3. Requerimientos Específicos

Requisitos Funcionales (RF)
| ID    | Descripción                                | Prioridad | Criterio de aceptación                                  |
| ----- | ------------------------------------------ | --------- | ------------------------------------------------------- |
| RF-01 | Registrar/login con correo o Google        | Alta      | Registro válido crea cuenta y permite acceso            |
| RF-02 | Cargar documentos (PDF, texto)             | Alta      | Documento válido se almacena y procesa                  |
| RF-03 | Generar flashcards con IA                  | Alta      | Documento genera ≥10 flashcards en ≤20s                 |
| RF-04 | Clasificar flashcards por tema             | Media     | Flashcards pueden etiquetarse y filtrarse               |
| RF-05 | Practicar en modo aleatorio/autoevaluación | Alta      | Flashcards se muestran aleatoriamente o en formato Q\&A |
| RF-06 | Visualizar progreso y logros               | Media     | Se muestra % de aciertos y logros desbloqueados         |



Requisitos No Funcionales (RNF)
| ID     | Tipo           | Descripción                     | Métrica               |
| ------ | -------------- | ------------------------------- | --------------------- |
| RNF-01 | Rendimiento    | Generación ≤20s                 | 95% de casos          |
| RNF-02 | Seguridad      | Contraseñas cifradas + TLS 1.2+ | 100% de conexiones    |
| RNF-03 | Disponibilidad | Uptime ≥99% mensual             | Monitoreo             |
| RNF-04 | Usabilidad     | Uso intuitivo para estudiantes  | ≥80% éxito en pruebas |
| RNF-05 | Accesibilidad  | WCAG AA                         | Validación manual     |
| RNF-06 | Portabilidad   | Android ≥10, iOS ≥14            | Test en dispositivos  |


Usuario(id, nombre, email, contraseña_hash)

Documento(id, usuario_id, nombre, tipo, fecha_carga)

Flashcard(id, documento_id, pregunta, respuesta, tema)

Progreso(id, usuario_id, flashcard_id, intentos, aciertos)

📝 Historias de Usuario
| ID    | Como (rol) | Quiero (objetivo)              | Para (beneficio)       | Prioridad | RF relacionados |
| ----- | ---------- | ------------------------------ | ---------------------- | --------- | --------------- |
| HU-01 | Estudiante | registrarme con correo/Google  | acceder a la app       | Alta      | RF-01           |
| HU-02 | Estudiante | cargar documentos (PDF, texto) | generar flashcards     | Alta      | RF-02, RF-03    |
| HU-03 | Estudiante | clasificar mis flashcards      | organizar repasos      | Media     | RF-04           |
| HU-04 | Estudiante | practicar en modo estudio      | repasar eficientemente | Alta      | RF-05           |
| HU-05 | Estudiante | ver mi progreso y logros       | motivarme              | Media     | RF-06           |


Ejemplo Gherkin (HU-02 – Carga de documentos):

Escenario: Carga de documento válido
  Dado que selecciono un archivo PDF válido
  Cuando lo subo a la aplicación
  Entonces el documento queda almacenado
  Y el sistema lo procesa para generar flashcards

🎭 Casos de Uso
UC-01 – Registro/Login

Actor primario: Estudiante

Flujo principal: ingresar correo/contraseña → validación → cuenta creada/inicio exitoso.

Extensiones: credenciales inválidas, bloqueo tras 5 intentos.

RF relacionados: RF-01, RNF-02, RNF-06

UC-02 – Generar Flashcards con IA

Actor primario: Estudiante

Flujo principal: seleccionar documento → procesar con IA → generar ≥10 flashcards → mostrar al usuario.

Extensiones: documento inválido, error en servicio de IA.

RF relacionados: RF-02, RF-03, RNF-01

Diagrama de Casos de Uso (PlantUML)
@startuml
actor Estudiante

rectangle "App Flashcards IA" {
  usecase "UC-01: Registro/Login" as UC01
  usecase "UC-02: Generar flashcards con IA" as UC02
  usecase "UC-03: Clasificar flashcards" as UC03
  usecase "UC-04: Practicar flashcards" as UC04
  usecase "UC-05: Consultar progreso y logros" as UC05
}

Estudiante --> UC01
Estudiante --> UC02
Estudiante --> UC03
Estudiante --> UC04
Estudiante --> UC05
@enduml


🔗 Matriz de Trazabilidad
| RF                          | HU    | UC    | Pruebas                                         |
| --------------------------- | ----- | ----- | ----------------------------------------------- |
| RF-01 Registro/Login        | HU-01 | UC-01 | TC-01 Registro válido; TC-02 Error credenciales |
| RF-02 Cargar documentos     | HU-02 | UC-02 | TC-03 PDF válido; TC-04 Documento inválido      |
| RF-03 Generar flashcards    | HU-02 | UC-02 | TC-05 ≥10 flashcards; TC-06 Tiempo ≤20s         |
| RF-04 Clasificar flashcards | HU-03 | UC-03 | TC-07 Clasificación; TC-08 Filtrado             |
| RF-05 Practicar flashcards  | HU-04 | UC-04 | TC-09 Aleatorio; TC-10 Autoevaluación           |
| RF-06 Progreso y logros     | HU-05 | UC-05 | TC-11 % aciertos; TC-12 Logros                  |


✅ Checklist de Validación – Flashcards con IA

Versión: 1.0
Fecha: 08/09/2025
Responsable: Equipo Flashcards IA

1. Revisión de Requisitos (SRS)

El documento SRS sigue la plantilla IEEE 830.

Los requisitos funcionales (RF) son medibles, claros y verificables.

Se definieron al menos 6 RF y cubren las funcionalidades clave.

Se definieron al menos 6 RNF (rendimiento, seguridad, accesibilidad, etc.).

Se incluyó lógica de datos (entidades y relaciones básicas).

Restricciones técnicas y dependencias documentadas.

2. Revisión de Historias de Usuario

Se redactaron 5 Historias de Usuario con formato correcto (ID, rol, objetivo, beneficio).

Todas cumplen con el criterio INVEST (Independientes, Negociables, con Valor, Estimables, Pequeñas, Testeables).

Cada historia tiene criterios de aceptación en formato Gherkin.

Cada historia está trazada con al menos un RF.

3. Revisión de Casos de Uso

Se especificaron 2 casos de uso completos (UC-01 y UC-02).

Se incluyen flujos principales, alternativos y reglas de negocio.

Se relacionan con los RF correspondientes.

Se incluyó un diagrama de casos de uso en PlantUML con vista general del sistema.

4. Revisión de Matriz de Trazabilidad

Todos los RF están relacionados con al menos una HU y un UC.

Se mapearon los casos de prueba (TC-xx) a cada requisito.

La matriz es consistente y completa.

5. Calidad y Consistencia

Terminología consistente en todo el documento (RF, RNF, HU, UC).

Glosario de términos incluido.

Estructura clara y alineada con los entregables solicitados.

Documentación lista para validación y entrega.