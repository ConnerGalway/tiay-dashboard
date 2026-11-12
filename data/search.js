/* Search-interest figures for the two "Looking ahead" panels.
   Source: yukon-search-data/ (Google Trends, retrieved 12 November 2026).
   Edit the values below; no markup changes are needed.

   illustrative  true  = the pink "Illustrative figures. Search data to be added." label shows on both panels
                 false = the label is removed
   activities    rows in rank order, most searched first
   markets       rows in rank order, highest Google Trends index first

   Each row:
     label       text shown for the row
     change_pct  change vs the same weeks last year, in percent (negative = down, 0 = no change);
                 null = no reliable change, so nothing is shown
     note        optional small line under the label
     ranked      optional; false = the row gets no rank number (tied, or too few searches to rank)

   Where each value comes from:
     markets, index in note   yukon-search-data/region_ranks.csv, index_2026
     markets, change_pct      yukon-search-data/summary.csv, pull 1, Travel category
     activities, order        yukon-search-data/summary.csv, pull 2, Worldwide, avg_2026
     activities, change_pct   yukon-search-data/summary.csv, pull 2, Worldwide
*/
window.TIAY_SEARCH = {
  "illustrative": false,
  "activities": [
    { "label": "Northern lights", "change_pct": -33.0 },
    { "label": "Hiking", "change_pct": null, "note": "Change not reliable" },
    { "label": "Dog sledding, canoeing and paddling, hot springs", "change_pct": null, "note": "Too few searches to rank", "ranked": false }
  ],
  "markets": [
    { "label": "Canada",         "change_pct": -10.1, "note": "Index 100" },
    { "label": "United States",  "change_pct": -4.5,  "note": "Index 6" },
    { "label": "United Kingdom", "change_pct": null,  "note": "Index 3 · too few searches to measure", "ranked": false },
    { "label": "Australia",      "change_pct": null,  "note": "Index 3 · too few searches to measure", "ranked": false },
    { "label": "Germany",        "change_pct": null,  "note": "Index 3 · too few searches to measure", "ranked": false },
    { "label": "France",         "change_pct": null,  "note": "Index 1 · change not measured", "ranked": false }
  ]
};
