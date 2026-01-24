const source = 'eyIxMCBGT09UIFRBTEwiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvV0tEdHZPejhHcHQwaHVCN3d3NUNkdGZSRU5EOVpMVWcubXAzIiwibGVuZyI6MTY2LCJieSI6IkJMRExWRCAmIExpbCBEYXJraWUifSwiMTktMjAwMCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ibmNmNGNUTXQ1N3FrT1JOdEdvZG9xR3NQRTRLVWg1cy5tcDMiLCJsZW5nIjoyMTAsImJ5IjoiR29yaWxsYXoifSwiMkFNIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0tHbEpIYjFMSHdZTmV6ZUltUXpyWW9yVDVDR3BqVE5TLm1wMyIsImxlbmciOjExMSwiYnkiOiJBUVZPTCJ9LCI1MC8vNTAiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvQWE2ZXNkbGtLM09PWUVnTVg3V0NHdmJqM0JuZDBsRXIubXAzIiwibGVuZyI6MjQ2LCJieSI6IlZhbnRhZ2UifSwiQW50aS1TYWZldHkgWm9uZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9qTWIwOURBSzRJSkcydFRBRGJaSlpDOW1JWUptWUFMSS5tcDMiLCJsZW5nIjoxNDYsImJ5IjoiTVlVS0tFIn0sIkJlYWNoIFdhbGsiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVTliY0JKTHZnMzhkdFA5RGJHejF2a3E3bUJLS29zTU4ubXAzIiwibGVuZyI6MTMyLCJieSI6IldoaXRld29vZHMifSwiQmxhY2sgVmVsdmV0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3dnZFAxaGJVTGJvQ2NDOHJYWVVsR0RCa045V2hmR2oyLm1wMyIsImxlbmciOjI0OCwiYnkiOiJJbmZlY3RlZCBNdXNocm9vbSJ9LCJCbGF0YW50IFBsYWdpYXJpc20iOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvYXRXaTIxMHh0ZVVCY0N5TDl1ak1UcmYzeUptSXczankubXAzIiwibGVuZyI6MTcwLCJieSI6IkdIT1NUIERBVEEifSwiQm93bHMgb2YgRnJvemVuIEljZSBDcmVhbSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9wbndLR0xQdGp4czRiWTRiMWxhb3FaZER0dWFvMlFraS5tcDMiLCJsZW5nIjoxMzAsImJ5IjoiU3BhY2UgQndvaSJ9LCJCcmFpbiBQb3dlciB0cHogSm8tb29vb29vb29vb29vdmVyaGVhdCBSZW1peCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9hVjJIdTFaRzNtUjA5WFVNUlVFOFB3S2ZyNW1teXpDaS5tcDMiLCJsZW5nIjoxOTQsImJ5IjoiTk9NQSJ9LCJCcmlkZ2VzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1RHaGRzbURURmV4bmJZS2ljSFU0ZWRzOXNSYnNiR1Y3Lm1wMyIsImxlbmciOjIyMywiYnkiOiJLb3Jlc21hIn0sIkJ1bXAgLSBIYWlyIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0VJa0t2TjVxOVp6Q0hma2V3VzNselNtMWdMYldPdTRwLm1wMyIsImxlbmciOjIxLCJieSI6InZpZXdlcnMgbGlrZSB5b3UifSwiQ2FzY2FkZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9RWDFWUVN6TEFnUHFLdGpVQzRJNm83a3ZUTldIZDE1ZS5tcDMiLCJsZW5nIjoyNjUsImJ5IjoiS3ViYmkifSwiQ2hhcmlvdCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay84WW1pTU5pNDJleWMyWVhXbFJDMEx0TFZIN1VjeEc2eC5tcDMiLCJsZW5nIjoyMTMsImJ5IjoiUmlvdCJ9LCJDb2ZmZWUgQnJlYWsiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvVXpyUDRsYnBqbU5RVWdadTFYdmpSclB3SzEwbUNFWUoubXAzIiwibGVuZyI6MjgwLCJieSI6IlN0ZWZhbiBOaXhkb3JmIn0sIkRBTkdFUk9PT09VUyBKVU5HTEUiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvZ2JRM25nT21lVU1DNzFWdE0zMWF4TmNqUzFUMkwyTUUubXAzIiwibGVuZyI6MjQwLCJieSI6IkxhdXIifSwiRGVtb25zIG9mIFBhaW4iOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvZk9jUXUzY1haYUR1d2d2Q0g4dkZwVEJjeEwwa3JON0IubXAzIiwibGVuZyI6NDY4LCJieSI6IkluZmVjdGVkIE11c2hyb29tIn0sIkRPR0xBTkQiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU3BuTHF5ZDNHVmtTTEkwd1B6ZFpER1R3WDJSWlYyZ1YubXAzIiwibGVuZyI6MTg1LCJieSI6IlBFT1BMRSAxIn0sIkRyYWdvbmZydWl0IFNhbGFkIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3N0RXppS3VSdnYxZkkxeFNiWGozZE1CSEZLQ2ZLdGNKLm1wMyIsImxlbmciOjI2NSwiYnkiOiJKb3p1In0sIkRyaWZ0IE5pZ2h0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1BqUGo4ZFNmZGdJdWFMM1lvaE5oOGJ6ZzNYdmxVU1FLLm1wMyIsImxlbmciOjE2OCwiYnkiOiJGT1JHT1RURU5BR0UifSwiIEUgQyBIIE8gIEx1eGFyIFJlbWl4Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0poM0hlMkIxdVNCU2RVYkxiRmFTTVBvSGF3VzQ2RWZ5Lm1wMyIsImxlbmciOjI0NCwiYnkiOiJWYW5ndWFyZCJ9LCJGaWNrbGUgTWluZHMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvb1BWYWlxbVdSRWJHZWkwejZ3WThuSVBGdnVBdU9Ic1YubXAzIiwibGVuZyI6MjI3LCJieSI6IkJpc2hvcCBOZWhydSJ9LCJHT09EUlVTSCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9ndmRoZFBEdUpIbHY5T1VZUjVKRzZjcmw5alBPTGZndi5tcDMiLCJsZW5nIjozMjUsImJ5IjoiRUJJTUFZTyJ9LCJJIE5lZWQgYSBZZXN0ZXJkYXkiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvWVdaTXE4M3lyUERla0VCNWdOZzZrZFpRdm9sYmt4T3oubXAzIiwibGVuZyI6MTQ2LCJieSI6IkRKIFl1bmcgVmFtcCJ9LCJJbXByaW50aW5nIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3ZEVlloRWZrenZ4MFRlMFlGdTJBRXhnTjJERldBR08wLm1wMyIsImxlbmciOjExNCwiYnkiOiJMYXVyIn0sIkluIE90aGVyIFdvcmRzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3FBVjV6VktoOXd6cnlqd1ljTkFuUHoxSHhZS1NCMVlELm1wMyIsImxlbmciOjI3OSwiYnkiOiJDbGVtIEJlYXR6In0sIkl0J3MgQ2FsbGVkIEZyZWVmYWxsIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL2hJdDdGcXl2b3JhYlQ1aEVuWFZINnBNclo1YjIyaXlwLm1wMyIsImxlbmciOjE1NCwiYnkiOiJSYWluYm93IEtpdHRlbiBTdXJwcmlzZSJ9LCJKdW1wIGluIHRoZSBMaW5lIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzRGR0NPdlJUOXNQMXVRS0xwTDltaFVPVUFFcFZKeU84Lm1wMyIsImxlbmciOjIxOSwiYnkiOiJIYXJyeSBCZWxhZm9udGUifSwiTGVzc2VyIEtub3duIEdvb2QiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvdmt5T2h2bzFhUW1xMFZGMllzUUxFRTlmS25UTE5HYzEubXAzIiwibGVuZyI6MzAxLCJieSI6Ik55bSJ9LCJMT09LIEFUIE1FIE5PVyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9uSzJvRnRqcnc2bE94VzF3QnBrVVhIRnJydUo0R051VC5tcDMiLCJsZW5nIjoxNjMsImJ5IjoiREogWXVuZyBWYW1wIGFuZCBKRVczTFoifSwiTWVpa2FydXphIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL3E0aFk3RkV4T2JhOEJ5OEdtS21QSHVNdWFlNTBiTWoyLm1wMyIsImxlbmciOjIyOCwiYnkiOiJOYW5haG9zaGkgS2FuZ2VuZ2FrdWRhbiJ9LCJNb3JuaW5nIEJsdW50Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0NobTJRS3RoVVJOeTdvYzBQajRlM1pMNnc2OE1QTUFvLm1wMyIsImxlbmciOjgyNCwiYnkiOiJQb3B0YXJ0UGV0ZSJ9LCJORVVSTy1DTE9VRC05Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL084am9nOXE5eFpid2pjNUhNa1phVG83ZFdVTktVV0M3Lm1wMyIsImxlbmciOjI5NiwiYnkiOiJDYW1lbGxpYSJ9LCJQYWxtIFRyZWVzIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL01BVEU2QWJVSVJKdklKbmM4TDM3SDRlS3lVZ0lLNUt2Lm1wMyIsImxlbmciOjIyMiwiYnkiOiJFaHJsaW5nIn0sIlByYWRhIE1peCBGZXJyYXJpIEhvcnNlcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay81VnlodVNRTExaM0d0cTVXdEh3UzVEakF5c2t4WWd3OC5tcDMiLCJsZW5nIjoyNDYsImJ5IjoiY2Fzc/YsIFJBWUUgJiBELUJsb2NrIEV1cm9wZSJ9LCJQdXJwIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzdzeFNZQ2p4VDFuTlFXUldSOGxFbXNQNW9PS0NlVVdMLm1wMyIsImxlbmciOjIxMSwiYnkiOiJvbGl2ZXIifSwiUmFpbiBEcm9wcyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay90RUVlemFiUkJublp0QUtUR0pRY1ZDVU5Jc0pSaW1HMi5tcDMiLCJsZW5nIjozMzgsImJ5IjoiU2xpZ2h0In0sIlJlZ3VyZ2l0YXRpb24gUHVtcGluZyBTdGF0aW9uIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0xOREhtY1o5NlRGcGRXYXdhclA4bHVYaTBYTHdWcjFOLm1wMyIsImxlbmciOjIyMCwiYnkiOiJLeWxlIEdhYmxlciJ9LCJSZXNvbmFuY2UiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU2hPekkydHpRMUNJc0N3WXA2NHNXcFBuNEZxSWU4Tk4ubXAzIiwibGVuZyI6MjEyLCJieSI6IkhPTUUifSwiUm9jayB0aGUgSG91c2UiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsveUVyMzR4R2RBSVY5UWQ1UFBTQVpabE9tdjZKZEVYSlUubXAzIiwibGVuZyI6MjQ5LCJieSI6IkdvcmlsbGF6In0sIlNlY29uZCBIZWF2ZW4iOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvYlc3TllhZHpXU0xlRWZWTjRjRHZ2NG9rcEpqdnFUcG8ubXAzIiwibGVuZyI6MjI4LCJieSI6IlJ5dSJ9LCJTbG9wcHkgV2Fsa2VyIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL1ZXNGh0YVJ4ckRUUHJNS2xWVFlNSG9mMlE3ajJDZnZFLm1wMyIsImxlbmciOjE5NywiYnkiOiJLeWxlIEdhYmxlciBhbmQgSm9ubnkgVHJlbmdyb3ZlIn0sIlNtb290aCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9OVzZobGNIb29BMUZNRU5XY01XY2M0MHlRWTBRbWxMYi5tcDMiLCJsZW5nIjoyODksImJ5IjoiU2t1bGUgVG95YW1hIGZ0IFhLWUxBUiJ9LCJTdGFkaXVtIFJhdmUiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvOFdoYUtMZ0lmYjJJdWE4Q2N2Vkttc0FmWjNCTTIwZHoubXAzIiwibGVuZyI6MTU0LCJieSI6Ik1hcmsgR292ZXJub3IifSwiU3dpbW1pbmcgVHJlZXMiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvU1FDcXhVdkdoMUVUVnJkSXVkMHhxb3hNTjRXRWpkOGQubXAzIiwibGVuZyI6MjI1LCJieSI6IlZhbGlkIn0sIlRoZSBMZXQgT3V0Ijp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrLzJMdWFqMnQ3eVN5R29ic3hnMW5EakxhNnlTdlFYU1prLm1wMyIsImxlbmciOjIzNSwiYnkiOiJKaWRlbm5hIGZ0IFF1YXZvIn0sIlRoZSBPZmZpY2UiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsvQnBMMTdGaFVScldsa3ZoSzdDclZkQktCZGZmZThlOWsubXAzIiwibGVuZyI6MTk5LCJieSI6IkphcmVkIEVtZXJzb24tSm9obnNvbiJ9LCJUaGUgV29uZGVyZnVsIFN0YXJzIFdhbGsgaXMgV29uZGVyZnVsIjp7InBhdGgiOiJodHRwczovL2F1ZGlvLmp1a2Vob3N0LmNvLnVrL0hrMXI4TXlsU1JvTzlCY0RPTkQya0ZGOFZvYkJZUDJ2Lm1wMyIsImxlbmciOjE5MiwiYnkiOiJZdXJpIE1pc3VtaSJ9LCJUaGlzIGlzIHRoZSBEZWFkLCBhbmQgSSBSZWFjaGVkIHRoZSBEZWF0aGxlc3MiOnsicGF0aCI6Imh0dHBzOi8vYXVkaW8uanVrZWhvc3QuY28udWsveWhLd1Y3ZlpnVlZuRGhuUG1vMmdiTGQzdDJPeVMyU3gubXAzIiwibGVuZyI6MTk3LCJieSI6IkJMQU5LRklFTEQifSwiVG9uaWdodCI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9WNVBRR1hGVHlFQmdwYklTbUk4RTZhNXNSY2hFV2lPRC5tcDMiLCJsZW5nIjoyMzEsImJ5IjoiS292ZSJ9LCJXaGF0IE5vdyI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9kOXFWYW8xSEtGNzRpdnkxb1puNEpQcjVIZzNSYzZ3NS5tcDMiLCJsZW5nIjozNDAsImJ5IjoiREogU21va2V5LCBMb3VkIExvcmQsIGFuZCBTb3VkaWVyZSJ9LCJZZSI6eyJwYXRoIjoiaHR0cHM6Ly9hdWRpby5qdWtlaG9zdC5jby51ay9VQVFxdEZsajZHZjBXRm5ra09FM0RZdkV6dzVwVFdNSC5tcDMiLCJsZW5nIjo3MywiYnkiOiJFcGhpeGEifX0=';

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
        "NEURO-CLOUD-9",
        "Second Heaven",
        "Stadium Rave",
        "This is the Dead, and I Reached the Deathless",
        "Tonight"
    ],
    "OWL": [
        "2AM",
        "Bridges",
        "Bump - Hair",
        "Drift Night",
        "Fickle Minds",
        "I need a Yesterday",
        "It's Called Freefall",
        "Morning Blunt",
        "Purp",
        "What Now",
        "Ye"
    ],
    "EARLYBIRD": [
        "Beach Walk",
        "Bowls of Frozen Ice Cream",
        " E C H O  Luxar Remix",
        "Fickle Minds",
        "In Other Words",
        "It's Called Freefall",
        "Morning Blunt",
        "LOOK AT ME NOW",
        "Regurgitation Pumping Station",
        "Resonance",
        "Sloppy Walker",
        "Smooth",
        "The Office",
        "The Wonderful Stars Walk is Wonderful"
    ],
    "MORNING": [
        "5050",
        "Blatant Plagiarism",
        "Bowls of Frozen Ice Cream",
        "Cascade",
        "DOGLAND",
        "Fickle Minds",
        "Jump in the Line",
        "Lesser Known Good",
        "Palm Trees",
        "Resonance",
        "Sloppy Walker",
        "Swimming Trees"
    ],
    "LUNCH": [
        "10 FOOT TALL",
        "Black Velvet",
        "Coffee Break",
        "Demons of Pain",
        "DOGLAND",
        "Dragonfruit Salad",
        "Drift Night",
        "Jump in the Line",
        "Lesser Known Good",
        "Meikaruza",
        "Rain Drops",
        "Stadium Rave",
        "Swimming Trees",
        "The Let Out",
        "This is the Dead, and I Reached the Deathless",
        "What now"
    ],
    "WORK": [
        "50//50",
        "Beach Walk",
        "Blatant Plagiarism",
        "Bowls of Frozen Ice Cream",
        "Cascade",
        " E C H O  Luxar Remix",
        "I Need a Yesterday",
        "In Other Words",
        "LOOK AT ME NOW",
        "Palm Trees",
        "Purp",
        "Regurgitation Pumping Station",
        "Sloppy Walker",
        "Smooth",
        "The Office",
        "The Wonderful Stars Walk is Wonderful"
    ],
    "VARIETY": [
        "Anti-Safety Zone",
        "10 FOOT TALL",
        "2AM",
        "50//50",
        "Beach Walk",
        "Brain Power tpz Jo-ooooooooooooverheat Remix",
        "Bridges",
        "Black Velvet",
        "Blatant Plagiarism",
        "Bowls of Frozen Ice Cream",
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
        "In Other Words",
        "Imprinting",
        "It's Called Freefall",
        "Lesser Known Good",
        "LOOK AT ME NOW",
        "Meikaruza",
        "Morning Blunt",
        "NEURO-CLOUD-9",
        "Palm Trees",
        "Prada Mix Ferrari Horses",
        "Purp",
        "Rain Drops",
        "Regurgitation Pumping Station",
        "Resonance",
        "Second Heaven",
        "Sloppy Walker",
        "Smooth",
        "Stadium Rave",
        "Swimming Trees",
        "The Let Out",
        "The Office",
        "The Wonderful Stars Walk is Wonderful",
        "This is the Dead, and I Reached the Deathless",
        "Tonight",
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

    /*
    console.log({
        type: "audio",
        bass: features.bass,
        mids: features.mids,
        highs: features.highs,
        volume: features.volume
    });
    */

    requestAnimationFrame(drawWave);
}
function extractAudioFeatures() {
    audioAlyz.fftSize = 2048;
    analyserData = new Uint8Array(audioAlyz.frequencyBinCount);

    const getIndex = (frequency) => {
        const nyquist = audioCtx.sampleRate / 2;
        return Math.round((frequency / nyquist) * audioAlyz.frequencyBinCount);
    };

    audioAlyz.getByteFrequencyData(analyserData);

    const bassRange = [getIndex(20), getIndex(250)];
    const midRange = [getIndex(250), getIndex(4000)];
    const highRange = [getIndex(4000), getIndex(20000)];

    //const bassRange = analyserData.slice(3, 4);
    //const midRange  = analyserData.slice(40, 70);
    //const highRange = analyserData.slice(70, 128);

    //const avg = arr => arr.reduce((a,b)=>a+b,0)/arr.length;
    function avg(indices) {
        const range = analyserData.slice(indices[0], indices[1]);
        if (range.length === 0) return 0;
        return range.reduce((a, b) => a + b) / range.length;
    }

    let bass = avg(bassRange) /255;
    const mids = avg(midRange) /255;
    const highs = avg(highRange) /255;

    // overall loudness proxy
    const volume = (bass + mids + highs) / 3;
    bass -= volume;

    return { bass, mids, highs, volume };
}
