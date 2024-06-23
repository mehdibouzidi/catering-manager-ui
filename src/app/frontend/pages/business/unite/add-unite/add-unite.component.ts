import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnitPayload } from 'src/app/backend/payloads/business/unitpayload';
import { UnitService } from 'src/app/backend/service/business/unit.service';

@Component({
  selector: 'app-add-unite',
  templateUrl: './add-unite.component.html',
  styleUrls: ['./add-unite.component.css'],
})
export class AddUniteComponent implements OnInit {
  generalForm: FormGroup;

  payload = new UnitPayload();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUniteComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private service: UnitService
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.payload.name = this.f.name.value;
    this.payload.code = this.f.code.value;

    this.service.add(this.payload).subscribe({
      next: (response: UnitPayload) => {
        if (response != null) {
          console.log('Unit Added');
          this.dialogRef.close();
        }
      },
      error: () => {},
    });
  }

  ngOnInit(): void {
    this.generalForm = this.fb.group({
      name: [
        this.payload.name,
        [Validators.required, Validators.maxLength(30)],
      ],
      code: [
        this.payload.code,
        [Validators.required, Validators.maxLength(30)],
      ],
    });
  }

  get f() {
    return this.generalForm.controls;
  }
}
