import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

// decorator
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    // anction in 2 parm
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
}
