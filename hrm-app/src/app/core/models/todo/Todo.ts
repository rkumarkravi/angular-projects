import { InjectionToken } from "@angular/core";
import { Utils } from './../../utils/Utils';

export interface Todo {
  id:        number;
  date:      string;
  todoNotes: TodoNote[];
}

export interface TodoNote {
  id:       number;
  priority: string;
  desc:     string;
  added:    string;
  completed: boolean;
}

export const UTILSINJECT=new InjectionToken<Utils>('some object',{
  providedIn:'root',
  factory:()=> {
    return new Utils();
  },
});

export interface FormConfig{
  type:string;
  config:SelectForm[]|string;
}

export interface SelectForm{
  name:string;
  value:any;
}
