function startup () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.ringTone(523)
    basic.showString("Hello! Welcome to MicrOS.")
    music.rest(music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
}
startup()
