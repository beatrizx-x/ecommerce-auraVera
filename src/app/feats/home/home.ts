import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Nav } from "../../shared/nav/nav";
import { TextoCardHome } from "./texto-card-home/texto-card-home";

@Component({
  imports: [Header, Nav, TextoCardHome],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
