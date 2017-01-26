import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, creators: string[], details: string, goal: number, funds: string, rewards: string[], type: string) {
    var newIdea: Idea = new Idea(title, creators, details, goal, funds, rewards, type);
    console.log(newIdea);
  }

}
