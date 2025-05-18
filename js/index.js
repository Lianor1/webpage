document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle del menú
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        // Opcional: Animar el icono del menú
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Verificar autenticación
    if (!sessionStorage.getItem('userRole')) {
        window.location.href = 'login.html';
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Slider functionality
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentSlide = 0;
    
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            // Actualizar los indicadores
            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach(ind => ind.classList.remove('active'));
            indicators[index].classList.add('active');
        }
    
        // Función para el siguiente slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    
        // Auto-avance cada 5 segundos
        setInterval(nextSlide, 5000);
    
        // Manejadores de eventos para los botones
        prevBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    
        nextBtn?.addEventListener('click', nextSlide);
    
        // Manejadores de eventos para los indicadores
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    });

    // Category tabs
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Aquí puedes agregar la lógica para filtrar productos
        });
    });
});

// Datos de productos
const productos = {
    hombres: [
        {
            id: 'h1',
            nombre: 'Polo Clásico',
            descripcion: 'Polo de algodón pima peruano',
            precio: 59.90,
            imagen: 'https://image.cdn2.seaart.me/2025-03-23/cvfqokle878c73a4frs0-2/8373ba5627ebe1e456b7861371b0defb_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h2',
            nombre: 'Camisa Formal de Vestir',
            descripcion: 'Camisa de manga larga en tejido fino',
            precio: 89.50,
            imagen: 'https://image.cdn2.seaart.me/2025-03-10/cv73onde878c73aqv270-2/4a340c21da1bf9c7c2ade0502ed49f82_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h3',
            nombre: 'Pantalón Casual Chino',
            descripcion: 'Pantalón de tela ligera con corte moderno',
            precio: 69.75,
            imagen: 'https://image.cdn2.seaart.me/2024-09-10/crg0mk5e878c73fsbd10/9a30f5b83467ed8a119054a4537fb69b_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h4',
            nombre: 'Zapatillas Urbanas',
            descripcion: 'Zapatillas cómodas para el día a día',
            precio: 79.99,
            imagen: 'https://image.cdn2.seaart.me/2025-03-27/cvi2k65e878c73f9qisg-1/bdb3c9e9b520cd6a3d4b9225585c039a_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h5',
            nombre: 'Sudadera Deportiva',
            descripcion: 'Sudadera con cierre y capucha para hacer ejercicio',
            precio: 74.90,
            imagen: 'https://image.cdn2.seaart.me/2025-03-23/cvfet05e878c73cfih7g-2/7e4c2a313cab6ac07e504f6f720e7710_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h6',
            nombre: 'Camiseta Gráfica',
            descripcion: 'Camiseta de algodón con diseño estampado',
            precio: 34.50,
            imagen: 'https://image.cdn2.seaart.me/2025-03-30/cvk8tk5e878c738fqv00-2/829f973b68fd8c914502764a2c9d7535_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h7',
            nombre: 'Pantalón Vaquero Recto',
            descripcion: 'Pantalones vaqueros clásicos de corte recto',
            precio: 79.00,
            imagen: 'https://image.cdn2.seaart.me/2025-03-30/cvk1kfle878c73ekr160-2/f9b287c645d82d5b5af09468e2582e7b_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h8',
            nombre: 'Chaqueta Bomber Ligera',
            descripcion: 'Chaqueta de estilo bomber para entretiempo',
            precio: 99.00,
            imagen: 'https://image.cdn2.seaart.me/2025-04-24/d04phele878c73eqqqgg-1/40d38eef3fe67ba336c520ab48e2f441_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h9',
            nombre: 'Bermuda de Algodón',
            descripcion: 'Pantalón corto casual para el verano',
            precio: 44.99,
            imagen: 'https://image.cdn2.seaart.me/2025-03-24/cvgbqmte878c7399gmt0-2/085082e4ae4944b3b23b120014254213_high.webp',
            categoria: 'hombres'
        },
        {
            id: 'h10',
            nombre: 'Abrigo de Invierno',
            descripcion: 'Abrigo grueso y cálido para climas fríos',
            precio: 149.95,
            imagen: 'https://image.cdn2.seaart.me/2025-03-15/cvalvt5e878c73e7k4cg-2/b3e2e4f638efd19143e2dec3795807c4_high.webp',
            categoria: 'hombres'
        }
    ],
    mujeres: [
        {
            id: 'm1',
            nombre: 'Blusa Elegante',
            descripcion: 'Blusa de seda con diseño floral',
            precio: 89.90,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-04-03/cvmtjlte878c73eblu70/a72f0fc6afac32a92bb12c451f7f5b3e_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm2',
            nombre: 'Pantalón de Vestir Clásico',
            descripcion: 'Pantalón de corte recto en tejido formal',
            precio: 79.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-02-28/cv0ruide878c7387dd50/59f14808b8bb8fa57fab6ad730055390_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm3',
            nombre: 'Zapatos de Tacón Alto',
            descripcion: 'Zapatos elegantes de cuero con tacón de aguja',
            precio: 129.99,
            imagen: 'https://image.cdn2.seaart.me/2025-01-11/cu0on9te878c73d8ejfg/18a89329deb4cf51362f3e760f1f9a3d_high.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm4',
            nombre: 'Bolso de Cuero Cruzado',
            descripcion: 'Bolso pequeño de cuero genuino con correa ajustable',
            precio: 99.00,
            imagen: 'https://image.cdn2.seaart.me/2025-03-15/cvaptule878c73bvgktg-1/15e7f95e8b7743d5a3b76702e2ee8852_high.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm5',
            nombre: 'Falda Midi Plisada',
            descripcion: 'Falda de largo medio con pliegues y cintura elástica',
            precio: 59.75,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-25/cvgrc4te878c738uen4g-1/f1f2c8f7cd930e08fb3a3fc4f4fb5794_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm6',
            nombre: 'Chaqueta de Jean Casual',
            descripcion: 'Chaqueta vaquera clásica con botones y bolsillos',
            precio: 69.90,
            imagen: 'https://image.cdn2.seaart.me/static/01ac47a085f37e47c7ec06dc2589a7a2/1688278571065/2484a479ee79ccfed68a4ddc60d96966_high.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm7',
            nombre: 'Jersey de Punto Fino',
            descripcion: 'Jersey ligero de manga larga en tejido suave',
            precio: 49.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/jpeg/static/48be6d4e69c06c8a0fb18d9f3d0f2bd2/1711776583433/425cc75e34d41fcf0cd0d87343f6ef3e_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm8',
            nombre: 'Collar de Plata Delicado',
            descripcion: 'Collar fino de plata esterlina con dije pequeño',
            precio: 39.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/png/2023-12-05/clnht1p4msbc73cfap10/6e5b97041bec4a7c18e85046dc1cfcfede9a57cd_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm9',
            nombre: 'Leggings Deportivos',
            descripcion: 'Mallas elásticas para entrenamiento y yoga',
            precio: 34.95,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-07-16/cqb2llte878c73ae3ifg/ab5267dfdc44dfed4dc61298e7fc5a61e2632c42_low.webp',
            categoria: 'mujeres'
        },
        {
            id: 'm10',
            nombre: 'Bufanda de Seda Estampada',
            descripcion: 'Bufanda suave de seda con diseño artístico',
            precio: 45.00,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-04-16/cvvul85e878c73d1nvvg/538fbbff15e985d444d293d9335fb4eb_low.webp',
            categoria: 'mujeres'
        }
    ],
    niños: [
        {
            id: 'n1',
            nombre: 'Conjunto Infantil',
            descripcion: 'Conjunto uniforme para niños',
            precio: 79.90,
            imagen: 'https://image.cdn2.seaart.me/2025-02-04/cuh9q8le878c73f8et70-1/9290891edc07121fc11d63ac9141627f_high.webp',
            categoria: 'niños'
        },
        {
            id: 'n2',
            nombre: 'Camiseta Estampada Niño',
            descripcion: 'Camiseta de algodón con diseño divertido',
            precio: 29.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-11-28/ct41nmte878c739sto4g/583ecea91f4fcb39b9f6ae45adcd3652_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n3',
            nombre: 'Polo negro  Niño',
            descripcion: 'Polo negro deportivo cómodo ',
            precio: 39.75,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/png/2023-10-17/20155877236430853/a0320e7206bdcc42787488b05ccb524f91f9be5b_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n4',
            nombre: 'Zapatillas Deportivas Niño',
            descripcion: 'Zapatillas ligeras y con buen soporte para correr',
            precio: 59.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-11/cv7v79de878c73bvb230-2/a6b476c444f64bacf0e7b17b28df9ec0_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n5',
            nombre: 'Sudadera con Capucha Niño',
            descripcion: 'Sudadera abrigada con cierre',
            precio: 49.90,
            imagen: 'https://image.cdn2.seaart.me/2025-01-06/ctthhgte878c738abbs0-2/119fbce7e453627efda42c233f10b013_high.webp',
            categoria: 'niños'
        },
        {
            id: 'n6',
            nombre: 'Polo Manga liegro niña',
            descripcion: 'Polo básico para deporte y pantalon',
            precio: 19.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-31/cvl5ovte878c7397rf1g-2/95fc99be862f66512be68ae5fbbae74c_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n7',
            nombre: 'Vaqueros Rectos Niño',
            descripcion: 'Pantalones vaqueros clásicos y resistentes',
            precio: 44.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-07-07/cq507ode878c7395t5fg/f5d3d57ba0c37852c0636cb9ce6dacd52f649f78_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n8',
            nombre: 'Chaqueta Ligera Niño',
            descripcion: 'Chaqueta impermeable ideal para entretiempo',
            precio: 69.00,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-12-23/ctkftute878c73c8jlm0/b8c255c373477825b4a9596757b87e5a_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n9',
            nombre: 'Gorra Deportiva Niño',
            descripcion: 'Gorra con visera para proteger del sol',
            precio: 14.95,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/png/2023-11-02/21620228714676229/714663085e5cb77d37aa9ab5bbacf43fd981d934_low.webp',
            categoria: 'niños'
        },
        {
            id: 'n10',
            nombre: 'polo y short  niño estilo urbano',
            descripcion: 'polo estilo urban y short para vestir de dia',
            precio: 9.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-02-25/cuul1hte878c73ehe5qg/2d3721a857d4a4daf5a60317ea84e288_low.webp',
            categoria: 'niños'
        }
    ],
    vestidos: [
        {
            id: 'v1',
            nombre: 'Vestido de Noche',
            descripcion: 'Vestido largo para ocasiones especiales',
            precio: 199.90,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-09-12/crh4s5te878c73bhtb0g/1146b569bfc18772b4d0831836adfe00_low.webp',
            categoria: 'vestidos'
        },

        {
            id: 'v2',
            nombre: 'Vestido Casual de Verano',
            descripcion: 'Vestido corto y ligero, ideal para el día a día',
            precio: 49.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-13/cv9dnc5e878c73ar5obg-1/f79c53035cdfa381424d9284d8be9600_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v3',
            nombre: 'Vestido de Cóctel Elegante',
            descripcion: 'Vestido midi ajustado, perfecto para eventos semi-formales',
            precio: 129.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-29/cvjlcele878c73cc8rtg-2/a136f10ff542891e31dbc4c97cef3187_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v4',
            nombre: 'Vestido Bohemio Estampado',
            descripcion: 'Vestido largo con estampado floral y mangas anchas',
            precio: 79.95,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-04-27/d06opkle878c73aqf1s0-66/412b3af1e94e41c288b99307c77d1e2b_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v5',
            nombre: 'Vestido de Fiesta Brillante',
            descripcion: 'Vestido corto con lentejuelas, ideal para la noche',
            precio: 89.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-22/cr3ndvte878c739d93ig/cbeccd23ba3495a4c3fc6ce12cd2c4b4_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v6',
            nombre: 'Vestido Camisero Clásico',
            descripcion: 'Vestido de corte recto con botones frontales y cinturón',
            precio: 59.90,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-01-23/cu9008te878c73ac9q7g-4/a7c4cc28d59eff06dba3b6bc2da70b3f_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v7',
            nombre: 'Vestido de Punto Ajustado',
            descripcion: 'Vestido midi de tejido elástico que realza la figura',
            precio: 69.75,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-04-05/cvo6dcde878c73c94veg-2/65fe838deaa9db09ca5d74f09537fd96_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v8',
            nombre: 'Vestido Formal de Trabajo',
            descripcion: 'Vestido de corte lápiz, ideal para la oficina',
            precio: 99.00,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-06/cv4plgde878c73bnd2v0-1/048a32c7ec6b6618b376cd748525be9d_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v9',
            nombre: 'Vestido Maxi de Playa',
            descripcion: 'Vestido largo y fluido, perfecto para los días de sol',
            precio: 39.99,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-02/cv1loide878c73fcj6n0-2/b489cbcc285012ad7e605c3fdff39e5c_low.webp',
            categoria: 'vestidos'
        },
        {
            id: 'v10',
            nombre: 'Vestido Vintage Floral',
            descripcion: 'Vestido de estilo retro con estampado de flores',
            precio: 74.50,
            imagen: 'https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-03-23/cvfrngte878c738nvca0/79ec9f3ac649b09b37f9f12ad953291d_low.webp',
            categoria: 'vestidos'
        }

    ]
};

// Función para mostrar productos
function mostrarProductos(categoria) {
    const todosLosProductos = categoria === 'todo'
        ? [...Object.values(productos).flat()]
        : productos[categoria];

    const contenedor = document.querySelector(`#panel-${categoria} .products-grid`);
    const template = document.getElementById('product-template');

    contenedor.innerHTML = '';

    todosLosProductos.forEach(producto => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('img').src = producto.imagen;
        clone.querySelector('img').alt = producto.nombre;
        clone.querySelector('.product-title').textContent = producto.nombre;
        clone.querySelector('.product-description').textContent = producto.descripcion;
        clone.querySelector('.product-price').textContent = `S/. ${producto.precio.toFixed(2)}`;

        contenedor.appendChild(clone);
    });
}

// Manejador de tabs
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Ocultar todos los paneles
        document.querySelectorAll('.panel-products').forEach(panel => {
            panel.hidden = true;
        });

        // Desactivar todos los botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });

        // Activar el botón seleccionado
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Mostrar el panel correspondiente
        const categoria = button.textContent.toLowerCase();
        const panel = document.getElementById(`panel-${categoria}`);
        panel.hidden = false;

        // Cargar los productos
        mostrarProductos(categoria);
    });
});
// Cargar todos los productos al inicio
mostrarProductos('todo');

// Inicialización del Swiper
const swiper = new Swiper('.swiper-container', {
    // Opciones de Swiper
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
