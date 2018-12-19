import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Array<any>;
  team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(data => {
      this.teams = data;
    });
  }

  get(teamName) {
    this.teamService.get(teamName).subscribe(data => {
      this.team = JSON.stringify(data);
    });
  }

}
