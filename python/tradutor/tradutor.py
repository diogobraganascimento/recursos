from translate import Translator

# Configura a tradução
s = Translator(from_lang="english", to_lang="pt-br")

# Traduz o texto desejado
res = s.translate("the amount of system memory has changed")

# Mostra tradução
print(res)