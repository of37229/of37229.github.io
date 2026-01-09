const source = 'eyIxMCBGT09UIFRBTEwiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvV0tEdHZPejhHcHQwaHVCN3d3NUNkdGZSRU5EOVpMVWcubXAzIiwibGVuZyI6MTY2LCJieSI6IkJMRExWRCAmIExpbCBEYXJraWUifSwiMTktMjAwMCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ibmNmNGNUTXQ1N3FrT1JOdEdvZG9xR3NQRTRLVWg1cy5tcDMiLCJsZW5nIjoyMTAsImJ5IjoiR29yaWxsYXoifSwiMkFNIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0tHbEpIYjFMSHdZTmV6ZUltUXpyWW9yVDVDR3BqVE5TLm1wMyIsImxlbmciOjExMSwiYnkiOiJBUVZPTCJ9LCI1MC8vNTAiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvQWE2ZXNkbGtLM09PWUVnTVg3V0NHdmJqM0JuZDBsRXIubXAzIiwibGVuZyI6MjQ2LCJieSI6IlZhbnRhZ2UifSwiQmxhY2sgVmVsdmV0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3dnZFAxaGJVTGJvQ2NDOHJYWVVsR0RCa045V2hmR2oyLm1wMyIsImxlbmciOjI0OCwiYnkiOiJJbmZlY3RlZCBNdXNocm9vbSJ9LCJCcmFpbiBQb3dlciB0cHogSm8tb29vb29vb29vb29vdmVyaGVhdCBSZW1peCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9hVjJIdTFaRzNtUjA5WFVNUlVFOFB3S2ZyNW1teXpDaS5tcDMiLCJsZW5nIjoxOTQsImJ5IjoiTk9NQSJ9LCJCcmlkZ2VzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1RHaGRzbURURmV4bmJZS2ljSFU0ZWRzOXNSYnNiR1Y3Lm1wMyIsImxlbmciOjIyMywiYnkiOiJLb3Jlc21hIn0sIkNhc2NhZGUiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvUVgxVlFTekxBZ1BxS3RqVUM0STZvN2t2VE5XSGQxNWUubXAzIiwibGVuZyI6MjY1LCJieSI6Ikt1YmJpIn0sIkNoYXJpb3QiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvOFltaU1OaTQyZXljMllYV2xSQzBMdExWSDdVY3hHNngubXAzIiwibGVuZyI6MjEzLCJieSI6IlJpb3QifSwiQ29mZmVlIEJyZWFrIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1V6clA0bGJwam1OUVVnWnUxWHZqUnJQd0sxMG1DRVlKLm1wMyIsImxlbmciOjI4MCwiYnkiOiJTdGVmYW4gTml4ZG9yZiJ9LCJEQU5HRVJPT09PVVMgSlVOR0xFIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2diUTNuZ09tZVVNQzcxVnRNMzFheE5jalMxVDJMMk1FLm1wMyIsImxlbmciOjI0MCwiYnkiOiJMYXVyIn0sIkRlbW9ucyBvZiBQYWluIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2ZPY1F1M2NYWmFEdXdndkNIOHZGcFRCY3hMMGtyTjdCLm1wMyIsImxlbmciOjQ2OCwiYnkiOiJJbmZlY3RlZCBNdXNocm9vbSJ9LCJET0dMQU5EIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1NwbkxxeWQzR1ZrU0xJMHdQemRaREdUd1gyUlpWMmdWLm1wMyIsImxlbmciOjE4NSwiYnkiOiJJbmZlY3RlZCBNdXNocm9vbSJ9LCJEcmFnb25mcnVpdCBTYWxhZCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9zdEV6aUt1UnZ2MWZJMXhTYlhqM2RNQkhGS0NmS3RjSi5tcDMiLCJsZW5nIjoyNjUsImJ5IjoiSm96dSJ9LCJEcmlmdCBOaWdodCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9QalBqOGRTZmRnSXVhTDNZb2hOaDhiemczWHZsVVNRSy5tcDMiLCJsZW5nIjoxNjgsImJ5IjoiRk9SR09UVEVOQUdFIn0sIkZpY2tsZSBNaW5kcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9vUFZhaXFtV1JFYkdlaTB6NndZOG5JUEZ2dUF1T0hzVi5tcDMiLCJsZW5nIjoyMjcsImJ5IjoiQmlzaG9wIE5laHJ1In0sIkkgTmVlZCBhIFllc3RlcmRheSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ZV1pNcTgzeXJQRGVrRUI1Z05nNmtkWlF2b2xia3hPei5tcDMiLCJsZW5nIjoxNDYsImJ5IjoiREogWXVuZyBWYW1wIn0sIkltcHJpbnRpbmciOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvdkRWWWhFZmt6dngwVGUwWUZ1MkFFeGdOMkRGV0FHTzAubXAzIiwibGVuZyI6MTE0LCJieSI6IkxhdXIifSwiTE9PSyBBVCBNRSBOT1ciOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvbksyb0Z0anJ3NmxPeFcxd0Jwa1VYSEZycnVKNEdOdVQubXAzIiwibGVuZyI6MTYzLCJieSI6IkRKIFl1bmcgVmFtcCBhbmQgSkVXM0xaIn0sIk1laWthcnV6YSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9xNGhZN0ZFeE9iYThCeThHbUttUEh1TXVhZTUwYk1qMi5tcDMiLCJsZW5nIjoyMjgsImJ5IjoiTmFuYWhvc2hpIEthbmdlbmdha3VkYW4ifSwiUGFsbSBUcmVlcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9NQVRFNkFiVUlSSnZJSm5jOEwzN0g0ZUt5VWdJSzVLdi5tcDMiLCJsZW5nIjoyMjIsImJ5IjoiRWhybGluZyJ9LCJQcmFkYSBNaXggRmVycmFyaSBIb3JzZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvNVZ5aHVTUUxMWjNHdHE1V3RId1M1RGpBeXNreFlndzgubXAzIiwibGVuZyI6MjQ2LCJieSI6ImNhc3P2LCBSQVlFICYgRC1CbG9jayBFdXJvcGUifSwiUHVycCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay83c3hTWUNqeFQxbk5RV1JXUjhsRW1zUDVvT0tDZVVXTC5tcDMiLCJsZW5nIjoyMTEsImJ5Ijoib2xpdmVyIn0sIlJhaW4gRHJvcHMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvdEVFZXphYlJCbm5adEFLVEdKUWNWQ1VOSXNKUmltRzIubXAzIiwibGVuZyI6MzM4LCJieSI6IlNsaWdodCJ9LCJSb2NrIHRoZSBIb3VzZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay95RXIzNHhHZEFJVjlRZDVQUFNBWlpsT212NkpkRVhKVS5tcDMiLCJsZW5nIjoyNDksImJ5IjoiR29yaWxsYXoifSwiU2Vjb25kIEhlYXZlbiI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9iVzdOWWFkeldTTGVFZlZONGNEdnY0b2twSmp2cVRwby5tcDMiLCJsZW5nIjoyMjgsImJ5IjoiUnl1In0sIlNsb3BweSBXYWxrZXIiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVlc0aHRhUnhyRFRQck1LbFZUWU1Ib2YyUTdqMkNmdkUubXAzIiwibGVuZyI6MTk3LCJieSI6Ikt5bGUgR2FibGVyIGFuZCBKb25ueSBUcmVuZ3JvdmUifSwiU3dpbW1pbmcgVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU1FDcXhVdkdoMUVUVnJkSXVkMHhxb3hNTjRXRWpkOGQubXAzIiwibGVuZyI6MjI1LCJieSI6IlZhbGlkIn0sIlRoZSBMZXQgT3V0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzJMdWFqMnQ3eVN5R29ic3hnMW5EakxhNnlTdlFYU1prLm1wMyIsImxlbmciOjIzNSwiYnkiOiJKaWRlbm5hIGZ0IFF1YXZvIn0sIlRoaXMgaXMgdGhlIERlYWQsIGFuZCBJIFJlYWNoZWQgdGhlIERlYXRobGVzcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay95aEt3VjdmWmdWVm5EaG5QbW8yZ2JMZDN0Mk95UzJTeC5tcDMiLCJsZW5nIjoxOTcsImJ5IjoiQkxBTktGSUVMRCJ9LCJXaGF0IE5vdyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9kOXFWYW8xSEtGNzRpdnkxb1puNEpQcjVIZzNSYzZ3NS5tcDMiLCJsZW5nIjozNDAsImJ5IjoiREogU21va2V5LCBMb3VkIExvcmQsIGFuZCBTb3VkaWVyZSJ9LCJZZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9VQVFxdEZsajZHZjBXRm5ra09FM0RZdkV6dzVwVFdNSC5tcDMiLCJsZW5nIjo3MywiYnkiOiJFcGhpeGEifX0=';

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
        "Brain Power tpz Jo-ooooooooooooverheat Remix",
        "Coffee Break",
        "Chariot",
        "DANGEROOOOUS JUNGLE",
        "Demons of Pain",
        "Imprinting",
        "Second Heaven",
        "The Let Out",
        "This is the Dead, and I Reached the Deathless"
    ],
    "OWL": [
        "2AM",
        "Bridges",
        "Drift Night",
        "Purp",
        "What Now",
        "Ye"
    ],
    "EARLYBIRD": [
        "Black Velvet",
        "Fickle Minds",
        "I need a Yesterday",
        "LOOK AT ME NOW",
        "Sloppy Walker"
    ],
    "MORNING": [
        "5050",
        "Black Velvet",
        "Demons of Pain",
        "Cascade",
        "DOGLAND",
        "Fickle Minds",
        "Palm Trees",
        "Rock the House",
        "Sloppy Walker",
        "Swimming Trees",
    ],
    "LUNCH": [
        "10 FOOT TALL",
        "19-2000",
        "Black Velvet",
        "Coffee Break",
        "DOGLAND",
        "Dragonfruit Salad",
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
        "Cascade",
        "Demons of Pain",
        "Drift Night",
        "I Need a Yesterday",
        "LOOK AT ME NOW",
        "Palm Trees",
        "Purp",
        "Rain Drops",
        "Sloppy Walker"
    ],
    "VARIETY": [
        "10 FOOT TALL",
        "19-2000",
        "2AM",
        "50//50",
        "Brain Power tpz Jo-ooooooooooooverheat Remix",
        "Bridges",
        "Black Velvet",
        "Cascade",
        "Chariot",
        "Coffee Break",
        "DANGEROOOOUS JUNGLE",
        "Demons of Pain",
        "DOGLAND",
        "Dragonfruit Salad",
        "Drift Night",
        "Fickle Minds",
        "I Need a Yesterday",
        "Imprinting",
        "LOOK AT ME NOW",
        "Meikaruza",
        "Palm Trees",
        "Prada Mix Ferrari Horses",
        "Purp",
        "Rain Drops",
        "Rock the House",
        "Second Heaven",
        "Sloppy Walker",
        "Swimming Trees",
        "The Let Out",
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
    requestAnimationFrame(drawWave);

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
}
