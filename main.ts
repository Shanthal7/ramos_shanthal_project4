while (true) {
    if (input.acceleration(Dimension.Z) > 0 || input.acceleration(Dimension.Z) < 0) {
        light.setAll(light.rgb(255, 255, 255))
        music.siren.playUntilDone()
        music.setVolume(500)
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
