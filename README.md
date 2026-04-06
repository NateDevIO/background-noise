# Background Noise

A minimal, browser-based ambient noise generator for focus, sleep, and relaxation. No frameworks, no build step — just a single HTML file and a set of audio loops.

## Sounds

**Color noises** (generated in-browser via Web Audio API):
Brown, White, Pink, Green, Blue, Violet, Gray

**Nature:** Rain, Thunderstorm, Ocean, Wind, Stream, Crickets

**Scenes:** Campfire, Fan, Airplane Cabin, Train, Laundromat

**ASMR:** Cat Purr, Heartbeat, Keyboard

## Features

- Real-time waveform visualizer with auto-scaling
- Seamless crossfade between sounds
- Keyboard shortcuts — `Space` to play/pause, `Up`/`Down` to switch sounds
- Fully responsive, works on mobile
- Zero dependencies

## Running locally

Serve the `public/` directory with any static file server:

```sh
npx serve public
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

Configured for [Vercel](https://vercel.com) — just connect the repo and it serves the `public/` directory automatically (see `vercel.json`).

## Audio credits

Nature, scene, and ASMR recordings sourced from [Moodist](https://github.com/remvze/moodist) (MIT license, Pixabay/CC0 audio).

## License

MIT
