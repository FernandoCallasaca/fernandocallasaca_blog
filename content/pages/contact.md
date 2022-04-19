---
title: Contacto
hide_title: false
sections:
    - section_id: contact-form
      type: section_form
      content: >-
          Hola! Muchas gracias por su interés en trabajar juntos. Por favor complete
          el formulario de contacto a continuación o envíe un correo electrónico a:
          [fernandocallasaca@outlook.com](mailto:fernandocallasaca@outlook.com).
      form_id: contactForm
      form_action: /thank-you
      form_fields:
          - input_type: text
            name: name
            label: Nombre
            default_value: Tu nombre
            is_required: true
          - input_type: email
            name: email
            label: Email
            default_value: Dirección de correo electrónico
            is_required: true
          - input_type: select
            name: subject
            label: Motivo
            default_value: Selecciona uno
            options:
                - Data Science
                - Startups
                - Other
          - input_type: textarea
            name: message
            label: Mensaje
            default_value: Aquí escribe tu mensaje
          - input_type: checkbox
            name: consent
            label: >-
                Entiendo que este formulario guardará mi información así que puedo ser contatado.
      submit_label: Enviar Mensaje
seo:
    title: Contacto
    description: Esta es la página de contacto
    extra:
        - name: 'og:type'
          value: website
          keyName: property
        - name: 'og:title'
          value: Contact
          keyName: property
        - name: 'og:description'
          value: This is the contact page
          keyName: property
        - name: 'twitter:card'
          value: summary
        - name: 'twitter:title'
          value: Contact
        - name: 'twitter:description'
          value: This is the contact page
layout: advanced
---
