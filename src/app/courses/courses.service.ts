import { Injectable } from "@angular/core";

/*Optional in this case. Bcz, In this class we are not injecting any dependency. \

This annotation denotes, The class (courseService) is injectable. i.e. we can inject dependency into this class.
Suppose we have to inject Dependency of LogService in this. Then, we need to decorate the CourseService With injectable.
 */
@Injectable()
export class CoursesService{
    getCourses(){
        return ["English", "marathi"," hindi", "Telugu", "Bengali"];
    }
}