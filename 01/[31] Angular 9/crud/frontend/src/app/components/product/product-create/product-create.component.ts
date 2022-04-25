import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  // vou querer fazer um binding nesse atributo
  atributoLegal = "valorQualquer";

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  // fazerAlgo(): void {
  // console.log("Fazendo algo");
  // }

  createProduct(): void {
    this.productService.showMessage("Produto criado!");
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
