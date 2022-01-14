import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams = 0;

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName)
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
    
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Attention! Name can't be empty"
      return
    } 
      this.errorMessage = " ";
      this.members.push(this.newMemberName);
      this.newMemberName = " ";
  }

  clearMembers() {
    this.members = []
  }
}

