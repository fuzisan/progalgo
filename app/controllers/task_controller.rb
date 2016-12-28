class TaskController < ApplicationController
  def task
    @task = <<EOD
棒の長さが記録された配列 len = [2,3,4,5,10]があります．
配列から棒を3本選び，できるだけ周長の長い三角形を作ろうと考えています．
できた三角形のうちの最大の周長を出力するプログラムを作成してください．
ただし，三角形が作れない際には0と出力してください．
EOD

  end

def task1ans
  #ファイル参照にしたい
@ans0 = <<EOD
len = [2,3,4,5,10]
circumference = 0

for i in 0..len.length-3 do
  for j in i+1..len.length-2 do
    for k in j+1..len.length-1 do
      element = [len[i],len[j],len[k]].map(&:to_i)
      sum = element.inject(:+)
      max = element.max
      rest = sum - max
      if max < rest
          circumference = circumference < sum ? sum : circumference
      end
    end
  end
end

puts circumference
EOD

@Commentary0= <<EOD
<form action="javascript:hoge()" method="post" id="form">
  <h3>for文のブロック変数の役割を読む</h3>
  <p>3つとも
    <select name="q1" required>
      <option value=""></option>
      <option value="true">配列のindex番号に使われている</option>
      <option value="false">何にも使われていない</option>
    </select></p>
    <h3>各ブロック変数の関係を読む</h3>
    <p>iは<select name="q2" required>
      <option value=""></option>
      <option value="true">0</option>
      <option value="false">1</option>
      <option value="false">2</option>
    </select>
    から
    <select name="q3" required>
      <option value=""></option>
      <option value="false">10</option>
      <option value="true">len.length-3</option>
      <option value="false">100</option>
    </select>まで</p>
    <p>jは<select name="q4" required>
      <option value=""></option>
      <option value="false">i</option>
      <option value="true">i+1</option>
      <option value="false">i+2</option>
    </select>
    から
    <select name="q5" required>
      <option value=""></option>
      <option value="false">10</option>
      <option value="true">len.length-2</option>
      <option value="false">100</option>
    </select>まで</p>
    <p>kは<select name="q6" required>
      <option value=""></option>
      <option value="false">i</option>
      <option value="true">j+1</option>
      <option value="false">2</option>
    </select>
    から
    <select name="q7" required>
      <option value=""></option>
      <option value="false">10</option>
      <option value="true">len.length-1</option>
      <option value="false">100</option>
    </select>まで回っている．</p>

    <p>つまり ブロック変数同士の関係は</p>
    <p> <select name="q8" required>
      <option value=""></option>
      <option value="true">i&#x3C;j&#x3C;k</option>
      <option value="false">i&le;k&#x3C;j</option>
      <option value="false">i&le;j&le;k</option>
    </select></p>
    <h3>for文は何をしているのか</h3>
    <p>ブロック変数の役割は<select name="q9" required>
      <option value=""></option>
      <option value="true">配列のindex番号</option>
      <option value="false">何にも使われていない</option>
    </select></p>
    <p>ブロック変数i,j,kは<select name="q10" required>
      <option value=""></option>
      <option value="true">重複しない値になっている．</option>
      <option value="false">重複を許した値になっている．</option>
    </select></p>
    <p> これらから，このfor文は</p>
    <p> 配列から<select name="q11" required>
      <option value=""></option>
      <option value="true">重複しないように</option>
      <option value="false">重複を許して</option>
    </select><select name="q12" required>
      <option value=""></option>
      <option value="false">1</option>
      <option value="false">2</option>
      <option value="true">3</option>
    </select>つの数字の選んでいることがわかる</p>
    <h3>繰り返されている処理を読む</h3>
    <p>変数sumに選ばれた数字の<select name="q13" required>
      <option value=""></option>
      <option value="false">最大値</option>
      <option value="true">合計値</option>
      <option value="false">変数sumと変数maxの差分</option>
    </select>が入っている</p>
    <p>  変数maxに選ばれた数字の<select name="q14" required>
      <option value=""></option>
      <option value="true">最大値</option>
      <option value="false">合計値</option>
      <option value="false">変数sumと変数maxの差分</option>
    </select>が入っている</p>
    <p>  変数restに<select name="q15" required>
      <option value=""></option>
      <option value="false">最大値</option>
      <option value="false">合計値</option>
      <option value="true">変数sumと変数maxの差分</option>
    </select>が入っている</p>
    <h3>if文の条件とされている式を読む</h3>
    <p>このif文の条件は，変数maxが変数restよりも<select name="q16" required>
      <option value=""></option>
      <option value="true">小さい</option>
      <option value="false">大きい</option>
    </select>とき</p>
    <h3>if文の中身を読む</h3>
    <p>変数circumferenceが，現在の値よりも変数sumが大きいときは変数sumの値を，小さいときは変数circumferenceの値を代入している．</p>
    <h3>つまりこのプログラムは</h3>
    <p>配列から重複を<select name="q17" required>
      <option value=""></option>
      <option value="false">許して</option>
      <option value="true">許さず</option>
    </select>3つの数字を選び出し</p>
    <p>数字の
      <select name="q18" required>
        <option value=""></option>
        <option value="true">最大値が残りの合計値よりも小さい</option>
        <option value="false">合計値がもっとも大きい</option>
      </select>とき</p>

      <p>その中で合計値の<select name="q19" required>
        <option value=""></option>
        <option value="true">最大値</option>
        <option value="false">最小値</option>
      </select>を出力している</p>

      <input type="submit" value="チェック">
    </form>
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
