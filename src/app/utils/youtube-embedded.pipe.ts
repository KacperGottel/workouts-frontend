import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'youtubeEmbedded',
})
export class YoutubeEmbeddedPipe implements PipeTransform {
  transform(link: string): string {
    const match = link.match(/youtube\.com\/watch\?v=(\w+)/)
    if (match) {
      const videoId = match[1]
      console.log(`https://www.youtube.com/embed/${videoId}`)
      return `https://www.youtube.com/embed/${videoId}`
    } else {
      return link
    }
  }
}
