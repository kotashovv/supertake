;(function(){


    //Определитеь устройства 

    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        IOS: function() {
            return navigator.userAgent.match(/IPhone|IPad|IPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEmobile/i);
        },
        any: function() {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.IOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        }
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }
    //Показ меню 

    const menuIcon = document.querySelector('.mobile-nav__burger')
    const btnBurger = document.querySelector('.mobile-nav__btn')
    const mobileMenu = document.querySelector('.mobile-nav__menu')

    btnBurger.addEventListener('click', function(){
        btnBurger.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    });
    
    
    //Показ саблиста
    const sublistMenu = document.querySelector('.menu-sublist-mobile')
    const sublistArrows = document.querySelectorAll('.arrow-sublist');
    if(sublistArrows.length > 0) {
        for(let index = 0; index < sublistArrows.length; index++) {
            const sublistArrow = sublistArrows[index];
            sublistArrow.addEventListener('click', function() {
                sublistMenu.classList.toggle('active');
                sublistArrow.classList.toggle('active')
            })
        }
    }

    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                //Закрываем мобильное меню при переходе
                if(btnBurger.classList.contains('active')) {
                    btnBurger.classList.remove('active')
                    mobileMenu.classList.remove('active')
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    //Аккордеон скрипт
    var accpage = document.querySelector('.accordeon-page-wrap')
  
    if (accpage) {
      var accBtn = document.getElementsByClassName('accordeon-btn')
      var i;
  
      for (i = 0; i < accBtn.length; i++) {
        accBtn[i].addEventListener('click', function() {
            this.classList.toggle('active')
            var accInfo = this.nextElementSibling;
  
            if (accInfo.style.maxHeight) {
                accInfo.style.maxHeight = null;
            } else {
                accInfo.style.maxHeight = accInfo.scrollHeight + 'px';
            }
        });
      }
    } else {
      return;
    }

})();


