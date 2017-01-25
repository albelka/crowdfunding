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
     this.ideas.push(newIdea);
   }

   getIdeasById(ideaId: String) {
     return this.angularFire.database.object('/ideas/' + ideaId);
   }

}