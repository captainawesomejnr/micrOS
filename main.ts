function AppSelectMenu () {
    AppSelect_menu__is_it_being_used = true
    Apps = [
    "Micro:compass",
    "Sport:bit",
    "Multi-dice for Micro:bit",
    "Flashing Heart"
    ]
    if (AppSelect_menu__is_it_being_used == true && input.buttonIsPressed(Button.A)) {
    	
    } else {
    	
    }
}
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
function loadscreen () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . # # #
        # # . . #
        # . . . #
        # # . . #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . . # #
        # . . . #
        # . . # #
        # # # . .
        `)
}
function loadscreenrepeat () {
    loadscreen()
    loadscreen()
    loadscreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("Your micro:bit will restart")
    control.reset()
})
let Apps: string[] = []
let AppSelect_menu__is_it_being_used = false
startup()
loadscreenrepeat()
