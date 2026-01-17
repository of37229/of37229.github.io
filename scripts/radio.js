const source = 'eyIxMCBGT09UIFRBTEwiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvV0tEdHZPejhHcHQwaHVCN3d3NUNkdGZSRU5EOVpMVWcubXAzIiwibGVuZyI6MTY2LCJieSI6IkJMRExWRCAmIExpbCBEYXJraWUifSwiMTktMjAwMCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ibmNmNGNUTXQ1N3FrT1JOdEdvZG9xR3NQRTRLVWg1cy5tcDMiLCJsZW5nIjoyMTAsImJ5IjoiR29yaWxsYXoifSwiMkFNIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0tHbEpIYjFMSHdZTmV6ZUltUXpyWW9yVDVDR3BqVE5TLm1wMyIsImxlbmciOjExMSwiYnkiOiJBUVZPTCJ9LCI1MC8vNTAiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvQWE2ZXNkbGtLM09PWUVnTVg3V0NHdmJqM0JuZDBsRXIubXAzIiwibGVuZyI6MjQ2LCJieSI6IlZhbnRhZ2UifSwiQW50aS1TYWZldHkgWm9uZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9qTWIwOURBSzRJSkcydFRBRGJaSlpDOW1JWUptWUFMSS5tcDMiLCJsZW5nIjoxNDYsImJ5IjoiTVlVS0tFIn0sIkJsYWNrIFZlbHZldCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay93Z2RQMWhiVUxib0NjQzhyWFlVbEdEQmtOOVdoZkdqMi5tcDMiLCJsZW5nIjoyNDgsImJ5IjoiSW5mZWN0ZWQgTXVzaHJvb20ifSwiQmxhdGFudCBQbGFnaWFyaXNtIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2F0V2kyMTB4dGVVQmNDeUw5dWpNVHJmM3lKbUl3M2p5Lm1wMyIsImxlbmciOjE3MCwiYnkiOiJHSE9TVCBEQVRBIn0sIkJyYWluIFBvd2VyIHRweiBKby1vb29vb29vb29vb292ZXJoZWF0IFJlbWl4Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2FWMkh1MVpHM21SMDlYVU1SVUU4UHdLZnI1bW15ekNpLm1wMyIsImxlbmciOjE5NCwiYnkiOiJOT01BIn0sIkJyaWRnZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVEdoZHNtRFRGZXhuYllLaWNIVTRlZHM5c1Jic2JHVjcubXAzIiwibGVuZyI6MjIzLCJieSI6IktvcmVzbWEifSwiQnVtcCAtIEhhaXIiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvRUlrS3ZONXE5WnpDSGZrZXdXM2x6U20xZ0xiV091NHAubXAzIiwibGVuZyI6MjEsImJ5Ijoidmlld2VycyBsaWtlIHlvdSJ9LCJDYXNjYWRlIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1FYMVZRU3pMQWdQcUt0alVDNEk2bzdrdlROV0hkMTVlLm1wMyIsImxlbmciOjI2NSwiYnkiOiJLdWJiaSJ9LCJDaGFyaW90Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzhZbWlNTmk0MmV5YzJZWFdsUkMwTHRMVkg3VWN4RzZ4Lm1wMyIsImxlbmciOjIxMywiYnkiOiJSaW90In0sIkNvZmZlZSBCcmVhayI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9VenJQNGxicGptTlFVZ1p1MVh2alJyUHdLMTBtQ0VZSi5tcDMiLCJsZW5nIjoyODAsImJ5IjoiU3RlZmFuIE5peGRvcmYifSwiREFOR0VST09PT1VTIEpVTkdMRSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9nYlEzbmdPbWVVTUM3MVZ0TTMxYXhOY2pTMVQyTDJNRS5tcDMiLCJsZW5nIjoyNDAsImJ5IjoiTGF1ciJ9LCJEZW1vbnMgb2YgUGFpbiI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9mT2NRdTNjWFphRHV3Z3ZDSDh2RnBUQmN4TDBrck43Qi5tcDMiLCJsZW5nIjo0NjgsImJ5IjoiSW5mZWN0ZWQgTXVzaHJvb20ifSwiRE9HTEFORCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9TcG5McXlkM0dWa1NMSTB3UHpkWkRHVHdYMlJaVjJnVi5tcDMiLCJsZW5nIjoxODUsImJ5IjoiSW5mZWN0ZWQgTXVzaHJvb20ifSwiRHJhZ29uZnJ1aXQgU2FsYWQiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvc3RFemlLdVJ2djFmSTF4U2JYajNkTUJIRktDZkt0Y0oubXAzIiwibGVuZyI6MjY1LCJieSI6IkpvenUifSwiRHJpZnQgTmlnaHQiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvUGpQajhkU2ZkZ0l1YUwzWW9oTmg4YnpnM1h2bFVTUUsubXAzIiwibGVuZyI6MTY4LCJieSI6IkZPUkdPVFRFTkFHRSJ9LCIgRSBDIEggTyAgTHV4YXIgUmVtaXgiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvSmgzSGUyQjF1U0JTZFViTGJGYVNNUG9IYXdXNDZFZnkubXAzIiwibGVuZyI6MjQ0LCJieSI6IlZhbmd1YXJkIn0sIkZpY2tsZSBNaW5kcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9vUFZhaXFtV1JFYkdlaTB6NndZOG5JUEZ2dUF1T0hzVi5tcDMiLCJsZW5nIjoyMjcsImJ5IjoiQmlzaG9wIE5laHJ1In0sIkdPT0RSVVNIIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2d2ZGhkUER1SkhsdjlPVVlSNUpHNmNybDlqUE9MZmd2Lm1wMyIsImxlbmciOjMyNSwiYnkiOiJFQklNQVlPIn0sIkkgTmVlZCBhIFllc3RlcmRheSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ZV1pNcTgzeXJQRGVrRUI1Z05nNmtkWlF2b2xia3hPei5tcDMiLCJsZW5nIjoxNDYsImJ5IjoiREogWXVuZyBWYW1wIn0sIkltcHJpbnRpbmciOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvdkRWWWhFZmt6dngwVGUwWUZ1MkFFeGdOMkRGV0FHTzAubXAzIiwibGVuZyI6MTE0LCJieSI6IkxhdXIifSwiSnVtcCBpbiB0aGUgTGluZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay80RkdDT3ZSVDlzUDF1UUtMcEw5bWhVT1VBRXBWSnlPOC5tcDMiLCJsZW5nIjoyMTksImJ5IjoiSGFycnkgQmVsYWZvbnRlIn0sIkxPT0sgQVQgTUUgTk9XIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL25LMm9GdGpydzZsT3hXMXdCcGtVWEhGcnJ1SjRHTnVULm1wMyIsImxlbmciOjE2MywiYnkiOiJESiBZdW5nIFZhbXAgYW5kIEpFVzNMWiJ9LCJNZWlrYXJ1emEiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvcTRoWTdGRXhPYmE4Qnk4R21LbVBIdU11YWU1MGJNajIubXAzIiwibGVuZyI6MjI4LCJieSI6Ik5hbmFob3NoaSBLYW5nZW5nYWt1ZGFuIn0sIk1vcm5pbmcgQmx1bnQiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvQ2htMlFLdGhVUk55N29jMFBqNGUzWkw2dzY4TVBNQW8ubXAzIiwibGVuZyI6ODI0LCJieSI6IlBvcHRhcnRQZXRlIn0sIlBhbG0gVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvTUFURTZBYlVJUkp2SUpuYzhMMzdINGVLeVVnSUs1S3YubXAzIiwibGVuZyI6MjIyLCJieSI6IkVocmxpbmcifSwiUHJhZGEgTWl4IEZlcnJhcmkgSG9yc2VzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzVWeWh1U1FMTFozR3RxNVd0SHdTNURqQXlza3hZZ3c4Lm1wMyIsImxlbmciOjI0NiwiYnkiOiJjYXNz9iwgUkFZRSAmIEQtQmxvY2sgRXVyb3BlIn0sIlB1cnAiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvN3N4U1lDanhUMW5OUVdSV1I4bEVtc1A1b09LQ2VVV0wubXAzIiwibGVuZyI6MjExLCJieSI6Im9saXZlciJ9LCJSYWluIERyb3BzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3RFRWV6YWJSQm5uWnRBS1RHSlFjVkNVTklzSlJpbUcyLm1wMyIsImxlbmciOjMzOCwiYnkiOiJTbGlnaHQifSwiUmVzb25hbmNlIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1NoT3pJMnR6UTFDSXNDd1lwNjRzV3BQbjRGcUllOE5OLm1wMyIsImxlbmciOjIxMiwiYnkiOiJIT01FIn0sIlJvY2sgdGhlIEhvdXNlIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3lFcjM0eEdkQUlWOVFkNVBQU0FaWmxPbXY2SmRFWEpVLm1wMyIsImxlbmciOjI0OSwiYnkiOiJHb3JpbGxheiJ9LCJTZWNvbmQgSGVhdmVuIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2JXN05ZYWR6V1NMZUVmVk40Y0R2djRva3BKanZxVHBvLm1wMyIsImxlbmciOjIyOCwiYnkiOiJSeXUifSwiU2xvcHB5IFdhbGtlciI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9WVzRodGFSeHJEVFByTUtsVlRZTUhvZjJRN2oyQ2Z2RS5tcDMiLCJsZW5nIjoxOTcsImJ5IjoiS3lsZSBHYWJsZXIgYW5kIEpvbm55IFRyZW5ncm92ZSJ9LCJTbW9vdGgiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvTlc2aGxjSG9vQTFGTUVOV2NNV2NjNDB5UVkwUW1sTGIubXAzIiwibGVuZyI6Mjg5LCJieSI6IlNrdWxlIFRveWFtYSBmdCBYS1lMQVIifSwiU3dpbW1pbmcgVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU1FDcXhVdkdoMUVUVnJkSXVkMHhxb3hNTjRXRWpkOGQubXAzIiwibGVuZyI6MjI1LCJieSI6IlZhbGlkIn0sIlRoZSBMZXQgT3V0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzJMdWFqMnQ3eVN5R29ic3hnMW5EakxhNnlTdlFYU1prLm1wMyIsImxlbmciOjIzNSwiYnkiOiJKaWRlbm5hIGZ0IFF1YXZvIn0sIlRoZSBXb25kZXJmdWwgU3RhcnMgV2FsayBpcyBXb25kZXJmdWwiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvSGsxcjhNeWxTUm9POUJjRE9ORDJrRkY4Vm9iQllQMnYubXAzIiwibGVuZyI6MTkyLCJieSI6Ill1cmkgTWlzdW1pIn0sIlRoaXMgaXMgdGhlIERlYWQsIGFuZCBJIFJlYWNoZWQgdGhlIERlYXRobGVzcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay95aEt3VjdmWmdWVm5EaG5QbW8yZ2JMZDN0Mk95UzJTeC5tcDMiLCJsZW5nIjoxOTcsImJ5IjoiQkxBTktGSUVMRCJ9LCJXaGF0IE5vdyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9kOXFWYW8xSEtGNzRpdnkxb1puNEpQcjVIZzNSYzZ3NS5tcDMiLCJsZW5nIjozNDAsImJ5IjoiREogU21va2V5LCBMb3VkIExvcmQsIGFuZCBTb3VkaWVyZSJ9LCJZZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9VQVFxdEZsajZHZjBXRm5ra09FM0RZdkV6dzVwVFdNSC5tcDMiLCJsZW5nIjo3MywiYnkiOiJFcGhpeGEifX0=';

const radioData = JSON.parse(atob(source));
const Segments = Object.freeze({
    VARIETY: 8,         //until 10pm cst
    LATENIGHT: 15,      //until 1:30am cst
    OWL: 21,            //until 4:30am cst
    EARLYBIRD: 26,      //until 6:30am cst
    MORNING: 32,        //until 10am cst
    LUNCH: 40,          //until 2pm cst
    WORK: 48,           //until 6pm cst
});

const SegmentLists = Object.freeze({
    "LATENIGHT": [
        "Anti-Safety Zone",
        "Brain Power tpz Jo-ooooooooooooverheat Remix",
        "Coffee Break",
        "Chariot",
        "DANGEROOOOUS JUNGLE",
        "GOODRUSH",
        "Imprinting",
        "Second Heaven",
        "This is the Dead, and I Reached the Deathless"
    ],
    "OWL": [
        "2AM",
        "Bridges",
        "Bump - Hair",
        "Fickle Minds",
        "I need a Yesterday",
        "Morning Blunt",
        "Purp",
        "What Now",
        "Ye"
    ],
    "EARLYBIRD": [
        " E C H O  Luxar Remix",
        "Fickle Minds",
        "Morning Blunt",
        "LOOK AT ME NOW",
        "Resonance",
        "Sloppy Walker",
        "Smooth",
        "The Wonderful Stars Walk is Wonderful"
    ],
    "MORNING": [
        "5050",
        "Blatant Plagiarism",
        "Cascade",
        "DOGLAND",
        "Fickle Minds",
        "Jump in the Line",
        "Palm Trees",
        "Rock the House",
        "Resonance",
        "Sloppy Walker",
        "Swimming Trees"
    ],
    "LUNCH": [
        "10 FOOT TALL",
        "19-2000",
        "Black Velvet",
        "Coffee Break",
        "DOGLAND",
        "Dragonfruit Salad",
        "Drift Night",
        "Jump in the Line",
        "Meikaruza",
        "Rock the House",
        "Swimming Trees",
        "The Let Out",
        "This is the Dead, and I Reached the Deathless",
        "What now"
    ],
    "WORK": [
        "50//50",
        "Black Velvet",
        "Blatant Plagiarism",
        "Cascade",
        "Demons of Pain",
        " E C H O  Luxar Remix",
        "I Need a Yesterday",
        "LOOK AT ME NOW",
        "Palm Trees",
        "Purp",
        "Rain Drops",
        "Sloppy Walker",
        "Smooth",
        "The Wonderful Stars Walk is Wonderful"
    ],
    "VARIETY": [
        "Anti-Safety Zone",
        "10 FOOT TALL",
        "19-2000",
        "2AM",
        "50//50",
        "Brain Power tpz Jo-ooooooooooooverheat Remix",
        "Bridges",
        "Black Velvet",
        "Blatant Plagiarism",
        "Cascade",
        "Chariot",
        "Coffee Break",
        "DANGEROOOOUS JUNGLE",
        "Demons of Pain",
        "DOGLAND",
        "Dragonfruit Salad",
        "Drift Night",
        " E C H O  Luxar Remix",
        "Fickle Minds",
        "GOODRUSH",
        "Jump in the Line",
        "I Need a Yesterday",
        "Imprinting",
        "LOOK AT ME NOW",
        "Meikaruza",
        "Morning Blunt",
        "Palm Trees",
        "Prada Mix Ferrari Horses",
        "Purp",
        "Rain Drops",
        "Resonance",
        "Rock the House",
        "Second Heaven",
        "Sloppy Walker",
        "Smooth",
        "Swimming Trees",
        "The Let Out",
        "The Wonderful Stars Walk is Wonderful",
        "This is the Dead, and I Reached the Deathless",
        "What Now",
        "Ye"
    ]
});

const blockDur = 30 * 60000;

var loadTime = Date.now();

let segment;        // which segment of blocks we are on

let currentBlock;   // 1 block = 30 min, max 48, correct upon load
let blockHash;      // number of blocks that passed since jan 1 1970
let blockProg;      // how far into the current block on load (%)

let blockInd;       // which track in the current block is playing
let gaps;           // time between each track playing this block
let startTime;      // time to start the current track on
let refreshTime;    // time to resync
let block;          // contains shuffled track array

let playing;
let ended;
let buttonClick;

const testLengs = [1.6, 2.7, 3.8, 4.9, 5.0];
//const audioPlayer = document.getElementById("music"); --OLD

let radioText = document.getElementById("radiotext");

//Helper functions
function removeTZOffset(date) { //UNUSED - sync clock globally
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    return date - offsetMs;
}
function seededShuffle(array, seed) {
    let ind = array.length -1;
    let arr = array;
    while (ind > 0) {
        let val = Math.floor(seed % ind);
        let tmp = arr[ind];
        arr[ind] = arr[val];
        arr[val] = tmp;
        ind--;
    }
    return arr;
}
function syncCurrentBlock(){
    blockHash = loadTime / blockDur;
    blockProg = (blockHash - Math.floor(blockHash)) * 100;
    currentBlock = Math.floor(blockHash) % 48;
    blockHash = Math.floor(blockHash);
}
function getSegment(){
    let segIndex;
    for (const segmentName in Segments){
        if (Segments[segmentName] > currentBlock) {
            segIndex = segmentName;
            break;
        }
    }
    return segIndex;
}
function getLengList(songArray, radioData){
    let lengArray = [];
    for (const i in songArray){
        if (songArray[i] in radioData){
            lengArray[i] = radioData[songArray[i]].leng;
        }
    }
    return lengArray;
}
function getTrackList(songArray, radioData) {
    return songArray
    .filter(name => name in radioData)
    .map(name => ({
        name,
        leng: radioData[name].leng,
        path: radioData[name].path,
        by: radioData[name].by
    }));
}
function fillChunk(candidateList, targetLeng){
    let playlist = [];
    let lengList = getLengList(SegmentLists[segment], radioData);

    //console.log("Lengths: ", lengList);
    const shuffledLengs = seededShuffle(lengList, blockHash);
    const shuffled = seededShuffle(candidateList, blockHash);
    //console.log("Shuffled lengs: ", shuffledLengs);
    //console.log("Shuffled list: ", shuffled);

    let room = targetLeng;
    let offset = 0;

    let tmpblock = [];

    while (room > playlist.length){
        if (shuffledLengs[playlist.length + offset]){
            if (room - shuffledLengs[playlist.length + offset] >= 0){
                room -= shuffledLengs[playlist.length + offset];
                tmpblock[playlist.length] = shuffled[playlist.length + offset];
                playlist[playlist.length] = shuffledLengs[playlist.length + offset];
            }else{
                offset++;
            }
        }else{
            break;
        }
    }

    //console.log("leng data: "+ playlist, "remaining space: " + room);

    gaps = room / playlist.length;
    console.log("gap between each track: ", gaps);

    let posSec = (blockProg / 100) * targetLeng;
    blockInd = 0;
    let tt = 0;
    while (tt + playlist[blockInd] + gaps < posSec){
        tt += playlist[blockInd] + gaps;
        blockInd++;
    }
    startTime = posSec - tt;
    currentTrack = tmpblock[blockInd];
    refreshTime = currentTrack.leng + gaps;

    //block = tmpblock.slice(0, playlist.length - shuffled.length);
    block = tmpblock;

    console.log("Track: " + currentTrack.name);
    console.log("Time into track: ", startTime);
    console.log("Time for next: ", refreshTime);

    //audioPlayer.setAttribute("src", currentTrack.path); --OLD
}
function refresh(){
    syncCurrentBlock();
    segment = getSegment();
    console.log("Current time segment: " + segment, "block #" + blockHash, "(" + Math.floor(blockProg) + "%)", currentBlock + "/48 today");
    //console.log("Current song candidates: ", SegmentLists[segment]);
    //fillChunk(testLengs, 10);
    fillChunk(getTrackList(SegmentLists[segment], radioData), 1800);
}
function getTimeUntilNext30Mins() {
    const now = new Date();
    const minutesPastHalfHour = now.getMinutes() % 30;
    const minutesRemaining = 30 - minutesPastHalfHour;
    const millisecondsUntilNext30Mins = minutesRemaining * 60 * 1000 - now.getSeconds() * 1000 - now.getMilliseconds();
    return millisecondsUntilNext30Mins;
}
function toggleVisibility() {
    if (radioText.style.visibility === "hidden") {
        radioText.style.visibility = "visible";
    } else {
        radioText.style.visibility = "hidden";
    }
}
function rotateString(string, times) {
    if (string.length <= 1) return string;
    if (times == 0) return string;

    let current = string;
    for (i = 0; i < times; i++){
        const leading = current[0];
        const remaining = current.slice(1);
        current = remaining + leading;
    }
    return current;
}


// Audio player
const bufferCache = new Map();
let audioCtx;
let audioAlyz;
let analyserData;
let masterGain;
let unlocked = false;
let scheduleCursor = 0;
let scheduledBlock = null;
let timetoStart = 0;
let rtTrackDat = [];
let rtRadioString = "";


async function unlockAudio() {
    if (unlocked) return;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;

    audioAlyz = audioCtx.createAnalyser();
    audioAlyz.fftSize = 2048;
    analyserData = new Uint8Array(audioAlyz.frequencyBinCount);

    masterGain.connect(audioAlyz);
    audioAlyz.connect(audioCtx.destination);
    //masterGain.connect(audioCtx.destination);

    await audioCtx.resume();
    unlocked = true;
}
async function loadBuffer(path) {
    if (bufferCache.has(path)) return bufferCache.get(path);

    const res = await fetch(path);
    const arr = await res.arrayBuffer();
    const buf = await audioCtx.decodeAudioData(arr);
    bufferCache.set(path, buf);
    return buf;
}
async function scheduleChunk() {
    rtTrackDat.length = 0;
    for (let i = blockInd; i < block.length; i++) {
        const track = block[i];
        const buffer = await loadBuffer(track.path);

        const src = audioCtx.createBufferSource();
        src.buffer = buffer;
        src.connect(masterGain);

        rtTrackDat.push({
            name: track.name,
            author: track.by,
            tts: timetoStart
        });

        if (i == blockInd){
            src.start(0, startTime);
            console.log(track.name + " Loaded. tts=", timetoStart);
            timetoStart += refreshTime - startTime;
        }else if (i > blockInd) {
            src.start(timetoStart, 0);
            console.log(track.name + " Loaded. tts=", timetoStart);
            timetoStart += src.buffer.duration + gaps;
        }
    }
    masterGain.gain.value = 1;
}
function maintainScheduler() {
    loadTime = Date.now() + 260;
    refresh();
    scheduleChunk();
    loadTime = Date.now();
    maintainTrackInfo();
    setTimeout(maintainScheduler, 1800000);
}
function getTrackFromBlocktime(timeIn){
    if (!rtTrackDat || rtTrackDat == []) return block[0];
    let selected = rtTrackDat[0];
    let timeInOffset = timeIn;

    if (loadTime > buttonClick + 1000) {
        timeInOffset += rtTrackDat[0].tts;
        //console.log("time in:", timeIn, "new: ", timeInOffset, rtTrackDat);
    }

    for (i = 0; i < rtTrackDat.length; i++){
        if (rtTrackDat[i].tts < timeInOffset) {
            selected = rtTrackDat[i];
            //break;
        }
        //if (i == rtTrackDat.length) console.log("time in:", timeIn, "trackData[0]:", rtTrackDat[0]);
    }
    //if (selected == rtTrackDat[0]) console.log("time in:", timeIn, rtTrackDat);
    return selected;
}
let radioTxtScrl = 0;
function maintainTrackInfo() {
    const now = new Date();
    var cursor = (now - loadTime) / 1000;
    if (!cursor) cursor = 0;

    //console.log(cursor);
    if (!rtTrackDat[0]) {
        //console.log("rtTrackDat",rtTrackDat);
        setTimeout(maintainTrackInfo, 5000);
        return;
    }
    const currentTrack = getTrackFromBlocktime(cursor);
    if (!currentTrack) {
        //console.log("cursor", cursor, "rtTrackDat", rtTrackDat);
        setTimeout(maintainTrackInfo, 10000);
        return;
    }

    rtRadioString = "<span class='partial-blink'>🔴 LIVE -</span>" + rotateString("now playing: " + currentTrack.name + " by " + currentTrack.author + " [" + segment + " MIX] - DGL Radio - ", radioTxtScrl);
    radioText.innerHTML = rtRadioString;
    radioTxtScrl++;
    if (radioTxtScrl > rtRadioString.length) radioTxtScrl = 1;

    //console.log("current track", currentTrack);
    setTimeout(maintainTrackInfo, 1500);
}

// User-triggered functions
async function playMusic() {
    playing = true;

    await unlockAudio();
    loadTime = Date.now();
    buttonClick = loadTime;
    refresh();
    await scheduleChunk();


    setTimeout(maintainScheduler, getTimeUntilNext30Mins() - 250);
    maintainTrackInfo();
}

function pauseMusic() {
    playing = false;
    masterGain.gain.value = 0.001;
}

toggleVisibility();
async function toggleRadio(){
    toggleVisibility();
    if (unlocked == false) {
        await playMusic();
        drawWave();
    } else if (masterGain.gain.value > 0.001) {
        pauseMusic();
        radioText.innerHTML = "LOADING...";
    } else {
        masterGain.gain.value = 1;
    }
}

const canvas = document.getElementById("frequencyCanvas");
const ctx = canvas.getContext("2d");
function drawWave() {
    audioAlyz.getByteTimeDomainData(analyserData);


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i < analyserData.length; i++) {
        const x = (i / analyserData.length) * canvas.width;
        const y = (analyserData[i] / 255) * canvas.height;

        if (y > 0) { ctx.strokeStyle="rgba(255, 255, 255, " + y + "%)"; } else { ctx.strokeStyle="black"; }

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.stroke();

    const features = extractAudioFeatures();
    parent.postMessage({
        type: "audio",
        bass: features.bass,
        mids: features.mids,
        highs: features.highs,
        volume: features.volume
    }, "*");

    requestAnimationFrame(drawWave);
}
function extractAudioFeatures() {
    audioAlyz.getByteFrequencyData(analyserData);

    const bassRange = analyserData.slice(0, 20);
    const midRange  = analyserData.slice(20, 80);
    const highRange = analyserData.slice(80, 200);

    const avg = arr => arr.reduce((a,b)=>a+b,0)/arr.length;

    const bass = avg(bassRange) / 255;
    const mids = avg(midRange) / 255;
    const highs = avg(highRange) /255;

    // overall loudness proxy
    const volume = avg(analyserData) / 255;

    return { bass, mids, highs, volume };
}
