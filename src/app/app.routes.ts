import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', title: 'Megatron Logistics', component: MainComponent },
    { path: 'about', title: 'About Megatron', component: AboutComponent},
    { path: 'contact', title: 'Contact Megatron', component: ContactComponent }
];
