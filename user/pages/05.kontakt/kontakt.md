---
title: Kontakt
nav:
  header: Kontakt
  icon: contact_mail
  
form:
    name: contact
    fields:
      - name: name
        autocomplete: on
        type: text
        validate:
          required: true
      - name: email
        label: Email
        placeholder: Enter your email address
        type: email
        validate:
          required: true
      - name: message
        label: Message
        placeholder: Enter your message
        type: textarea
        validate:
          required: true
      - name: g-recaptcha-response
        label: Captcha
        type: captcha
        recaptcha_site_key: 6LczPloUAAAAACH5LxWDjjVbozQqElk-WVdl3NyK
        recaptcha_not_validated: 'Captcha not valid!'
        validate:
          required: true
    buttons:
        - type: submit
          value: Submit
        - type: reset
          value: Reset
    process:
        - email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - message: Thank you for getting in touch!
---