def generateCodeToStr(code):
    dict = {
        "1": [".", ",", "!", "?", " "],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    targetChars = dict[code[0]]

    return targetChars[(len(code) - 1) % len(targetChars) ]
     

def decoder(code):
    left = 0
    right = 0
    res = ""

    while right < len(code):
        if code[left] == "0" :
            left += 1
        if code[right] == "0" and left < right:
            res += generateCodeToStr(code[left:right])
            right += 1
            left = right
        else:
            right += 1
    
    return res
print(decoder("20"))
print(decoder("220"))
print(decoder("44033055505550666011011111090666077705550301110"))
print(decoder("000555555550000330000444000080000200004440000"))
