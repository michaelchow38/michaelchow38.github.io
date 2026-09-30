# Do High-K/D Players Actually Win More? (Pro Call of Duty, SQL)

A SQL analysis of the 2019 Call of Duty World League season (Black Ops 4). In pro Call of Duty, kill/death ratio (K/D) is the stat everyone looks at first. This project tests whether high-K/D players actually win more, or whether other stats tell you more about who wins in each game mode.

**[Open the notebook](CWL_BO4_KD_Analysis.ipynb)** · **[Project write-up on my portfolio](https://michaelchow38.github.io/#project/cod-kd-sql)**

## What I found

- **Team level:** the team with the higher K/D won about 91% of maps in every mode. But that's partly because the team that's winning racks up kills, so it doesn't prove K/D causes wins.
- **Player level:** K/D was never the stat most closely tied to winning.

| Mode | Stat most tied to winning | K/D |
|---|---|---|
| Control | Captures per round (0.53) | 0.43 |
| Hardpoint | Damage per 10 minutes (0.47) | 0.35 |
| Search & Destroy | Survive rate (0.46) | 0.30 |

- **High K/D isn't everything:** one player ranked 4th in Hardpoint K/D but won only 45.9% of his maps.

## Approach

1. Loaded the CSV into a SQLite database and cleaned the column names.
2. Ran data-quality checks in SQL. I excluded the Vegas event (missing assists and hill time), dropped the unusable accuracy column, recalculated K/D from kills and deaths, and built a combined key to identify each map.
3. Compared both teams on every map to see how often the higher-K/D team won.
4. Built one row per player per mode (players with 20+ maps), using per-10-minute and per-round rates.
5. Measured how strongly each stat correlates with win rate in each mode.

## Run it yourself

1. Download `BO4_Full.csv` from Jpkrez's repository: [jpkrez/cwl-stats, `2019-BO4/Full/`](https://github.com/jpkrez/cwl-stats/tree/main/2019-BO4).
2. Put it in the same folder as the notebook, then run:

```
pip install pandas matplotlib
jupyter notebook CWL_BO4_KD_Analysis.ipynb
```

The notebook creates its own SQLite database (`cwl_bo4.db`) the first time it runs.

## Data source and credit

The data comes from **Jpkrez**'s [cwl-stats](https://github.com/jpkrez/cwl-stats) repository, a public archive of CWL player stats he collected while working for MLG from 2016 to 2019. Thanks to Jpkrez for sharing it for public research and analysis. The data isn't copied here; please get it from his repository.

---

Michael Chow · [Portfolio](https://michaelchow38.github.io) · [LinkedIn](https://www.linkedin.com/in/michael-s-chow/)
