import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule, Sidebar, Header, Footer],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css'
})
export class Dashboard2 {

}
