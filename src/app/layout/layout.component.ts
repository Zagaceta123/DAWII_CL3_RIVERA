import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,MenubarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  
  constructor(private router: Router, 
    private route: ActivatedRoute,
   
  ){

  }

  irLocation():void{
    this.router.navigate(["location"], {relativeTo: this.route})
  }

  irTodos():void{
    this.router.navigate(["todos"], {relativeTo: this.route})
  }

  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
        {
            label: 'Location',
            icon: 'pi pi-home',
            command: () => this.irLocation()
        },
        {
            label: 'Todos',
            icon: 'pi pi-star',
            command: () => this.irTodos()
        }
    ]
}
}
