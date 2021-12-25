import { Component, OnInit } from '@angular/core';
import { Follower, FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'list-of-followers',
  templateUrl: './list-of-followers.component.html',
  styleUrls: ['./list-of-followers.component.scss']
})
export class ListOfFollowersComponent implements OnInit {
  lists!: Follower[];

  constructor(private followerService: FollowersService) { 
    this.followerService.getFollowers().subscribe(fs => this.lists = fs, err => this.lists = []);
  }

  ngOnInit(): void {
  }

  handleUnfollow(event: Follower) {
    this.lists = this.lists.filter(fol => fol.id !== event.id);
  }
}
