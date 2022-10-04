import phonenumbers
from phonenumbers import geocoder, carrier

# Digite o número com o codigo do pais e ddd
phoneNumer = phonenumbers.parse("+5521985862352")

# Captura operadora
Carrier = carrier.name_for_number(phoneNumer, 'pt-br')

# Capturar região
Region = geocoder.description_for_number(phoneNumer, 'pt-br')

# Mostrar resultados
print(f"A operadora é: {Carrier}")
print(f"O estado é: {Region}")