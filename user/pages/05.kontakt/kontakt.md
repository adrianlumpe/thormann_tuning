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
        validate:
          required: true
      - name: kfz-standort
        id: kfz-standort
        label: Fahrzeugstandort
        type: custom-text
        validate:
          required: true
      - name: marke-und-modell
        id: marke-und-modell
        label: Marke und Modell (z.B. VW Golf 4)
        type: custom-text
        validate:
          required: true
      - name: motorisierung
        id: motorisierung
        label: Motorisierung (z.B. 1.9 TDI)
        type: custom-text
        validate:
          required: true
      - name: serienleistung
        id: serienleistung
        label: Serienleistung (z.B. 130PS)
        type: custom-text
        validate:
          required: true
      - name: erstzulassung
        id: erstzulassung
        label: Erstzulassung (z.B. 03/2002)
        type: custom-text
        validate:
          required: true
      - name: getriebe
        id: getriebe
        label: Getriebe (z.B. DSG)
        type: custom-text
        validate:
          required: true      
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