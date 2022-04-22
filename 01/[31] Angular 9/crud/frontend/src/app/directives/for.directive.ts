import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  // pega o valor digitado na diretiva, depois da palavra chave Em
  @Input("myForEm") numbers!: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    // um template para cada repeticao/numero
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit : number });
    }
  }
}
