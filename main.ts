radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
