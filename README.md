﻿<h1 align="center">
    <br>
    Discord F Bot
    <br>
    <br>
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/ts-standard"><img src="https://badgen.net/badge/icon/v6.14.11?icon=npm&label=npm"></a>
    <a href="https://github.com/standard/standard/blob/master/LICENSE"><img src="https://badgen.net/badge/icon/MIT?icon&label=license"></a>
    <a href="https://github.com/standard/ts-standard"><img src="https://badgen.net/badge/icon/typescript?icon=typescript&label=code-style" alt="typescript code style"></a>
    <a href="https://github.com/standard/ts-standard">
        <img data-svg="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 256 310&quot; width=&quot;256&quot; height=&quot;310&quot; style=&quot;-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);&quot;>
  <path d=&quot;M254.313 235.519L148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722a17.542 17.542 0 0 0-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007z&quot; style=&quot;fill: rgb(255, 255, 255);&quot;/>
</svg>" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2LjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMTY0IDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJwcmlzbWE6IHYyLjE0LjAiPgogIDx0aXRsZT5wcmlzbWE6IHYyLjE0LjA8L3RpdGxlPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDI9IjAiIHkyPSIxMDAlIj4KICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1vcGFjaXR5PSIuMSIgc3RvcC1jb2xvcj0iI0VFRSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4xIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bWFzayBpZD0ibSI+PHJlY3Qgd2lkdGg9IjExNjQiIGhlaWdodD0iMjAwIiByeD0iMzAiIGZpbGw9IiNGRkYiLz48L21hc2s+CiAgPGcgbWFzaz0idXJsKCNtKSI+CiAgICA8cmVjdCB3aWR0aD0iNjM5IiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzU1NSIvPgogICAgPHJlY3Qgd2lkdGg9IjUyNSIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwOEMiIHg9IjYzOSIvPgogICAgPHJlY3Qgd2lkdGg9IjExNjQiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2EpIi8+CiAgPC9nPgogIDxnIGFyaWEtaGlkZGVuPSJ0cnVlIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSJWZXJkYW5hLERlamFWdSBTYW5zLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEwIj4KICAgIDx0ZXh0IHg9IjIyMCIgeT0iMTQ4IiB0ZXh0TGVuZ3RoPSIzNzkiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMjUiPnByaXNtYTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIxMCIgeT0iMTM4IiB0ZXh0TGVuZ3RoPSIzNzkiPnByaXNtYTwvdGV4dD4KICAgIDx0ZXh0IHg9IjY5NCIgeT0iMTQ4IiB0ZXh0TGVuZ3RoPSI0MjUiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMjUiPnYyLjE0LjA8L3RleHQ+CiAgICA8dGV4dCB4PSI2ODQiIHk9IjEzOCIgdGV4dExlbmd0aD0iNDI1Ij52Mi4xNC4wPC90ZXh0PgogIDwvZz4KICA8aW1hZ2UgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXlOVFlnTXpFd0lpQjNhV1IwYUQwaU1qVTJJaUJvWldsbmFIUTlJak14TUNJZ2MzUjViR1U5SWkxdGN5MTBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3pOakJrWldjcE95QXRkMlZpYTJsMExYUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtETTJNR1JsWnlrN0lIUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtETTJNR1JsWnlrN0lqNE5DaUFnUEhCaGRHZ2daRDBpVFRJMU5DNHpNVE1nTWpNMUxqVXhPVXd4TkRnZ09TNDNORGxCTVRjdU1EWXpJREUzTGpBMk15QXdJREFnTUNBeE16TXVORGN6TGpBek4yRXhOaTQ0TnlBeE5pNDROeUF3SURBZ01DMHhOUzQxTXpNZ09DNHdOVEpNTWk0Mk16TWdNVGswTGpnME9HRXhOeTQwTmpVZ01UY3VORFkxSURBZ01DQXdJQzR4T1RNZ01UZ3VOelEzVERVNUxqSWdNekF3TGpnNU5tRXhPQzR4TXlBeE9DNHhNeUF3SURBZ01DQXlNQzR6TmpNZ055NDBPRGxzTVRZekxqVTVPUzAwT0M0ek9USmhNVGN1T1RJNUlERTNMamt5T1NBd0lEQWdNQ0F4TVM0eU5pMDVMamN5TW1FeE55NDFORElnTVRjdU5UUXlJREFnTUNBd0xTNHhNREV0TVRRdU56WnNMUzR3TURndU1EQTRlbTB0TWpNdU9EQXlJRGt1TmpnemJDMHhNemd1T0RJeklEUXhMakExWXkwMExqSXpOU0F4TGpJMkxUZ3VNeTB5TGpReE1TMDNMalF4T1MwMkxqWTROV3cwT1M0MU9UZ3RNak0zTGpRNE5HTXVPVEkzTFRRdU5EUXpJRGN1TURZekxUVXVNVFEzSURrdU1EQXpMVEV1TURNMWJEa3hMamd4TkNBeE9UUXVPVGN6WVRZdU5qTWdOaTQyTXlBd0lEQWdNUzAwTGpFNElEa3VNVGhvTGpBd04zb2lJSE4wZVd4bFBTSm1hV3hzT2lCeVoySW9NalUxTENBeU5UVXNJREkxTlNrN0lpOCtEUW84TDNOMlp6ND0iLz4KPC9zdmc+">
    </a>
</p>

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org)
- [Prisma](https://www.prisma.io)

## How to use?
Commands:
```
npm install
```
```
npm run start
```
Migrate prisma scheme
```
npx prisma migrate dev --preview-feature
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
