🎭 Casos de Uso – Flashcards con IA

Versión: 1.0
Fecha: 08/09/2025
Responsable: Equipo Flashcards IA

UC-01 – Registro/Login

ID: UC-01
Nombre: Registro/Login
Actor primario: Estudiante

Interesados:
- Estudiante (quiere acceder a la app).

- Soporte técnico (reduce incidencias de acceso).

Precondiciones:
- La aplicación está instalada en el dispositivo.

- El usuario no tiene sesión activa.

Postcondiciones (éxito):
- El usuario tiene una cuenta creada y una sesión activa.

Postcondiciones (fallo):

- Se muestra mensaje de error y se permite reintentar.

Flujo principal:

1. El usuario selecciona “Registrarse con correo” o “Google”.

2. Ingresa correo y contraseña válidos.

3. El sistema valida los datos.

4. El sistema crea la cuenta o inicia sesión.

5. Se redirige al inicio de la aplicación.

Extensiones:

- 2a. Credenciales inválidas → mostrar error.

- 2b. 5 intentos fallidos → bloquear temporalmente la cuenta.

Reglas de negocio:

- Contraseña ≥ 8 caracteres, con al menos 1 mayúscula y 1 número.

RF/RNF relacionados:

- RF-01, RNF-02 (seguridad), RNF-06 (portabilidad).

UC-02 – Generar flashcards con IA

ID: UC-02
Nombre: Generación automática de flashcards
Actor primario: Estudiante

Interesados:
- Estudiante (ahorra tiempo y esfuerzo en crear tarjetas).

- Docente (valora la eficiencia en el estudio).

Precondiciones:
- Usuario autenticado.

- Documento cargado correctamente.

Postcondiciones (éxito):

- El sistema genera un set de flashcards vinculadas al documento.

Postcondiciones (fallo):

- Se notifica que el documento no es válido o que ocurrió un error en la generación.

Flujo principal:

1. El usuario selecciona un documento previamente cargado.

2. Solicita generar flashcards.

3. El sistema procesa el documento con IA.

4. El sistema devuelve ≥10 flashcards (pregunta–respuesta).

2. El usuario visualiza el set generado.

Extensiones:

- 3a. Documento demasiado grande → dividir en secciones.

- 3b. Error en servicio de IA → mostrar mensaje y opción de reintentar.

Reglas de negocio:

- Cada flashcard debe contener una pregunta clara y una respuesta concreta.

- Tiempo de generación ≤ 20 segundos.

RF/RNF relacionados:

- RF-02, RF-03, RNF-01 (rendimiento), RNF-02 (seguridad).

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