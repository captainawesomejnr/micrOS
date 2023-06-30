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
    StartupFail = 0
    if (StartupFail == 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
            music.play(music.stringPlayable("C C5 C C5 C C5 - - ", 120), music.PlaybackMode.LoopingInBackground)
            basic.showString("Error 1: Could not start")
        }
    } else {
        basic.showString("Hello! Welcome to MicrOS.")
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
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
let StartupFail = 0
let Apps: string[] = []
let AppSelect_menu__is_it_being_used = false
startup()
loadscreenrepeat()
