import { DeleteModalComponent } from './../shared/delete-modal/delete-modal.component';
import { Contact } from '../core/http/contact.interface';
import { HttpService } from './../core/http/http.service';
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss']
})
export class SubmitPageComponent implements OnInit {

  contacts: Contact[]
  closeSub: Subscription;
  @ViewChild('modal', { read: ViewContainerRef, static: true }) modal;

  constructor(
    private httpService: HttpService,
    private injector: Injector,
    private cfr: ComponentFactoryResolver
    ) { }

  ngOnInit() {
    this.httpService.listContacts()
    .subscribe(data => {
      this.contacts = data; 
    })
  }

  onSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  onDelete(contact) {
    const cmpFactory = this.cfr.resolveComponentFactory(DeleteModalComponent);
    const componentRef = cmpFactory.create(this.injector);
    this.modal.insert(componentRef.hostView);
    componentRef.instance.contact = contact;

    this.closeSub = componentRef.instance.delete.subscribe(()=>{
      console.log(contact)
      this.httpService.deleteContact(contact.id).subscribe(
        success => {alert('Contato excluído com sucesso'); document.location.reload()},
        error => alert(error)
      )
      this.closeSub.unsubscribe();
      this.modal.clear()
    })

    this.closeSub = componentRef.instance.cancel.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.modal.clear()
    })
  }

}
