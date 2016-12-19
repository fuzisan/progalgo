class HomeController < ApplicationController
  def top
  end
  def task
    @ans0 = <<EOD
len = [2,3,4,5,10]
n = len.length
ans = 0
#全ての数字の選び方を試す
#重複して選ばないようi&#x3C;j&#x3C;kとする
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

  end
end
