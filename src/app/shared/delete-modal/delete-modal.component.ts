import { Contact } from './../../core/http/contact.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  contact: Contact;

  constructor() { }

  ngOnInit() {
  }

  onCancel(){
    this.cancel.emit();
  }

  onDelete(){
    this.delete.emit();
  }
}
