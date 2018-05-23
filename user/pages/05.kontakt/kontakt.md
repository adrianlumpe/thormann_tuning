---
title: Kontakt
bannerImg: highway.jpeg
nav:
  header: Kontakt
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
        type: email
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
          value: Formular senden
    process:
        - email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - message: Thank you for getting in touch!
---