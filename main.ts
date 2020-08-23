radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
})
let I = 0
radio.setGroup(0)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
I = 99
/**
 * 遥控器A 发射 10
 * 
 * 遥控器B 发射 11
 */
basic.forever(function () {
    if (I == 1) {
        basic.showArrow(ArrowNames.South)
        wuKong.mecanumRun(wuKong.RunList.rear)
    }
    if (I == 2) {
        basic.showArrow(ArrowNames.North)
        wuKong.mecanumRun(wuKong.RunList.Front)
    }
    if (I == 3) {
        basic.showArrow(ArrowNames.West)
        wuKong.mecanumRun(wuKong.RunList.left)
    }
    if (I == 4) {
        basic.showArrow(ArrowNames.East)
        wuKong.mecanumRun(wuKong.RunList.right)
    }
    if (I == 5) {
        wuKong.mecanumSpin(wuKong.TurnList.Left)
    }
    if (I == 6) {
        wuKong.mecanumSpin(wuKong.TurnList.Right)
    }
    if (I == 10) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.OnceInBackground)
    }
    if (I == 11) {
        basic.showIcon(IconNames.Yes)
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    if (I == 0) {
        wuKong.mecanumRun(wuKong.RunList.stop)
    }
})
