📘 Historias de Usuario – Flashcards con IA

Versión: 1.0
Fecha: 08/09/2025
Responsable: Equipo Flashcards IA

1. Historias de Usuario (tabla)

| ID    | Como (rol) | Quiero (objetivo)                            | Para (beneficio)                           | Prioridad | RF/RNF relacionados |
| ----- | ---------- | -------------------------------------------- | ------------------------------------------ | --------- | ------------------- |
| HU-01 | Estudiante | registrarme con correo o Google              | acceder a las funciones de la app          | Alta      | RF-01               |
| HU-02 | Estudiante | cargar documentos en PDF o texto             | generar mis flashcards de forma automática | Alta      | RF-02, RF-03        |
| HU-03 | Estudiante | clasificar mis flashcards por tema           | organizar mejor mis repasos                | Media     | RF-04               |
| HU-04 | Estudiante | practicar en modo aleatorio o autoevaluación | repasar más eficientemente                 | Alta      | RF-05               |
| HU-05 | Estudiante | visualizar mi progreso y logros              | motivarme a seguir estudiando              | Media     | RF-06               |

2. Criterios de aceptación (Gherkin)

- HU-01 – Registro/Login

Funcionalidad: Registro/Login

Escenario: Registro exitoso con correo válido
  Dado que ingreso un correo válido y una contraseña de 8 caracteres
  Cuando presiono el botón "Registrar"
  Entonces el sistema debe crear mi cuenta
  Y debo poder iniciar sesión con esas credenciales

- HU-02 – Carga de documentos

Funcionalidad: Cargar PDF o texto

Escenario: Carga de documento válido
  Dado que selecciono un archivo PDF válido de mis apuntes
  Cuando lo subo a la aplicación
  Entonces el documento debe almacenarse
  Y el sistema debe prepararlo para generar flashcards

- HU-03 – Clasificación de flashcards

Funcionalidad: Clasificar por tema

Escenario: Clasificación de flashcards
  Dado que he generado un set de flashcards
  Cuando asigno el tema "Biología"
  Entonces todas las flashcards seleccionadas quedan etiquetadas con ese tema
  Y debo poder filtrarlas luego por "Biología"

- HU-04 – Modo de estudio

Funcionalidad: Practicar flashcards

Escenario: Estudio en modo aleatorio
  Dado que tengo al menos 10 flashcards generadas
  Cuando inicio el modo de estudio "aleatorio"
  Entonces las flashcards deben mostrarse en orden distinto cada vez
  Y debo poder marcar si acerté o fallé cada una

- HU-05 – Progreso y logros

Funcionalidad: Visualizar progreso

Escenario: Visualizar porcentaje de aciertos
  Dado que respondí 20 flashcards en una sesión
  Y acerté 15 respuestas
  Cuando consulto mi progreso
  Entonces debo ver que mi porcentaje de aciertos es 75%
  Y si corresponde, debo recibir un logro

