import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { EnterDetailsComponent } from './enter-details/enter-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DisplayMonthsComponent } from './display-months/display-months.component';


export const AppRoutes: Routes = [
    {path: '', component: EnterDetailsComponent},
     {path: 'display-details', component: DisplayDetailsComponent},
     {path: 'name-editor', component: NameEditorComponent},
    {path: 'profile-editor',component: ProfileEditorComponent},
    {path: 'display-months', component: DisplayMonthsComponent},
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);