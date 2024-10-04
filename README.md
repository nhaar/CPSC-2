# Waddle Forever

Waddle Forever is composed of a localhost server emulator for Club Penguin and an electron client with the server that can run the game out of the box, built with Node.JS in TypeScript.

It's main goals are accessible speedrunning, accessible sandbox Club Penguin and in the future for a complete singleplayer experience and archival of parties and events.

> [!IMPORTANT]  
> Users, check the [download tutorial](https://github.com/nhaar/Waddle-Forever/blob/main/guide/GUIDE.md)! It is very simple

# Progress

At the moment, the program is very basic and all you can do is walk around the island and play some minigames.

The client has ambitious goals, so it is uncertain if they will be met. The main goals include:

* Be fully useable for all speedruns
* Allow exploring any party, event and timestamp in the timeline
* Allow adding mods easily
* Useable for small servers hosted for friends
* Have a world of NPCs over the island
* Have a complete singleplayer experience and "story mode"

Prject roadmap:

- [x] Prerelease -> v0.0.0
    - [x] Login works
    - [x] Room navigation works
    - [x] Singleplayer minigames work
- [x] Functional for PSA Mission speedruns -> v0.1.0 (BETA start)
    - [x] Shortcut command
    - [x] PSA Missions playable
    - [x] Basic inventory system
    - [x] Mission awards work
    - [x] Missions music
    - [x] Suitable for general speedrunning audience
- [ ] Supersede CPSC for stamp speedruns
    - [ ] Stampbook works
    - [ ] Original basic CPSC stamps work
    - [ ] Ability to become EPF agent
    - [ ] Island is accurate
- [ ] Supersede Houdini for 100 stamps:
    - [ ] AS3 Client
    - [ ] Houdini base game stamps
    - [ ] Puffle Digging stamps
- [ ] Useable for All Stamps speedruns
    - [ ] Card-Jitsu games working
    - [ ] Igloo system works
    - [ ] Treasure Hunt working
    - [ ] All AS3 minigames playable
    - [ ] All party/activity stamps working
    - [ ] Bots controllable by commands
    - [ ] Initial version switcher
    - [ ] Add all versions relevant for stamps
- [ ] Supersede CPSC for localhost:
    - [ ] Halloween Party, Medieval Party mods restored as versions
    - [ ] Allow making media server mods
    - [ ] Archive other CPSC mods
    - [ ] Regular Card-Jitsu
- [ ] Catch up to Houdini for localhost
    - [ ] Buddy system
    - [ ] Mail system
    - [ ] Puffle care system
- [ ] Finish timeline switcher
    - [ ] Implementing every party
- [ ] Implement NPCs

# How it works

The project is composed of two segments:

## Client

Its client uses electron to read the webpages for Club Penguin and run Flash, so the user does not need to worry about installing flash. The electron client runs all the servers it will access, so there is no need to setup

## Server

Under the hood, a Club Penguin server emulator runs to give full functionality to the game. The server can also be ran standalone, in which case the electron client is not needed, and you can use multiple windows to access the game.

> [!CAUTION]
> The server made for this client is not safe for multiplayer! It can be exploited easily so only host it to people you trust.
> If you wish to make a CPPS, use a different emulator like Houdini

# Building

To build you must have node.js, npm and yarn installed. After cloning the code, install all dependencies:

> [!NOTE]  
> Last built using Node.js v20.12.2, NPM v9.8.1, yarn v1.22.22

```yarn install```

For running the client in development, run

```yarn start```

For running the server in development, run

```yarn dev```

To build the client (windows):

```yarn build-win```

It will be in `dist`, but you need to move the media folder to the win-unpacked folder as well

To build the server (windows):

```yarn build-server```

The server executable will be generated, it also needs to be in the same folder as the media folder

# Credits

The electron client is originally forked from the [Club Penguin Avalanche client](https://github.com/Club-Penguin-Avalanche/CPA-Client).

The server is based in solero's works in reverse engineering the Club Penguin server [(Houdini server emulator)](https://github.com/solero/houdini). The media server is also mostly from solero's media servers.

Special thanks to charlotte, who made CPSC, the original singleplayer/speedrunning client.
