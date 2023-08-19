import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'youtubeEmbedded',
  pure: false,
})
export class YoutubeEmbeddedPipe implements PipeTransform {
  transform(link: string | undefined): string {
    const videoId = link?.split('v=')[1].split('&')[0]
    return `https://www.youtube-nocookie.com/embed/${videoId}`
  }
}
