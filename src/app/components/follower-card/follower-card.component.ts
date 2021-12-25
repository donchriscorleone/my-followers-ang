import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Follower } from 'src/app/services/followers.service';

@Component({
  selector: 'follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.scss']
})
export class FollowerCardComponent implements OnInit {
@Input() follower!: Follower;
@Input() index!: number;
@Output() unfollowEvent: EventEmitter<Follower> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  unfollow() {
    this.unfollowEvent.emit(this.follower);
  }
}
