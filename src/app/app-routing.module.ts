import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { GoalDetailComponent } from "./goal-detail/goal-detail.component";
import { GoalsComponent } from "./goals/goals.component";
import { NotFoundComponent } from "./not-found/not-found.component";

  const routes: Routes = [
    { path: 'goals', component: GoalsComponent},
    { path: 'about', component: AboutComponent},
    {path:'goals/:id', component:GoalDetailComponent},
    { path: '', redirectTo:"/goals", pathMatch:"full"},
    { path:'**', component:NotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponent = [GoalsComponent,
                                AboutComponent,
                                GoalDetailComponent,
                                NotFoundComponent
]
