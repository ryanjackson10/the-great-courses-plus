import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';   // our custom service, see below

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public foods;
  public courses;
  public featuredCourse;
  public literatureCourses;
  public ancientCourses;
  public earlyModernCourses;
  public medievalCourses;
  public modernCourses;
  public theologyCourses;
  public scienceCourses;
  public technologyCourses;
 
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getCourses();
    this.getFeaturedCourse();
    this.getLiteratureCourses();
    this.getEarlyModernCourses();
    this.getAncientCourses();
    this.getMedievalCourses();
    this.getModernCourses();
    this.getTheologyCourses();
    this.getScienceCourses();
    this.getTechnologyCourses();
  }

  getCourses() {
    this._demoService.getCourses().subscribe(
      data => { this.courses = data },
      err => {console.log(err)},
      () => {console.log("done loading courses" + this.courses[1].course_id)}
    )
  }


  getFeaturedCourse() {
    this._demoService.getFeaturedCourse().subscribe(
      data => { this.featuredCourse = data },
      err => {console.log("the err")},
      () => {
        let course = this.featuredCourse[0]
        document.getElementById('featuredImage').setAttribute('src', course.course_image);
        document.getElementById('featuredTitle').innerHTML = course.course_name;
        document.getElementById('featuredInstructor').innerHTML = "With Instructor " + course.course_instructor;
        document.getElementById('featuredDescription').innerHTML = course.course_description;
        console.log("done loading foods" + this.featuredCourse[0].course_image)}
    )

  }

  getLiteratureCourses() {
    this._demoService.getLiteratureCourses().subscribe(
      data => { this.literatureCourses = data },
      err => {console.log("error loading literature courses")},
      () => {
        console.log("done loading literature courses")
      }
    )
  }

  getEarlyModernCourses() {
    this._demoService.getEarlyModernCourses().subscribe(
      data => { this.earlyModernCourses = data },
      err => {console.log("error loading early modern courses")},
      () => {
        console.log("done loading early modern courses");
      }
    )
  }

  getMedievalCourses() {
    this._demoService.getMedievalCourses().subscribe(
      data => { this.medievalCourses = data },
      err => {console.log("error loading medieval courses")},
      () => {
        console.log("done loading medieval courses");
      }
    )
  }


  getAncientCourses() {
    this._demoService.getAncientCourses().subscribe(
      data => { this.ancientCourses = data },
      err => {console.log("error loading ancient courses")},
      () => {
        console.log("done loading ancient courses");
      }
    )
  }

  getModernCourses() {
    this._demoService.getModernCourses().subscribe(
      data => { this.modernCourses = data },
      err => {console.log("error loading modern courses")},
      () => {
        console.log("done loading modern courses");
      }
    )
  }

  getTheologyCourses() {
    this._demoService.getTheologyCourses().subscribe(
      data => { this.theologyCourses = data },
      err => {console.log("error loading theology courses")},
      () => {
        console.log("done loading theology courses");
      }
    )

  }

  getScienceCourses() {
    this._demoService.getScienceCourses().subscribe(
      data => { this.scienceCourses = data },
      err => {console.log("error loading science courses")},
      () => {
        console.log("done loading science courses")
      }
    )
  }

  getTechnologyCourses() {
    this._demoService.getTechnologyCourses().subscribe(
      data => { this.technologyCourses = data },
      err => {console.log("error loading technology courses")},
      () => {
        console.log("done loading technology courses")
      }
    )
  }





}
