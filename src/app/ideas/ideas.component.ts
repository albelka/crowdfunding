import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Router } from '@angular/router';
import { IdeaService } from '../idea.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  providers: [IdeaService]
})
export class IdeasComponent implements OnInit {
  ideas: FirebaseListObservable<any[]>;
  filterByType: string = "allIdeas";

  constructor(private router: Router, private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

  goToDetailPage(clickedIdea) {
    this.router.navigate(['ideas', clickedIdea.$key])
  }

  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }

}
