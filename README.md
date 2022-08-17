Servie and Dependency Injection.

1. Service is created. Its just plain ts class with method. Which will call backend. For this demo, We are just returning list hardcoded.

2. In aap.module.ts -> In providers, we have to append newly created service. Otherwise error will be thrown.

3. Service is injected in CoursesComponent.
   Courses component is dependent on Courses service. i.e. CoursesComponents needs data from COursesService.
