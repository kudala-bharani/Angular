import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ExpComponentComponent } from './exp-component/exp-component.component';

const routes: Routes = [{ path: 'first-component', component: FirstComponent },

{ path: 'second-component', component:
SecondComponent },
{ path: '', redirectTo: '/first-component', pathMatch: 'full' },

// redirect to `first-component`

{ path: '**', component:  ExpComponentComponent},

// Wildcard route for a 404 page   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
