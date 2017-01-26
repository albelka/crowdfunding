import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css'],
  providers: [IdeaService]
})
export class NewIdeaComponent implements OnInit {

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
  }

  submitForm(title: string, creators: string[], details: string, goal: number, funds: string, rewards: string[], type: string) {
    var newIdea: Idea = new Idea(title, creators, details, goal, funds, rewards, type);
    this.ideaService.addIdea(newIdea);
  }

}
