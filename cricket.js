//9.JSON object for team and its players//

const team =
{
  "Team1":
  {
    "unique_id": 1118894,
    "date": "2018-03-27T00:00:00.000Z",
    "team-2": "Tasmania",
    "team-1": "Queensland",
    "type": "First-class",
    "dateTimeGMT": "2018-03-23T00:00:00.000Z",
    "squad": true,
    "toss_winner_team": "Tasmania",
    "matchStarted": true
  },

  "Team2":
  {
      "uniqe_id": 1120132,
      "date": "2018-03-27T00:00:00.000Z",
    "team-3": "Canterbury",
     "type": "First-class",
    "dateTimeGMT": "2018-03-24T21:30:00.000Z",
    "toss_winner_team": "Central Districts",
    "squad": false,
      "matchStarted": true
  }
     }
console.log(team.Team1.unique_id);