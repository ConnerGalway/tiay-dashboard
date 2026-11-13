# Yukon summer search interest: Google Trends notes

Retrieved 12 November 2026 from trends.google.com (classic Explore, Web Search). This replaces the earlier autumn pull for dashboard purposes. Files are in `yukon-search-data/summer/`.

## Periods

- **Before summer** (planning and booking): 1 April to 30 June.
- **Summer**: 1 July to 31 August.
- Each is compared with the same weeks in 2025. Only complete Sunday-to-Saturday weeks inside the period count: 12 weeks before summer and 8 weeks in summer, in both years.
- Every time series was pulled over one continuous range, 1 April 2025 to 30 September 2026 (weekly, 79 rows), so both years sit on the same scale.

## What is fit to show

**Markets, year over year (Yukon topic, Travel category).** Only Canada and the United States have a measurable travel signal.

| Market | Before summer | Summer |
|---|---|---|
| Canada | -3.6% (67.08 vs 69.58) | +8.3% (89.88 vs 83.00) |
| United States | +8.0% (58.83 vs 54.50) | -16.0% (62.88 vs 74.88) |

The United States summer 2025 window includes one peak week (10 to 16 August 2025, value 100). Without it the change is -11.8%, so the direction holds.

**Markets, ranked (interest by region, Travel category, Worldwide, 1 April to 31 August 2026, Canada = 100).** This is the only comparison Google Trends makes between countries. Among the target markets: Canada 100, United States 6, Australia 3, United Kingdom 2, Taiwan 2, Germany 1, Mexico under 1. Japan and Brazil returned no value for 2026 and are excluded. China is not available in Google Trends. Values of 1 to 3 are effectively tied.

**Activities, ranked for 2026 (five search terms, Worldwide, All categories; they share one scale).**

- Summer 2026: 1 Northern lights (44.12), 2 Hiking (29.88), 3 Canoeing and paddling (16.50).
- Before summer 2026: 1 Northern lights (59.42), 2 Hiking (49.83).
- Excluded as too thin: hot springs and dog sledding in both periods, and canoeing and paddling before summer. Each is zero in more than a quarter of the 2026 weeks.

## What is in the files but should not be shown

- **Activity year-over-year changes.** The activity series step up sharply in early August 2025: northern lights runs 16 to 32 every week from April to late July 2025, then 43 to 99 for the next two months. Hiking is zero in 7 of 12 spring 2025 weeks and never zero in spring 2026. The rule-based results (northern lights +136.1% before summer and +7.0% in summer; hiking +20.7% in summer) compare across that step, so they do not describe a real change in interest. Trends showed no data-collection note explaining it.
- **All-categories reruns for overseas markets.** Travel was empty or near-empty for Germany, Mexico, Brazil, Taiwan, Japan, Australia and the United Kingdom, so each was rerun with All categories. Those series are not travel searches, and they share a spike in the weeks of 3 to 23 August 2025 across unrelated countries (Germany 84, 94, 86; United Kingdom 80, 78; Australia 77; Brazil 84; Japan 81; Mexico 80, 94). That spike makes summer 2026 look 34% to 73% lower in the six that pass the signal rule (Taiwan does not). It reads as a news event, not travel demand.
- **St. Helena** appears second in the 2026 region list (13). It is a very small population and is noise.

## Settings

| File (summer/raw/) | Term | Location | Category | Dates |
|---|---|---|---|---|
| market_XX_travel (CA, US, DE, MX, BR, TW, JP, AU, GB) | Yukon (Topic), id /m/087r4 | that country | Travel | 1 Apr 2025 to 30 Sep 2026 |
| market_XX_allcategories (DE, MX, BR, TW, JP, AU, GB) | Yukon (Topic) | that country | All categories | 1 Apr 2025 to 30 Sep 2026 |
| activities_worldwide | five search terms | Worldwide | All categories | 1 Apr 2025 to 30 Sep 2026 |
| regions_AprAug_2026, regions_AprAug_2025 | Yukon (Topic) | Worldwide, by country | Travel | 1 Apr to 31 Aug of that year |
| regions_AprJun_2026/2025, regions_JulAug_2026/2025 | Yukon (Topic) | Worldwide, by country | Travel | that period |

Search terms: `yukon northern lights + yukon aurora`, `yukon dog sledding + yukon dog sled`, `yukon hiking + yukon hikes`, `yukon canoeing + yukon canoe + yukon paddling`, `yukon hot springs`.

## Other notes

- The Travel exports for Germany, Mexico and Taiwan have no rows ("your search doesn't have enough data to show here").
- The region files keep only the rows Trends gave a value for. The full exports list about 250 countries, nearly all blank; their checksums are in `regions_full_export_sha256.txt`. "Include low search volume regions" was off.
- Time-series CSVs were re-fetched from the URL each chart's own export button requested and checked by SHA-256.
- The "Yukon" topic is labelled only "Topic" in Trends, not as a territory. Its top Canadian subregion is Yukon Territory and its related queries are Yukon travel queries.
- Screenshots are reduced-size JPGs of each chart.
- Trends showed no data-collection notes on any chart, and no CAPTCHA or rate-limit page appeared.
- Each series is indexed to its own peak. Averages can be compared between years within one series, not between countries.
- LOW SIGNAL rule: more than a quarter of weeks in either window are zero, or either window's average is below 5. `summary.csv` lists every series, including those not fit to show.
