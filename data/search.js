/* Search-interest figures for the two "Looking ahead" panels.
   Edit the values below; no markup changes are needed.

   illustrative  true  = the pink "Illustrative figures. Search data to be added." label shows on both panels
                 false = the label is removed
   activities    rows in rank order, largest search volume first
   markets       rows in rank order, largest source of search interest first

   Each row:
     label       text shown for the row
     change_pct  change vs the same months last year, in percent (negative = down, 0 = no change)
     note        optional small line under the label, e.g. "from a small base"
*/
window.TIAY_SEARCH = {
  "illustrative": true,
  "activities": [
    { "label": "Northern lights",     "change_pct": -11 },
    { "label": "Dog sledding",        "change_pct": 22 },
    { "label": "Hiking and paddling", "change_pct": 9 }
  ],
  "markets": [
    { "label": "Canada",        "change_pct": 15 },
    { "label": "United States", "change_pct": 6 },
    { "label": "Germany",       "change_pct": -4 }
  ]
};
