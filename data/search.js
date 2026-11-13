/* Search-interest figures for the two search panels (section 4).
   Source: yukon-search-data/summer/ (Google Trends, retrieved 12 November 2026).
   Edit the values below; no markup changes are needed.

   market_changes     change vs the same weeks in 2025, one row per market and period
                      (search.json: markets_year_over_year; verify in summary.csv, Travel rows)
   market_ranks       countries in rank order by Google Trends index, Canada = 100; the note puts
                      each country's index value into words
                      (search.json: markets_rank_apr_aug_2026.target_markets; verify in region_ranks.csv, AprAug)
   activities_summer  activities in rank order, 1 July to 31 August 2026
                      (search.json: activities_rank_summer_2026)
   activities_before  activities in rank order, 1 April to 30 June 2026
                      (search.json: activities_rank_before_summer_2026)

   Each row:
     label       text shown for the row
     change_pct  optional; change in percent (negative = down). Shown to one decimal place.
     note        optional small line under the label
     rank        optional; text shown as the rank (for example "4=" for a tie).
                 Left out, rows are numbered 1, 2, 3 in order.
*/
window.TIAY_SEARCH = {
  "market_changes": [
    { "label": "Canada · before summer",        "change_pct": -3.6 },
    { "label": "Canada · summer",               "change_pct": 8.3 },
    { "label": "United States · before summer", "change_pct": 8.0 },
    { "label": "United States · summer",        "change_pct": -16.0 }
  ],
  "market_ranks": [
    { "rank": "1",  "label": "Canada",         "note": "Most common here; the benchmark, set at 100" },
    { "rank": "2",  "label": "United States",  "note": "6 for every 100 in Canada" },
    { "rank": "3",  "label": "Australia",      "note": "3 for every 100 in Canada" },
    { "rank": "4=", "label": "United Kingdom", "note": "2 for every 100 in Canada" },
    { "rank": "4=", "label": "Taiwan",         "note": "2 for every 100 in Canada" },
    { "rank": "6",  "label": "Germany",        "note": "1 for every 100 in Canada" },
    { "rank": "7",  "label": "Mexico",         "note": "Fewer than 1 for every 100 in Canada" }
  ],
  "activities_summer": [
    { "label": "Northern lights" },
    { "label": "Hiking" },
    { "label": "Canoeing and paddling" }
  ],
  "activities_before": [
    { "label": "Northern lights" },
    { "label": "Hiking" }
  ]
};
