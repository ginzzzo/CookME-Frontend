import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { FlowbiteService } from './core/services/flowbite.service';
import { LayoutModule } from './modules/layout/layout.module';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'base';
  seo = inject(SeoService);
  flowbite: FlowbiteService = inject(FlowbiteService);
  isLoginPage = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.seo.title.setTitle('Base');
    this.seo.meta.updateTag({ name: 'description', content: 'Base' });
    this.seo.setCanonicalURL('/');
    this.seo.setIndexFollow(true);
    this.flowbite.loadFlowbite((flowbite: FlowbiteService) => {
    });
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }
}