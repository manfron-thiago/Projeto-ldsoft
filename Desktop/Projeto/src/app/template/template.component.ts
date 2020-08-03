import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
    selector: 'template-app',
    templateUrl: './template.component.html',
})

@NgModule({
    imports: [FormsModule, CommonModule]    
})

export class TemplateComponent implements OnInit {

   
    ngOnInit(): void {       
    }

   

}