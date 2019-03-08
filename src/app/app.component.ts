import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skill Trade';
}

  //git commands
  //git init <-- starts looking for new changes. used before you work
  //git add . <-- grabs all the new stuff
  //git commit -m "first commit"
  //git push -u origin master

  //git publish commands
  //ng build --prod --base-href "/skill-trade/"
  //npx ngh --name="JordanBWilson" --email=jordanblairwilson@gmail.com --no-silent --dir=dist/skill-trade
