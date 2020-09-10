import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from './app.component'
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint

    getCourses() {
        return this.http.get('http://localhost:3000/api/allCourses')
    }

    getFeaturedCourse() {
        return this.http.get('http://localhost:3000/api/featuredCourse')
    }

    getLiteratureCourses() {
        return this.http.get("http://localhost:3000/api/literatureCourses")
    }

    getAncientCourses() {
        return this.http.get("http://localhost:3000/api/ancientCourses")

    }

    getMedievalCourses() {
        return this.http.get("http://localhost:3000/api/medievalCourses")

    }


    getEarlyModernCourses() {
        return this.http.get("http://localhost:3000/api/earlyModernCourses")
    }

    getModernCourses() {
        return this.http.get("http://localhost:3000/api/modernCourses")
    }

    getTheologyCourses() {
        return this.http.get("http://localhost:3000/api/theology")
    }

    getScienceCourses() {
        return this.http.get("http://localhost:3000/api/science")
    }

    getTechnologyCourses() {
        return this.http.get("http://localhost:3000/api/technology")
    }
 
}
