class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}


const assert = require('chai').assert;

describe("SoftUniFy tests", function () {

    let softunify;
    this.beforeEach( function () {
        softunify = new SoftUniFy();
    })

    it("Should contain allSongs property that is initialized as an empty object", function () {
        let result = softunify.allSongs;
        assert.deepEqual(result,{});
    });

    describe("downloadSong(artist, song, lyrics)", function () {
        it("should create artist if not existing and add song", function () {
            let result = softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            assert.property(softunify.allSongs,"Eminem");
            let artistData = softunify.allSongs["Eminem"];
            assert.property(artistData,"rate");
            assert.property(artistData,"votes");
            assert.property(artistData,"songs");

            let artistSongs = artistData.songs;
            assert.deepEqual(artistSongs,["Venom - Knock, Knock let the devil in..."]);

            assert.equal(artistData.rate,0);
            assert.equal(artistData.votes,0);

            assert.instanceOf(result,SoftUniFy);
            assert.deepEqual(result,softunify);
        });

        it("should add song to artist", function () {
            let result = softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            assert.property(softunify.allSongs,"Eminem");
            assert.property(softunify.allSongs,"Dub Fx");

            let artistData = softunify.allSongs["Eminem"];
            assert.property(artistData,"rate");
            assert.property(artistData,"votes");
            assert.property(artistData,"songs");

            let artistSongs = artistData.songs;
            assert.deepEqual(artistSongs,["Venom - Knock, Knock let the devil in...",'Phenomenal - IM PHENOMENAL...']);
            assert.equal(artistData.rate,0);
            assert.equal(artistData.votes,0);
            assert.instanceOf(result,SoftUniFy);
            assert.deepEqual(result,softunify);


            artistData = softunify.allSongs["Dub Fx"];
            assert.property(artistData,"rate");
            assert.property(artistData,"votes");
            assert.property(artistData,"songs");

            artistSongs = artistData.songs;
            assert.deepEqual(artistSongs,['Light Me On Fire - You can call me a liar.. ']);
            assert.equal(artistData.rate,0);
            assert.equal(artistData.votes,0);
            assert.instanceOf(result,SoftUniFy);
            assert.deepEqual(result,softunify);

        });
    });
    describe("playSong(song)", function () {
        it("`You have not downloaded a {song} song yet. Use SoftUniFy's function downloadSong() to change that!`", function () {
            let result = softunify.playSong("Rain on me");

            assert.equal(result,`You have not downloaded a Rain on me song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it("", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let result = softunify.playSong("Rain on me");

            assert.equal(result,`You have not downloaded a Rain on me song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it("", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

            let result = softunify.playSong("Rain on me");

            assert.equal(result,`You have not downloaded a Rain on me song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it("", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

            let result = softunify.playSong("Venom");
            let expResult = `Eminem:\nVenom - Knock, Knock let the devil in...\n`;

            assert.deepEqual(result,expResult);
        });
    })
    describe("•	songsList() ", function () {
        it("with no songs", function () {
            let result = softunify.songsList;
            assert.equal(result,"Your song list is empty");
        });
        it("should return proper songs", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            let result = softunify.songsList;
            assert.equal(result,"Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ");
        });
    });
    describe("•	rateArtist()", function () {
        it("with no artis in playlist", function () {
            let result = softunify.rateArtist('Eminem');
            
            assert.equal(result, "The Eminem is not on your artist list.");
        });
        it("valid artist without rate...", function (){
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunify.rateArtist('Eminem');
            softunify.rateArtist('Eminem');
            let result = softunify.rateArtist('Eminem');

            assert.equal(result, 0);
        });
        it("should return propper rate with valid artist and provided value", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let result = softunify.rateArtist('Eminem',50);
            
            assert.equal(result,50);
            
        });
        it("should return propper rate with valid artist and provided negative value", function () {
            softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let result = softunify.rateArtist('Eminem',-50);
            
            assert.equal(result,-50);
            
        });
    });

});