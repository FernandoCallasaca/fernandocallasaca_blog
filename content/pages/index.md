---
title: Home
hide_title: true
sections:
    - section_id: hero
      type: section_hero
      title: "Hi, I'm Fernando Callasaca"
      content: >-
          Data Scientist | Data & Analytics | Data Science | Statistics | Startups | Emprendimiento
      actions:
          - label: Let's talk!
            url: /contact
            style: button
    - section_id: latest-projects
      type: section_portfolio
      layout_style: mosaic
      title: Trabajos Recientes #Recent Work
      subtitle: Aquí presentaremos nuestros últimos proyectos #An optional subtitle of the section
      projects_number: 2 #6
      view_all_label: View All
      view_all_url: portfolio
    - section_id: services
      type: section_grid
      title: Actualmente #What We Do
      subtitle: Intereses profesionales y personales
      col_number: two
      is_numbered: true
      grid_items:
          - title: Data Scientist
            content: >-
                Realizando predicciones descubriendo patrones y usando algoritmos de Machine Learning.
                Conocimientos en lenguajes de programación como Python y R con bases de datos
                relacionales y no relacionales como SQL, MySql, CouchDB, etc.
          - title: Webscraping
            content: >-
                Obteniendo información de páginas web para Startups, micro empresas y proyectos personales,
                respetando la ética de la trata de información.
                Conocimientos en librerías como BeautifulSoup, Scrapy y Selenium.
          - title: Startups - Emprendimiento
            content: >-
                Voluntario en SALTO PERÚ, además Coordinar del Programa de AtisunLab cuya misión es
                crear las condiciones necesarias para que las ideas, el conocimiento, la tecnología y la educación
                confluyan en la generación de emprendimientos con base tecnológica.
          - title: Desarrollador Web
            content: >-
                Participando en distintos proyectos de desarrollo web como Frontend Developer utilizando
                frameworks como Angular y React; realizando proyectos para Adinelsa, Ministerio de Energía y Minas,
                Gobierno Regional del Cusco, etc.
    - section_id: testimonials
      type: section_testimonials
      title: Personas a las que admiro
      subtitle: Principales personajes a las cuales admiro demasiado
      col_number: three
      testimonials:
          - author: Barack Obama
            avatar: images/barack_obama.jpg
            avatar_alt: Barack Obama's photo
            content: >-
                El futuro nos reserva algo mejor, siempre que tengamos el valor de seguir intentándolo,
                trabajando, seguir luchando.
          - author: Steve Jobs
            avatar: images/steve_jobs.jpg
            avatar_alt: Steve Jobs's photo
            content: >-
                Las personas que están lo suficientemente locas como para pensar que pueden cambiar el mundo,
                son quienes lo hacen.
          - author: Elon Musk
            avatar: images/elon_musk.jpg
            avatar_alt: Elon Musk's photo
            content: >-
                No deberías hacer las cosas de manera diferente solamente para que sean distintas. Necesitan
                ser mejores.
    - section_id: latest-posts
      type: section_posts
      title: Últimos Blogs
      subtitle: Actualizaciones de blogs
      posts_number: 3
      col_number: two
      actions:
          - label: View Blog
            url: blog
            style: button
seo:
    title: Fernando Callasaca
    description: Blog and repository from Fernando Callasaca #The preview of the Exto theme
    extra:
        - name: 'og:type'
          value: website
          keyName: property
        - name: 'og:title'
          value: Stackbit Exto Theme
          keyName: property
        - name: 'og:description'
          value: The preview of the Exto theme
          keyName: property
        - name: 'og:image'
          value: images/exto_preview.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
        - name: 'twitter:title'
          value: Stackbit Exto Theme
        - name: 'twitter:description'
          value: The preview of the Exto theme
        - name: 'twitter:image'
          value: images/exto_preview.png
          relativeUrl: true
layout: advanced
---
