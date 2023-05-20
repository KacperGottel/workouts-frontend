import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'youtubeEmbedded',
  pure: false,
})
export class YoutubeEmbeddedPipe implements PipeTransform {
  transform(link: string | undefined): string {
    const videoId = link?.split('v=')[1]
    return `https://www.youtube.com/embed/${videoId}`
  }
}
