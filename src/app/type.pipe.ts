import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea.model';

@Pipe({
  name: "typeOf",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Idea[], desiredType){
    var output: Idea[] = [];
    if(desiredType === "charity") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].type === desiredType) {
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredType === "project") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].type === desiredType) {
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredType === "product") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].type === desiredType) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
