import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goals';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals:Goal[];
  alertService!:AlertService;
  quote!:Quote;
  quoteService!: QuoteRequestService;

  constructor(goalService:  GoalService, alertService: AlertService, private http:HttpClient, quoteService: QuoteRequestService, private router:Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
    this.quoteService = quoteService;
  }

  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

  goToUrl(id:any){
    this.router.navigate(['/goals', id])
  }
  deleteGoal(index: number){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if(toDelete){
        this.goals.splice(index,1);
        this.alertService.alertMe("This Goal has been deleted");
      }

  }

  ngOnInit(): void {
    // interface ApiResponse{
    //   author:string;
    //   quote:string;
    // }
    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json")
    // .subscribe(data=>{
    //     // successful API request
    //     this.quote = new Quote(data.author, data.quote)
    //          },err =>{
    //            this.quote = new Quote("Winston Churchill", "Never never give up!")
    //            console.log("An error occurred")
    //          })
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);

  }

}
