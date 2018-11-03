def string_split(phrase) 
  words = phrase.split(/[\s,]/)
                .select {|word| word.match(/[A-Za-z]/)}
  words
end


string = 'peter piper picked, a pot,of,pickled,peppers'
p string_split(string)