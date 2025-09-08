🔗 Matriz de Trazabilidad – Flashcards con IA

Versión: 1.0
Fecha: 08/09/2025
Responsable: Equipo Flashcards IA

1. Matriz REQ ↔ HU ↔ UC ↔ Test

| Requisito                             | Historias de Usuario | Casos de Uso | Pruebas                                                        |
| ------------------------------------- | -------------------- | ------------ | -------------------------------------------------------------- |
| **RF-01 Registro/Login**              | HU-01                | UC-01        | TC-01 Registro válido; TC-02 Error en credenciales             |
| **RF-02 Cargar documentos**           | HU-02                | UC-02        | TC-03 Cargar PDF válido; TC-04 Documento inválido              |
| **RF-03 Generar flashcards con IA**   | HU-02                | UC-02        | TC-05 Generación ≥10 flashcards; TC-06 Tiempo ≤20s             |
| **RF-04 Clasificar flashcards**       | HU-03                | UC-03        | TC-07 Clasificación por tema; TC-08 Filtrado correcto          |
| **RF-05 Practicar en modo estudio**   | HU-04                | UC-04        | TC-09 Estudio aleatorio; TC-10 Autoevaluación                  |
| **RF-06 Consultar progreso y logros** | HU-05                | UC-05        | TC-11 Calcular porcentaje aciertos; TC-12 Desbloqueo de logros |

2. Notas

Cada RF se encuentra vinculado al menos a una historia de usuario y un caso de uso.

Las pruebas definidas (TC-xx) corresponden a casos de prueba de validación que deben ejecutarse en QA.

La matriz deberá actualizarse en cada iteración para mantener consistencia entre requisitos, historias, casos de uso y pruebas.