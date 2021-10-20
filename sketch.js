/*
@author Kiwi
@date 2021-10-20

testing p5.sound.js in the name of AP Physics!


 */

let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

let bob
let gravity
let monosynth

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    monosynth = new p5.MonoSynth()
    let mono_2 = new p5.MonoSynth()
    playSynth(440)

    mono_2.play('G4', 0.5, 0, 3)
}

function draw() {
    background(234, 34, 24)

}

function playSynth(note) {
    userStartAudio();

    // note velocity (volume, from 0 to 1)
    let velocity = 0.5;
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 3;

    monosynth.play(note, velocity, time, dur);
}