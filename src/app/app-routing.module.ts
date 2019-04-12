
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { MenuComponent } from './components/menu/menu.component';
import { JudgeComponent } from './components/judge/judge.component';
import { ParticipantComponent } from './components/participant/participant.component';


  const routes: Routes = [
    {path: "menu", component: MenuComponent},{path: "judge", component: JudgeComponent},{path: "participant", component: ParticipantComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
