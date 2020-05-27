import { View } from './view'

export class MessageView extends View<string> {

    template(message: string){
        return `<p class="alert alert-success"><strong>${message}</strong></p>`
    }

}