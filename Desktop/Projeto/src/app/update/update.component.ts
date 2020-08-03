import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Update } from './update.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [UpdateComponent]
})

export class UpdateComponent implements OnInit {

    update: Update;
    updatesRef: AngularFireList<any>;
    updates: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.update = new Update(null,null,null);
        this.listar();
    }

    salvar() {
        this.db.list('updates').push(this.update)
            .then((result: any) => {
                console.log(result.key);
            });            
    }

    listar() {        
        this.getAll().subscribe(
            updates => this.updates = updates,
            error => alert(error),
            () => console.log("terminou")
          );        
    }

    carregar(update:Update) {
        this.update = new Update(update.key,
            update.nome, update.dataNascimento);{
         };
    }

    excluir(key:string) {
        if (confirm('Deseja realmente excluir?')) {
            this.db.list('updates').remove(key)
                .then((result: any) => {
                    console.log(key);
                });  
        }
    }


    
    getAll() : Observable<any[]> {
        return this.db.list('updates')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
      }


}