function Gerätenameapp () {
    clear_screen()
    Einstellungen_Menü = 0
    basic.pause(500)
    basic.showString(control.deviceName())
    AppGerätenameaktiv = 1
    clear_screen()
    Einstellungen_Menü = 1
    AppGerätenameaktiv = 0
    Einstellungen_Menü2()
    Apps_anzeigen()
}
function Spiele_Menü2 () {
    Spiele_Menü = 1
}
function Apps_anzeigen () {
    if (home == 1) {
        if (aktuelle_App == "Spiele") {
            appsimg[0].showImage(0)
        } else if (aktuelle_App == "Musik") {
            appsimg[1].showImage(0)
        } else if (aktuelle_App == "Uhr") {
            appsimg[2].showImage(0)
        } else {
            appsimg[3].showImage(0)
        }
    } else if (uhr_Menü == 1) {
        if (aktuelle_Uhr_App == "Stoppuhr") {
            uhrappsimg[0].showImage(0)
        } else if (aktuelle_Uhr_App == "Timer") {
            uhrappsimg[1].showImage(0)
        } else if (aktuelle_Uhr_App == "Uhrzeit") {
            uhrappsimg[2].showImage(0)
        } else if (aktuelle_Uhr_App == "Zurück") {
            uhrappsimg[3].showImage(0)
        }
    } else if (Einstellungen_Menü == 1) {
        if (aktuelle_Einstellungs_App == "Ausschalten") {
            Einstellungenappsimg[0].showImage(0)
        } else if (aktuelle_Einstellungs_App == "Temperatur") {
            Einstellungenappsimg[1].showImage(0)
        } else if (aktuelle_Einstellungs_App == "Gerätename") {
            Einstellungenappsimg[2].showImage(0)
        } else if (aktuelle_Einstellungs_App == "Seriennummer") {
            Einstellungenappsimg[3].showImage(0)
        } else if (aktuelle_Einstellungs_App == "Zurück") {
            Einstellungenappsimg[4].showImage(0)
        }
    } else if (Musik_Menü == 1) {
        if (aktuelle_Musik_App == "Tongenerator") {
            Musikappsimg[0].showImage(0)
        } else if (aktuelle_Musik_App == "Musikgenerator") {
            Musikappsimg[1].showImage(0)
        } else if (aktuelle_Musik_App == "Musikspieler") {
            Musikappsimg[2].showImage(0)
        } else if (aktuelle_Musik_App == "Zurück") {
            Musikappsimg[3].showImage(0)
        }
    } else if (Spiele_Menü == 1) {
        if (aktuelle_Spiele_App == "Snake") {
            Spieleappsimg[0].showImage(0)
        } else if (aktuelle_Spiele_App == "Schere Stein Papier") {
            Spieleappsimg[1].showImage(0)
        } else if (aktuelle_Spiele_App == "Tetris") {
            Spieleappsimg[2].showImage(0)
        } else if (aktuelle_Spiele_App == "Zurück") {
            Spieleappsimg[3].showImage(0)
        }
    } else if (tongeneratorappaktiv == 1) {
        if (aktueller_Ton == 262) {
            tongeneratortoeneimg[0].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 277) {
            tongeneratortoeneimg[1].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 294) {
            tongeneratortoeneimg[2].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 311) {
            tongeneratortoeneimg[3].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 330) {
            tongeneratortoeneimg[4].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 349) {
            tongeneratortoeneimg[5].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 370) {
            tongeneratortoeneimg[6].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 392) {
            tongeneratortoeneimg[7].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 415) {
            tongeneratortoeneimg[8].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 440) {
            tongeneratortoeneimg[9].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 466) {
            tongeneratortoeneimg[10].showImage(0)
            music.ringTone(aktueller_Ton)
        } else if (aktueller_Ton == 494) {
            tongeneratortoeneimg[11].showImage(0)
            music.ringTone(aktueller_Ton)
        }
    } else if (musikspielerappaktiv == 1) {
        if (musikaktuellersong == "Wet Hands") {
            musikspielersongsimg[0].showImage(0)
        } else if (musikaktuellersong == "Among Us") {
            musikspielersongsimg[1].showImage(0)
        } else if (musikaktuellersong == "A sky full of stars") {
            musikspielersongsimg[2].showImage(0)
        } else if (musikaktuellersong == "Rickroll") {
            musikspielersongsimg[3].showImage(0)
        } else if (musikaktuellersong == "Zurück") {
            musikspielersongsimg[4].showImage(0)
        }
    }
}
function Musikgeneratorapp () {
	
}
function Musikspielerapp () {
    musikspielerappaktiv = 1
}
function Einstellungen_Menü2 () {
    Einstellungen_Menü = 1
}
function clear_screen () {
    clearimg.showImage(0)
}
function Wet_Handsplay () {
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
}
function Timerapp () {
    Timeraktiv = 1
    Timeranzeige1minaus = 0
    basic.clearScreen()
    while (Timeranzeige1minaus == 0) {
        if (Timeranzeige1minaus == 0) {
            basic.showString("1min")
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (home == 1) {
        count += -1
        if (count < 0) {
            count = Apps.length - 1
        }
        aktuelle_App = Apps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (uhr_Menü == 1) {
        count += -1
        if (count < 0) {
            count = UhrApps.length - 1
        }
        aktuelle_Uhr_App = UhrApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Spiele_Menü == 1) {
        count += -1
        if (count < 0) {
            count = SpieleApps.length - 1
        }
        aktuelle_Spiele_App = SpieleApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Musik_Menü == 1) {
        count += -1
        if (count < 0) {
            count = MusikApps.length - 1
        }
        aktuelle_Musik_App = MusikApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Einstellungen_Menü == 1) {
        count += -1
        if (count < 0) {
            count = EinstellungenApps.length - 1
        }
        aktuelle_Einstellungs_App = EinstellungenApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (tongeneratorappaktiv == 1) {
        count += -1
        if (count < 0) {
            count = Note2.length - 1
        }
        aktueller_Ton = Note2[count]
        clear_screen()
        Apps_anzeigen()
    } else if (musikspielerappaktiv == 1) {
        count += -1
        if (count < 0) {
            count = Musiksonglist.length - 1
        }
        musikaktuellersong = Musiksonglist[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Stoppuhraktiv == 1) {
        Stoppuhrcountsec = 0
        StoppuhrStartzeit = input.runningTime()
        Stoppuhrcount = 1
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else if (Timeraktiv == 1) {
        Timeranzeige1minaus = 1
        Timerlaufzeitstart = input.runningTime()
        basic.clearScreen()
        TimerrestZeit = 60
        while (!(TimerrestZeit == 0) && Timerexit == 0) {
            TimeraktuelleLaufzeit = input.runningTime()
            TimerrestZeit += -1
            if (TimerrestZeit <= 60) {
            	
            } else if (TimerrestZeit == 3) {
                basic.clearScreen()
                basic.showNumber(3)
                basic.setLedColor(0xff0000)
            } else if (TimerrestZeit == 2) {
                basic.clearScreen()
                basic.showNumber(2)
                basic.setLedColor(0xff0000)
            } else if (TimerrestZeit == 1) {
                basic.clearScreen()
                basic.showNumber(1)
                basic.setLedColor(0xff0000)
            }
            basic.showNumber(TimerrestZeit)
            basic.pause(1000)
        }
        if (TimerrestZeit == 0) {
            for (let index = 0; index < 4; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                basic.pause(100)
                music.playTone(494, music.beat(BeatFraction.Whole))
                basic.pause(100)
            }
            Timeraktiv = 0
            uhr_Menü = 1
            Apps_anzeigen()
        }
    } else if (Schere_Stein_Papieraktiv) {
        Schere_Stein_Papier = randint(1, 3)
        if (Schere_Stein_Papier == 1) {
            basic.showIcon(IconNames.Scissors)
        } else if (Schere_Stein_Papier == 2) {
            basic.showIcon(IconNames.SmallSquare)
        } else if (Schere_Stein_Papier == 3) {
            basic.showIcon(IconNames.Square)
        }
    }
})
function Home () {
    Apps_anzeigen()
}
function Tongeneratorapp () {
    if (tongeneratorappaktiv) {
        tongeneratorappaktiv = 0
        music.stopMelody(MelodyStopOptions.All)
        Musik_menü()
    } else {
        tongeneratorappaktiv = 1
        music.ringTone(aktueller_Ton)
    }
}
function Schere_Stein_Papierapp () {
    Schere_Stein_Papieraktiv = 1
}
function Stoppuhrapp () {
    let StoppuhrbtnA = 0
    Stoppuhraktiv = 1
    StoppuhrZeitsec = 0
    basic.clearScreen()
    if (StoppuhrbtnA) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (false) {
    	
    }
}
function Temperaturapp () {
    Temperatur = input.temperature()
    appTemperaturaktiv = 1
    clear_screen()
    Einstellungen_Menü = 0
    if (Temperatur > 27) {
        basic.setLedColor(0xff0000)
    } else if (Temperatur > 20) {
        basic.setLedColor(0xff8000)
    } else if (Temperatur < 20) {
        basic.setLedColor(0x00ffff)
    }
    basic.showString("" + Temperatur + " C")
    clear_screen()
    Einstellungen_Menü = 1
    AppGerätenameaktiv = 0
    Einstellungen_Menü2()
    Apps_anzeigen()
}
function Musik_menü () {
    Musik_Menü = 1
}
function Variablen_laden () {
    musikaktuellersong = "Wet Hands"
    count = 0
    musikspielerappaktiv = 0
    aktuelle_App = "Spiele"
    aktueller_Ton = 262
    aktuelle_Einstellungs_App = "Ausschalten"
    aktuelle_Musik_App = "Zurück"
    aktuelle_Spiele_App = "Snake"
    uhr_Menü = 0
    home = 1
    Apps = ["Spiele", "Musik", "Uhr", "Einstellungen"]
    Note2 = [262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494]
    UhrApps = ["Stoppuhr", "Timer", "Uhrzeit", "Zurück"]
    SpieleApps = ["Snake", "Schere Stein Papier", "Tetris", "Zurück"]
    EinstellungenApps = ["Ausschalten", "Temperatur", "Gerätename", "Seriennummer", "Zurück"]
    MusikApps = ["Tongenerator", "Musikgenerator", "Musikspieler", "Zurück"]
    Musiksonglist = ["Wet Hands", "Among Us", "A sky full of stars", "Rickroll", "Zurück"]
    clearimg = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    appsimg = [images.createImage(`
        # # . . .
        # # . . .
        . # . . #
        . # # # #
        . . . . .
        `), images.createImage(`
        . . # . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
        `), images.createImage(`
        . # # # .
        # . . . #
        # # # . #
        # . . . #
        . # # # .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . # . # .
        . # . # .
        `)]
    uhrappsimg = [images.createImage(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `), images.createImage(`
        . # # # .
        # . . . #
        # # # . #
        # . . . #
        . # # # .
        `), images.createImage(`
        . # # # .
        # # . . #
        # . # # #
        # . . . #
        . # # # .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)]
    Spieleappsimg = [images.createImage(`
        # # . . .
        # # . . .
        . # . . #
        . # # # #
        . . . . .
        `), images.createImage(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `), images.createImage(`
        . # . . .
        # # # . .
        . . . . #
        # . # # #
        # # . . .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)]
    Einstellungenappsimg = [images.createImage(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `), images.createImage(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `), images.createImage(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # # .
        `), images.createImage(`
        . # # # .
        # . . . .
        . # # # .
        . . . . #
        . # # # .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)]
    Musikappsimg = [images.createImage(`
        . . # . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
        `), images.createImage(`
        . . . . .
        . # # # #
        . # . . #
        # # . # #
        # # . # #
        `), images.createImage(`
        . # # # .
        # # # # #
        # # . # #
        # # # # #
        . # # # .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)]
    musikspielersongsimg = [images.createImage(`
        . # # # .
        . . . # #
        . . # . #
        . # . . #
        # . . . .
        `), images.createImage(`
        . # # # .
        # # # # #
        # # # # #
        # # # # .
        . # . # .
        `), images.createImage(`
        # . . . #
        . # . # .
        # . . . #
        . # . # .
        . # . # .
        `), images.createImage(`
        . . # . .
        . # # # .
        . . # . .
        . # . . .
        # . # . .
        `), images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)]
    tongeneratortoeneimg = [images.createImage(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `), images.createImage(`
        . . . . #
        . . . . .
        # # # . .
        # . . . .
        # # # . .
        `), images.createImage(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `), images.createImage(`
        . . . . #
        . . . . .
        # # . . .
        # . # . .
        # # . . .
        `), images.createImage(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `), images.createImage(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `), images.createImage(`
        # # # . #
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `), images.createImage(`
        # # # . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `), images.createImage(`
        # # # . #
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `), images.createImage(`
        # # # . .
        # . # . .
        # # # . .
        # . # . .
        # . # . .
        `), images.createImage(`
        # # # . #
        # . # . .
        # # # . .
        # . # . .
        # . # . .
        `), images.createImage(`
        # . # . .
        # . # . .
        # # # . .
        # . # . .
        # . # . .
        `)]
    Ausgeschalten = 0
    tongeneratorappaktiv = 0
}
input.onButtonPressed(Button.AB, function () {
    count = 0
    if (home == 1) {
        home = 0
        if (aktuelle_App == "Spiele") {
            Spiele_Menü2()
        } else if (aktuelle_App == "Musik") {
            Musik_menü()
        } else if (aktuelle_App == "Uhr") {
            Uhr_Menü()
        } else if (aktuelle_App == "Einstellungen") {
            Einstellungen_Menü2()
        }
    } else if (home != 1 && (uhr_Menü == 1 && aktuelle_Uhr_App == "Zurück" || (Spiele_Menü == 1 && aktuelle_Spiele_App == "Zurück" || (Musik_Menü == 1 && aktuelle_Musik_App == "Zurück" || (Einstellungen_Menü == 1 && aktuelle_Einstellungs_App == "Zurück" || musikspielerappaktiv == 1 && musikaktuellersong == "Zurück"))))) {
        home = 1
        clear_screen()
        uhr_Menü = 0
        Musik_Menü = 0
        Einstellungen_Menü = 0
        Spiele_Menü = 0
        appsimg[0].showImage(0)
        aktuelle_App = "Spiele"
    } else if (Einstellungen_Menü == 1) {
        if (aktuelle_Einstellungs_App == "Gerätename") {
            Gerätenameapp()
        } else if (aktuelle_Einstellungs_App == "Seriennummer") {
            Seriennummerapp()
        } else if (aktuelle_Einstellungs_App == "Temperatur") {
            Temperaturapp()
        } else if (aktuelle_Einstellungs_App == "Ausschalten") {
            Ausschaltenapp()
        }
    } else if (Musik_Menü == 1) {
        if (aktuelle_Musik_App == "Tongenerator") {
            Musik_Menü = 0
            Tongeneratorapp()
        } else if (aktuelle_Musik_App == "Musikgenerator") {
            Musikgeneratorapp()
        } else if (aktuelle_Musik_App == "Musikspieler") {
            Musik_Menü = 0
            Musikspielerapp()
        }
    } else if (Spiele_Menü == 1) {
        if (aktuelle_Spiele_App == "Snake") {
            Snakeapp()
        } else if (aktuelle_Spiele_App == "Schere Stein Papier") {
            Spiele_Menü = 0
            Schere_Stein_Papierapp()
        } else if (aktuelle_Spiele_App == "Tertris") {
            Tetrisapp()
        }
    } else if (uhr_Menü == 1) {
        if (aktuelle_Uhr_App == "Stoppuhr") {
            uhr_Menü = 0
            Stoppuhrapp()
        } else if (aktuelle_Uhr_App == "Timer") {
            uhr_Menü = 0
            Timerapp()
        } else if (aktuelle_Uhr_App == "Uhrzeit") {
            uhr_Menü = 0
            Uhrzeitapp()
        }
    } else if (Musik_Menü == 0 && musikspielerappaktiv) {
        if (musikaktuellersong == "Wet Hands") {
            Wet_Handsplay()
        }
    } else if (uhr_Menü == 0 && Timeraktiv) {
        Timerexit = 1
        Timeraktiv = 0
        uhr_Menü = 1
        Apps_anzeigen()
    } else if (Schere_Stein_Papieraktiv == 1) {
        Schere_Stein_Papieraktiv = 0
        Spiele_Menü = 1
        Apps_anzeigen()
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (home == 1) {
        count += 1
        if (count > Apps.length - 1) {
            count = 0
        }
        aktuelle_App = Apps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (uhr_Menü == 1) {
        count += 1
        if (count > UhrApps.length - 1) {
            count = 0
        }
        aktuelle_Uhr_App = UhrApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Spiele_Menü == 1) {
        count += 1
        if (count > SpieleApps.length - 1) {
            count = 0
        }
        aktuelle_Spiele_App = SpieleApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Musik_Menü == 1) {
        count += 1
        if (count > MusikApps.length - 1) {
            count = 0
        }
        aktuelle_Musik_App = MusikApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Einstellungen_Menü == 1) {
        count += 1
        if (count > EinstellungenApps.length - 1) {
            count = 0
        }
        aktuelle_Einstellungs_App = EinstellungenApps[count]
        clear_screen()
        Apps_anzeigen()
    } else if (tongeneratorappaktiv == 1) {
        count += 1
        if (count > Note2.length - 1) {
            count = 0
        }
        aktueller_Ton = Note2[count]
        clear_screen()
        Apps_anzeigen()
    } else if (musikspielerappaktiv == 1) {
        count += 1
        if (count > Musiksonglist.length - 1) {
            count = 0
        }
        musikaktuellersong = Musiksonglist[count]
        clear_screen()
        Apps_anzeigen()
    } else if (Stoppuhraktiv) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        StoppuhrEndzeit = input.runningTime()
        Stoppuhrcount = 0
        StoppuhrZeitsec = (StoppuhrEndzeit - StoppuhrStartzeit) / 1000
        basic.clearScreen()
        basic.showNumber(StoppuhrZeitsec)
        uhr_Menü = 1
        Stoppuhraktiv = 0
        Apps_anzeigen()
    }
})
function Uhr_Menü () {
    basic.pause(100)
    uhr_Menü = 1
}
function reset_app_menue () {
    Musik_Menü = 0
}
function Tetrisapp () {
	
}
function Uhrzeitapp () {
    basic.clearScreen()
    basic.showString("18" + ":" + "00")
    basic.pause(500)
    uhr_Menü = 1
    Apps_anzeigen()
}
function Ausschaltenapp () {
    Ausgeschalten = 1
    control.reset()
    control.reset()
    basic.clearScreen()
}
function Seriennummerapp () {
    clear_screen()
    Einstellungen_Menü = 0
    basic.pause(500)
    basic.showString("" + (control.deviceSerialNumber()))
    appSeriennummeraktiv = 1
    clear_screen()
    Einstellungen_Menü = 1
    appSeriennummeraktiv = 0
    Einstellungen_Menü2()
    Apps_anzeigen()
}
function Snakeapp () {
	
}
let appSeriennummeraktiv = 0
let StoppuhrEndzeit = 0
let Ausgeschalten = 0
let appTemperaturaktiv = 0
let Temperatur = 0
let StoppuhrZeitsec = 0
let Schere_Stein_Papier = 0
let TimeraktuelleLaufzeit = 0
let Timerexit = 0
let TimerrestZeit = 0
let Timerlaufzeitstart = 0
let Stoppuhrcount = 0
let StoppuhrStartzeit = 0
let Stoppuhrcountsec = 0
let Musiksonglist: string[] = []
let Note2: number[] = []
let EinstellungenApps: string[] = []
let MusikApps: string[] = []
let SpieleApps: string[] = []
let UhrApps: string[] = []
let Apps: string[] = []
let count = 0
let Schere_Stein_Papieraktiv = 0
let Stoppuhraktiv = 0
let Timeranzeige1minaus = 0
let Timeraktiv = 0
let clearimg: Image = null
let musikspielersongsimg: Image[] = []
let musikaktuellersong = ""
let tongeneratortoeneimg: Image[] = []
let aktueller_Ton = 0
let Spieleappsimg: Image[] = []
let aktuelle_Spiele_App = ""
let Musikappsimg: Image[] = []
let aktuelle_Musik_App = ""
let Einstellungenappsimg: Image[] = []
let aktuelle_Einstellungs_App = ""
let uhrappsimg: Image[] = []
let aktuelle_Uhr_App = ""
let appsimg: Image[] = []
let aktuelle_App = ""
let musikspielerappaktiv = 0
let tongeneratorappaktiv = 0
let Musik_Menü = 0
let uhr_Menü = 0
let home = 0
let Spiele_Menü = 0
let AppGerätenameaktiv = 0
let Einstellungen_Menü = 0
Variablen_laden()
Home()
