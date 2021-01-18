const toggleBtn = document.querySelector('.page-header__toggle');
const nav = document.querySelector('.main-nav');

if (toggleBtn && nav) {
  toggleBtn.classList.remove('hidden');
  nav.classList.remove('is-open');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-open');
  });
}

const mapBlock = document.querySelector('#map');
const breakpointMd = window.matchMedia('(min-width:768px)');
const breakpointLg = window.matchMedia('(min-width:1440px)');

const mapState = {
  latitude: 59.938635,
  longitude: 30.323118,
  iconWidth: 56,
  iconHeight: 52
};

if (breakpointMd.matches) {
  mapState.iconWidth = 113;
  mapState.iconHeight = 106;
}

if (breakpointLg.matches) {
  mapState.longitude =  30.321;
}

if (map) {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map(map, {
      center: [mapState.latitude, mapState.longitude],
      zoom: 17,
    });
    const myPlacemark = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: 'ул. Большая Конюшенная, д. 19/8',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/pin.png',
        iconImageSize: [mapState.iconWidth, mapState.iconHeight],
        iconImageOffset: [-mapState.iconWidth / 2, -mapState.iconHeight / 2],
      },
    );

    myMap.geoObjects.add(myPlacemark);
  }
}
