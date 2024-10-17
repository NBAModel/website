const seasonData = {
    "all-time": [
    {"team":"86 Celtics","Top 3 in Conference":1,"Offensive eFG%":51.80,"Preseason Odds":28.57,"Top 6 in SRS":1,"Offensive Rebound %":31.3,"DPOY Share":0.407,"True Shooting %":56.40,"MVP Shares":3.153,"Defensive Rating":102.6,"Age":29.3,"Top 5 in Offensive eFG%":1,"3 Point %":35.10,"Net Rating":9.2,"Top 6 in Home Winning %":1,"Final Score":76.47821,"Final Ranking":9},
    {"team":"87 Lakers","Top 3 in Conference":1,"Offensive eFG%":52.80,"Preseason Odds":20,"Top 6 in SRS":1,"Offensive Rebound %":34.1,"DPOY Share":0.668,"True Shooting %":57.70,"MVP Shares":2.853,"Defensive Rating":106.5,"Age":27.8,"Top 5 in Offensive eFG%":1,"3 Point %":36.70,"Net Rating":9.1,"Top 6 in Home Winning %":1,"Final Score":81.27129,"Final Ranking":2},
    {"team":"89 Pistons","Top 3 in Conference":1,"Offensive eFG%":50.20,"Preseason Odds":20,"Top 6 in SRS":1,"Offensive Rebound %":34.5,"DPOY Share":0.026,"True Shooting %":55.10,"MVP Shares":0.505,"Defensive Rating":104.7,"Age":28.7,"Top 5 in Offensive eFG%":0,"3 Point %":30,"Net Rating":6.1,"Top 6 in Home Winning %":1,"Final Score":64.20939,"Final Ranking":15},
    {"team":"91 Bulls","Top 3 in Conference":1,"Offensive eFG%":52.10,"Preseason Odds":12.50,"Top 6 in SRS":1,"Offensive Rebound %":34.7,"DPOY Share":0.522,"True Shooting %":56,"MVP Shares":2.724,"Defensive Rating":105.2,"Age":26.9,"Top 5 in Offensive eFG%":1,"3 Point %":36.60,"Net Rating":9.4,"Top 6 in Home Winning %":1,"Final Score":76.12697,"Final Ranking":10},
    {"team":"94 Rockets","Top 3 in Conference":1,"Offensive eFG%":50.70,"Preseason Odds":7.69,"Top 6 in SRS":1,"Offensive Rebound %":27.6,"DPOY Share":1.45,"True Shooting %":54.50,"MVP Shares":0.945,"Defensive Rating":101.4,"Age":28.1,"Top 5 in Offensive eFG%":1,"3 Point %":33.40,"Net Rating":4.5,"Top 6 in Home Winning %":1,"Final Score":70.17376,"Final Ranking":14},
    {"team":"96 Bulls","Top 3 in Conference":1,"Offensive eFG%":51.70,"Preseason Odds":22.22,"Top 6 in SRS":1,"Offensive Rebound %":36.9,"DPOY Share":1.597,"True Shooting %":55.50,"MVP Shares":2.962,"Defensive Rating":101.8,"Age":29.9,"Top 5 in Offensive eFG%":1,"3 Point %":40.30,"Net Rating":13.4,"Top 6 in Home Winning %":1,"Final Score":77.94538,"Final Ranking":7},
    {"team":"99 Spurs","Top 3 in Conference":1,"Offensive eFG%":47.90,"Preseason Odds":18.18,"Top 6 in SRS":1,"Offensive Rebound %":30.4,"DPOY Share":0.532,"True Shooting %":52.30,"MVP Shares":2.248,"Defensive Rating":95,"Age":30.1,"Top 5 in Offensive eFG%":0,"3 Point %":33,"Net Rating":9,"Top 6 in Home Winning %":1,"Final Score":61.87619,"Final Ranking":16},
    {"team":"01 Lakers","Top 3 in Conference":1,"Offensive eFG%":49.80,"Preseason Odds":35.71,"Top 6 in SRS":1,"Offensive Rebound %":31.1,"DPOY Share":0.207,"True Shooting %":53.50,"MVP Shares":1.405,"Defensive Rating":104.8,"Age":29.2,"Top 5 in Offensive eFG%":1,"3 Point %":34.40,"Net Rating":3.6,"Top 6 in Home Winning %":1,"Final Score":70.85504,"Final Ranking":12},
    {"team":"08 Celtics","Top 3 in Conference":1,"Offensive eFG%":52.20,"Preseason Odds":22.22,"Top 6 in SRS":1,"Offensive Rebound %":26.6,"DPOY Share":0.328,"True Shooting %":56.90,"MVP Shares":1.773,"Defensive Rating":98.9,"Age":27.9,"Top 5 in Offensive eFG%":1,"3 Point %":38.10,"Net Rating":11.3,"Top 6 in Home Winning %":1,"Final Score":79.25332,"Final Ranking":3},
    {"team":"09 Lakers","Top 3 in Conference":1,"Offensive eFG%":51.30,"Preseason Odds":9.09,"Top 6 in SRS":1,"Offensive Rebound %":29.4,"DPOY Share":0.069,"True Shooting %":55.50,"MVP Shares":1.835,"Defensive Rating":104.7,"Age":27.4,"Top 5 in Offensive eFG%":1,"3 Point %":36.10,"Net Rating":8.1,"Top 6 in Home Winning %":1,"Final Score":73.16737,"Final Ranking":11},
    {"team":"13 Heat","Top 3 in Conference":1,"Offensive eFG%":55.20,"Preseason Odds":30.77,"Top 6 in SRS":1,"Offensive Rebound %":22.2,"DPOY Share":0.763,"True Shooting %":58.80,"MVP Shares":4.301,"Defensive Rating":103.7,"Age":30.3,"Top 5 in Offensive eFG%":1,"3 Point %":39.60,"Net Rating":8.6,"Top 6 in Home Winning %":1,"Final Score":77.34935,"Final Ranking":8},
    {"team":"14 Spurs","Top 3 in Conference":1,"Offensive eFG%":53.70,"Preseason Odds":7.69,"Top 6 in SRS":1,"Offensive Rebound %":22.7,"DPOY Share":0.19,"True Shooting %":57.10,"MVP Shares":0.431,"Defensive Rating":102.4,"Age":28.9,"Top 5 in Offensive eFG%":1,"3 Point %":39.70,"Net Rating":8.1,"Top 6 in Home Winning %":1,"Final Score":70.8078,"Final Ranking":13},
    {"team":"16 Warriors","Top 3 in Conference":1,"Offensive eFG%":56.30,"Preseason Odds":17.24,"Top 6 in SRS":1,"Offensive Rebound %":23.5,"DPOY Share":0.859,"True Shooting %":59.30,"MVP Shares":0.978,"Defensive Rating":103.8,"Age":27.4,"Top 5 in Offensive eFG%":1,"3 Point %":41.60,"Net Rating":10.7,"Top 6 in Home Winning %":1,"Final Score":78.69372,"Final Ranking":5},
    {"team":"16 Cavs","Top 3 in Conference":1,"Offensive eFG%":52.40,"Preseason Odds":26.32,"Top 6 in SRS":1,"Offensive Rebound %":25.1,"DPOY Share":0.528,"True Shooting %":55.80,"MVP Shares":3.523,"Defensive Rating":104.5,"Age":28.1,"Top 5 in Offensive eFG%":1,"3 Point %":36.20,"Net Rating":6.4,"Top 6 in Home Winning %":1,"Final Score":78.89138,"Final Ranking":4},
    {"team":"17 Warriors","Top 3 in Conference":1,"Offensive eFG%":56.30,"Preseason Odds":56.18,"Top 6 in SRS":1,"Offensive Rebound %":22.8,"DPOY Share":1.34,"True Shooting %":59.70,"MVP Shares":4.481,"Defensive Rating":104,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.30,"Net Rating":11.6,"Top 6 in Home Winning %":1,"Final Score":89.79212,"Final Ranking":1},
    {"team":"24 Celtics","Top 3 in Conference":1,"Offensive eFG%":57.80,"Preseason Odds":18.18,"Top 6 in SRS":1,"Offensive Rebound %":24.9,"DPOY Share":0.046,"True Shooting %":60.90,"MVP Shares":0.324,"Defensive Rating":111.6,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.80,"Net Rating":11.6,"Top 6 in Home Winning %":1,"Final Score":77.98453,"Final Ranking":6}
],
    "2023-24": [
        {"team":"Celtics","Top 3 in Conference":1,"Offensive eFG%":57.8,"Preseason Odds":18.1818,"Top 6 in SRS":1,"Offensive Rebound %":24.9,"DPOY Share":0.054,"True Shooting %":60.9,"MVP Shares":0.411,"Defensive Rating":111.6,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.8,"Net Rating":11.6,"Clutch Winning %":63.6,"Top 6 in Home Winning %":1,"Final Score":90.0901,"Final Ranking":1},
    {"team":"Knicks","Top 3 in Conference":1,"Offensive eFG%":54,"Preseason Odds":1.96078,"Top 6 in SRS":1,"Offensive Rebound %":29.4,"DPOY Share":0.016,"True Shooting %":57.4,"MVP Shares":0.164,"Defensive Rating":113.4,"Age":26.4,"Top 5 in Offensive eFG%":0,"3 Point %":36.9,"Net Rating":4.8,"Clutch Winning %":51.5,"Top 6 in Home Winning %":0,"Final Score":60.4175,"Final Ranking":6},
    {"team":"Bucks","Top 3 in Conference":1,"Offensive eFG%":56.8,"Preseason Odds":14.2857,"Top 6 in SRS":0,"Offensive Rebound %":21.8,"DPOY Share":1.678,"True Shooting %":60.1,"MVP Shares":2.753,"Defensive Rating":115.8,"Age":30.2,"Top 5 in Offensive eFG%":1,"3 Point %":37.3,"Net Rating":2.6,"Clutch Winning %":57.5,"Top 6 in Home Winning %":1,"Final Score":77.48,"Final Ranking":4},
    {"team":"Cavaliers","Top 3 in Conference":0,"Offensive eFG%":55.7,"Preseason Odds":3.84615,"Top 6 in SRS":0,"Offensive Rebound %":23.2,"DPOY Share":0.206,"True Shooting %":58.6,"MVP Shares":0.03,"Defensive Rating":112.7,"Age":26.2,"Top 5 in Offensive eFG%":0,"3 Point %":36.7,"Net Rating":2.5,"Clutch Winning %":47.6,"Top 6 in Home Winning %":0,"Final Score":12.5645,"Final Ranking":15},
    {"team":"Magic","Top 3 in Conference":0,"Offensive eFG%":54.1,"Preseason Odds":0.39841,"Top 6 in SRS":0,"Offensive Rebound %":25.3,"DPOY Share":0.002,"True Shooting %":57.7,"MVP Shares":0,"Defensive Rating":111.3,"Age":24,"Top 5 in Offensive eFG%":0,"3 Point %":35.2,"Net Rating":2.1,"Clutch Winning %":60,"Top 6 in Home Winning %":1,"Final Score":12.7133,"Final Ranking":14},
    {"team":"Pacers","Top 3 in Conference":0,"Offensive eFG%":57.8,"Preseason Odds":0.39841,"Top 6 in SRS":0,"Offensive Rebound %":23.8,"DPOY Share":0.006,"True Shooting %":60,"MVP Shares":0.017,"Defensive Rating":118,"Age":25.3,"Top 5 in Offensive eFG%":1,"3 Point %":37.4,"Net Rating":3,"Clutch Winning %":48.6,"Top 6 in Home Winning %":0,"Final Score":19.2388,"Final Ranking":10},
    {"team":"76ers","Top 3 in Conference":0,"Offensive eFG%":53.2,"Preseason Odds":5.26316,"Top 6 in SRS":0,"Offensive Rebound %":24.8,"DPOY Share":0.028,"True Shooting %":57.4,"MVP Shares":2.201,"Defensive Rating":113.8,"Age":28.4,"Top 5 in Offensive eFG%":0,"3 Point %":36.3,"Net Rating":3.1,"Clutch Winning %":50,"Top 6 in Home Winning %":0,"Final Score":14.5334,"Final Ranking":13},
    {"team":"Heat","Top 3 in Conference":0,"Offensive eFG%":53.8,"Preseason Odds":5.88235,"Top 6 in SRS":0,"Offensive Rebound %":21.8,"DPOY Share":0.578,"True Shooting %":57.8,"MVP Shares":0.012,"Defensive Rating":112.2,"Age":28,"Top 5 in Offensive eFG%":0,"3 Point %":37,"Net Rating":1.8,"Clutch Winning %":52.4,"Top 6 in Home Winning %":0,"Final Score":11.7161,"Final Ranking":16},
    {"team":"Thunder","Top 3 in Conference":1,"Offensive eFG%":57.3,"Preseason Odds":0.9901,"Top 6 in SRS":1,"Offensive Rebound %":21.1,"DPOY Share":0.012,"True Shooting %":60.8,"MVP Shares":0.692,"Defensive Rating":112.1,"Age":23.4,"Top 5 in Offensive eFG%":1,"3 Point %":38.9,"Net Rating":7.4,"Clutch Winning %":63.2,"Top 6 in Home Winning %":1,"Final Score":77.5883,"Final Ranking":3},
    {"team":"Nuggets","Top 3 in Conference":1,"Offensive eFG%":56.2,"Preseason Odds":18.1818,"Top 6 in SRS":1,"Offensive Rebound %":25.5,"DPOY Share":0.002,"True Shooting %":58.9,"MVP Shares":3.463,"Defensive Rating":113,"Age":27.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":5.5,"Clutch Winning %":65,"Top 6 in Home Winning %":1,"Final Score":84.1444,"Final Ranking":2},
    {"team":"Timberwolves","Top 3 in Conference":1,"Offensive eFG%":55.9,"Preseason Odds":1.49254,"Top 6 in SRS":1,"Offensive Rebound %":23.2,"DPOY Share":2.449,"True Shooting %":59.4,"MVP Shares":0.024,"Defensive Rating":109,"Age":27.2,"Top 5 in Offensive eFG%":0,"3 Point %":38.7,"Net Rating":6.6,"Clutch Winning %":58.3,"Top 6 in Home Winning %":1,"Final Score":72.9321,"Final Ranking":5},
    {"team":"Clippers","Top 3 in Conference":0,"Offensive eFG%":56.1,"Preseason Odds":4.34783,"Top 6 in SRS":0,"Offensive Rebound %":24.4,"DPOY Share":0.01,"True Shooting %":59.9,"MVP Shares":0.529,"Defensive Rating":115.4,"Age":30.4,"Top 5 in Offensive eFG%":0,"3 Point %":38.1,"Net Rating":3.4,"Clutch Winning %":55,"Top 6 in Home Winning %":0,"Final Score":17.2114,"Final Ranking":11},
    {"team":"Mavericks","Top 3 in Conference":0,"Offensive eFG%":56.2,"Preseason Odds":3.84615,"Top 6 in SRS":0,"Offensive Rebound %":22.2,"DPOY Share":0,"True Shooting %":59.2,"MVP Shares":0.968,"Defensive Rating":115.4,"Age":26.5,"Top 5 in Offensive eFG%":0,"3 Point %":36.9,"Net Rating":2.2,"Clutch Winning %":71.9,"Top 6 in Home Winning %":0,"Final Score":15.9641,"Final Ranking":12},
    {"team":"Suns","Top 3 in Conference":0,"Offensive eFG%":56.5,"Preseason Odds":14.2857,"Top 6 in SRS":0,"Offensive Rebound %":25,"DPOY Share":0,"True Shooting %":60.3,"MVP Shares":0.218,"Defensive Rating":114.6,"Age":29.3,"Top 5 in Offensive eFG%":0,"3 Point %":38.2,"Net Rating":3,"Clutch Winning %":48.8,"Top 6 in Home Winning %":0,"Final Score":22.4711,"Final Ranking":8},
    {"team":"Lakers","Top 3 in Conference":0,"Offensive eFG%":56.6,"Preseason Odds":6.25,"Top 6 in SRS":0,"Offensive Rebound %":19.9,"DPOY Share":0.588,"True Shooting %":60.1,"MVP Shares":0.829,"Defensive Rating":115.3,"Age":28,"Top 5 in Offensive eFG%":1,"3 Point %":37.7,"Net Rating":0.6,"Clutch Winning %":72.7,"Top 6 in Home Winning %":0,"Final Score":23.8622,"Final Ranking":7},
    {"team":"Pelicans","Top 3 in Conference":0,"Offensive eFG%":55.8,"Preseason Odds":2.43902,"Top 6 in SRS":1,"Offensive Rebound %":24.4,"DPOY Share":0.028,"True Shooting %":59.1,"MVP Shares":0,"Defensive Rating":112.9,"Age":26,"Top 5 in Offensive eFG%":0,"3 Point %":38.3,"Net Rating":4.5,"Clutch Winning %":48.3,"Top 6 in Home Winning %":0,"Final Score":21.9322,"Final Ranking":9}
],
    "2022-23": [
        {"team":"Bucks","Top 3 in Conference":1,"Offensive eFG%":58.3,"Preseason Odds":13.3333,"Top 6 in SRS":1,"Offensive Rebound %":25,"DPOY Share":2.258,"True Shooting %":58.3,"MVP Shares":3.43,"Defensive Rating":111.9,"Age":29.8,"Top 5 in Offensive eFG%":0,"3 Point %":36.8,"Net Rating":6.5,"Clutch Winning %":77.1,"Top 6 in Home Winning %":1,"Final Score":82.2199,"Final Ranking":3},
    {"team":"Celtics","Top 3 in Conference":1,"Offensive eFG%":56.6,"Preseason Odds":16.6667,"Top 6 in SRS":1,"Offensive Rebound %":22.1,"DPOY Share":0.558,"True Shooting %":60,"MVP Shares":0.324,"Defensive Rating":111.5,"Age":27.4,"Top 5 in Offensive eFG%":1,"3 Point %":37.7,"Net Rating":3.5,"Clutch Winning %":64.9,"Top 6 in Home Winning %":1,"Final Score":81.3457,"Final Ranking":4},
    {"team":"76ers","Top 3 in Conference":1,"Offensive eFG%":60.8,"Preseason Odds":6.6667,"Top 6 in SRS":1,"Offensive Rebound %":21.6,"DPOY Share":0.08,"True Shooting %":60.8,"MVP Shares":3.382,"Defensive Rating":111.3,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.7,"Net Rating":4.4,"Clutch Winning %":62.2,"Top 6 in Home Winning %":0,"Final Score":83.3071,"Final Ranking":2},
    {"team":"Cavaliers","Top 3 in Conference":0,"Offensive eFG%":59,"Preseason Odds":3.22581,"Top 6 in SRS":1,"Offensive Rebound %":23.6,"DPOY Share":0.206,"True Shooting %":59,"MVP Shares":0.03,"Defensive Rating":110.6,"Age":25.4,"Top 5 in Offensive eFG%":0,"3 Point %":36.7,"Net Rating":5.5,"Clutch Winning %":53.3,"Top 6 in Home Winning %":1,"Final Score":28.5396,"Final Ranking":8},
    {"team":"Knicks","Top 3 in Conference":0,"Offensive eFG%":57.7,"Preseason Odds":1.49254,"Top 6 in SRS":0,"Offensive Rebound %":28.3,"DPOY Share":0,"True Shooting %":57.7,"MVP Shares":0.041,"Defensive Rating":114.8,"Age":24.5,"Top 5 in Offensive eFG%":0,"3 Point %":35.4,"Net Rating":3,"Clutch Winning %":51.1,"Top 6 in Home Winning %":0,"Final Score":9.77336,"Final Ranking":15},
    {"team":"Nets","Top 3 in Conference":0,"Offensive eFG%":59.8,"Preseason Odds":12.5,"Top 6 in SRS":0,"Offensive Rebound %":19.6,"DPOY Share":1.056,"True Shooting %":59.8,"MVP Shares":0.003,"Defensive Rating":114.1,"Age":28,"Top 5 in Offensive eFG%":0,"3 Point %":37.8,"Net Rating":0.9,"Clutch Winning %":60,"Top 6 in Home Winning %":0,"Final Score":20.9853,"Final Ranking":9},
    {"team":"Hawks","Top 3 in Conference":0,"Offensive eFG%":57.9,"Preseason Odds":1.96078,"Top 6 in SRS":0,"Offensive Rebound %":25.1,"DPOY Share":0.02,"True Shooting %":57.9,"MVP Shares":0,"Defensive Rating":116.3,"Age":24.9,"Top 5 in Offensive eFG%":0,"3 Point %":35.2,"Net Rating":0.3,"Clutch Winning %":46.5,"Top 6 in Home Winning %":0,"Final Score":7.53461,"Final Ranking":16},
    {"team":"Heat","Top 3 in Conference":0,"Offensive eFG%":57.4,"Preseason Odds":5.88235,"Top 6 in SRS":0,"Offensive Rebound %":22.8,"DPOY Share":0.394,"True Shooting %":57.4,"MVP Shares":0.011,"Defensive Rating":113.3,"Age":27.7,"Top 5 in Offensive eFG%":0,"3 Point %":34.4,"Net Rating":-0.3,"Clutch Winning %":59.3,"Top 6 in Home Winning %":0,"Final Score":10.1452,"Final Ranking":14},
    {"team":"Nuggets","Top 3 in Conference":1,"Offensive eFG%":60.1,"Preseason Odds":5.26316,"Top 6 in SRS":1,"Offensive Rebound %":24.8,"DPOY Share":0.002,"True Shooting %":60.1,"MVP Shares":2.738,"Defensive Rating":114.2,"Age":26.6,"Top 5 in Offensive eFG%":1,"3 Point %":37.9,"Net Rating":3.4,"Clutch Winning %":59.5,"Top 6 in Home Winning %":1,"Final Score":85.1736,"Final Ranking":1},
    {"team":"Grizzlies","Top 3 in Conference":1,"Offensive eFG%":57,"Preseason Odds":4.7619,"Top 6 in SRS":1,"Offensive Rebound %":26.5,"DPOY Share":0.98,"True Shooting %":57,"MVP Shares":0.011,"Defensive Rating":111.2,"Age":24.4,"Top 5 in Offensive eFG%":0,"3 Point %":35.1,"Net Rating":3.9,"Clutch Winning %":58.3,"Top 6 in Home Winning %":1,"Final Score":64.4922,"Final Ranking":5},
    {"team":"Kings","Top 3 in Conference":1,"Offensive eFG%":60.8,"Preseason Odds":0.1996,"Top 6 in SRS":0,"Offensive Rebound %":22.7,"DPOY Share":0,"True Shooting %":60.8,"MVP Shares":0.029,"Defensive Rating":116.8,"Age":25.4,"Top 5 in Offensive eFG%":1,"3 Point %":36.9,"Net Rating":2.6,"Clutch Winning %":56.8,"Top 6 in Home Winning %":0,"Final Score":61.5998,"Final Ranking":6},
    {"team":"Suns","Top 3 in Conference":0,"Offensive eFG%":57,"Preseason Odds":9.0909,"Top 6 in SRS":0,"Offensive Rebound %":26.6,"DPOY Share":0,"True Shooting %":57,"MVP Shares":0.408,"Defensive Rating":113,"Age":28.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":2.1,"Clutch Winning %":47.2,"Top 6 in Home Winning %":0,"Final Score":17.157,"Final Ranking":11},
    {"team":"Clippers","Top 3 in Conference":0,"Offensive eFG%":58.8,"Preseason Odds":12.5,"Top 6 in SRS":0,"Offensive Rebound %":22.9,"DPOY Share":0.322,"True Shooting %":58.8,"MVP Shares":0.546,"Defensive Rating":111.5,"Age":29.7,"Top 5 in Offensive eFG%":0,"3 Point %":38.1,"Net Rating":0.5,"Clutch Winning %":52.4,"Top 6 in Home Winning %":0,"Final Score":19.568,"Final Ranking":10},
    {"team":"Warriors","Top 3 in Conference":0,"Offensive eFG%":60,"Preseason Odds":14.2857,"Top 6 in SRS":0,"Offensive Rebound %":24.4,"DPOY Share":0.236,"True Shooting %":60,"MVP Shares":0.631,"Defensive Rating":111.4,"Age":27.3,"Top 5 in Offensive eFG%":1,"3 Point %":38.5,"Net Rating":1.7,"Clutch Winning %":48.8,"Top 6 in Home Winning %":1,"Final Score":36.9461,"Final Ranking":7},
    {"team":"Lakers","Top 3 in Conference":0,"Offensive eFG%":58.2,"Preseason Odds":5.26316,"Top 6 in SRS":0,"Offensive Rebound %":22.8,"DPOY Share":0.4,"True Shooting %":58.2,"MVP Shares":0.83,"Defensive Rating":113.9,"Age":27.9,"Top 5 in Offensive eFG%":0,"3 Point %":34.6,"Net Rating":0.6,"Clutch Winning %":52.3,"Top 6 in Home Winning %":0,"Final Score":13.538,"Final Ranking":12},
    {"team":"Timberwolves","Top 3 in Conference":0,"Offensive eFG%":59.2,"Preseason Odds":3.44828,"Top 6 in SRS":0,"Offensive Rebound %":21.5,"DPOY Share":2.393,"True Shooting %":59.2,"MVP Shares":0.009,"Defensive Rating":113.8,"Age":25.8,"Top 5 in Offensive eFG%":0,"3 Point %":36.5,"Net Rating":-0.1,"Clutch Winning %":58.3,"Top 6 in Home Winning %":0,"Final Score":13.2608,"Final Ranking":13}
],
    "2021-22": [
    {"team":"Heat","Top 3 in Conference":1,"Offensive eFG%":54.7,"Preseason Odds":3.84615,"Top 6 in SRS":1,"Offensive Rebound %":23.5,"DPOY Share":0.364,"True Shooting %":58.4,"MVP Shares":0.016,"Defensive Rating":109.1,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":37.9,"Net Rating":4.6,"Clutch Winning %":60.5,"Top 6 in Home Winning %":1,"Final Score":80.1745,"Final Ranking":3},
    {"team":"Celtics","Top 3 in Conference":1,"Offensive eFG%":54.2,"Preseason Odds":2.43902,"Top 6 in SRS":1,"Offensive Rebound %":24,"DPOY Share":0.641,"True Shooting %":57.8,"MVP Shares":0.044,"Defensive Rating":106.9,"Age":26.1,"Top 5 in Offensive eFG%":0,"3 Point %":35.6,"Net Rating":7.5,"Clutch Winning %":37.1,"Top 6 in Home Winning %":0,"Final Score":64.835,"Final Ranking":6},
    {"team":"Bucks","Top 3 in Conference":1,"Offensive eFG%":54.6,"Preseason Odds":10,"Top 6 in SRS":0,"Offensive Rebound %":23,"DPOY Share":1.618,"True Shooting %":58,"MVP Shares":2.898,"Defensive Rating":111.8,"Age":28.5,"Top 5 in Offensive eFG%":0,"3 Point %":36.6,"Net Rating":3.3,"Clutch Winning %":58.5,"Top 6 in Home Winning %":0,"Final Score":66.5477,"Final Ranking":5},
    {"team":"76ers","Top 3 in Conference":0,"Offensive eFG%":53.4,"Preseason Odds":5.88235,"Top 6 in SRS":0,"Offensive Rebound %":20.1,"DPOY Share":0.393,"True Shooting %":57.8,"MVP Shares":3.426,"Defensive Rating":110.8,"Age":26.8,"Top 5 in Offensive eFG%":0,"3 Point %":35.4,"Net Rating":2.7,"Clutch Winning %":53.3,"Top 6 in Home Winning %":0,"Final Score":20.6194,"Final Ranking":11},
    {"team":"Raptors","Top 3 in Conference":0,"Offensive eFG%":51,"Preseason Odds":0.66225,"Top 6 in SRS":0,"Offensive Rebound %":28.4,"DPOY Share":0,"True Shooting %":54.3,"MVP Shares":0.017,"Defensive Rating":110.5,"Age":24.8,"Top 5 in Offensive eFG%":0,"3 Point %":34.9,"Net Rating":2.4,"Clutch Winning %":57.8,"Top 6 in Home Winning %":0,"Final Score":8.31116,"Final Ranking":15},
    {"team":"Bulls","Top 3 in Conference":0,"Offensive eFG%":54.1,"Preseason Odds":1.49254,"Top 6 in SRS":0,"Offensive Rebound %":20.4,"DPOY Share":0,"True Shooting %":57.9,"MVP Shares":0.033,"Defensive Rating":113.6,"Age":26.3,"Top 5 in Offensive eFG%":0,"3 Point %":36.9,"Net Rating":-0.4,"Clutch Winning %":61,"Top 6 in Home Winning %":0,"Final Score":13.3307,"Final Ranking":13},
    {"team":"Nets","Top 3 in Conference":0,"Offensive eFG%":54,"Preseason Odds":29.4118,"Top 6 in SRS":0,"Offensive Rebound %":23.9,"DPOY Share":0.027,"True Shooting %":57.6,"MVP Shares":0.107,"Defensive Rating":112.8,"Age":29.1,"Top 5 in Offensive eFG%":0,"3 Point %":36.1,"Net Rating":0.8,"Clutch Winning %":52.4,"Top 6 in Home Winning %":0,"Final Score":21.2075,"Final Ranking":9},
    {"team":"Hawks","Top 3 in Conference":0,"Offensive eFG%":54.3,"Preseason Odds":2.77778,"Top 6 in SRS":0,"Offensive Rebound %":22.7,"DPOY Share":0.024,"True Shooting %":58.1,"MVP Shares":0.003,"Defensive Rating":112.1,"Age":26.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":1.6,"Clutch Winning %":47.4,"Top 6 in Home Winning %":0,"Final Score":15.9898,"Final Ranking":12},
    {"team":"Suns","Top 3 in Conference":1,"Offensive eFG%":54.9,"Preseason Odds":6.25,"Top 6 in SRS":1,"Offensive Rebound %":22.3,"DPOY Share":0.404,"True Shooting %":58.1,"MVP Shares":0.382,"Defensive Rating":107.3,"Age":27.5,"Top 5 in Offensive eFG%":1,"3 Point %":36.4,"Net Rating":7.5,"Clutch Winning %":78.6,"Top 6 in Home Winning %":1,"Final Score":80.9447,"Final Ranking":2},
    {"team":"Grizzlies","Top 3 in Conference":1,"Offensive eFG%":52.2,"Preseason Odds":0.9901,"Top 6 in SRS":1,"Offensive Rebound %":30,"DPOY Share":0.204,"True Shooting %":55.3,"MVP Shares":0.01,"Defensive Rating":109,"Age":24,"Top 5 in Offensive eFG%":0,"3 Point %":35.3,"Net Rating":5.6,"Clutch Winning %":65.6,"Top 6 in Home Winning %":1,"Final Score":66.5795,"Final Ranking":4},
    {"team":"Warriors","Top 3 in Conference":1,"Offensive eFG%":55.2,"Preseason Odds":10,"Top 6 in SRS":1,"Offensive Rebound %":22.8,"DPOY Share":0.216,"True Shooting %":58.2,"MVP Shares":0.631,"Defensive Rating":106.9,"Age":27.6,"Top 5 in Offensive eFG%":1,"3 Point %":36.4,"Net Rating":5.6,"Clutch Winning %":54.8,"Top 6 in Home Winning %":1,"Final Score":82.1367,"Final Ranking":1},
    {"team":"Mavericks","Top 3 in Conference":0,"Offensive eFG%":53.8,"Preseason Odds":3.22581,"Top 6 in SRS":0,"Offensive Rebound %":21.3,"DPOY Share":0,"True Shooting %":57.2,"MVP Shares":0.386,"Defensive Rating":109.4,"Age":26.7,"Top 5 in Offensive eFG%":0,"3 Point %":35,"Net Rating":3.4,"Clutch Winning %":57.9,"Top 6 in Home Winning %":1,"Final Score":20.725,"Final Ranking":10},
    {"team":"Jazz","Top 3 in Conference":0,"Offensive eFG%":55.5,"Preseason Odds":5.88235,"Top 6 in SRS":1,"Offensive Rebound %":25.4,"DPOY Share":3.322,"True Shooting %":58.9,"MVP Shares":0.009,"Defensive Rating":110.5,"Age":29.3,"Top 5 in Offensive eFG%":1,"3 Point %":36,"Net Rating":6.2,"Clutch Winning %":42.5,"Top 6 in Home Winning %":1,"Final Score":38.1988,"Final Ranking":7},
    {"team":"Nuggets","Top 3 in Conference":0,"Offensive eFG%":55.6,"Preseason Odds":4.34783,"Top 6 in SRS":0,"Offensive Rebound %":21.9,"DPOY Share":0,"True Shooting %":59,"MVP Shares":2.064,"Defensive Rating":112.1,"Age":27.7,"Top 5 in Offensive eFG%":1,"3 Point %":35.3,"Net Rating":2.4,"Clutch Winning %":57.5,"Top 6 in Home Winning %":0,"Final Score":26.6719,"Final Ranking":8},
    {"team":"Timberwolves","Top 3 in Conference":0,"Offensive eFG%":53.9,"Preseason Odds":0.39841,"Top 6 in SRS":0,"Offensive Rebound %":24.4,"DPOY Share":0.014,"True Shooting %":57.3,"MVP Shares":0,"Defensive Rating":111.7,"Age":24.2,"Top 5 in Offensive eFG%":0,"3 Point %":35.8,"Net Rating":2.6,"Clutch Winning %":52.6,"Top 6 in Home Winning %":0,"Final Score":12.027,"Final Ranking":14},
    {"team":"Pelicans","Top 3 in Conference":0,"Offensive eFG%":51.7,"Preseason Odds":0.9901,"Top 6 in SRS":0,"Offensive Rebound %":26.9,"DPOY Share":0,"True Shooting %":55.7,"MVP Shares":0,"Defensive Rating":113,"Age":25.6,"Top 5 in Offensive eFG%":0,"3 Point %":33.2,"Net Rating":-1,"Clutch Winning %":43.8,"Top 6 in Home Winning %":0,"Final Score":6.53903,"Final Ranking":16}
],
    "2020-21": [
    {"team":"76ers","Top 3 in Conference":1,"Offensive eFG%":54.1,"Preseason Odds":4.7619,"Top 6 in SRS":1,"Offensive Rebound %":23.2,"DPOY Share":1.029,"True Shooting %":57.9,"MVP Shares":0.636,"Defensive Rating":107.6,"Age":27.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":5.6,"Clutch Winning %":73.5,"Top 6 in Home Winning %":1,"Final Score":72.0578,"Final Ranking":5},
    {"team":"Nets","Top 3 in Conference":1,"Offensive eFG%":57.5,"Preseason Odds":14.2857,"Top 6 in SRS":0,"Offensive Rebound %":21.4,"DPOY Share":0.023,"True Shooting %":61,"MVP Shares":2.941,"Defensive Rating":113.8,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":39.2,"Net Rating":4.5,"Clutch Winning %":67.5,"Top 6 in Home Winning %":1,"Final Score":82.7146,"Final Ranking":2},
    {"team":"Bucks","Top 3 in Conference":1,"Offensive eFG%":56.6,"Preseason Odds":15.3846,"Top 6 in SRS":1,"Offensive Rebound %":23.3,"DPOY Share":1.49,"True Shooting %":59.3,"MVP Shares":2.31,"Defensive Rating":111.4,"Age":28.1,"Top 5 in Offensive eFG%":1,"3 Point %":38.9,"Net Rating":5.8,"Clutch Winning %":46.4,"Top 6 in Home Winning %":1,"Final Score":87.569,"Final Ranking":1},
    {"team":"Knicks","Top 3 in Conference":0,"Offensive eFG%":52.4,"Preseason Odds":0.1996,"Top 6 in SRS":0,"Offensive Rebound %":21.9,"DPOY Share":0,"True Shooting %":55.9,"MVP Shares":0.04,"Defensive Rating":108.2,"Age":25.6,"Top 5 in Offensive eFG%":0,"3 Point %":39.2,"Net Rating":2.4,"Clutch Winning %":55.6,"Top 6 in Home Winning %":0,"Final Score":9.78847,"Final Ranking":14},
    {"team":"Hawks","Top 3 in Conference":0,"Offensive eFG%":53.9,"Preseason Odds":0.9901,"Top 6 in SRS":0,"Offensive Rebound %":24.4,"DPOY Share":0.024,"True Shooting %":58.1,"MVP Shares":0,"Defensive Rating":113.3,"Age":25.4,"Top 5 in Offensive eFG%":0,"3 Point %":37.3,"Net Rating":2.4,"Clutch Winning %":50,"Top 6 in Home Winning %":0,"Final Score":11.765,"Final Ranking":12},
    {"team":"Heat","Top 3 in Conference":0,"Offensive eFG%":54.6,"Preseason Odds":5.26316,"Top 6 in SRS":0,"Offensive Rebound %":19.4,"DPOY Share":0.108,"True Shooting %":58.1,"MVP Shares":0.016,"Defensive Rating":111.2,"Age":27.4,"Top 5 in Offensive eFG%":0,"3 Point %":35.8,"Net Rating":1.4,"Clutch Winning %":52.9,"Top 6 in Home Winning %":0,"Final Score":10.4544,"Final Ranking":13},
    {"team":"Celtics","Top 3 in Conference":0,"Offensive eFG%":54.3,"Preseason Odds":6.66667,"Top 6 in SRS":0,"Offensive Rebound %":24.3,"DPOY Share":0.032,"True Shooting %":57.4,"MVP Shares":0.001,"Defensive Rating":112.5,"Age":25.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":1.5,"Clutch Winning %":39.5,"Top 6 in Home Winning %":0,"Final Score":12.6243,"Final Ranking":10},
    {"team":"Wizards","Top 3 in Conference":0,"Offensive eFG%":53.1,"Preseason Odds":0.9901,"Top 6 in SRS":0,"Offensive Rebound %":21.3,"DPOY Share":0,"True Shooting %":56.9,"MVP Shares":0.967,"Defensive Rating":113,"Age":26.6,"Top 5 in Offensive eFG%":0,"3 Point %":35.1,"Net Rating":-1.8,"Clutch Winning %":48.7,"Top 6 in Home Winning %":0,"Final Score":8.53072,"Final Ranking":15},
    {"team":"Jazz","Top 3 in Conference":1,"Offensive eFG%":56.3,"Preseason Odds":2.43902,"Top 6 in SRS":1,"Offensive Rebound %":24.5,"DPOY Share":3.582,"True Shooting %":59.7,"MVP Shares":0.009,"Defensive Rating":108.3,"Age":28.5,"Top 5 in Offensive eFG%":1,"3 Point %":38.9,"Net Rating":9.3,"Clutch Winning %":56.7,"Top 6 in Home Winning %":1,"Final Score":81.1036,"Final Ranking":3},
    {"team":"Suns","Top 3 in Conference":1,"Offensive eFG%":56.4,"Preseason Odds":2.43902,"Top 6 in SRS":1,"Offensive Rebound %":20.8,"DPOY Share":0,"True Shooting %":59.7,"MVP Shares":0.164,"Defensive Rating":111.3,"Age":26.6,"Top 5 in Offensive eFG%":1,"3 Point %":37.8,"Net Rating":5.9,"Clutch Winning %":67.6,"Top 6 in Home Winning %":1,"Final Score":75.6569,"Final Ranking":4},
    {"team":"Nuggets","Top 3 in Conference":1,"Offensive eFG%":55.7,"Preseason Odds":5.26316,"Top 6 in SRS":1,"Offensive Rebound %":24.7,"DPOY Share":0,"True Shooting %":58.8,"MVP Shares":1.189,"Defensive Rating":112.1,"Age":26.1,"Top 5 in Offensive eFG%":0,"3 Point %":37.7,"Net Rating":5,"Clutch Winning %":68.1,"Top 6 in Home Winning %":0,"Final Score":68.4113,"Final Ranking":6},
    {"team":"Clippers","Top 3 in Conference":0,"Offensive eFG%":56.4,"Preseason Odds":14.2857,"Top 6 in SRS":1,"Offensive Rebound %":22.7,"DPOY Share":0.777,"True Shooting %":59.9,"MVP Shares":1.028,"Defensive Rating":111.2,"Age":28.8,"Top 5 in Offensive eFG%":1,"3 Point %":41.1,"Net Rating":6.4,"Clutch Winning %":47.1,"Top 6 in Home Winning %":0,"Final Score":37.4579,"Final Ranking":7},
    {"team":"Mavericks","Top 3 in Conference":0,"Offensive eFG%":55,"Preseason Odds":3.84615,"Top 6 in SRS":0,"Offensive Rebound %":21.1,"DPOY Share":0.695,"True Shooting %":58.2,"MVP Shares":0.24,"Defensive Rating":113,"Age":26.3,"Top 5 in Offensive eFG%":0,"3 Point %":36.2,"Net Rating":2.4,"Clutch Winning %":54.5,"Top 6 in Home Winning %":0,"Final Score":11.8759,"Final Ranking":11},
    {"team":"Trail Blazers","Top 3 in Conference":0,"Offensive eFG%":54,"Preseason Odds":2.43902,"Top 6 in SRS":0,"Offensive Rebound %":23,"DPOY Share":0.026,"True Shooting %":57.7,"MVP Shares":0.334,"Defensive Rating":116,"Age":27.4,"Top 5 in Offensive eFG%":0,"3 Point %":38.5,"Net Rating":1.8,"Clutch Winning %":64.9,"Top 6 in Home Winning %":0,"Final Score":14.2583,"Final Ranking":9},
    {"team":"Lakers","Top 3 in Conference":0,"Offensive eFG%":53.6,"Preseason Odds":26.6667,"Top 6 in SRS":0,"Offensive Rebound %":22.5,"DPOY Share":0,"True Shooting %":56.9,"MVP Shares":2.333,"Defensive Rating":107.1,"Age":28.2,"Top 5 in Offensive eFG%":0,"3 Point %":35.4,"Net Rating":2.8,"Clutch Winning %":60,"Top 6 in Home Winning %":0,"Final Score":23.7322,"Final Ranking":8},
    {"team":"Grizzlies","Top 3 in Conference":0,"Offensive eFG%":52.8,"Preseason Odds":0.66225,"Top 6 in SRS":0,"Offensive Rebound %":24.2,"DPOY Share":0,"True Shooting %":56,"MVP Shares":0,"Defensive Rating":111.7,"Age":24.3,"Top 5 in Offensive eFG%":0,"3 Point %":35.6,"Net Rating":0.1,"Clutch Winning %":51.4,"Top 6 in Home Winning %":0,"Final Score":6.63646,"Final Ranking":16}
], 
    "2019-20": [
    {"team":"Bucks","Top 3 in Conference":1,"Offensive eFG%":55.2,"Preseason Odds":15.3846,"Top 6 in SRS":1,"Offensive Rebound %":20.7,"DPOY Share":1.432,"True Shooting %":58.3,"MVP Shares":1.965,"Defensive Rating":102.9,"Age":29.2,"Top 5 in Offensive eFG%":1,"3 Point %":35.5,"Net Rating":9.5,"Clutch Winning %":70.8,"Top 6 in Home Winning %":1,"Final Score":86.1285,"Final Ranking":2},
    {"team":"Raptors","Top 3 in Conference":1,"Offensive eFG%":53.6,"Preseason Odds":1.78571,"Top 6 in SRS":1,"Offensive Rebound %":21.3,"DPOY Share":0.002,"True Shooting %":57.4,"MVP Shares":0.022,"Defensive Rating":105,"Age":26.6,"Top 5 in Offensive eFG%":0,"3 Point %":37.4,"Net Rating":6.1,"Clutch Winning %":67.6,"Top 6 in Home Winning %":0,"Final Score":65.6384,"Final Ranking":4},
    {"team":"Celtics","Top 3 in Conference":1,"Offensive eFG%":53.1,"Preseason Odds":3.33333,"Top 6 in SRS":1,"Offensive Rebound %":23.9,"DPOY Share":0.032,"True Shooting %":57,"MVP Shares":0.001,"Defensive Rating":107,"Age":25.3,"Top 5 in Offensive eFG%":0,"3 Point %":36.4,"Net Rating":6.3,"Clutch Winning %":54.8,"Top 6 in Home Winning %":0,"Final Score":63.4507,"Final Ranking":6},
    {"team":"Pacers","Top 3 in Conference":0,"Offensive eFG%":53.4,"Preseason Odds":1.96078,"Top 6 in SRS":0,"Offensive Rebound %":20,"DPOY Share":0.032,"True Shooting %":56.5,"MVP Shares":0.002,"Defensive Rating":108,"Age":25.6,"Top 5 in Offensive eFG%":0,"3 Point %":36.3,"Net Rating":2,"Clutch Winning %":61.1,"Top 6 in Home Winning %":0,"Final Score":11.4812,"Final Ranking":13},
    {"team":"Heat","Top 3 in Conference":0,"Offensive eFG%":54.7,"Preseason Odds":1.63934,"Top 6 in SRS":0,"Offensive Rebound %":20.3,"DPOY Share":0.045,"True Shooting %":58.7,"MVP Shares":0.014,"Defensive Rating":109.5,"Age":25.9,"Top 5 in Offensive eFG%":1,"3 Point %":37.9,"Net Rating":3,"Clutch Winning %":50,"Top 6 in Home Winning %":1,"Final Score":28.2952,"Final Ranking":7},
    {"team":"76ers","Top 3 in Conference":0,"Offensive eFG%":53.4,"Preseason Odds":11.4286,"Top 6 in SRS":0,"Offensive Rebound %":23.9,"DPOY Share":0.514,"True Shooting %":56.6,"MVP Shares":0.053,"Defensive Rating":109,"Age":26.3,"Top 5 in Offensive eFG%":0,"3 Point %":36.8,"Net Rating":2.3,"Clutch Winning %":59.1,"Top 6 in Home Winning %":1,"Final Score":26.0551,"Final Ranking":10},
    {"team":"Nets","Top 3 in Conference":0,"Offensive eFG%":52,"Preseason Odds":1.78571,"Top 6 in SRS":0,"Offensive Rebound %":23.2,"DPOY Share":0.081,"True Shooting %":55.4,"MVP Shares":0,"Defensive Rating":109.5,"Age":26.3,"Top 5 in Offensive eFG%":0,"3 Point %":34.3,"Net Rating":-0.6,"Clutch Winning %":50,"Top 6 in Home Winning %":0,"Final Score":8.40755,"Final Ranking":15},
    {"team":"Magic","Top 3 in Conference":0,"Offensive eFG%":50.6,"Preseason Odds":0.49751,"Top 6 in SRS":0,"Offensive Rebound %":22.3,"DPOY Share":0,"True Shooting %":54.4,"MVP Shares":0,"Defensive Rating":109.5,"Age":26.1,"Top 5 in Offensive eFG%":0,"3 Point %":34.3,"Net Rating":-1,"Clutch Winning %":41.2,"Top 6 in Home Winning %":0,"Final Score":4.23522,"Final Ranking":16},
    {"team":"Lakers","Top 3 in Conference":1,"Offensive eFG%":54.2,"Preseason Odds":18.1818,"Top 6 in SRS":1,"Offensive Rebound %":24.5,"DPOY Share":0.712,"True Shooting %":57.3,"MVP Shares":2.814,"Defensive Rating":106.3,"Age":29.5,"Top 5 in Offensive eFG%":1,"3 Point %":34.9,"Net Rating":5.7,"Clutch Winning %":66.7,"Top 6 in Home Winning %":1,"Final Score":86.7472,"Final Ranking":1},
    {"team":"Clippers","Top 3 in Conference":1,"Offensive eFG%":53.5,"Preseason Odds":19.0476,"Top 6 in SRS":1,"Offensive Rebound %":23.5,"DPOY Share":1.619,"True Shooting %":57.7,"MVP Shares":1.51,"Defensive Rating":107.6,"Age":27.4,"Top 5 in Offensive eFG%":0,"3 Point %":37.1,"Net Rating":6.3,"Clutch Winning %":59.4,"Top 6 in Home Winning %":1,"Final Score":83.1143,"Final Ranking":3},
    {"team":"Nuggets","Top 3 in Conference":1,"Offensive eFG%":53.5,"Preseason Odds":4.7619,"Top 6 in SRS":0,"Offensive Rebound %":24.8,"DPOY Share":0.032,"True Shooting %":56.7,"MVP Shares":0.228,"Defensive Rating":111,"Age":25.6,"Top 5 in Offensive eFG%":0,"3 Point %":35.9,"Net Rating":2.1,"Clutch Winning %":64.4,"Top 6 in Home Winning %":1,"Final Score":63.6921,"Final Ranking":5},
    {"team":"Rockets","Top 3 in Conference":0,"Offensive eFG%":53.7,"Preseason Odds":12.5,"Top 6 in SRS":0,"Offensive Rebound %":21,"DPOY Share":0.028,"True Shooting %":57.8,"MVP Shares":4.172,"Defensive Rating":110.1,"Age":29.2,"Top 5 in Offensive eFG%":0,"3 Point %":34.5,"Net Rating":2.8,"Clutch Winning %":59.4,"Top 6 in Home Winning %":0,"Final Score":23.2101,"Final Ranking":11},
    {"team":"Thunder","Top 3 in Conference":0,"Offensive eFG%":53,"Preseason Odds":0.39841,"Top 6 in SRS":0,"Offensive Rebound %":19.3,"DPOY Share":0.014,"True Shooting %":57.3,"MVP Shares":0.108,"Defensive Rating":108.8,"Age":25.5,"Top 5 in Offensive eFG%":0,"3 Point %":35.5,"Net Rating":2,"Clutch Winning %":66.7,"Top 6 in Home Winning %":0,"Final Score":9.59756,"Final Ranking":14},
    {"team":"Jazz","Top 3 in Conference":0,"Offensive eFG%":54.9,"Preseason Odds":7.14286,"Top 6 in SRS":0,"Offensive Rebound %":21.6,"DPOY Share":2.674,"True Shooting %":58.5,"MVP Shares":0.001,"Defensive Rating":109.9,"Age":27.3,"Top 5 in Offensive eFG%":1,"3 Point %":38,"Net Rating":2.5,"Clutch Winning %":68.3,"Top 6 in Home Winning %":0,"Final Score":27.9206,"Final Ranking":9},
    {"team":"Mavericks","Top 3 in Conference":0,"Offensive eFG%":54.5,"Preseason Odds":0.9434,"Top 6 in SRS":1,"Offensive Rebound %":23.2,"DPOY Share":0,"True Shooting %":58.1,"MVP Shares":0.198,"Defensive Rating":111.7,"Age":26.1,"Top 5 in Offensive eFG%":1,"3 Point %":36.7,"Net Rating":5,"Clutch Winning %":41.5,"Top 6 in Home Winning %":0,"Final Score":28.2052,"Final Ranking":8},
    {"team":"Trail Blazers","Top 3 in Conference":0,"Offensive eFG%":53.3,"Preseason Odds":2.77778,"Top 6 in SRS":0,"Offensive Rebound %":22.4,"DPOY Share":0.144,"True Shooting %":57,"MVP Shares":0.316,"Defensive Rating":114.8,"Age":27.5,"Top 5 in Offensive eFG%":0,"3 Point %":37.7,"Net Rating":-1.1,"Clutch Winning %":59.5,"Top 6 in Home Winning %":0,"Final Score":17.0762,"Final Ranking":12}
]
};

const higherIsBetter = ["Top 3 in Conference", "Offensive eFG%", "Preseason Odds", "Top 6 in SRS", "Offensive Rebound %", "DPOY Share", "True Shooting %", "MVP Shares", "Top 5 in Offensive eFG%", "3 Point %", "Net Rating", "Top 6 in Home Winning %", "Final Score", "Clutch Winning %"];
const lowerIsBetter = ["Defensive Rating", "Final Ranking"];

let currentSeasonData = seasonData["all-time"];

function populateTeamSelects() {
    const selects = document.querySelectorAll('#team1, #team2');
    selects.forEach(select => {
        select.innerHTML = '<option value="">Select Team</option>';
        currentSeasonData.forEach(team => {
            const option = document.createElement('option');
            option.value = team.team;
            option.textContent = team.team;
            select.appendChild(option);
        });
    });
}

function compareStat(stat, value1, value2) {
    if (stat === "Age") {
        return Math.abs(value1 - 27.9) < Math.abs(value2 - 27.9);
    } else if (higherIsBetter.includes(stat)) {
        return value1 > value2;
    } else if (lowerIsBetter.includes(stat)) {
        return value1 < value2;
    }
    return false;
}

function displayTeamStats(teamName, tableId) {
    const table = document.getElementById(tableId);
    table.innerHTML = '';
    const team = currentSeasonData.find(t => t.team === teamName);
    if (team) {
        for (const [key, value] of Object.entries(team)) {
            if (key !== 'team') {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = key;
                cell2.textContent = value;
                row.dataset.stat = key;
                row.dataset.value = value;
                if (key === "Final Ranking" || key === "Final Score") {
                    cell1.classList.add('bold');
                    cell2.classList.add('bold');
                }
            }
        }
    }
    compareStats();
}

function compareStats() {
    const team1Stats = document.getElementById('team1-stats').rows;
    const team2Stats = document.getElementById('team2-stats').rows;

    for (let i = 0; i < team1Stats.length; i++) {
        const stat = team1Stats[i].dataset.stat;
        const value1 = parseFloat(team1Stats[i].dataset.value);
        const value2 = parseFloat(team2Stats[i].dataset.value);

        team1Stats[i].classList.remove('better-stat', 'tied-stat');
        team2Stats[i].classList.remove('better-stat', 'tied-stat');

        if (value1 === value2) {
            team1Stats[i].classList.add('tied-stat');
            team2Stats[i].classList.add('tied-stat');
        } else if (compareStat(stat, value1, value2)) {
            team1Stats[i].classList.add('better-stat');
        } else if (compareStat(stat, value2, value1)) {
            team2Stats[i].classList.add('better-stat');
        }
    }
}

function handleTeamSelect(event) {
    const selectedTeam = event.target.value;
    const tableId = event.target.id === 'team1' ? 'team1-stats' : 'team2-stats';
    displayTeamStats(selectedTeam, tableId);
}

document.getElementById('team1').addEventListener('change', handleTeamSelect);
document.getElementById('team2').addEventListener('change', handleTeamSelect);

document.getElementById('season-select').addEventListener('change', function() {
    currentSeasonData = seasonData[this.value];
    populateTeamSelects();
    document.getElementById('team1-stats').innerHTML = '';
    document.getElementById('team2-stats').innerHTML = '';
});

// Initialize the page
populateTeamSelects();

// Model Explanation Modal
const modal = document.getElementById("explanation-modal");
const btn = document.getElementById("help-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("explanation-text").innerHTML = `
        <h3>Stats</h3>
        <table>
            <tr><th>Stat</th><th>Meaning</th></tr>
            <tr><td>Top 3 in Conference</td><td>If a team had a top 3 record in their respective conference</td></tr>
            <tr><td>Offensive eFG%</td><td>(Total Field Goals Made + 0.5 x Total 3 Pointers Made)/Total Field Goals Attempted</td></tr>
            <tr><td>Preseason Odds</td><td>According to odds makers at the beginning of the season, what was the chance that team became the eventual champions</td></tr>
            <tr><td>Top 6 in SRS</td><td>If a team was top 6 in the league in the Simple Rating System metric (SRS compares the number of points a team scores against how many they allow)</td></tr>
            <tr><td>Offensive Rebound %</td><td>The % of missed shots, where the team obtains an offensive rebound</td></tr>
            <tr><td>DPOY Share</td><td>The total Defensive Player Of the Year vote shares all players on the team have earned in the past 5 years</td></tr>
            <tr><td>True Shooting %</td><td>Total Points Scored/(2 x (Total Field Goals Attempted + 0.44 x Total Free Throws Attempted))</td></tr>
            <tr><td>MVP Share</td><td>The total Most Valuable Player vote shares all players on the team have earned in the past 5 years</td></tr>
            <tr><td>Defensive Rating</td><td>The number of points the opposition team scores per 100 possessions</td></tr>
            <tr><td>Age</td><td>The average age of all players on the team</td></tr>
            <tr><td>Top 5 in Offensive eFG%</td><td>If a team was top 5 in the league in Offensive effective Field Goal %</td></tr>
            <tr><td>3 Point %</td><td>The % of 3 point shots the team makes</td></tr>
            <tr><td>Net Rating</td><td>The number of points the team scores per 100 possessions - The number of points the opposition team scores per 100 possessions</td></tr>
            <tr><td>Top 6 in Home Winning %</td><td>If a team was top 6 in winning % of home games</td></tr>
            <tr><td>Clutch Winning %</td><td>Teams winning % in games that were within 5 points in the final 5 minutes (this stat wasn't used in the all time comparison as the stats were only measured back to the 1996-97 season)</td></tr>
        </table>

        <h3>Calculations</h3>
        <p>This model is a comparison model, meaning the same team won't always get the same score. It depends on the other teams being used in the model.</p>
        <p>This model takes 3 main steps to calculate a final score:</p>

        <h4>1. Scoring</h4>
        <p>The first step in the calculations assigns each variable a value from 0 to 1, 1 being the best, 0 being the worst.</p>
        <p>X = a teams score in a certain stat<br>
        Min = the minimum value of all teams for that stat<br>
        Max = the maximum value of all teams for that stat</p>

        <h5>Highest is best:</h5>
        <p>(X - Min) / (Max - Min)</p>
        <ul>
            <li>Top 3 in Conference</li>
            <li>Offensive eFG%</li>
            <li>Top 6 in SRS</li>
            <li>Offensive Rebound %</li>
            <li>DPOY Share</li>
            <li>True Shooting %</li>
            <li>MVP Share</li>
            <li>Top 5 in Offensive eFG%</li>
            <li>3 Point %</li>
            <li>Net Rating</li>
            <li>Top 6 in Home Winning %</li>
            <li>Clutch Winning %</li>
        </ul>

        <h5>Lowest is best:</h5>
        <p>(Max - X) / (Max - Min)</p>
        <ul>
            <li>Defensive Rating</li>
        </ul>

        <h4>Unique:</h4>
        <h5>Preseason Odds:</h5>
        <p>Preseason odds start off with odds (e.g +450) and are converted to a percentage through this formula</p>
        <p>If X is positive: (100 / (X + 100)) x 100<br>
        If X is negative: (-X / (-X + 100)) x 100</p>
        <p>The percentage chance is then put through the normal highest is best formula</p>

        <h5>Age:</h5>
        <p>Age is calculate by the following formula</p>
        <p>1 - (|27.9 - X| x (1 / (27.9 - Min)))</p>

        <h4>2. Weighting</h4>
        <p>After each team is assigned a value for each stat these values are weighted depending on the correlation of the stat to winning championships.</p>
        <table>
            <tr><th>Stat</th><th>Weight</th></tr>
            <tr><td>Top 3 in Conference</td><td>0.4145</td></tr>
            <tr><td>Offensive eFG%</td><td>0.05</td></tr>
            <tr><td>Preseason Odds</td><td>0.0708</td></tr>
            <tr><td>Top 6 in SRS</td><td>0.0648</td></tr>
            <tr><td>Offensive Rebound %</td><td>0.0411</td></tr>
            <tr><td>DPOY Share</td><td>0.005</td></tr>
            <tr><td>True Shooting %</td><td>0.0361</td></tr>
            <tr><td>MVP Share</td><td>0.07</td></tr>
            <tr><td>Defensive Rating</td><td>0.02</td></tr>
            <tr><td>Age</td><td>0.034</td></tr>
            <tr><td>Top 5 in Offensive eFG%</td><td>0.0489</td></tr>
            <tr><td>3 Point %</td><td>0.051</td></tr>
            <tr><td>Net Rating</td><td>0.02</td></tr>
            <tr><td>Top 6 in Home Winning %</td><td>0.0638</td></tr>
            <tr><td>Clutch Winning %</td><td>0.01</td></tr>
        </table>
        <p>The sum of all the weights is 1 meaning this is the theoretical maximum score if a team is the best in every category.</p>
        <p>The values of these weightings is derived from data from the past 25 NBA seasons using a machine learning algorithm called SHAP. Using data from basketball reference imputed into a tree based regressor algorithm, SHAP compares success in each of the statistics to total playoff wins (The NBA Champion will always win 16 playoff games). Using this data it assigns each statistic a value depending on the strength of its correlation. Using these results I chose the 15 most relevant statistics to use in my model.</p>

        <h4>3. Summation</h4>
        <p>Now each team has a weighted score for each of the variables. The scores are totalled together and the result is multiplied by 100 to create the final score.</p>
        <p>The final scores are sorted to create a final ranking. The team with the highest score is predicted to win the NBA Championship!</p>
    `;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
