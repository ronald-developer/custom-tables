import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHierarchyComponent } from './table-hierarchy/table-hierarchy.component';



@NgModule({
  declarations: [TableHierarchyComponent],
  imports: [
    CommonModule
  ],
  exports: [TableHierarchyComponent]
})
export class SharedModule { }
