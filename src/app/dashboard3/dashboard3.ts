import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

@Component({
  selector: 'app-dashboard3',
  imports: [RouterModule,Footer, Sidebar, Header],
  templateUrl: './dashboard3.html',
  styleUrl: './dashboard3.css'
})
export class Dashboard3 {

}
