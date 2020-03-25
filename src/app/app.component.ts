import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Eduardo";

  mensaje() {
    var texto = document.getElementById("cajita");
    alert("Hola como estas "+texto.value);
  }
}
