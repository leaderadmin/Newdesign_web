/* ============================================================
   TealBank — Icon set: duotone line icons (24×24)
   .t = tinted fill layer · .a = orange accent · rest = stroke
   Usage: ico('card')  ·  ico('phone','s')  (s = small)
   ============================================================ */
const IC={
save:'<ellipse class="t" cx="11" cy="13.5" rx="7.5" ry="5.5"/><path d="M18.5 12l2.3-.8M8 19v2M14 19v2M15 8.5l.6-2.3"/><circle cx="15" cy="12.3" r=".7"/><circle class="a" cx="11" cy="4.8" r="2"/>',
loan:'<path class="t" d="M4 11l8-7 8 7v9H4z"/><path d="M4 11l8-7 8 7M9.5 20v-5h5v5"/><circle class="a" cx="12" cy="10.5" r="1.4"/>',
card:'<rect class="t" x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/><rect class="a" x="15" y="13.8" width="3" height="2.2" rx=".7"/>',
biz:'<rect class="t" x="5" y="4" width="10" height="16" rx="1.5"/><path d="M15 9h4v11M8 8h4M8 12h4M8 16h4M3 20h18"/>',
ins:'<path class="t" d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/><path d="M9 12l2.2 2.2 4.3-4.4"/>',
inv:'<rect class="t" x="3" y="4" width="18" height="16" rx="3"/><path d="M7 15l3.5-3.5 2.5 2.5 5-5M14.5 8.5H18V12"/>',
pay:'<path class="t" d="M4 8a2 2 0 012-2h12v13H6a2 2 0 01-2-2z"/><path d="M6 6l10-2.5V6M18 9.5h2v5h-2"/><circle class="a" cx="15.5" cy="12" r="1.2"/>',
tf:'<circle class="t" cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
cap:'<path class="t" d="M3 9l9-5 9 5z"/><path d="M5.5 9v9M9.8 9v9M14.2 9v9M18.5 9v9M3 20h18"/>',
chart:'<rect class="t" x="3" y="4" width="18" height="16" rx="3"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
bulb:'<path class="t" d="M12 3a6 6 0 00-3.5 10.8c.7.6 1 1.3 1 2.2h5c0-.9.3-1.6 1-2.2A6 6 0 0012 3z"/><path d="M9.5 19h5M10.5 21.5h3"/>',
lock:'<rect class="t" x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 018 0v2.5M12 14.5v2.5"/>',
file:'<path class="t" d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/>',
phone:'<rect class="t" x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
tax:'<path class="t" d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
bolt:'<path class="t" d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
users:'<circle class="t" cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0111 0M16 5.2a3.2 3.2 0 010 5.6M18 14a5 5 0 013 5"/>',
trophy:'<path class="t" d="M7 4h10v5a5 5 0 01-10 0z"/><path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M12 14v4M8.5 20h7"/>',
medal:'<circle class="t" cx="12" cy="14.5" r="5.5"/><path d="M8.5 3l3 6.5M15.5 3l-3 6.5"/><circle class="a" cx="12" cy="14.5" r="1.6"/>',
star:'<path class="t" d="M12 3l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.4l-5.3 2.9 1.1-5.9-4.4-4.1 6-.8z"/>',
flag:'<path class="t" d="M5 4h11l-2 4 2 4H5z"/><path d="M5 3v18"/>',
send:'<path class="t" d="M21 3l-7 18-3-8-8-3z"/><path d="M21 3L11 13"/>',
pin:'<path class="t" d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>',
search:'<circle class="t" cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
chev:'<path d="M6 9l6 6 6-6"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'};
IC.bank=IC.cap;
const ico=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${IC[n]||IC.file}</svg>`;
