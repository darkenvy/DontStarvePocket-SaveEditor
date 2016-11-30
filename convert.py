# import base64
f = open("filessaveindex", mode="rb")
try:
  byte = f.read(9) # Throws out begining crap
  while byte != "":
    byte = f.read(1)
    print byte
finally:
  f.close()

# with open("filessaveindex", "rb") as image_file:
#   decoded_string = base64.b64decode(image_file.read())
#   print decoded_string