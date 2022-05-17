function solution(genres, plays) {
  var answer = [];
  let song = [];
  let totalPlay = {};
  let totalArr = [];
  for (let i = 0; i < genres.length; i++){
    //고유 id 발급
    song.push({ id: i, genre: genres[i], play: plays[i] });

    // 토탈 재생수 구하기
    if (totalPlay[genres[i]] == undefined) {
      totalPlay[genres[i]] = plays[i];
    } else {
      totalPlay[genres[i]] = totalPlay[genres[i]] + plays[i];
    }

  }

  //토탈 재생수 배열화
  for (let name in totalPlay) {
    totalArr.push([name, totalPlay[name]]);
  }

  //각각 노래 재생수 정렬
  song.sort((a, b) => b.play - a.play);
  //토탈 재생수 정렬
  totalArr.sort((a, b) => b[1] - a[1]);

  //순위 값 넣기
  let index = 0;
  for (let i = 0; i < totalArr.length; i++){
    index = 0;
    for (let j = 0; j < song.length; j++){
      if (song[j].genre == totalArr[i][0]) {
        index++;
        //힌 장르가 두번들어갔으면 탈출
        if (index > 2) {
          break;
        }
        answer.push(song[j].id);
      }
    }
  }

  return answer;
}