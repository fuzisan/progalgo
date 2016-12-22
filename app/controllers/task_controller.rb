class TaskController < ApplicationController
  def task
  end

def task1ans
  #ファイル参照にしたい
  @ans0 = <<EOD
  len = [2,3,4,5,10]
  n = len.length
  ans = 0
  #全ての数字の選び方を試す
  #重複して選ばないようi<j<kとする
  for i in 0..n do
  for j in i+1..n do
    for k in j+1..n do
      element =[len[i],len[j],len[k]].map(&:to_i)
      #最も長い棒の長さ＜他の2本の棒の長さ
      circumference = element.inject(:+)
      max = element.max
      rest = circumference - max
      ans = circumference if max < rest
    end
  end
  end
  puts ans
EOD

  @Commentary0= <<EOD
  全ての選び方を試して最も長いものを出力する.
EOD
end

def task1ans2
  @ans1 = <<EOD
  len = [2,3,4,5,10]
  circumference = 0
  #降順にソート
  element = len.sort {|a, b| b.to_i <=> a.to_i }
  #3本ずつ使う
  for i in 0..element.length-2 do
    if element[i].to_i < element[i+1].to_i + element[i+2].to_i
      circumference = element[i] + element[i+1] + element[i+2]
      break  #長いものから順にやってるためcircumferenceが更新された段階で抜ける
    end
  end

  puts circumference

EOD
  @Commentary1= <<EOD
  周長が最も長い三角形は，なるべく長い棒たちを使った三角形である．
  なので，配列を降順にソートし長い棒から順に3本使っていく．
  一番長い棒a[1],次に長い棒a[2],その次に長い棒a[3]とする．
  a[2]とa[3]の合計が一番長い棒a[1]よりも短い場合，
  残りの棒を使ってもこれより短いので,次の場合を試す.
  a[2]を一番長い棒として同様に進めていく．
EOD

  end

def task1ans3
  @ans2 = <<EOD
  len=[2,3,4,5,10]
  ans = 0
  #降順にソート
  element = len.sort {|a, b| b.to_i <=> a.to_i }
  #3本ずつ使う
  for i in 0..element.length-3 do
  circumference = element[i] + element[i+1] + element[i+2]
  #辺をすべて足した長さが最長の辺の長さの２倍を超えている
  if circumference > element[i] * 2
      ans = circumference
      break
  end
  end
EOD

  @Commentary2= <<EOD
  三角形の成立条件の見方を変える.
  三角形が成立するとき,
  一番長い棒a[1],次に長い棒a[2],その次に長い棒a[3]，三角形の周長をCとする．
  他の2辺の合計と最長の辺との差をdとすると
  (a[2]+a[3])-a[1] = d
  なので他の2辺の合計は
  a[2]+a[3]=a[1]+d　式１
  と表せる．
  周長は
  C=a[1]＋a[2]+a[3]
  と表せるので,式１を代入すると
  C=a[1]＋a[1]+d
  C=2a[1]+d
  と表せる.
  これより三角形が成立する時
  周長は三角形のうちの最大長の2倍よりも大きいことがわかる．
  これをコードに起こす
EOD
end

  def task2ans
@ans0=<<EOD
  for i in 1..100 do
      ans = ""
      if i%15 == 0
          ans = "FizzBuzz"
      elsif i%3 == 0
          ans = "Fizz"
      else i%5==0
          ans == "Buzz"
      end
      puts "#¥{i}:#¥{ans}"
  end
EOD

  @Commentary0 = <<EOD


EOD
  end
end
