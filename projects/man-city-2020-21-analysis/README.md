# What Made Man City Champions? (2020–21 Premier League)

Final project for INFO 2201 at the University of Colorado Boulder, Fall 2025.

Manchester City won the 2020–21 English Premier League. This project asks why: did they win on circumstance, by scoring the most and conceding the least, or because they had the best players?

**[Open the notebook](Final_Project.ipynb)** · **[Project write-up on my portfolio](https://michaelchow38.github.io/#project/man-city-2020-21)**

## What I found

- **Best attack and best defense.** Man City scored 83 goals and conceded only 32, the most and fewest in the league, and finished on 86 points.
- **No single star.** No City player led the league in any one stat. Harry Kane led in goals (23) and assists (14), while City's top scorer, İlkay Gündoğan, had 13.
- **Goals from across the squad.** Scoring was spread across many players, which protects a team against injuries.
- **Recognized by their peers.** Ederson kept the most clean sheets (19), and City won 6 of the 8 major season awards and 6 of the 11 PFA Team of the Year spots.

## Approach

1. Rebuilt the full league table from every match result with pandas and NumPy, combining home and away games.
2. Charted total goals by team, then Man City's individual goal scorers.
3. Compared City's best player in each stat category with the best player in the league.
4. Parsed the season's Wikipedia page with Beautiful Soup and pandas to pull the clean sheets and awards tables.
5. Built pie charts of which clubs won the season awards and PFA Team of the Year spots.

## Files

| File | What it is |
|---|---|
| `Final_Project.ipynb` | The analysis notebook |
| `2020-2021.csv` | Results and match stats for every game of the season |
| `EPL_20_21_Edited_2.csv` | Season stats for every player, cleaned by hand in Excel |
| `2020–21-EPL.html` | Saved copy of the Wikipedia article on the season |
| `Before-After-Edit.png` | Before and after cleaning the player names in Excel |
| The other `.png` files | Charts saved by the notebook |

## Run it yourself

```
pip install pandas numpy matplotlib beautifulsoup4 lxml
jupyter notebook Final_Project.ipynb
```

Keep the data files in the same folder as the notebook.

## Sources

The season page is from Wikipedia, "2020–21 Premier League," available under the [Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).

---

Michael Chow · [Portfolio](https://michaelchow38.github.io) · [LinkedIn](https://www.linkedin.com/in/michael-s-chow/)
