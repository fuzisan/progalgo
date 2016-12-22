class Task2Controller < ApplicationController

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
    puts "#{i}:#{ans}"
end
EOD
@Commentary0 = <<EOD


EOD
end


end
