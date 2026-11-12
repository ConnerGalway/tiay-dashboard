# Yukon search interest: Google Trends pull notes

Retrieved 12 November 2026 (about 15:05–15:45 Pacific) from trends.google.com, classic Explore page, using the built-in browser signed in to a Google account. Search type was Web Search on every pull.

## Read these before relying on the numbers

1. **The week of 25–31 October 2026 looks different from every other week.** In sparse series it carries small non-zero values (2, 3, 4, 6, 8, 9) where every other week is either 0 or roughly 15+. In the five-activity comparison all five terms are non-zero that week (10, 2, 4, 3, 2), which happens in no other week. A diagnostic run with the end date pushed to 7 Nov 2026 returned the same values for that week and a similar all-non-zero pattern for the week after (26, 5, 11, 5, 5), so it is not an end-of-range effect; Trends appears to be reporting its most recent weeks on a different basis. That week is inside the 2026 autumn window and was included as instructed. Effect on the usable series:
   - Activities, Worldwide, northern lights: −33.0% as specified; −26.0% if that week is left out (avg 41.86 vs 56.57).
   - Markets with a dense signal (Canada 60, United States 48 that week) do not show an obvious break.
2. **The two windows have different week counts in autumn.** Complete Sunday–Saturday weeks inside 1 Sept–31 Oct: 7 in 2025 (weeks starting 7 Sept–19 Oct) and 8 in 2026 (weeks starting 6 Sept–25 Oct). Spring windows have 12 weeks each (6 Apr–22 Jun 2025; 5 Apr–21 Jun 2026).
3. **United Kingdom, All categories (+10.3%) rests on one week.** The week of 11–17 Oct 2026 is 76 against 17–33 for the rest of the window. Without it the 2026 average is 26.43 and the change is −10.6%.
4. **Pull 3 activities show a level change around August 2025.** Northern lights runs 16–32 for every week from April to late July 2025 and 37–98 afterwards; hiking has 7 zero weeks of 12 in spring 2025 and none in spring 2026. The +136.1% for northern lights passes the LOW SIGNAL rule but the shape looks like a step rather than a seasonal pattern. Treat it with caution.
5. **Travel category is unusable outside Canada and the United States.** Germany, Brazil, Japan, Australia and the United Kingdom returned zeros with one or two isolated weeks at 100/79; Mexico and Taiwan returned "your search doesn't have enough data to show here" and an export with no rows. All seven were rerun with All categories. Those reruns are not travel-specific and are not on the same scale as the Travel runs.
6. **Each pull is indexed to its own peak.** Averages cannot be compared across countries or across pulls, only 2026 vs 2025 within one series (and across the five activities within one Pull 2/3 comparison). The same week also differs between the autumn-range and spring-range pulls for the same country, because each range is scaled separately.

## What did not match the instructions

- **Topic label.** Trends did not offer a "Yukon" topic labelled as a territory in Canada. The suggestions were: Yukon (Search term), GMC Yukon (SUV), GMC Yukon XL (SUV), Yukon (Topic), Yukon Gear and Axel (Topic). I used **Yukon (Topic)**, entity id `/m/087r4`. Evidence it is the territory: in Canada its top subregion is Yukon Territory, and related queries include airnorth, yukon wildlife preserve, tombstone territorial park and hotels whitehorse yukon. Two separate "Yukon Territory (Topic)" entries also exist and were not used.
- **Browser.** The Chrome extension was not connected, so the work was done in the Claude built-in browser.
- **How the CSVs were saved.** I could not read the browser's download folder, so for each pull I clicked the chart's own CSV export button, captured the export URL it requested, re-fetched that same URL in the page and wrote the text to `raw/`. Each file was checked against a SHA-256 of the fetched text (`raw_sha256.txt`). The button clicks may also have left duplicate CSVs in the browser's default download location; they can be deleted.
- **Settings were applied through the Explore URL** (location, dates, category, terms) rather than by clicking the pickers. The settings bar on each page was read back and matched (see screenshots). The five activity terms were read back from the term boxes and match exactly, plus signs included.
- **Cookie notice.** Trends showed an informational cookie bar with only "Learn more" and "OK, got it"; there was no decline option. I did not click it, so it is visible at the bottom of every screenshot.
- **Screenshots** are `.jpg`, 800 px wide. `market_CA_travel.jpg` has a hover tooltip over the chart. `activities_worldwide_terms.jpg` is an extra shot showing the five term boxes.
- **Throttling.** Trends slowed to 40–60 second chart loads twice after runs of about eight pages. I paused about three minutes each time and it recovered. No CAPTCHA or "too many requests" page appeared and no pull was left incomplete.
- **Regions: fewer than 10 countries.** With "Include low search volume regions" off (the default), Trends returned values for 6 countries in autumn 2026 and 8 in autumn 2025. No top 10 exists; all are listed. Several are tied on the same index value, so their order is Trends' own display order, not a measured difference.
- **China** skipped as instructed (not usable in Google Trends).
- **Extra files.** `region_ranks.csv` (rank table) and `raw_sha256.txt`. `search.json` has two additions to the requested shape: `markets_all_categories_rerun` and a `category` field on market rows.

## Data-collection notes shown by Trends

None. No "Note" markers or data-collection improvement notices appeared on any chart in these date ranges. The only banner was "Classic Explore is expiring soon", which is about the page, not the data.

## Settings used

Autumn range = 1 Sept 2025 to 31 Oct 2026 (weekly, 61 rows, first row is the week starting 31 Aug 2025). Spring range = 1 Apr 2025 to 30 Jun 2026 (weekly, 66 rows, first row is the week starting 30 Mar 2025).

| File (raw/) | Term | Location | Category | Dates |
|---|---|---|---|---|
| market_CA_travel | Yukon (Topic) | Canada | Travel | autumn range |
| market_US_travel | Yukon (Topic) | United States | Travel | autumn range |
| market_DE_travel / _allcategories | Yukon (Topic) | Germany | Travel / All categories | autumn range |
| market_MX_travel / _allcategories | Yukon (Topic) | Mexico | Travel (no rows) / All categories | autumn range |
| market_BR_travel / _allcategories | Yukon (Topic) | Brazil | Travel / All categories | autumn range |
| market_TW_travel / _allcategories | Yukon (Topic) | Taiwan | Travel (no rows) / All categories | autumn range |
| market_JP_travel / _allcategories | Yukon (Topic) | Japan | Travel / All categories | autumn range |
| market_AU_travel / _allcategories | Yukon (Topic) | Australia | Travel / All categories | autumn range |
| market_GB_travel / _allcategories | Yukon (Topic) | United Kingdom | Travel / All categories | autumn range |
| regions_2026 | Yukon (Topic) | Worldwide, by country | Travel | 1 Sept–31 Oct 2026 |
| regions_2025 | Yukon (Topic) | Worldwide, by country | Travel | 1 Sept–31 Oct 2025 |
| activities_worldwide | five search terms | Worldwide | All categories | autumn range |
| activities_CA | five search terms | Canada | All categories | autumn range |
| activities_US | five search terms | United States | All categories | autumn range |
| booking_activities_worldwide | five search terms | Worldwide | All categories | spring range |
| booking_market_CA_travel | Yukon (Topic) | Canada | Travel | spring range |
| booking_market_US_travel | Yukon (Topic) | United States | Travel | spring range |
| booking_market_DE_travel / _allcategories | Yukon (Topic) | Germany | Travel (no rows) / All categories | spring range |

Search terms: `yukon northern lights + yukon aurora`, `yukon dog sledding + yukon dog sled`, `yukon hiking + yukon hikes`, `yukon canoeing + yukon canoe + yukon paddling`, `yukon hot springs`.

## Calculation rules applied

- A week counts only if all seven days (Sunday to Saturday, as Trends labels them) fall inside the window.
- "<1" is treated as 0.5 (none occurred in the time series; France is "1" in both region files).
- LOW SIGNAL: more than a quarter of weeks in either window are 0 or "<1", or either window's average is below 5. No percentage change is reported for these.
- Series with no rows are written as "no data" in `summary.csv` and null in `search.json`, not as zero.
- Percentage change = (avg 2026 − avg 2025) / avg 2025.

## LOW SIGNAL series

Pull 1 (autumn):
- Travel: Germany, Mexico (no data), Brazil, Taiwan (no data), Japan, Australia, United Kingdom.
- All categories rerun: Mexico, Brazil, Taiwan, Japan.
- OK: Canada (Travel), United States (Travel), and the All categories reruns for Germany, Australia, United Kingdom.

Pull 2 (autumn):
- Worldwide: dog sledding, hiking (3 of 8 weeks zero in 2026), canoeing/paddling, hot springs. Only northern lights is OK.
- Canada: all five. United States: all five.

Pull 3 (spring):
- Activities, Worldwide: dog sledding, hiking, canoeing/paddling, hot springs. Only northern lights is OK (see item 4 above).
- Markets: Germany Travel (no data). Canada Travel, United States Travel and Germany All categories are OK.

## Other things that looked odd

- **Germany, Travel:** 60 weeks of zero, then 100 in the week of 25–31 Oct 2026 (the anomalous week).
- **United Kingdom, Travel:** only three non-zero weeks: 79 (31 May 2026), 100 (18 Oct 2026), 11 (25 Oct 2026).
- **Brazil, Japan, Australia, Travel:** a single week at 100 (1 Feb 2026, 26 Apr 2026 and 2 Nov 2025 respectively) and otherwise zero.
- **Week of 1–7 Feb 2026** is the peak (100) in the All categories runs for Germany, Brazil, Taiwan, Japan, Australia and the United Kingdom. It is outside both windows.
- **Activities ranking below second place is not meaningful.** Canoeing (0.38), dog sledding (0.25) and hot springs (0.25) have 2026 averages that come entirely from the 25–31 Oct week (values 3, 2, 2).
- **Activities, Canada:** northern lights alternates between 0 and 50–85 week to week, which is typical of a term near Trends' reporting threshold.
- **Region maps:** United Kingdom moves from 6th to 3rd, but on index values of 1 and 3 against Canada's 100; Spain (4) and Mexico (1) appear in 2025 only.
