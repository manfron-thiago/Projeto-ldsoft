import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Carro } from './carro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'carro',
    templateUrl: './carro.component.html',
    styleUrls: ['./carro.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [CarroComponent]
})

export class CarroComponent implements OnInit {

    carro: Carro;
    carrosRef: AngularFireList<any>;
    carros: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.carro = new Carro(null,null,null);
        this.listar();
    }

    salvar() {
        this.db.list('carros').push(this.carro)
            .then((result: any) => {
                console.log(result.key);
            });            
    }

    listar() {        
        this.getAll().subscribe(
            carros => this.carros = carros,
            error => alert(error),
            () => console.log("terminou")
          );        
    }

    carregar(carro:Carro) {
        this.carro = new Carro(carro.key,
            carro.nome, carro.dataNascimento);{
         };
    }

    excluir(key:string) {
        if (confirm('Deseja realmente excluir?')) {
            this.db.list('carros').remove(key)
                .then((result: any) => {
                    console.log(key);
                });  
        }
    }


    
    getAll() : Observable<any[]> {
        return this.db.list('carros')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
      }


}