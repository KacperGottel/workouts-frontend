import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent {
  @Input('url') url: string | undefined
}
