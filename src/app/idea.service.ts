import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class IdeaService {
  ideas: FirebaseListObservable<any[]>;

  constructor( private angularFire: AngularFire) {
    this.ideas = angularFire.database.list('ideas');
   }

   getIdeas() {
     return this.ideas;
   }

   addIdea(newIdea: Idea) {
     console.log( "here" + newIdea);
     console.log("here");
     this.ideas.push(newIdea);
   }

   getIdeaById(ideaId: String) {
     return this.angularFire.database.object('/ideas/' + ideaId);
   }

}
