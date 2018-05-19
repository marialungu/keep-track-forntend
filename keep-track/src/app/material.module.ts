import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDividerModule
} from '@angular/material';
import { MatCardModule, MatGridListModule, MatTabsModule, MatSlideToggleModule } from '@angular/material';
import { MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatRippleModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatRippleModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule
  ]
})

export class MaterialModule { }
