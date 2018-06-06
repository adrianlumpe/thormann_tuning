---
title: Kontakt
bannerImg: maps_screenshot.png
nav:
  header: Kontakt
  footer: Kontakt
  icon: contact_mail
  
form:
    name: contact
    fields:
      - name: name
        label: Name
        id: name
        autocomplete: on
        type: custom-text
        validate:
          required: true
      - name: email
        label: Email
        id: email
        type: custom-email
        validate:
          required: true
      - name: telefon
        id: telefon
        label: Telefonnummer
        type: custom-text
      - name: kfz-standort
        id: kfz-standort
        label: Fahrzeugstandort
        type: custom-text
      - name: marke-und-modell
        id: marke-und-modell
        label: Marke und Modell (z.B. VW Golf 4)
        type: custom-text
      - name: motorisierung
        id: motorisierung
        label: Motorisierung (z.B. 1.9 TDI)
        type: custom-text
      - name: serienleistung
        id: serienleistung
        label: Serienleistung (z.B. 130PS)
        type: custom-text
      - name: erstzulassung
        id: erstzulassung
        label: Erstzulassung (z.B. 03/2002)
        type: custom-text
      - name: getriebe
        id: getriebe
        label: Getriebe (z.B. DSG)
        type: custom-text   
      - name: message
        label: Nachricht
        type: custom-textarea
        validate:
          required: true
      - name: g-recaptcha-response
        label: false
        type: captcha
        recaptcha_site_key: 6LczPloUAAAAACH5LxWDjjVbozQqElk-WVdl3NyK
        recaptcha_not_validated: 'Captcha not valid!'
        validate:
          required: true
    buttons:
        - type: submit
          classes: btn
          value: Formular senden
    process:
        - email:
            subject: "[Website Kontaktformular] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - message: Vielen Dank für ihre Nachricht!
---

#### Schreiben sie uns!
Haben Sie weitere Fragen, Wünsche oder Anregungen? Bitte nehmen Sie Kontakt mit uns auf, wir helfen Ihnen gerne weiter!

Wenn Sie ein persönliches Angebot für eine Leistungsoptimierung wünschen, dann geben Sie bitte unbedingt sämtliche Fahrzeugdaten wie Marke, Modell, Motorisierung, Serienleistung, und Erstzulassung an.