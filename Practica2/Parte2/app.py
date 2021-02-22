# librerias
from bs4 import BeautifulSoup
import requests

# constantes
URL = "http://www.dneonline.com/calculator.asmx"
HEADERS = { 'content-type': 'application/soap+xml' }
INI = """<?xml version="1.0" encoding="utf-8"?>
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>"""
           
FIN = """</soap12:Body>
        </soap12:Envelope>"""

# realiza una suma a + b
def add(a, b):
    body = INI + """<Add xmlns="http://tempuri.org/"><intA>""" + a + """</intA><intB>""" + b + """</intB></Add>""" + FIN
    # peticion soap
    res = requests.post(URL,data=body,headers=HEADERS)
    res = BeautifulSoup(res.content, 'lxml')
    res = res.find('addresult').text

    print(a + " + " + b + " = " + res)
    print("")

# realiza una division a / b
def divide(a, b):
    body = INI + """<Divide xmlns="http://tempuri.org/"><intA>""" + a + """</intA><intB>""" + b + """</intB></Divide>""" + FIN
    # peticion soap
    res = requests.post(URL,data=body,headers=HEADERS)
    res = BeautifulSoup(res.content, 'lxml')

    # validacion
    if int(b) == 0:
        res = "error"
    else:
        res = res.find('divideresult').text
    
    print(a + " / " + b + " = " + res)
    print("")

# realiza una multiplicacion a * b
def multiply(a, b):
    body = INI + """<Multiply xmlns="http://tempuri.org/"><intA>""" + a + """</intA><intB>""" + b + """</intB></Multiply>""" + FIN
    # peticion soap
    res = requests.post(URL,data=body,headers=HEADERS)
    res = BeautifulSoup(res.content, 'lxml')
    res = res.find('multiplyresult').text
    
    print(a + " * " + b + " = " + res)
    print("")

# realiza una resta a - b
def substract(a, b):
    body = INI + """<Subtract xmlns="http://tempuri.org/"><intA>""" + a + """</intA><intB>""" + b + """</intB></Subtract>""" + FIN
    # peticion soap
    res = requests.post(URL,data=body,headers=HEADERS)
    res = BeautifulSoup(res.content, 'lxml')
    res = res.find('subtractresult').text
    
    print(a + " - " + b + " = " + res)
    print("")

# menu principal
def main():
    while True:
        print("---------- Calculator ----------")
        print("1. Add")
        print("2. Divide")
        print("3. Multiply")
        print("4. Substract")
        print("5. Exit")
        print("")
        num = int(input("elegir opcion: "))
        print("")

        if num == 5:
            break
        else:
            a = input("A: ")
            b = input("B: ")

            if num == 1:
                add(a, b)
            elif num == 2:
                divide(a, b)
            elif num == 3:
                multiply(a, b)
            else:
                substract(a, b)

main()