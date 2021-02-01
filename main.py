while True:
    if input.acceleration(Dimension.Z) > 0 or input.acceleration(Dimension.Z) < 0:
        light.set_all(light.rgb(255, 255, 255))
        music.siren.play_until_done()
        music.set_volume(500)
    else:
        light.clear()
        music.stop_all_sounds()
