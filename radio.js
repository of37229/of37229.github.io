const source = 'eyIxOS0yMDAwIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2JuY2Y0Y1RNdDU3cWtPUk50R29kb3FHc1BFNEtVaDVzLm1wMyIsImxlbmciOjIxMCwiYnkiOiJHb3JpbGxheiJ9LCIyQU0iOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvS0dsSkhiMUxId1lOZXplSW1RenJZb3JUNUNHcGpUTlMubXAzIiwibGVuZyI6MTExLCJieSI6IkFRVk9MIn0sIjUwLy81MCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9BYTZlc2Rsa0szT09ZRWdNWDdXQ0d2YmozQm5kMGxFci5tcDMiLCJsZW5nIjoyNDYsImJ5IjoiVmFudGFnZSJ9LCJCbGFjayBWZWx2ZXQiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvd2dkUDFoYlVMYm9DY0M4clhZVWxHREJrTjlXaGZHajIubXAzIiwibGVuZyI6MjQ4LCJieSI6IkluZmVjdGVkIE11c2hyb29tIn0sIkJyaWRnZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVEdoZHNtRFRGZXhuYllLaWNIVTRlZHM5c1Jic2JHVjcubXAzIiwibGVuZyI6MjIzLCJieSI6IktvcmVzbWEifSwiQ2FzY2FkZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9RWDFWUVN6TEFnUHFLdGpVQzRJNm83a3ZUTldIZDE1ZS5tcDMiLCJsZW5nIjoyNjUsImJ5IjoiS3ViYmkifSwiQ2hhcmlvdCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay84WW1pTU5pNDJleWMyWVhXbFJDMEx0TFZIN1VjeEc2eC5tcDMiLCJsZW5nIjoyMTMsImJ5IjoiUmlvdCJ9LCJDb2ZmZWUgQnJlYWsiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVXpyUDRsYnBqbU5RVWdadTFYdmpSclB3SzEwbUNFWUoubXAzIiwibGVuZyI6MjgwLCJieSI6IlN0ZWZhbiBOaXhkb3JmIn0sIkRlbW9ucyBvZiBQYWluIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2ZPY1F1M2NYWmFEdXdndkNIOHZGcFRCY3hMMGtyTjdCLm1wMyIsImxlbmciOjQ2OCwiYnkiOiJJbmZlY3RlZCBNdXNocm9vbSJ9LCJEcmFnb25mcnVpdCBTYWxhZCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9zdEV6aUt1UnZ2MWZJMXhTYlhqM2RNQkhGS0NmS3RjSi5tcDMiLCJsZW5nIjoyNjUsImJ5IjoiSm96dSJ9LCJGaWNrbGUgTWluZHMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvb1BWYWlxbVdSRWJHZWkwejZ3WThuSVBGdnVBdU9Ic1YubXAzIiwibGVuZyI6MjI3LCJieSI6IkJpc2hvcCBOZWhydSJ9LCJNZWlrYXJ1emEiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvcTRoWTdGRXhPYmE4Qnk4R21LbVBIdU11YWU1MGJNajIubXAzIiwibGVuZyI6MjI4LCJieSI6Ik5hbmFob3NoaSBLYW5nZW5nYWt1ZGFuIn0sIlBhbG0gVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvTUFURTZBYlVJUkp2SUpuYzhMMzdINGVLeVVnSUs1S3YubXAzIiwibGVuZyI6MjIyLCJieSI6IkVocmxpbmcifSwiUHJhZGEgTWl4IEZlcnJhcmkgSG9yc2VzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzVWeWh1U1FMTFozR3RxNVd0SHdTNURqQXlza3hZZ3c4Lm1wMyIsImxlbmciOjI0NiwiYnkiOiJjYXNz9iwgUkFZRSAmIEQtQmxvY2sgRXVyb3BlIn0sIlB1cnAiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvN3N4U1lDanhUMW5OUVdSV1I4bEVtc1A1b09LQ2VVV0wiLCJsZW5nIjoyMTEsImJ5Ijoib2xpdmVyIn0sIlJhaW4gRHJvcHMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvdEVFZXphYlJCbm5adEFLVEdKUWNWQ1VOSXNKUmltRzIiLCJsZW5nIjozMzgsImJ5IjoiU2xpZ2h0In0sIlJvY2sgdGhlIEhvdXNlIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3lFcjM0eEdkQUlWOVFkNVBQU0FaWmxPbXY2SmRFWEpVLm1wMyIsImxlbmciOjI0OSwiYnkiOiJHb3JpbGxheiJ9LCJTZWNvbmQgSGVhdmVuIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2JXN05ZYWR6V1NMZUVmVk40Y0R2djRva3BKanZxVHBvLm1wMyIsImxlbmciOjIyOCwiYnkiOiJSeXUifSwiU3dpbW1pbmcgVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU1FDcXhVdkdoMUVUVnJkSXVkMHhxb3hNTjRXRWpkOGQubXAzIiwibGVuZyI6MjI1LCJieSI6IlZhbGlkIn0sIlRoZSBMZXQgT3V0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzJMdWFqMnQ3eVN5R29ic3hnMW5EakxhNnlTdlFYU1prIiwibGVuZyI6MjM1LCJieSI6IkppZGVubmEgZnQgUXVhdm8ifSwiV2hhdCBOb3ciOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvZDlxVmFvMUhLRjc0aXZ5MW9abjRKUHI1SGczUmM2dzUubXAzIiwibGVuZyI6MzQwLCJieSI6IkRKIFNtb2tleSwgTG91ZCBMb3JkLCBhbmQgU291ZGllcmUifSwiWWUiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVUFRcXRGbGo2R2YwV0Zua2tPRTNEWXZFenc1cFRXTUgubXAzIiwibGVuZyI6NzMsImJ5IjoiRXBoaXhhIn19';

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
        "Cascade",
        "Coffee Break",
        "Chariot",
        "Demons of Pain",
        "Second Heaven",
        "The Let Out"
    ],
    "OWL": [
        "2AM",
        "Bridges",
        "Purp",
        "What Now",
        "Ye"
    ],
    "EARLYBIRD": [
        "Black Velvet",
        "Fickle Minds",
        "Purp"
    ],
    "MORNING": [
        "5050",
        "Black Velvet",
        "Cascade",
        "Fickle Minds",
        "Palm Trees"
    ],
    "LUNCH": [
        "50//50",
        "Black Velvet",
        "Coffee Break",
        "Dragonfruit Salad",
        "Meikaruza",
        "Rock the House",
        "Swimming Trees"
    ],
    "WORK": [
        "19-2000",
        "Black Velvet",
        "Cascade",
        "Demons of Pain",
        "Prada Mix Ferrari Horses",
        "Purp",
        "Rain Drops",
        "Rock the House",
        "Swimming Trees",
        "The Let Out",
        "What Now"
    ],
    "VARIETY": [
        "19-2000",
        "2AM",
        "50//50",
        "Bridges",
        "Black Velvet",
        "Cascade",
        "Chariot",
        "Coffee Break",
        "Demons of Pain",
        "Dragonfruit Salad",
        "Fickle Minds",
        "Meikaruza",
        "Palm Trees",
        "Prada Mix Ferrari Horses",
        "Purp",
        "Rain Drops",
        "Rock the House",
        "Second Heaven",
        "Swimming Trees",
        "The Let Out",
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
    rtTrackDat = [];
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
    setTimeout(maintainScheduler, 1800000);
}
function getTrackFromBlocktime(timeIn){
    if (!rtTrackDat || rtTrackDat == []) return block[0];
    let selected = rtTrackDat[0];
    for (i = 0; i < rtTrackDat.length; i++){
        if (rtTrackDat[i].tts < timeIn) {
            selected = rtTrackDat[i];
            //break;
        }
        if (i == rtTrackDat.length) console.log("time in:", timeIn, "trackData[0]:", rtTrackDat[0]);
    }
    return selected;
}
let radioTxtScrl = 0;
function maintainTrackInfo() {
    const now = new Date();
    var cursor = (now - loadTime) / 1000;
    if (!cursor) cursor = 0;

    //console.log(cursor);
    const currentTrack = getTrackFromBlocktime(cursor);

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
    //console.log("Playing: ", playing);

    await unlockAudio();
    loadTime = Date.now();
    refresh();
    await scheduleChunk();

    //console.log(getTimeUntilNext30Mins());

    setTimeout(maintainScheduler, getTimeUntilNext30Mins() - 250);
    maintainTrackInfo();
}

async function pauseMusic() {
    playing = false;
    console.log("Playing: ", playing);
}

toggleVisibility();
async function toggleRadio(){
    toggleVisibility();
    if (!unlocked) {
        await playMusic();
        drawWave();
    } else if (audioCtx.state === "running") {
        await audioCtx.suspend();
    } else {
        audioCtx.resume();
        await playMusic();
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
