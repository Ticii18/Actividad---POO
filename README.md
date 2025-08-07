# ✅ 5. Análisis final (teórico)

## Responder lo siguiente

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
  
  **Funciones constructoras:**
  - **Ventajas:** Funciona en navegadores más antiguos, más control sobre el código
  - **Desventajas:** Sintaxis más complicada, fácil olvidar usar `new`, métodos se escriben separados
  
  **Class:**
  - **Ventajas:** Sintaxis más clara y fácil de leer, todo junto en un solo lugar, tiene propiedades privadas (#)
  - **Desventajas:** No funciona en navegadores muy viejos
  
- ¿Cuáles son las ventajas de usar getters y setters?
  - **Control:** Puedes validar los datos antes de guardarlos, por ejemplo; que no sea negativo
  - **Seguridad:** Evitas que cambien valores importantes por error
  - **Fácil uso:** Se usan como propiedades normales (`obj.propiedad`) pero con validación

- ¿Qué problemas pueden surgir al modificar prototipos nativos como String?
  - **Conflictos:** Otros códigos o librerías pueden usar los mismos nombres
  - **Errores inesperados:** Puede romper código que no esperaba esos métodos
  - **Mala práctica:** Es difícil de mantener y puede confundir a otros programadores

- Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?
  - **Asignación directa:** `Persona.prototype.greet = personPrototype.greet`
    - Solo copia ese método específico
  - **Object.assign:** `Object.assign(Persona.prototype, personPrototype)`
    - Copia todos los métodos del objeto de una vez, es mas rapido si tienes muchos métodos
