
import os

l = os.listdir()
st = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>"""
def print1(s=""):
    global st
    st+=s+"\n"
for i in l:
    if i == 'index.html':
        continue
    if i[-4:] in 'html':
#         print(i)
#         print1("## "+ i[:-5])
        print1('<h2>{}</h2>'.format(i[:-5]))
        print1('<a href="{}">链接</a>'.format(i))
        
#         print1('[链接]({})'.format(i))
        print1("</br>")
# print(st)

st+="""</body>
</html>"""


with open('index.html','w') as f:
   f.write(st)
   
   
   

    
