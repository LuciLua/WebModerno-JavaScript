import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0
  };

  // vou querer fazer um binding nesse atributo
  atributoLegal = "valorQualquer";

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  // fazerAlgo(): void {
  // console.log("Fazendo algo");
  // }

  // metodo
  createProduct(): void {
    // no meotodo subscribe, serei notif quando a resposta chegar
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
