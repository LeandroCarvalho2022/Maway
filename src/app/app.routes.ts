import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { EastComponent } from './components/experience/east/east.component';
import { EbenezerComponent } from './components/experience/ebenezer/ebenezer.component';
import { IntroComponent } from './components/experience/intro/intro.component';
import { LanguagesComponent } from './components/skills/languages/languages.component';
import { DatabasesComponent } from './components/skills/databases/databases.component';
import { FrameworksComponent } from './components/skills/frameworks/frameworks.component';
import { SkillsintroComponent } from './components/skills/skillsintro/skillsintro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'exp', component: ExperienceComponent, children: [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'east', component: EastComponent},
    { path: 'ebenezer', component: EbenezerComponent},
    {path: 'intro', component: IntroComponent}
  ]},
  { path: 'skills', component: SkillsComponent, children:[
    {path: '', redirectTo: 'intro2', pathMatch: 'full'},
    {path: 'lang', component: LanguagesComponent},
    {path: 'data', component: DatabasesComponent},
    {path: 'frame', component: FrameworksComponent},
    {path: 'intro2', component: SkillsintroComponent}

  ] },
  { path: 'project', component:  ProjectsComponent},
  { path: 'contact', component: ContactComponent },
];
