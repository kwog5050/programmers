function solution(genres, plays) {
  var answer = [];
  let song = [];
  let totalPlay = {};
  let totalArr = [];
  for (let i = 0; i < genres.length; i++){
    song.push({ id: i, genre: genres[i], play: plays[i] });

    if (totalPlay[genres[i]] == undefined) {
      totalPlay[genres[i]] = plays[i];
    } else {
      totalPlay[genres[i]] = totalPlay[genres[i]] + plays[i];
    }

  }

  for (let name in totalPlay) {
    totalArr.push([name, totalPlay[name]]);
  }

  song.sort((a, b) => b.play - a.play);
  totalArr.sort((a, b) => b[1] - a[1]);

  let index = 0;
  for (let i = 0; i < totalArr.length; i++){
    index = 0;
    for (let j = 0; j < song.length; j++){
      if (song[j].genre == totalArr[i][0]) {
        index++;
        if (index > 2) {
          break;
        }
        answer.push(song[j].id);
      }
    }
  }

  return answer;
}