import { v4 as uuidv4 } from "uuid"
function shortMusic() {
    return [
        {
            name: "Tying Knots",
            cover: "https://i.scdn.co/image/ab67616d0000b27327f022dfef26e329791dfc9a",
            artist: " Aviino, Jared Janzen",
            id: uuidv4(),
            color: ['#e7cfc4 , #696875'],
            audio: "https://stream.chillhop.com/mp3/55314",
            active: true
        },
        {
            name: "x",
            cover: "https://i.scdn.co/image/ab67616d0000b27327f022dfef26e329791dfc9a",
            artist: " Aviino, Jared Janzen",
            id: uuidv4(),
            color: ['#e7cfc4 , #696875'],
            audio: "https://stream.chillhop.com/mp3/55314",
            active: false
        },

    ]
}
export default shortMusic